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
                            A Remix project made by {' '}
                            <Text
                                component="span"
                                inherit
                                variant="gradient"
                                gradient={{ from: 'pink', to: 'yellow' }}
                            >
                                Hristiyan Petrov
                            </Text>{' '}
                        </Title>

                        <Text className={classes.description} mt={30}>
                            Check out{" "}
                            <a href="https://github.com/Hristiyan-Petrov/contact-list">the GitHub repository</a>.
                        </Text>

                        <Link
                            to={'/contacts'}
                        >
                            <Button
                                variant="gradient"
                                gradient={{ from: 'pink', to: 'yellow' }}
                                size="xl"
                                className={classes.control}
                                mt={40}
                            >
                                Get Started
                            </Button>
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    );
}

<p id="index-page">
    This is a demo index page for Hristiyan's Remix project.
    <br />
    Check out{" "}
    <a href="https://github.com/Hristiyan-Petrov/contact-list">the GitHub repository</a>.
</p>