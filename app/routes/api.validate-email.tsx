// app/routes/api/api.validate-email.ts
import { type ActionFunctionArgs } from '@remix-run/node';
import { checkEmailUnique } from '~/data_prisma/auth.server';

export const action = async ({ request }: ActionFunctionArgs) => {
    const formData = await request.formData();
    const email = formData.get('email');
    if (typeof email !== 'string' || email === null) {
        return { emailExists: false };
    }
    const result = await checkEmailUnique(email);
    return { emailExists: Boolean(result) };
};