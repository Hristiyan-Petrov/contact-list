import '@mantine/core/styles.css';
import { ColorSchemeScript } from '@mantine/core';
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import {
    Links,
    Meta,
    redirect,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react";
import appStylesHref from "./styles.css?url";
import { createEmptyContact, getContacts } from "./data";
import App from './components/app/App';

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: appStylesHref },
];

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

export default function Document() {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <Meta />
                <Links />
                <ColorSchemeScript />
            </head>
            <body>
                <App />
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}