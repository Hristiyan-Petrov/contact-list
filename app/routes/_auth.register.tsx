import { ActionFunctionArgs, unstable_createMemoryUploadHandler, unstable_parseMultipartFormData } from "@remix-run/node";
import { RegisterPage } from "~/components/authentication/RegisterPage/RegisterPage";
import { register } from "~/data_prisma/auth.server";

export const action = async ({
    request
}: ActionFunctionArgs) => {
    if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET must be set in your environment variables.");
    }

    const uploadHandler = unstable_createMemoryUploadHandler({
        maxPartSize: 5 * 1024 * 1024 // 5MB file limit
    });

    // const formData = await unstable_parseMultipartFormData(request, uploadHandler);

    const formData = await request.formData();

    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const profileImageUrl = formData.get('profileImageUrl') as string;

    try {
        await register({
            email,
            password,
            firstName,
            lastName,
            profileImageUrl,
        });
        return ({ succeess: true });
    } catch (error) {
        console.log(error);
        
        return ({ error: error.message,  status: 400});
    }
};

export default function Register() {
    return (
        <RegisterPage />
    );
}