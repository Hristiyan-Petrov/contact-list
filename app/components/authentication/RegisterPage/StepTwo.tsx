import {
    TextInput,
    FileInput,
    Avatar,
    Group,
    Box,
    Text,
    Button,
    Stack,
    Transition,
} from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { IconUpload, IconX, IconSparkles } from '@tabler/icons-react';
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
            <Group grow align="flex-start" className={classes.nameInputsGroup} pr={2}>
                <TextInput
                    label="First Name"
                    placeholder="John"
                    required
                    size="sm"
                    {...form.getInputProps('firstName')}
                    className={classes.nameInput}
                />
                <TextInput
                    label="Last Name"
                    placeholder="Doe"
                    required
                    size="sm"
                    {...form.getInputProps('lastName')}
                    className={classes.nameInput}
                />
            </Group>

            <Box>
                <Text size="sm" fw={500} mb="xs">
                    Profile Picture
                </Text>
                <Box className={classes.avatarSection}>
                    <Transition mounted={!!avatarPreview} transition="pop" duration={300} timingFunction="ease">
                        {(styles) => (
                            <div style={styles} className={classes.avatarTransitionContainer}>
                                <Stack align="center" gap="sm" className={classes.avatarDisplay}>
                                    <Box className={classes.avatarWrapper}>
                                        <Avatar src={avatarPreview} size={140} radius={140} className={classes.avatar} />
                                        <Transition mounted={!!avatarPreview} transition="scale" duration={600} timingFunction="ease-out">
                                            {(sparkleStyles) => (
                                                <Box style={sparkleStyles} className={classes.sparkleIcon}>
                                                    {/* <IconSparkles size={24} /> */}
                                                </Box>
                                            )}
                                        </Transition>
                                    </Box>
                                    <Button
                                        variant="subtle"
                                        color="red"
                                        size="xs"
                                        leftSection={<IconX size={14} />}
                                        onClick={onRemoveAvatar}
                                        className={classes.removeAvatarButton}
                                    >
                                        Remove
                                    </Button>
                                </Stack>
                            </div>
                        )}
                    </Transition>

                    <Transition mounted={!avatarPreview} transition="fade" duration={200} timingFunction="ease">
                        {(styles) => (
                            <div style={styles} className={classes.fileInputContainer}>
                                <FileInput
                                    placeholder="Choose profile picture"
                                    accept="image/*"
                                    leftSection={<IconUpload size={16} />}
                                    size="md"
                                    onChange={onAvatarChange}
                                    error={form.errors.avatar}
                                    classNames={{ input: classes.fileInput }}
                                />
                            </div>
                        )}
                    </Transition>
                </Box>
            </Box>
        </Stack>
    );
}