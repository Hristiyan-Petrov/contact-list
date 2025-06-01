import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd';
import { IconGripVertical } from '@tabler/icons-react';
import cx from 'clsx';
import { Avatar, Badge, Group, Select, Table, Text } from '@mantine/core';
import { useListState } from '@mantine/hooks';
import classes from './DraggableContactsTable.module.css';

type ContactMutation = {
    id?: string;
    first?: string;
    last?: string;
    avatar?: string;
    twitter?: string;
    notes?: string;
    favorite?: boolean;
    email?: string;
    phone?: string;
    job?: string;
};

interface DraggableContactsTableProps {
    contacts: ContactMutation[];
    onContactsReorder?: (contacts: ContactMutation[]) => void;
}

export function DraggableContactsTable({
    contacts,
    onContactsReorder,
}: DraggableContactsTableProps) {
    const [state, handlers] = useListState(contacts);

    const handleDragEnd = ({ destination, source }: any) => {
        if (!destination) return;

        handlers.reorder({ from: source.index, to: destination.index });

        // Create new reordered array and call callback
        const newContacts = [...state];
        const [removed] = newContacts.splice(source.index, 1);
        newContacts.splice(destination.index, 0, removed);

        onContactsReorder?.(newContacts);
    };

    const getContactStatus = (contact: ContactMutation) => {
        // You can customize this logic based on your needs
        return contact.favorite ? 'Active' : 'Inactive';
    };

    const getLastActive = (contact: ContactMutation) => {
        // Placeholder - you can implement actual last active logic
        return `${Math.floor(Math.random() * 7) + 1} days ago`;
    };

    const rows = state.map((contact, index) => (
        <Draggable
            key={contact.id || `${contact.first}-${contact.last}-${index}`}
            index={index}
            draggableId={contact.id || `${contact.first}-${contact.last}-${index}`}
        >
            {(provided, snapshot) => (
                <Table.Tr
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    className={cx(classes.tableRow, {
                        [classes.rowDragging]: snapshot.isDragging
                    })}
                >
                    <Table.Td>
                        <Group gap="sm">
                            <div
                                {...provided.dragHandleProps}
                                className={classes.dragHandle}
                            >
                                <IconGripVertical size={18} stroke={1.5} />
                            </div>
                            <Avatar
                                size={40}
                                src={contact.avatar}
                                radius={40}
                                alt={`${contact.first} ${contact.last}`}
                            />
                            <div>
                                <Text fz="sm" fw={500}>
                                    {contact.first} {contact.last}
                                </Text>
                                <Text fz="xs" c="dimmed">
                                    {contact.email || `${contact.first?.toLowerCase()}.${contact.last?.toLowerCase()}@example.com`}
                                </Text>
                                {contact.twitter && (
                                    <Text fz="xs" c="blue">
                                        {contact.twitter}
                                    </Text>
                                )}
                            </div>
                        </Group>
                    </Table.Td>

                    <Table.Td>
                        <Text fz="sm" tt="capitalize">
                            {contact.job || 'Not specified'}
                        </Text>
                    </Table.Td>

                    <Table.Td>
                        <Text fz="xs" c="dimmed">
                            {contact.phone}
                        </Text>
                    </Table.Td>

                    <Table.Td>
                        <Text fz="xs" c="dimmed">
                            {getLastActive(contact)}
                        </Text>
                    </Table.Td>

                    <Table.Td>
                        {contact.favorite ? (
                            <Badge fullWidth variant="light" color="green">
                                Active
                            </Badge>
                        ) : (
                            <Badge color="gray" fullWidth variant="light">
                                Inactive
                            </Badge>
                        )}
                    </Table.Td>
                </Table.Tr>
            )}
        </Draggable>
    ));

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Table.ScrollContainer minWidth={900}>
                <Table verticalSpacing="sm">
                    <Table.Thead>
                        <Table.Tr>
                            <Table.Th>Contact</Table.Th>
                            <Table.Th>Job</Table.Th>
                            <Table.Th>Role</Table.Th>
                            <Table.Th>Phone</Table.Th>
                            <Table.Th>Last Active</Table.Th>
                            <Table.Th>Status</Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Droppable droppableId="contacts-table" direction="vertical">
                        {(provided) => (
                            <Table.Tbody {...provided.droppableProps} ref={provided.innerRef}>
                                {rows}
                                {provided.placeholder}
                            </Table.Tbody>
                        )}
                    </Droppable>
                </Table>
            </Table.ScrollContainer>
        </DragDropContext>
    );
}