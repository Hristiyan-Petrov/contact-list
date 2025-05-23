import type { LinksFunction } from "@remix-run/node";

import {
    Form,
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    useLoaderData,
} from "@remix-run/react";

import appStylesHref from "./app.css?url";
import { getContacts } from "./data";
import Navigation from "./components/navigation";

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: appStylesHref },
];

export const loader = async () => {
    const contacts = await getContacts();
    return { contacts };
};

export default function App() {
    const { contacts } = useLoaderData<typeof loader>();

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
                    <div>
                        <Form id="search-form" role="search">
                            <input
                                id="q"
                                aria-label="Search contacts"
                                placeholder="Search"
                                type="search"
                                name="q"
                            />
                            <div id="search-spinner" aria-hidden hidden={true} />
                        </Form>
                        <Form method="post">
                            <button type="submit">New</button>
                        </Form>
                    </div>

                    <Navigation contacts={contacts} />

                </div>

                <div id="detail">
                    <Outlet />
                </div>

                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}
