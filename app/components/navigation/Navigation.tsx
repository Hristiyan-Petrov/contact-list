import { NavLink } from "react-router-dom";
import { type ContactRecord } from "~/data";
import ContactButton from 'app/components/ContactButton/ContactButton';

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
                            <NavLink
                                className={({ isActive, isPending }) =>
                                    isActive
                                        ? 'active'
                                        : isPending
                                            ? 'pending'
                                            : ''
                                }
                                to={`/contacts/${contact.id}`}
                            >
                                <ContactButton 
                                    contact={contact}
                                />
                            </NavLink>
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