import { Link } from "react-router-dom";
import { type ContactRecord } from "~/data";

type NavigationProps = {
    contacts: ContactRecord[];
};

export default function Navigation({
    contacts
}: NavigationProps) {
    return (
        <nav>
            {contacts.length ? (
                <ul>
                    {contacts.map((contact) => (
                        <li key={contact.id}>
                            <Link to={`/contacts/${contact.id}`}>
                                {contact.first || contact.last ? (
                                    <>
                                        {contact.first} {contact.last}
                                    </>
                                ) : (
                                    <i>No name</i>
                                )}{" "}
                                {contact.favorite ? (
                                    <span>★</span>
                                ) : null}
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>
                    <i>No contacts</i>
                </p>
            )}
        </nav>
    );
};