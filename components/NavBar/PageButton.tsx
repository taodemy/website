import React from "react";
import styles from "@/styles/Header.module.css";
import NavbarLink from "@/components/Navbar/NavbarLink";

const NavbarPage = () => {
    const linkLists = [
        {
            id: 1,
            placeHolder: "PAGE",
        }];

    return (
        <div className={styles.header_navbar_page}>
            {linkLists.map(({ id, placeHolder }) => (
                <NavbarLink key={id} placeHolder={placeHolder} />
            ))}
            <img
                arial-label="header_navbar_page_icon"
                className={styles.header_navbar_page_icon}
                src="/images/arrow.png"
                alt="Page Arrow"
            />
        </div>
    );
};
export default NavbarPage;
