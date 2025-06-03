import { useEffect } from "react";
import { ActionFunctionArgs, LoaderFunctionArgs, useNavigation } from "react-router";
import { useLoaderData } from "@remix-run/react";
// import { ContactRecord, getContacts, updateContact } from "~/data";
import { ContactsTable } from "~/components/ContactsTable/ContactsTable"
import { SearchField } from "~/components/SearchField/SearchField";
import { JobFilter } from "~/components/JobFilter/JobFilter";
import { ContactRecord, getContacts, updateContact } from "../data";

type LoaderData = {
    contacts: ContactRecord[];
    query: string | null;
    selectedJob: string | null;
};

export const loader = async ({
    request
}: LoaderFunctionArgs): Promise<LoaderData> => {
    const url = new URL(request.url);
    const query = url.searchParams.get('query');
    const selectedJob = url.searchParams.get('job');
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
    return updateContact(contactId, updates);
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



// export const action = async () => {
//     const contact = await createEmptyContact();
//     return redirect(`/contacts/${contact.id}/edit?new=true`);
// };

// export default function Contacts() {
//     const { contacts, query } = useLoaderData<typeof loader>();
//     const navigation = useNavigation();
//     const submit = useSubmit();
//     const searching =
//         navigation.location &&
//         new URLSearchParams(navigation.location.search).has('query');

//     useEffect(() => {
//         const searchField = document.getElementById('query');
//         if (searchField instanceof HTMLInputElement) {
//             searchField.value = query || '';
//         }
//     }, [query]);

//     return (
//         <>
//             <div id="sidebar">
//                 <h1>Remix Contacts</h1>
//                 <div
//                     className={
//                         navigation.state === 'loading' ? 'loading' : ''
//                     }
//                 >
//                     <Form id="search-form" role="search">
//                         <input
//                             id="query"
//                             aria-label="Search contacts"
//                             placeholder="Search"
//                             type="search"
//                             name="query"
//                             defaultValue={query || ''}
//                             onChange={(e) => {
//                                 const isFirstSearch = query === null;
//                                 submit(e.currentTarget.form, {
//                                     replace: !isFirstSearch
//                                 });
//                             }}
//                             className={searching ? 'loading' : ''}
//                         />
//                         <div
//                             id="search-spinner"
//                             aria-hidden
//                             hidden={!searching}
//                         />
//                     </Form>
//                     <Form method="post">
//                         <button type="submit">New</button>
//                     </Form>
//                 </div>

//                 <SideNavigation />
//                 {/* <Navigation contacts={contacts} /> */}
//             </div>

//             <div
//                 id="detail"
//                 className={navigation.state === 'loading'
//                     ? 'loading'
//                     : ''
//                 }
//             >
//                 <Outlet />
//             </div>
//         </>
//     );
// }