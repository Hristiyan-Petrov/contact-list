// app/data/db.server.ts

import { neon, neonConfig } from '@neondatabase/serverless';
import type { NeonQueryFunction } from '@neondatabase/serverless';

// Validate environment variable
if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL environment variable is not set.');
}

// Configure Neon for optimal performance
neonConfig.fetchConnectionCache = true;

// Create the SQL query function
const sql: NeonQueryFunction<false, false> = neon(process.env.DATABASE_URL);

// Add connection testing function
export async function testConnection(): Promise<boolean> {
    try {
        await sql`SELECT 1`;
        console.log('✅ Database connection successful');
        return true;
    } catch (error) {
        console.error('❌ Database connection failed:', error);
        return false;
    }
}

// Export the sql function
export { sql };

// Optional: Add query logging in development
if (process.env.NODE_ENV === 'development') {
    console.log('🔌Neon serverless  Database connected to:', process.env.DATABASE_URL?.split('@')[1]?.split('?')[0]);
}