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
import { IconUpload, IconX } from '@tabler/icons-react';
import classes from './Registration.module.css';

interface StepTwoProps {
    form: UseFormReturnType<any>;
    avatarPreview: string | null;
    onAvatarChange: (file: File | null) => void;
    onRemoveAvatar: () => void;
}

export function StepTwo({ form, avatarPreview, onAvatarChange, onRemoveAvatar }: StepTwoProps) {
    return (
        <Stack gap="md" pt='lg'>
            <Group grow align="flex-start" className={classes.nameInputsGroup}>
                <TextInput
                    label="First Name"
                    placeholder="John"
                    required
                    size="md"
                    {...form.getInputProps('firstName')}
                    className={classes.nameInput}
                />

                <TextInput
                    label="Last Name"
                    placeholder="Doe"
                    required
                    size="md"
                    {...form.getInputProps('lastName')}
                    className={classes.nameInput}
                />
            </Group>

            <Box>
                <Text size="sm" fw={500} mb="xs">
                    Profile Picture
                </Text>

                <Box className={classes.avatarSection}>
                    {/* AVATAR TRANSITION */}
                    <Transition 
                        mounted={!!avatarPreview} 
                        transition="pop" 
                        duration={300} 
                        timingFunction="ease"
                    >
                        {(styles) => (
                            <div style={styles} className={classes.avatarTransitionContainer}>
                                <Stack align="center" gap="sm" className={classes.avatarDisplay}>
                                    <Avatar
                                        src={avatarPreview}
                                        size={140}
                                        radius={140}
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
                            <div style={styles} className={classes.fileInputContainer}>
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