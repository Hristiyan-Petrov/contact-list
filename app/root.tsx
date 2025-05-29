import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import type { LinksFunction } from "@remix-run/node";
import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react";
import appStylesHref from "./styles.css?url";
// import App from './components/app/App';
import { Hero } from './components/hero/Hero';

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: appStylesHref },
];

export default function App() {
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
                <MantineProvider>
                    <Outlet />
                    <ScrollRestoration />
                    <Scripts />
                </MantineProvider>
            </body>
        </html>
    );
}