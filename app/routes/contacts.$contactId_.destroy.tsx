import { ActionFunctionArgs } from "@remix-run/node";
import { redirect } from "react-router";
import { deleteContact } from "~/data";

export const action = async ({
    params
}: ActionFunctionArgs) => {
    if (!params.contactId) throw new Response('Missing contactId param', { status: 400 });
    await deleteContact(params.contactId);
    console.log(`Contact with id ${params.contactId} deleted!`);
    return redirect ('/');
};