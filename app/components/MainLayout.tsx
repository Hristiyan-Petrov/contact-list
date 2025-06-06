import { Outlet } from "@remix-run/react";
import SideNavigation from "./SideNavigation/SideNavigation";

export default function MainLayout() {
    return (
        <div style={{ display: "flex", height: "100vh" }}>
            <SideNavigation />
                <Outlet />
        </div>
    );
}