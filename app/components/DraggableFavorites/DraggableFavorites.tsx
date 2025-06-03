import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd';
import { IconGripVertical, IconAt, IconPhoneCall, IconBrandTwitter, IconPlus } from '@tabler/icons-react';
import { Avatar, Group, Text, Paper, ActionIcon, Badge } from '@mantine/core';
import { useListState } from '@mantine/hooks';
import { ContactRecord } from '~/data';

const initialData = [
    {
        id: "1",
        avatar: "https://sessionize.com/image/124e-400o400o2-wHVdAuNaxi8KJrgtN3ZKci.jpg",
        first: "Shruti",
        last: "Kapoor",
        twitter: "@shrutikapoor08",
        phone: "+1234567890",
        job: "writer",
        email: "shruti@example.com"
    },
    {
        id: "2",
        avatar: "https://sessionize.com/image/1940-400o400o2-Enh9dnYmrLYhJSTTPSw3MH.jpg",
        first: "Glenn",
        last: "Reyes",
        twitter: "@glnnrys",
        phone: "+1234567891",
        job: "singer",
        email: "glenn@example.com"
    },
    {
        id: "3",
        avatar: "https://sessionize.com/image/9273-400o400o2-3tyrUE3HjsCHJLU5aUJCja.jpg",
        first: "Ryan",
        last: "Florence",
        phone: "+1234567892",
        job: "actor",
        email: "ryan@example.com"
    }
];

const MAX_ITEMS = 5;

type DraggableFavoritesProps = {
    favs: ContactRecord[];
};

export default function DraggableFavorites({
    favs
}: DraggableFavoritesProps) {
    const [state, handlers] = useListState<ContactRecord>(favs);

    const freePositions = MAX_ITEMS - state.length;
    const canDrag = state.length > 1;

    const items = state.map((user, index) => (
        <Draggable key={user.id} index={index} draggableId={user.id} isDragDisabled={!canDrag}>
            {(provided, snapshot) => (
                <Paper
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    p="md"
                    mb="sm"
                    shadow={snapshot.isDragging ? "md" : "xs"}
                    style={{
                        ...provided.draggableProps.style,
                        backgroundColor: snapshot.isDragging ? 'var(--mantine-color-blue-0)' : undefined,
                        border: snapshot.isDragging ? '2px solid var(--mantine-color-blue-4)' : '1px solid var(--mantine-color-gray-3)',
                        transform: provided.draggableProps.style?.transform || 'none',
                    }}
                >
                    <Group wrap="nowrap" gap="md">
                        {canDrag && (
                            <div
                                {...provided.dragHandleProps}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--mantine-color-gray-6)',
                                    cursor: 'grab',
                                    padding: '4px'
                                }}
                            >
                                <IconGripVertical size={18} stroke={1.5} />
                            </div>
                        )}

                        <Avatar
                            src={user.avatar}
                            size={64}
                            radius="md"
                        />

                        <div style={{ flex: 1 }}>
                            <Text size="xs" tt="uppercase" fw={700} c="dimmed">
                                {user.job}
                            </Text>
                            <Text size="lg" fw={500} style={{ fontFamily: 'var(--mantine-font-family)' }}>
                                {user.first} {user.last}
                            </Text>

                            <Group wrap="nowrap" gap={8} mt={4}>
                                <IconAt stroke={1.5} size={14} style={{ color: 'var(--mantine-color-gray-5)' }} />
                                <Text size="xs" c="dimmed">
                                    {user.email}
                                </Text>
                            </Group>

                            <Group wrap="nowrap" gap={8} mt={2}>
                                <IconPhoneCall stroke={1.5} size={14} style={{ color: 'var(--mantine-color-gray-5)' }} />
                                <Text size="xs" c="dimmed">
                                    {user.phone}
                                </Text>
                            </Group>

                            {user.twitter && (
                                <Group wrap="nowrap" gap={8} mt={2}>
                                    <IconBrandTwitter stroke={1.5} size={14} style={{ color: 'var(--mantine-color-gray-5)' }} />
                                    <Text size="xs" c="dimmed">
                                        {user.twitter}
                                    </Text>
                                </Group>
                            )}
                        </div>
                    </Group>
                </Paper>
            )}
        </Draggable>
    ));

    // const addUser = () => {
    //     if (state.length < MAX_ITEMS) {
    //         const newUser = {
    //             id: Date.now().toString(),
    //             avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${Date.now()}`,
    //             first: "New",
    //             last: "User",
    //             phone: "+1234567890",
    //             job: "developer",
    //             email: "newuser@example.com"
    //         };
    //         handlers.append(newUser);
    //     }
    // };

    return (
        <div style={{ maxWidth: 600, margin: '0 auto', padding: '20px' }}>
            <Group justify="space-between" mb="lg">
                <div>
                    <Text size="xl" fw={600}>Team Members</Text>
                    <Text size="sm" c="dimmed">
                        {state.length} of {MAX_ITEMS} positions filled
                        {freePositions > 0 && ` • ${freePositions} positions available`}
                    </Text>
                </div>

                {/* Add dummy record */}
                {/* {state.length < MAX_ITEMS && (
                    <ActionIcon
                        variant="filled"
                        size="lg"
                        // onClick={addUser}
                    >
                        <IconPlus size={18} />
                    </ActionIcon>
                )} */}
            </Group>

            {freePositions > 0 && (
                <Paper p="sm" mb="md" style={{ border: '2px dashed var(--mantine-color-gray-4)', backgroundColor: 'var(--mantine-color-gray-0)' }}>
                    <Text size="sm" c="dimmed" ta="center">
                        {freePositions} free position{freePositions > 1 ? 's' : ''} remaining
                    </Text>
                </Paper>
            )}

            {!canDrag && state.length === 1 && (
                <Badge variant="light" color="blue" mb="sm">
                    Add more members to enable drag & drop
                </Badge>
            )}

            <DragDropContext
                onDragEnd={({ destination, source }) => {
                    if (destination && canDrag) {
                        handlers.reorder({ from: source.index, to: destination.index });
                    }
                }}
            >
                <Droppable droppableId="user-list" direction="vertical">
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            {items}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
}