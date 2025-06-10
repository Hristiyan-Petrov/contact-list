// app/data/contacts.server.ts

import { sql } from './db.server';
import {
    Contact,
    ContactRecord,
    CreateContactInput,
    UpdateContactInput,
    contactToRecord,
    JobType
} from '~/types/contact';

// Generate a unique ID for new contacts
function generateContactId(firstName: string, lastName: string): string {
    const base = `${firstName.toLowerCase()}-${lastName.toLowerCase()}`;
    const timestamp = Date.now().toString(36);
    return `${base}-${timestamp}`;
}

// Get all contacts with optional filtering
export async function getContacts(
    query?: string | null,
    job?: string | null
): Promise<ContactRecord[]> {
    try {
        // Build the base query
        let baseQuery = sql`SELECT * FROM contacts`;

        // Apply filters using Neon's template literal syntax
        if (query && query.trim()) {
            const searchTerm = `%${query.trim()}%`;
            if (job && job !== 'All' && job.trim()) {
                const jobFilter = job.toLowerCase();
                baseQuery = sql`
          SELECT * FROM contacts 
          WHERE (first_name ILIKE ${searchTerm} OR last_name ILIKE ${searchTerm})
          AND job = ${jobFilter}
          ORDER BY last_name ASC, created_at DESC
        `;
            } else {
                baseQuery = sql`
          SELECT * FROM contacts 
          WHERE (first_name ILIKE ${searchTerm} OR last_name ILIKE ${searchTerm})
          ORDER BY last_name ASC, created_at DESC
        `;
            }
        } else if (job && job !== 'All' && job.trim()) {
            const jobFilter = job.toLowerCase();
            baseQuery = sql`
        SELECT * FROM contacts 
        WHERE job = ${jobFilter}
        ORDER BY last_name ASC, created_at DESC
      `;
        } else {
            baseQuery = sql`
        SELECT * FROM contacts 
        ORDER BY last_name ASC, created_at DESC
      `;
        }

        const result = await baseQuery;
        return (result as Contact[]).map((contact: Contact) => contactToRecord(contact));
    } catch (error) {
        console.error('Error fetching contacts:', error);
        throw new Error('Failed to fetch contacts');
    }
}

// Get contacts marked as favorites
export async function getFavorites(): Promise<ContactRecord[]> {
    try {
        const result = await sql`
      SELECT * FROM contacts 
      WHERE favorite = true
      ORDER BY last_name ASC, created_at DESC
    `;
        return (result as Contact[]).map((contact: Contact) => contactToRecord(contact));
    } catch (error) {
        console.error('Error fetching favorites:', error);
        throw new Error('Failed to fetch favorite contacts');
    }
}

// Get a single contact by ID
export async function getContact(id: string): Promise<ContactRecord | null> {
    try {
        const result = await sql`
      SELECT * FROM contacts 
      WHERE id = ${id}
    `;

        if (result.length === 0) {
            return null;
        }

        return contactToRecord((result as Contact[])[0]);
    } catch (error) {
        console.error('Error fetching contact:', error);
        throw new Error(`Failed to fetch contact with id: ${id}`);
    }
}

// Create a new contact
export async function createContact(input: CreateContactInput): Promise<ContactRecord> {
    try {
        const id = input.id || generateContactId(input.first_name, input.last_name);

        const result = await sql`
      INSERT INTO contacts (
        id, first_name, last_name, avatar, twitter, notes, 
        favorite, email, phone, job, active
      ) VALUES (
        ${id}, 
        ${input.first_name}, 
        ${input.last_name}, 
        ${input.avatar}, 
        ${input.twitter || null}, 
        ${input.notes || null}, 
        ${input.favorite || false}, 
        ${input.email}, 
        ${input.phone}, 
        ${input.job}, 
        ${input.active ?? true}
      )
      RETURNING *
    `;

        return contactToRecord((result as Contact[])[0]);
    } catch (error) {
        console.error('Error creating contact:', error);
        throw new Error('Failed to create contact');
    }
}

// // Create an empty contact (for new contact form)
// export async function createEmptyContact(): Promise<ContactRecord> {
//     const emptyContact: CreateContactInput = {
//         first_name: '',
//         last_name: '',
//         favorite: false,
//         active: true,
//         avatar: '',
//         email: '',
//         phone: '',
//         job: JobType.ACTOR,
//     };

//     return createContact(emptyContact);
// }

// Update a contact
export async function updateContact(
    id: string,
    updates: UpdateContactInput
): Promise<ContactRecord> {
    try {
        // First check if contact exists
        const existing = await getContact(id);
        if (!existing) {
            throw new Error(`No contact found with id: ${id}`);
        }

        // For simplicity with Neon's template literals, we'll handle specific common updates
        // You can extend this pattern for other fields
        let result;

        if (updates.favorite !== undefined) {
            result = await sql`
        UPDATE contacts 
        SET favorite = ${updates.favorite}
        WHERE id = ${id}
        RETURNING *
      `;
        } else if (updates.first_name !== undefined || updates.last_name !== undefined) {
            const firstName = updates.first_name ?? existing.first;
            const lastName = updates.last_name ?? existing.last;
            result = await sql`
        UPDATE contacts 
        SET first_name = ${firstName}, last_name = ${lastName}
        WHERE id = ${id}
        RETURNING *
      `;
        } else if (updates.job !== undefined) {
            result = await sql`
        UPDATE contacts 
        SET job = ${updates.job}
        WHERE id = ${id}
        RETURNING *
      `;
        } else {
            // For other fields, we can do a more comprehensive update
            const updatedContact = {
                first_name: updates.first_name ?? existing.first,
                last_name: updates.last_name ?? existing.last,
                avatar: updates.avatar ?? existing.avatar,
                twitter: updates.twitter ?? existing.twitter,
                notes: updates.notes ?? existing.notes,
                favorite: updates.favorite ?? existing.favorite,
                email: updates.email ?? existing.email,
                phone: updates.phone ?? existing.phone,
                job: updates.job ?? existing.job,
                active: updates.active ?? existing.active
            };

            result = await sql`
        UPDATE contacts 
        SET 
          first_name = ${updatedContact.first_name},
          last_name = ${updatedContact.last_name},
          avatar = ${updatedContact.avatar},
          twitter = ${updatedContact.twitter},
          notes = ${updatedContact.notes},
          favorite = ${updatedContact.favorite},
          email = ${updatedContact.email},
          phone = ${updatedContact.phone},
          job = ${updatedContact.job},
          active = ${updatedContact.active}
        WHERE id = ${id}
        RETURNING *
      `;
        }

        return contactToRecord((result as Contact[])[0]);
    } catch (error) {
        console.error('Error updating contact:', error);
        throw new Error(`Failed to update contact with id: ${id}`);
    }
}

// Set user unactive
export async function deleteContact(id: string): Promise<void> {
    try {
        const result = await sql`
      UPDATE contacts 
      SET active = false 
      WHERE id = ${id}
      RETURNING id
    `;

        if ((result as any[]).length === 0) {
            throw new Error(`No contact found with id: ${id}`);
        }
    } catch (error) {
        console.error('Error seting user unactive contact:', error);
        throw new Error(`Failed to set unactive contact with id: ${id}`);
    }
}

// Hard delete a contact (permanently remove from database)
export async function destroyContact(id: string): Promise<void> {
    try {
        const result = await sql`
      DELETE FROM contacts 
      WHERE id = ${id}
      RETURNING id
    `;

        if ((result as any[]).length === 0) {
            throw new Error(`No contact found with id: ${id}`);
        }
    } catch (error) {
        console.error('Error destroying contact:', error);
        throw new Error(`Failed to destroy contact with id: ${id}`);
    }
}
