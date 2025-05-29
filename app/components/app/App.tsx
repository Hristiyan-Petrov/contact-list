import { MantineProvider } from '@mantine/core';
import { Hero } from '../hero/Hero';

export default function App() {
    return (
        <MantineProvider>
            <Hero />
        </MantineProvider>
    )
}