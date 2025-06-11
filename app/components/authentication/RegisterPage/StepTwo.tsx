import {
    TextInput,
    FileInput,
    Avatar,
    Group,
    Box,
    Text,
    Button,
    Stack,
    Alert,
    Transition,
} from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { IconUpload, IconX, IconInfoCircle } from '@tabler/icons-react';
import { useEffect, useState } from 'react';

interface StepTwoProps {
    form: UseFormReturnType<any>;
    avatarPreview: string | null;
    onAvatarChange: (file: File | null) => void;
    onRemoveAvatar: () => void;
};



export function StepTwo({ form, avatarPreview, onAvatarChange, onRemoveAvatar }: StepTwoProps) {

    return (
        <Stack gap="md">
            <Group grow align="flex-start">
                {/* 1. Reserve space directly on the input's container */}
                <TextInput
                    label="First Name"
                    placeholder="John"
                    required
                    size="md"
                    {...form.getInputProps('firstName')}
                    style={{ minHeight: 92 }}
                />

                <TextInput
                    label="Last Name"
                    placeholder="Doe"
                    required
                    size="md"
                    {...form.getInputProps('lastName')}
                    style={{ minHeight: 92 }}
                />
            </Group>

            <Box>
                <Text size="sm" fw={500} mb="xs">
                    Profile Picture
                </Text>

                <Box style={{ position: 'relative', height: '220px' }}>
                    {/* AVATAR TRANSITION */}
                    <Transition 
                        mounted={!!avatarPreview} 
                        transition="pop" 
                        duration={300} 
                        timingFunction="ease"
                    >
                        {(styles) => (
                            <div style={{ 
                                ...styles, 
                                position: 'absolute', 
                                width: '100%',
                                top: 0,
                                left: 0
                            }}>
                                <Stack align="center" gap="sm">
                                    <Avatar
                                        src={avatarPreview}
                                        size={160}
                                        radius={160}
                                    />
                                    <Button
                                        variant="subtle"
                                        color="red"
                                        size="xs"
                                        leftSection={<IconX size={14} />}
                                        onClick={onRemoveAvatar}
                                    >
                                        Remove
                                    </Button>
                                </Stack>
                            </div>
                        )}
                    </Transition>

                    <Transition 
                        mounted={!avatarPreview} 
                        transition="fade" 
                        duration={200} 
                        timingFunction="ease"
                    >
                        {(styles) => (
                            <div style={{ 
                                ...styles, 
                                position: 'absolute', 
                                width: '100%',
                                top: 0,
                                left: 0
                            }}>
                                <FileInput
                                    placeholder="Choose profile picture"
                                    accept="image/*"
                                    leftSection={<IconUpload size={16} />}
                                    size="md"
                                    onChange={onAvatarChange}
                                    error={form.errors.avatar}
                                />
                            </div>
                        )}
                    </Transition>
                </Box>
            </Box>
        </Stack>
    );
}