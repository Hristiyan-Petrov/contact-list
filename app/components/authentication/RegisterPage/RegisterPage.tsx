import { useEffect, useState } from 'react';
import {
    Anchor,
    Button,
    Text,
    Title,
    Box,
    Progress,
    Group,
    Transition,
    Alert
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconArrowLeft, IconInfoCircle, IconSparkles } from '@tabler/icons-react';
import { StepOne } from './StepOne';
import { StepTwo } from './StepTwo';
import classes from './Registration.module.css';
import { requirements } from './RegisterPassword';
import { Link, useFetcher, useNavigate } from '@remix-run/react';

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
    profileImageUrl: File | null;
};

// Dynamically generate keyframes for particle effects
const dynamicParticleKeyframes = [...Array(8)].map((_, i) => `
    @keyframes explode-${i} {
        0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
        }
        20% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 0.8;
        }
        100% {
            transform: translate(
                calc(-50% + ${Math.cos(i * 45 * Math.PI / 180) * 60}px),
                calc(-50% + ${Math.sin(i * 45 * Math.PI / 180) * 60}px)
            ) scale(0);
            opacity: 0;
        }
    }
`).join('');

export function RegisterPage() {
    const [currentStep, setCurrentStep] = useState(0);
    const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
    const [greet, setGreet] = useState('');
    const [animationKey, setAnimationKey] = useState(0);

    // Fetcher for registration and the navigate hook
    const registerFetcher = useFetcher<{ success: boolean, error?: string }>();
    const navigate = useNavigate();

    useEffect(() => {
        if (registerFetcher.state === 'idle' && registerFetcher.data) {
            if (registerFetcher.data.success) {
                console.log('REGISTERED!');
                
                navigate('/login');
            } else if (registerFetcher.data.error) {
                alert(`Registration Failed: ${registerFetcher.data.error}`);
            }
        }
    }, [registerFetcher.data, registerFetcher.state, [registerFetcher.data, registerFetcher.state, navigate]]);

    // Email check
    const emailFetcher = useFetcher<{ emailExists?: boolean }>();

    useEffect(() => {
        if (emailFetcher.state === 'idle' && emailFetcher.data) {
            if (emailFetcher.data?.emailExists) {
                form.setFieldError('email', 'This email is already registered')
            } else {
                setCurrentStep(currentStep + 1);
            }
        }
    }, [emailFetcher.data, emailFetcher.state]);

    // Manage greet text
    useEffect(() => {
        if (avatarPreview) {
            // Delay to create a nice staggered effect after avatar appears
            setTimeout(() => {
                const randomIndex = Math.floor(Math.random() * GREETINGS.length);
                setGreet(GREETINGS[randomIndex]);
                setAnimationKey(prev => prev + 1); // Force re-animation
            }, 600);
        } else {
            setGreet('');
        }
    }, [avatarPreview]);

    // Form
    const form = useForm<FormData>({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
            firstName: '',
            lastName: '',
            profileImageUrl: null,
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

                for (const requirement of requirements) {
                    if (!requirement.re.test(value)) {
                        return '';
                    }
                }

                return null;
            },
            confirmPassword: (value, values) => {
                if (currentStep === 0) {
                    // First check if password meets all requirements
                    const passwordHasErrors = requirements.some(requirement => !requirement.re.test(values.password));

                    // Only validate confirm password if main password has no errors
                    if (passwordHasErrors) {
                        return null; // Don't show confirm password error if password itself has errors
                    }

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
            profileImageUrl: (value) => {
                if (currentStep === 1) {
                    return value ? null : 'Profile picture is required';
                }
                return;
            }
        },
    });

    const handleNext = () => {
        // 1. Run client-side validation first
        const isValid = form.validate();
        if (isValid.hasErrors) {
            return;
        }

        // 2. If client-side is fine, submit for server-side check
        if (currentStep < 1) {
            emailFetcher.submit(
                { email: form.values.email },
                { method: 'POST', action: '/api/validate-email' }
            );
        } else {
            // This is for the final "Sign Up" click
            // console.log('Time for Sign Up! Form submitted:', form.values);

            const formData = new FormData();
            formData.append('email', form.values.email);
            formData.append('password', form.values.password);
            formData.append('firstName', form.values.firstName);
            formData.append('lastName', form.values.lastName);
            formData.append('profileImageUrl', form.values.profileImageUrl as Blob);

            registerFetcher.submit(formData, {
                method: 'POST',
                // encType: 'multipart/form-data'
            });
        }
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleAvatarChange = (file: File | null) => {
        form.setFieldValue('profileImageUrl', file);

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
        form.setFieldValue('profileImageUrl', null);
        setAvatarPreview(null);
    };

    const progress = ((currentStep + 1) / 2) * 100;

    const isCheckingEmail = emailFetcher.state !== 'idle';
    const isRegistering = registerFetcher.state !== 'idle';

    return (
        <Box className={classes.formWrapper}>
            {/* CSS for dynamically generated animations */}
            <style>{dynamicParticleKeyframes}</style>

            {/* TOP SECTION (Header) */}
            <div>
                <Box className={classes.progressContainer}>
                    <Progress value={progress} size="sm" mb="xs" />
                    <Text className={classes.progressText}>
                        Step {currentStep + 1} of 2
                    </Text>
                </Box>

                <Title
                    className={classes.title}
                    ta="center"
                    style={currentStep === 1 ? { fontSize: '2rem' } : {}}
                >
                    {currentStep === 0
                        ? 'Create your profile!'
                        : 'Profile almost completed!'}
                </Title>
            </div>

            {/* MIDDLE SECTION (Steps) */}
            <Box className={classes.stepsContainer} flex={1}>
                <Transition
                    mounted={currentStep === 0}
                    transition="slide-right"
                    duration={300}
                    timingFunction="ease"
                >
                    {(styles) => (
                        <div style={styles} className={classes.stepTransition}>
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
                        <div style={styles} className={classes.stepTransition}>
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

            {/* BOTTOM SECTION (Footer) */}
            <div>
                <Transition
                    key={animationKey}
                    mounted={currentStep === 1}
                    transition={{ in: { opacity: 1, transform: 'translateY(0) scale(1)' }, out: { opacity: 0, transform: 'translateY(10px) scale(0.95)' }, transitionProperty: 'opacity, transform' }}
                    duration={greet ? 800 : 400}
                    timingFunction={greet ? "cubic-bezier(0.68, -0.55, 0.265, 1.55)" : "ease"}
                >
                    {(styles) => (
                        <Alert
                            style={styles}
                            className={`${classes.alertBase} ${greet ? classes.alertGreet : ''}`}
                            icon={greet ? <IconSparkles size={16} className={classes.alertIconSparkle} /> : <IconInfoCircle size={16} />}
                            color={greet ? undefined : "blue"}
                            variant={greet ? undefined : "light"}
                            mb="md"
                        >
                            {greet && (
                                <>
                                    {[...Array(8)].map((_, i) => (
                                        <Box key={i} className={classes.alertParticle} style={{ animationName: `explode-${i}` }} />
                                    ))}
                                    <Box className={classes.alertLightning} />
                                    <Box className={classes.alertPulseGlow} />
                                </>
                            )}
                            <Text size="sm" className={`${classes.alertTextBase} ${greet ? classes.alertTextGreet : ''}`}>
                                {greet || 'Upload a profile picture to personalize your account'}
                            </Text>
                        </Alert>
                    )}
                </Transition>

                <Group justify="space-between">
                    {currentStep > 0 ? (
                        <Button variant="default" leftSection={<IconArrowLeft size={16} />} onClick={handleBack} size="md">
                            Back
                        </Button>
                    ) : (
                        <Box className={classes.backButtonSpacer} />
                    )}
                    <Button
                        onClick={handleNext}
                        size="md"
                        radius="md"
                        className={classes.nextButton}
                        loading={isCheckingEmail || isRegistering}
                        disabled={isCheckingEmail || isRegistering}
                    >
                        {currentStep === 1 ? 'Sign Up' : 'Next'}
                    </Button>
                </Group>
                <Text ta="center" mt="lg">
                    Already have an account?{' '}
                    <Link to="/login" className={classes.loginButton}>
                        Log in
                    </Link>
                </Text>
            </div>
        </Box>
    );
}