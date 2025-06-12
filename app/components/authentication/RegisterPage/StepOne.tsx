import { Box, PasswordInput, Stack, TextInput } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { RegisterPasswordField } from './RegisterPassword';
import classes from './Registration.module.css';

interface StepOneProps {
    form: UseFormReturnType<any>;
}

export function StepOne({ form }: StepOneProps) {
    return (
        <Box className={classes.stepOneContainer}>
            <Stack gap="md" >
                <TextInput
                    label="Email"
                    placeholder="your@email.com"
                    required
                    // size="sm"
                    radius="md"
                    {...form.getInputProps('email')}
                />

                <RegisterPasswordField
                    label="Password"
                    placeholder="Your password"
                    required
                    // size="md"
                    radius="md"
                    {...form.getInputProps('password')}
                />

                <PasswordInput
                    label="Confirm Password"
                    placeholder="Confirm your password"
                    required
                    // size="md"
                    radius="md"
                    {...form.getInputProps('confirmPassword')}
                />
            </Stack>
        </Box>
    );
}