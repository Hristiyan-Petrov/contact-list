// app/data/index.ts

// Re-export everything from the contacts service
export {
    getContacts,
    getFavorites,
    getContact,
    createContact,
    // createEmptyContact,
    updateContact,
    deleteContact
} from './contacts.server';

// Re-export types
export type {
    Contact,
    ContactRecord,
    CreateContactInput,
    UpdateContactInput
} from '~/types/contact';

export { JobType } from '~/types/contact';

// Keep the same interface for backward compatibility
// This allows your existing code to work without changes
export type ContactMutation = {
    id?: string;
    first?: string;
    last?: string;
    avatar?: string;
    twitter?: string;
    notes?: string;
    favorite?: boolean;
    email?: string;
    phone?: string;
    job?: string;
};