import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar";

const Layout = () => {
    const navItems = [
        { label: "Home", href: "/" },
        { label: "About", href: "/About" },
        { label: "Cars", href: "/Cars" },
        { label: "Contact", href: "/Contact" },
    ];

    return (
        <>
            <NavBar logoSrc="./images/carLogo.png" navItems={navItems} />
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default Layout;
