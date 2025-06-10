import { useEffect } from "react";
import { ActionFunctionArgs, LoaderFunctionArgs, useNavigation } from "react-router";
import { useLoaderData } from "@remix-run/react";
import { ContactsTable } from "~/components/ContactsTable/ContactsTable"
import { SearchField } from "~/components/SearchField/SearchField";
import { JobFilter } from "~/components/JobFilter/JobFilter";
// import { ContactRecord, getContacts, updateContact } from "../data";

import { getContacts } from "../data_prisma/contacts_prisma.server";
import { JobType, Contact } from "@prisma/client";

export const loader = async ({
    request
}: LoaderFunctionArgs) => {
    const url = new URL(request.url);
    const query = url.searchParams.get('query');
    // const selectedJob = url.searchParams.get('job');

    const jobParam = url.searchParams.get('job');
    const selectedJob = jobParam ? JobType[jobParam.toUpperCase() as keyof typeof JobType] : null;
    const contacts = await getContacts(query, selectedJob);
    return { contacts, query, selectedJob };
}

export const action = async ({
    request,
}: ActionFunctionArgs) => {
    console.log('Hello FROM _main.contacts._index action');

    const formData = await request.formData();

    const contactId = formData.get('contactId');
    if (!contactId || typeof contactId !== 'string') {
        throw new Response('Invalid contactId from Form data', { status: 400 });
    }

    const favoriteValueFromForm = formData.get('favorite'); // This is "true" or "false" (a STRING)
    const updates = {
        favorite: favoriteValueFromForm === 'true' // Convert string "true" to boolean true, string "false" to boolean false
    };
    return { ok: true };
    // return updateContact(contactId, updates);
};

export default function ContactsIndex() {
    const { contacts, query, selectedJob } = useLoaderData<typeof loader>();
    const navigation = useNavigation();
    const searching = navigation.state === 'loading';

    useEffect(() => {
        const searchField = document.getElementById('query');
        if (searchField instanceof HTMLInputElement) {
            searchField.value = query || '';
        }
    }, [query]);

    return (
        <div className={searching ? 'loadingCursor' : 'default'}>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    paddingTop: '30px',
                }}
            >

                <SearchField
                    query={query}
                    searching={!!searching}
                />

                <JobFilter
                    selectedJob={selectedJob}
                    searching={!!searching}
                />
            </div >

            <ContactsTable
                contacts={contacts}
            />
        </div>
    );
}