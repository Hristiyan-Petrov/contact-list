import React from 'react';
import { Box, PasswordInput, Stack, TextInput } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { RegisterPasswordField } from './RegisterPassword';

interface StepOneProps {
    form: UseFormReturnType<any>;
}

export function StepOne({ form }: StepOneProps) {
    return (
        <Box style={{ paddingRight: '1rem' }}>
            <Stack gap="md">
                <TextInput
                    label="Email"
                    placeholder="your@email.com"
                    required
                    size="md"
                    {...form.getInputProps('email')}
                />

                <RegisterPasswordField
                    label="Password"
                    placeholder="Your password"
                    required
                    size="md"
                    {...form.getInputProps('password')}
                />

                <PasswordInput
                    label="Confirm Password"
                    placeholder="Confirm your password"
                    required
                    size="md"
                    {...form.getInputProps('confirmPassword')}
                />

            </Stack>
        </Box>
    );
}

