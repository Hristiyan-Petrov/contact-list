import { MantineProvider } from '@mantine/core';
import {
    Form,
    Outlet,
    useLoaderData,
    useNavigation,
    useSubmit,
} from "@remix-run/react";
import { useEffect } from "react";
import type { loader } from "~/root";
import { Hero } from '../hero/Hero';

// export default function App() {
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
//         <MantineProvider>
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

//                 <Navigation contacts={contacts} />
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
//         </MantineProvider>
//     );
// }

export default function App() {
    return (
        <MantineProvider>
            <Hero />
        </MantineProvider>
    )
}