import { useState } from "react";
import { Hero } from "~/components/hero/Hero"
import MainLayout from "~/components/MainLayout";

export default function Index() {
    const [showMain, setShowMain] = useState(false);

    return (

        <>
            {!showMain ? (
                <Hero onCtaClick={() => setShowMain(true)} />
            ) : (
                <MainLayout />
            )}
        </>

    );
};