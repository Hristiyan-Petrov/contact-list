import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";

import {
    Form,
    Links,
    Meta,
    Outlet,
    redirect,
    Scripts,
    ScrollRestoration,
    useLoaderData,
    useNavigation,
    useSubmit,
} from "@remix-run/react";

import appStylesHref from "./app.css?url";
import { createEmptyContact, getContacts } from "./data";
import Navigation from "./components/navigation";
import { useEffect } from "react";

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: appStylesHref },
];

// Loader
export const loader = async ({
    request
}: LoaderFunctionArgs) => {
    const url = new URL(request.url);
    const query = url.searchParams.get('query');
    const contacts = await getContacts(query);
    return { contacts, query };
}

// Action
export const action = async () => {
    const contact = await createEmptyContact();
    return redirect(`/contacts/${contact.id}/edit?new=true`);

};

export default function App() {
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
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <Meta />
                <Links />
            </head>
            <body>
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

                    <Navigation contacts={contacts} />

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

                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}
