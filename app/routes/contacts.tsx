import { useSubmit } from "@remix-run/react";
import { useEffect } from "react";
import { LoaderFunctionArgs, Outlet, redirect, useNavigation } from "react-router";
import { Form } from "react-router-dom";
import { useLoaderData } from "@remix-run/react";
import { createEmptyContact, getContacts } from "~/data";
import Navigation from "~/components/navigation/navigation";
import SideNavigation from "~/components/SideNavigation/SideNavigation";

export const loader = async ({
    request
}: LoaderFunctionArgs) => {
    const url = new URL(request.url);
    const query = url.searchParams.get('query');
    const contacts = await getContacts(query);
    return { contacts, query };
}

export const action = async () => {
    const contact = await createEmptyContact();
    return redirect(`/contacts/${contact.id}/edit?new=true`);
};

export default function Contacts() {
    const { contacts, query } = useLoaderData<typeof loader>();
    const navigation = useNavigation();
    const submit = useSubmit();
    const searching =
        navigation.location &&
        new URLSearchParams(navigation.location.search).has('query');

    useEffect(() => {
        const searchField = document.getElementById('query');
        if (searchField instanceof HTMLInputElement) {
            searchField.value = query || '';
        }
    }, [query]);

    return (
        <>
            <div id="sidebar">
                <h1>Remix Contacts</h1>
                <div
                    className={
                        navigation.state === 'loading' ? 'loading' : ''
                    }
                >
                    <Form id="search-form" role="search">
                        <input
                            id="query"
                            aria-label="Search contacts"
                            placeholder="Search"
                            type="search"
                            name="query"
                            defaultValue={query || ''}
                            onChange={(e) => {
                                const isFirstSearch = query === null;
                                submit(e.currentTarget.form, {
                                    replace: !isFirstSearch
                                });
                            }}
                            className={searching ? 'loading' : ''}
                        />
                        <div
                            id="search-spinner"
                            aria-hidden
                            hidden={!searching}
                        />
                    </Form>
                    <Form method="post">
                        <button type="submit">New</button>
                    </Form>
                </div>

                <SideNavigation />
                {/* <Navigation contacts={contacts} /> */}
            </div>

            <div
                id="detail"
                className={navigation.state === 'loading'
                    ? 'loading'
                    : ''
                }
            >
                <Outlet />
            </div>
        </>
    );
}