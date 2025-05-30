import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { Form, redirect, useFetcher, useLoaderData, useNavigate, useSearchParams } from "@remix-run/react";
import { getContact, updateContact } from "~/data";

export const action = async ({
    params,
    request
}: ActionFunctionArgs) => {
    if (!params.contactId) throw new Response('Missing contactId param', { status: 400 });
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    await updateContact(params.contactId, updates);
    return redirect(`/contacts/${params.contactId}`);
};


export const loader = async ({
    params
}: LoaderFunctionArgs) => {
    if (!params.contactId) throw new Response('Missing contactId param', { status: 400 });
    const contact = await getContact(params.contactId);
    if (!contact) throw new Response("Not found", { status: 404 });
    return contact;
};

export default function EditContact() {
    const navigate = useNavigate();
    const fetcher = useFetcher();
    const contact = useLoaderData<typeof loader>();
    const [searchParams] = useSearchParams();
    const isNewContact = searchParams.get('new') === 'true';

    const handleCancel = () => {
        if (isNewContact) {
            const response = confirm(
                "This will permanently delete the new contact. Are you sure?"
            );
            if (!response) {
                return;
            }
            fetcher.submit(
                { intent: 'bahmaamu' },
                { method: 'post', action: `/contacts/${contact.id}/destroy` }
            );
        } else {
            navigate(-1);
        }
    };

    return (
        <Form key={contact.id} id="contact-form" method="post">
            <p>
                <span>Name</span>
                <input
                    aria-label="First name"
                    defaultValue={contact.first}
                    name="first"
                    placeholder="First"
                    type="text"
                />
                <input
                    aria-label="Last name"
                    defaultValue={contact.last}
                    name="last"
                    placeholder="Last"
                    type="text"
                />
            </p>
            <label>
                <span>Twitter</span>
                <input
                    defaultValue={contact.twitter}
                    name="twitter"
                    placeholder="@jack"
                    type="text"
                />
            </label>
            <label>
                <span>Avatar URL</span>
                <input
                    aria-label="Avatar URL"
                    defaultValue={contact.avatar}
                    name="avatar"
                    placeholder="https://example.com/avatar.jpg"
                    type="text"
                />
            </label>
            <label>
                <span>Notes</span>
                <textarea
                    defaultValue={contact.notes}
                    name="notes"
                    rows={6}
                />
            </label>
            <p>
                <button
                    type="submit"
                >Save</button>
                <button
                    onClick={() => {

                        handleCancel();
                    }}
                    type="button"
                    className="cancel-button"
                >Cancel</button>
            </p>
        </Form >
    )
};
