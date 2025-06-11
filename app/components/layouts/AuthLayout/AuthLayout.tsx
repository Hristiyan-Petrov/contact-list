import { Outlet } from "@remix-run/react";
import classes from './AuthLayout.module.css';
import { Container } from '@mantine/core';

export default function AuthLayout() {
    return (
        <div className={classes.root}>
            <Container size="xl">
                <div className={classes.inner}>
                    <div className={classes.content}>
                        <Outlet />
                    </div>
                </div>
            </Container>
        </div>
    );
}