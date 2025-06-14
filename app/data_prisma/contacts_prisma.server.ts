// import { JobType, PrismaClient, Contact } from "generated/prisma/client";
import { Contact, JobType, Prisma } from "@prisma/client";
import prisma from "./prisma";

export async function getContacts(query?: string | null, job?: JobType | null) {
    return prisma.contacts.findMany({
        where: {
            AND: [
                query ? {
                    OR: [
                        { first_name: { contains: query, mode: 'insensitive' } },
                        { last_name: { contains: query, mode: 'insensitive' } },
                    ]
                } : {},
                job ? { job: job.toLocaleLowerCase() } : {},
            ]
        },
        orderBy: [
            { last_name: 'asc' },
            { created_at: 'desc' }
        ]
    });
}

export async function updateContact(id: string, data: Prisma.ContactUpdateInput): Promise<Contact> {
    return prisma.contacts.update({
        where: { id },
        data,
    });
}