import { useEffect, useState } from 'react';
import {
    Anchor,
    Button,
    Paper,
    Text,
    Title,
    Box,
    Progress,
    Group,
    Transition,
    Alert
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconArrowLeft, IconInfoCircle } from '@tabler/icons-react';
import { StepOne } from './StepOne';
import { StepTwo } from './StepTwo';
import classes from './RegisterPage.module.css';
import { requirements } from './RegisterPassword';

const GREETINGS = [
    "Looking sharp! Ready for your close-up.",
    "Great choice! This picture is worth at least a thousand likes.",
    "Perfect! Now everyone can see who's been stealing all the good looks.",
    "Wow, you look amazing! Is it getting hot in here, or is it just your new profile pic?",
    "Stunning! Your profile just got a major upgrade.",
    "Fantastic choice! Your profile pic is on point.",
];

interface FormData {
    email: string;
    password: string;
    confirmPassword: string;
    firstName: string;
    lastName: string;
    avatar: File | null;
}

export function RegisterPage() {
    const [currentStep, setCurrentStep] = useState(0);
    const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
    const [greet, setGreet] = useState('');

    useEffect(() => {
        if (avatarPreview) {
            const randomIndex = Math.floor(Math.random() * GREETINGS.length);
            setGreet(GREETINGS[randomIndex]);
        } else {
            setGreet('');
        }
    }, [avatarPreview]);

    const form = useForm<FormData>({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
            firstName: '',
            lastName: '',
            avatar: null,
        },
        validate: {
            email: (value) => {
                if (currentStep === 0) {
                    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? null : 'Invalid email';
                }
                return null;
            },
            password: (value) => {
                if (currentStep !== 0) return null;

                // 1. Check length first
                if (value.length < 6) {
                    return 'Password must be at least 6 characters';
                }

                // 2. Check all other requirements from the imported array
                for (const requirement of requirements) {
                    if (!requirement.re.test(value)) {
                        // Return a user-friendly error message based on the requirement label
                        return 'Check password requirements';
                    }
                }

                // 3. If all checks pass, validation is successful
                return null;
            },
            confirmPassword: (value, values) => {
                if (currentStep === 0) {
                    return value !== values.password ? 'Passwords do not match' : null;
                }
                return null;
            },
            firstName: (value) => {
                if (currentStep === 1) {
                    return value.trim().length < 2 ? 'First name must be at least 2 characters' : null;
                }
                return null;
            },
            lastName: (value) => {
                if (currentStep === 1) {
                    return value.trim().length < 2 ? 'Last name must be at least 2 characters' : null;
                }
                return null;
            },
            avatar: (value) => {
                if (currentStep === 1) {
                    return value ? null : 'Profile picture is required';
                }
                return;
            }
        },
    });

    const handleNext = () => {
        const isValid = form.validate();
        if (isValid.hasErrors) {
            return;
        }

        if (currentStep < 1) {
            setCurrentStep(currentStep + 1);
        } else {
            // Handle form submission
            console.log('Form submitted:', form.values);
        }
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleAvatarChange = (file: File | null) => {
        form.setFieldValue('avatar', file);

        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setAvatarPreview(e.target?.result as string);
            };
            reader.readAsDataURL(file);
        } else {
            setAvatarPreview(null);
        }
    };

    const removeAvatar = () => {
        form.setFieldValue('avatar', null);
        setAvatarPreview(null);
    };

    const progress = ((currentStep + 1) / 2) * 100;

    return (
        <Paper className={classes.form}>
            <Box mb="lg">
                <Progress value={progress} size="sm" mb="xs" />
                <Text size="sm" c="dimmed" ta="center">
                    Step {currentStep + 1} of 2
                </Text>
            </Box>

            <Title order={2} className={classes.title}>
                {currentStep === 0
                    ? 'Create a profile and start using Facebook wanabe app!'
                    : 'Complete your profile'}
            </Title>

            <Box
                style={{
                    position: 'relative',
                    height: '420px',
                    transition: 'height 0.3s ease-out', // Animate height changes
                    // mb: 20
                    marginBottom: '20px', // Add margin to separate from Next button
                }}
            >
                <Transition
                    mounted={currentStep === 0}
                    transition="slide-right"
                    duration={300}
                    timingFunction="ease"
                >
                    {(styles) => (
                        <div style={{ ...styles, position: 'absolute', width: '100%' }}>
                            <StepOne form={form} />
                        </div>
                    )}
                </Transition>

                <Transition
                    mounted={currentStep === 1}
                    transition="slide-left"
                    duration={300}
                    timingFunction="ease"
                >
                    {(styles) => (
                        <div style={{ ...styles, position: 'absolute', width: '100%' }}>
                            <StepTwo
                                form={form}
                                avatarPreview={avatarPreview}
                                onAvatarChange={handleAvatarChange}
                                onRemoveAvatar={removeAvatar}
                            />
                        </div>
                    )}
                </Transition>
            </Box>

            {/* 6. Place the Alert here, outside the animated container, but inside its own transition */}
            <Transition mounted={currentStep === 1} transition="fade" duration={400} timingFunction="ease">
                {(styles) => (
                    <Alert
                        style={styles}
                        icon={<IconInfoCircle size={16} />}
                        color={greet ? "green" : "blue"}
                        variant="light"
                        mb="md"
                    >
                        <Text size="sm">
                            {greet ? greet : 'Upload a profile picture to personalize your account'}
                        </Text>
                    </Alert>
                )}
            </Transition>

            <Group
                justify="space-between"
                // mt={100}
            >
                {currentStep > 0 ? (
                    <Button
                        variant="default"
                        leftSection={<IconArrowLeft size={16} />}
                        onClick={handleBack}
                        size="md"
                    >
                        Back
                    </Button>
                ) : (
                    // Use a Box to maintain the space-between layout even when Back is not visible
                    <Box />
                )}

                <Button
                    onClick={handleNext}
                    size="md"
                    radius="md"
                    style={{ minWidth: '120px' }}
                >
                    {currentStep === 1 ? 'Sign Up' : 'Next'}
                </Button>
            </Group>

            <Box mt="lg" style={{ position: 'relative', minHeight: '24px' }}>
                <Text ta="center">
                    Already have an account?{' '}
                    <Anchor
                        href="/login"
                        fw={500}
                        onClick={(event) => event.preventDefault()}
                    >
                        Log in
                    </Anchor>
                </Text>
            </Box>
        </Paper>
    );
}