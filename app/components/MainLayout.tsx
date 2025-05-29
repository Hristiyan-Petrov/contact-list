import { Outlet } from "@remix-run/react";
import SideNavigation from "./SideNavigation/SideNavigation";

export default function MainLayout() {
    return (
        <div style={{ display: "flex", height: "100vh" }}>
            {/* <aside style={{ width: 300, borderRight: "1px solid #eee" }}> */}
                <SideNavigation /> 
            {/* </aside> */}
            <main style={{ flex: 1, padding: 32 }}>
                <Outlet />
            </main>
        </div>
    );
}