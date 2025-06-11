// app/routes/api/api.validate-email.ts
import { type ActionFunctionArgs } from '@remix-run/node';
import { checkEmailUnique } from '~/data_prisma/users_prisma.server';

export const action = async ({ request }: ActionFunctionArgs) => {
    console.log('api layer');

    const formData = await request.formData();
    const email = formData.get('email');
    const result = await checkEmailUnique(email);
    return { emailExists: Boolean(result) };
};