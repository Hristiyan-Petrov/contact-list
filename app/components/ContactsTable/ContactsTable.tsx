import { IconStar, IconStarFilled } from '@tabler/icons-react';
import { ActionIcon, Anchor, Avatar, Badge, Group, Table, Text } from '@mantine/core';
import classes from './ContactsTable.module.css';
import { useNavigate, useSubmit } from '@remix-run/react';
import { Contact } from '@prisma/client';
import { useState } from 'react';


const jobColors: Record<string, string> = {
    writer: 'blue',
    actor: 'cyan',
    singer: 'pink',
    painter: 'orange'
};

// 'Any' is needed because of that Remix serializes dates to strings, but my Prisma type expects Date objects.
interface ContactsTableProps {
    // contacts: Contact[];
    contacts: any;
}

export function ContactsTable({ contacts }: ContactsTableProps) {
    const navigate = useNavigate();
    const handleContactClick = (id: string) => {
        navigate(`/contacts/${id}`);
    };

    const result = contacts.map((contact: any) => (
        <Table.Tr
            key={contact.id}
            onClick={() => handleContactClick(contact.id)}
            className={classes.link}
        >
            <Table.Td>
                <Group gap="sm">
                    <Avatar size={40} src={contact.avatar} radius={30} />
                    <Text fz="sm" fw={500}>
                        {contact.first_name} {contact.last_name}
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
                <Group
                    gap={0}
                    justify="flex-end"
                >
                    <StarIcon
                        contactId={contact.id}
                        isFavorite={contact.favorite || false}
                    />
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

function StarIcon({
    contactId,
    isFavorite
}: {
    contactId: string,
    isFavorite: boolean
}) {
    const [optimisticFavorite, setOptimisticFavorite] = useState(isFavorite);
    const submit = useSubmit();
    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setOptimisticFavorite(!optimisticFavorite);
        const formData = new FormData();
        formData.append('favorite', (!optimisticFavorite).toString());
        formData.append('contactId', contactId);

        submit(formData, {
            method: 'post'
        });
    };

    return (
        <ActionIcon
            className={`${classes.favorite} ${optimisticFavorite ? classes.favorited : ''}`}
            variant="subtle"
            color="yellow"
            onClick={onClickHandler}
        >
            <IconStar className={classes.iconDefaultStar} size={36} stroke={1.5} />
            <IconStarFilled color="orange" className={classes.iconHoverStar} size={36} stroke={1.5} />
        </ActionIcon>
    )
};