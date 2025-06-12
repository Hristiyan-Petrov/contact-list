import { Anchor, Box, Button, Checkbox, Group, Paper, PasswordInput, Text, TextInput, Title } from "@mantine/core";
import classes from './Login.module.css';
import { Link } from "@remix-run/react";

export default function LoginPage() {
    return (
        <Box className={classes.formWrapper}>
            <Title ta="center" className={classes.title}>
                Welcome back!
            </Title>


            {/* <Paper withBorder shadow="sm" p={22} mt={30} radius="md"> */}
            <TextInput
                label="Email"
                placeholder="you@mantine.dev"
                required
                radius="md"
            />
            <PasswordInput
                label="Password"
                placeholder="Your password"
                required
                mt="md"
                radius="md"
            />
            <Group
                justify="space-between"
                mt="lg">
                <Checkbox label="Remember me" />
                <Anchor className={classes.forgotPassword} component="button" size="sm">
                    Forgot password?
                </Anchor>
            </Group>
            <Button
                fullWidth
                mt="xl"
                radius="md"
                size="md"
                className={classes.loginButton}
            >
                Sign in
            </Button>

            <Text ta="center" mt="md">
                Don&apos;t have an account?{' '}
                <Link to="/register" className={classes.registerButton}>
                    Register
                </Link>
            </Text>
            {/* </Paper> */}
        </Box>

    );
};