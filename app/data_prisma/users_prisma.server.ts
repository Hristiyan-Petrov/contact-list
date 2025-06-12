//users_prisma.server.ts
// import { Contact, JobType, Prisma } from "@prisma/client";
import prisma from "./prisma";


export async function checkEmailUnique(email: string ) {
    if (email === null) return null;
    return prisma.users.findUnique({
        where: { email },
        select: { id: true },
    })
};