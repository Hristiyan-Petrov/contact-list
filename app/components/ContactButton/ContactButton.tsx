import { IconChevronRight } from '@tabler/icons-react';
import { Avatar, Group, Text, UnstyledButton } from '@mantine/core';
import classes from './ContactButton.module.css';
import { type ContactRecord } from "~/data";

type ContactButtonProps = {
    contact: ContactRecord;
};

export default function ContactButton({
    contact,
}: ContactButtonProps) {
    return (
        <UnstyledButton className={classes.user}>
            <Group>
                <Avatar
                    src={contact.avatar}
                    radius="xl"
                />

                <div style={{ flex: 1 }}>
                    <Text size="sm" fw={500}>
                        {contact.first || contact.last ? (
                            <>
                                {contact.first} {contact.last}
                                {contact.favorite && <span style={{ marginLeft: 4 }}>★</span>}
                            </>
                        ) : (
                            <i>No name</i>
                        )}
                    </Text>

                    {(
                        <Text c="dimmed" size="xs">
                            {contact.email || contact.twitter}
                        </Text>
                    )}
                </div>

                {<IconChevronRight size={14} stroke={1.5} />}
            </Group>
        </UnstyledButton>
    );
}