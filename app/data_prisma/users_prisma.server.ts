//users_prisma.server.ts
// import { Contact, JobType, Prisma } from "@prisma/client";
import prisma from "./prisma";


export async function checkEmailUnique(email: any) {
    console.log('db layer');
    
    return prisma.users.findUnique({
        where: { email },
        select: { id: true },
    })
};