import { Navbar } from "flowbite-react";
import Image from "next/image";
import React from "react";
import logo from "public/logo2.svg";

const MyNavbar = () => {
    return (
        <Navbar
            fluid={true}
            rounded={true}
            className="fixed w-full top-0 z-50 px-4 md:px-8 text-sm md:text-base"
        >
            <Navbar.Brand href="/">
                <Image
                    src={logo}
                    alt="logo"
                    width={46}
                    height={46}
                    className="mr-4"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    DesignBrain
                </span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link href="/" active={true}>
                    Generate
                </Navbar.Link>
                <Navbar.Link href="/">Gallery</Navbar.Link>
                <Navbar.Link href="/">About</Navbar.Link>
                <Navbar.Link href="/">Contact</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MyNavbar;
