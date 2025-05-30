import { Outlet } from "@remix-run/react";
import SideNavigation from "~/components/SideNavigation/SideNavigation";

export default function MainLayout() {
    return (
        <div style={{ display: "flex", height: "100vh" }}>
            <SideNavigation />
            <div style={{ flex: 1, padding: "20px" }}>
                <Outlet />
            </div>
        </div>
    );
}