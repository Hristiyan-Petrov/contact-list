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

                        <Text className={classes.description} mt={30} size='xl'>
                            Check out{" "}
                            <a href="https://github.com/Hristiyan-Petrov/contact-list">the GitHub repository</a>.
                        </Text>

                        <Link to={'/login'}>
                            <Button
                                variant="gradient"
                                gradient={{ from: 'pink', to: 'yellow' }}
                                size="xl"
                                className={classes.control}
                                mt={40}
                            >
                                Dive In
                            </Button>
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    );
}


// import { Button, Text, Title } from '@mantine/core';
// import classes from './Hero.module.css';
// import { Link } from '@remix-run/react';

// export function Hero() {
//     return (
//         <>
// <Title className={classes.title}>
//     A Remix project made by {' '}
//     <Text
//         component="span"
//         inherit
//         variant="gradient"
//         gradient={{ from: 'pink', to: 'yellow' }}
//     >
//         Hristiyan Petrov
//     </Text>{' '}
// </Title>

//             <Text className={classes.description} mt={30} size='xl'>
//                 Check out{" "}
//                 <a href="https://github.com/Hristiyan-Petrov/contact-list">the GitHub repository</a>.
//             </Text>

//             <section className={classes.heroButtons}>
//                 <ButtonOption link='/login' text='Log In' variant="light" />
//                 <ButtonOption link='/register' text='Sign Up' variant="heavy" />
//             </section>
//         </>

//     );
// }

// interface ButtonOptionProps {
//     link: string;
//     text: string;
//     variant: 'light' | 'heavy';
// }

// function ButtonOption({
//     link,
//     text,
//     variant
// }: ButtonOptionProps) {
//     const isLight = variant !== 'light';

//     return (
//         <Link to={link}>
//             <Button
//                 variant={isLight ? 'outline' : 'gradient'}
//                 gradient={isLight ? undefined : { from: 'pink', to: 'yellow' }}
//                 size="lg"
//                 className={`${classes.control} ${isLight ? classes.controlLight : classes.controlHeavy}`}
//                 mt={40}
//             >
//                 {text}
//             </Button>
//         </Link>
//     );
// }

// // function SignInButton() {
// //     return (
// //         <StyledButton
// //             variant="light"
// //             text="Sign In"
// //             link="/sign-in"
// //         />
// //     );
// // }

// // function SignUpButton() {
// //     return (
// //         <StyledButton
// //             variant="heavy"
// //             text="Sign Up"
// //             link="/sign-up"
// //         />
// //     );
// // }

// // interface StyledButtonProps {
// //     variant: 'light' | 'heavy';
// //     text: string;
// //     onClick?: () => void;
// //     link: string;
// // }

// // function StyledButton({ variant, text, onClick, link }: StyledButtonProps) {
// //     const buttonStyles = variant === 'light' ? classes.lightButton : classes.heavyButton;

// //     return (
// //         <Link to={link}>
// //             <Button
// //                 className={`${classes.control} ${buttonStyles}`}
// //                 onClick={onClick}
// //                 size="lg"
// //                 mt={40}
// //                 variant={variant === 'light' ? 'outline' : 'gradient'}
// //                 gradient={variant === 'heavy' ? { from: 'pink', to: 'yellow' } : undefined}
// //             >
// //                 {text}
// //             </Button>
// //         </Link>
// //     );
// // }