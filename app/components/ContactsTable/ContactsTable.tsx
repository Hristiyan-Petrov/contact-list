import { IconPencil, IconTrash } from '@tabler/icons-react';
import { ActionIcon, Anchor, Avatar, Badge, Group, Table, Text } from '@mantine/core';
import { ContactRecord } from '~/data';
import classes from './ContactsTable.module.css';
import { Link, useNavigate } from '@remix-run/react';

const jobColors: Record<string, string> = {
    engineer: 'blue',
    manager: 'cyan',
    designer: 'pink',
    unknown: 'orange'
};

type ContactsTableProps = {
    contacts: ContactRecord[];
};

export function ContactsTable({ contacts }: ContactsTableProps) {
    const navigate = useNavigate();
    const handleContactClick = (id : string) => {
        navigate(`/contacts/${id}`);
    };

    const result = contacts.map((contact) => (
        <Table.Tr
            key={contact.id}
            onClick={() => handleContactClick(contact.id)}
            className={classes.link}
        >
            <Table.Td>
                <Group gap="sm">
                    <Avatar size={40} src={contact.avatar} radius={30} />
                    <Text fz="sm" fw={500}>
                        {contact.first} {contact.last}
                    </Text>
                </Group>
            </Table.Td>

            <Table.Td>
                <Badge color={jobColors[(contact.job ?? 'unknown').toLowerCase()]} variant="light">
                    {contact.job ?? 'Unknown'}
                </Badge>
            </Table.Td>
            <Table.Td>
                <Anchor component="button" size="sm">
                    {contact.twitter}
                </Anchor>
            </Table.Td>
            <Table.Td>
                <Text fz="sm">{contact.phone}</Text>
            </Table.Td>
            <Table.Td>
                <Group gap={0} justify="flex-end">
                    <ActionIcon variant="subtle" color="gray">
                        <IconPencil size={16} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon variant="subtle" color="red">
                        <IconTrash size={16} stroke={1.5} />
                    </ActionIcon>
                </Group>
            </Table.Td>
        </Table.Tr>
    ));

    return (
        <Table.ScrollContainer
            minWidth={500}
            className={classes.container}
        >
            <Table verticalSpacing="sm">
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Employee</Table.Th>
                        <Table.Th>Job title</Table.Th>
                        <Table.Th>Twitter</Table.Th>
                        <Table.Th>Phone</Table.Th>
                        <Table.Th />
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{result}</Table.Tbody>
            </Table>
        </Table.ScrollContainer>
    );
}