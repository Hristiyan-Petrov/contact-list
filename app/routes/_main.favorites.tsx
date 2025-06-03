import { useLoaderData } from "@remix-run/react";
import DraggableFavorites from "~/components/DraggableFavorites/DraggableFavorites";
import { getFavorites } from "~/data";

export const loader = async () => {
    return await getFavorites();
};

export default function () {
    const favs = useLoaderData<typeof loader>();

    return (
        <DraggableFavorites favs={favs} />
    )
}