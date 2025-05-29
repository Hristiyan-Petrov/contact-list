import { Button, Container, Text, Title } from '@mantine/core';
import classes from './Hero.module.css';
import { Link } from '@remix-run/react';

export function Hero() {
    return (
        <div className={classes.root}>
            <Container size="lg">
                <div className={classes.inner}>
                    <div className={classes.content}>
                        <Title className={classes.title}>
                            A{' '}
                            <Text
                                component="span"
                                inherit
                                variant="gradient"
                                gradient={{ from: 'pink', to: 'yellow' }}
                            >
                                fully featured
                            </Text>{' '}
                            React components library
                        </Title>

                        <Text className={classes.description} mt={30}>
                            Build fully functional accessible web applications with ease – Mantine includes more
                            than 100 customizable components and hooks to cover you in any situation
                        </Text>

                        <Button
                            variant="gradient"
                            gradient={{ from: 'pink', to: 'yellow' }}
                            size="xl"
                            className={classes.control}
                            mt={40}
                        >
                            <Link 
                                to={'/contacts'}
                                className={classes.link}
                            >
                                Get started
                            </Link>
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    );
}