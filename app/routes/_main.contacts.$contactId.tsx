// import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
// import { Form, useFetcher, useLoaderData } from "@remix-run/react";
// import type { FunctionComponent } from "react";
// import { getContact, updateContact, type ContactRecord } from "~/data";

// export const loader = async ({
//     params
// }: LoaderFunctionArgs) => {
//     if (!params.contactId) throw new Response('Missing contactId param', { status: 400 });
//     const contact = await getContact(params.contactId);
//     if (!contact) throw new Response("Not found", { status: 404 });
//     return contact;
// };

// export default function Contact() {
//     const contact = useLoaderData<typeof loader>();

//     return (
//         <div id="contact">
//             <div>
//                 <img
//                     alt={`${contact.first} ${contact.last} avatar`}
//                     key={contact.avatar}
//                     src={contact.avatar}
//                 />
//             </div>

//             <div>
//                 <h1>
//                     {contact.first || contact.last ? (
//                         <>
//                             {contact.first} {contact.last}
//                         </>
//                     ) : (
//                         <i>No Name</i>
//                     )}{" "}
//                     <Favorite contact={contact} />
//                 </h1>

//                 {contact.twitter ? (
//                     <p>
//                         <a
//                             href={`https://twitter.com/${contact.twitter}`}
//                         >
//                             {contact.twitter}
//                         </a>
//                     </p>
//                 ) : null}

//                 {contact.notes ? <p>{contact.notes}</p> : null}

//                 <div>
//                     <Form action="edit">
//                         <button type="submit">Edit</button>
//                     </Form>

//                     <Form
//                         action="destroy"
//                         method="post"
//                         onSubmit={(event) => {
//                             const response = confirm(
//                                 "Please confirm you want to delete this record."
//                             );
//                             if (!response) {
//                                 event.preventDefault();
//                             }
//                         }}
//                     >
//                         <button type="submit">Delete</button>
//                     </Form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export const action = async ({
//     params,
//     request
// }: ActionFunctionArgs) => {
//     if (!params.contactId) throw new Response('Missing contactId param', { status: 400 });
//     const formData = await request.formData();
//     return updateContact(params.contactId, {
//         favorite: formData.get('favorite') === 'true'
//     });
// };

// const Favorite: FunctionComponent<{
//     contact: Pick<ContactRecord, "favorite">;
// }> = ({ contact }) => {
//     const fetcher = useFetcher();
//     const favorite = fetcher.formData
//         ? fetcher.formData.get('favorite')
//         : contact.favorite;

//     return (
//         <fetcher.Form method="post">
//             <button
//                 aria-label={
//                     favorite
//                         ? "Remove from favorites"
//                         : "Add to favorites"
//                 }
//                 name="favorite"
//                 value={favorite ? "false" : "true"}
//             >
//                 {favorite ? "★" : "☆"}
//             </button>
//         </fetcher.Form>
//     );
// };