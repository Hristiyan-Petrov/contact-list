// Enum for job types - this ensures type safety and consistency
export enum JobType {
    WRITER = 'writer',
    ACTOR = 'actor',
    SINGER = 'singer',
    PAINTER = 'painter'
}

// Base contact interface - represents the database structure
export interface Contact {
    id: string;
    first_name: string;
    last_name: string;
    avatar?: string | null;
    twitter?: string | null;
    notes?: string | null;
    favorite: boolean;
    email?: string | null;
    phone?: string | null;
    job?: JobType | null;
    active: boolean;
    created_at: string; // ISO timestamp string
    updated_at: string; // ISO timestamp string
}

// For creating new contacts - all fields optional except required ones
export interface CreateContactInput {
    id?: string;
    first_name: string;
    last_name: string;
    avatar: string;
    twitter?: string;
    notes?: string;
    favorite?: boolean;
    email: string;
    phone: string;
    job: JobType;
    active?: boolean;
}

// For updating contacts - all fields optional
export interface UpdateContactInput {
    first_name?: string;
    last_name?: string;
    avatar?: string;
    twitter?: string;
    notes?: string;
    favorite?: boolean;
    email?: string;
    phone?: string;
    job?: JobType;
    active?: boolean;
}

// For the frontend - converts snake_case to camelCase for better JS/React usage
export interface ContactRecord {
    id: string;
    first: string;
    last: string;
    avatar?: string;
    twitter?: string;
    notes?: string;
    favorite: boolean;
    email?: string;
    phone?: string;
    job?: string;
    active: boolean;
    createdAt: string;
    updatedAt: string;
}

// Helper function to convert database Contact to frontend ContactRecord
export function contactToRecord(contact: Contact): ContactRecord {
    return {
        id: contact.id,
        first: contact.first_name,
        last: contact.last_name,
        avatar: contact.avatar || undefined,
        twitter: contact.twitter || undefined,
        notes: contact.notes || undefined,
        favorite: contact.favorite,
        email: contact.email || undefined,
        phone: contact.phone || undefined,
        job: contact.job || undefined,
        active: contact.active,
        createdAt: contact.created_at,
        updatedAt: contact.updated_at
    };
}

// Helper function to convert frontend ContactRecord to database Contact
export function recordToContact(record: Partial<ContactRecord> & { id: string }): Partial<Contact> {
    return {
        id: record.id,
        first_name: record.first,
        last_name: record.last,
        avatar: record.avatar || null,
        twitter: record.twitter || null,
        notes: record.notes || null,
        favorite: record.favorite ?? false,
        email: record.email || null,
        phone: record.phone || null,
        job: record.job as JobType || null,
        active: record.active ?? true
    };
}