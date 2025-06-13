import prisma from "./prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function checkEmailUnique(email: string) {
    if (email === null) return null;
    return prisma.users.findUnique({
        where: { email },
        select: { id: true },
    })
};

export async function register({
    email, password, firstName, lastName, profileImageUrl
}: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    profileImageUrl: string;
}) {

    const passwordHash = await bcrypt.hash(password, 10);
    const user = await prisma.users.create({
        data: {
            email,
            password: passwordHash,
            first_name: firstName,
            last_name: lastName,
            profile_image_url: profileImageUrl,
            active: true, // Set user to active immediately. You can change this for an email verification flow. TODO
        }
    });

    const { password: _, ...userWithoutPassword } = user;

    const token = jwt.sign(
        { userId: user.id, email: user.email },
        process.env.JWT_SECRET!,
        { expiresIn: "1h" }
    );

    return { user: userWithoutPassword, token };
}