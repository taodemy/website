import React from "react";
import { fontSatoshi, fontSyne, fontRobotoMono } from "@/pages/_app";
import NavLink from "@/components/general/NavLink";
import styles from "@/styles/Footer.module.css";
import Button from "@/components/base/Button";

const Footer = () => {
  const pages = [
    {
      id: 1,
      content: "HOME",
    },
    {
      id: 2,
      content: "SERVICES",
    },
    {
      id: 3,
      content: "STUDIO",
    },
    {
      id: 4,
      content: "CONTACT",
    },
  ];
  const cms = [
    {
      id: 1,
      content: "WORK",
    },
    {
      id: 2,
      content: "WORK SINGLE",
    },
    {
      id: 3,
      content: "BLOG",
    },
    {
      id: 4,
      content: "BLOG POST",
    },
    {
      id: 5,
      content: "SHOP",
    },
    {
      id: 6,
      content: "SHOP SINGLE",
    },
  ];
  const utilityItems = [
    {
      id: 1,
      content: "404 ERROR PAGE",
    },
    {
      id: 2,
      content: "PASSWORD PROTECTED",
    },
    {
      id: 3,
      content: "STYLEGUIDE",
    },
    {
      id: 4,
      content: "LICENSING",
    },
    {
      id: 5,
      content: "CHANGELOG",
    },
  ];
  return (
    <footer className={styles["footer__container"]}>
      <div className={styles["footer_top__container"]}>
        <div className={styles["footer_top_taotech__container"]}>
          <div className={styles["footer_top_taotech_top__container"]}>
            <div className={styles["footer_top_taotech_top__icon_container"]}>
              <img
                src="/images/fyllaIcon.png"
                alt="icon"
                className={styles["footer_top_taotech_top__icon"]}
                aria-label="icon__fylla"
              />
              <h1 className={`${styles["footer_top_taotech_top__title"]} ${fontSyne.className}`}>
                TAOTECH
              </h1>
            </div>
            <address className={`${fontSatoshi.className} global__text-default`}>
              Main Street. 1<br /> 22222 Berlin
            </address>
          </div>
          <ul className={styles["footer_top_taotech__ul"]}>
            <li>
              <img src="/images/badge-ln.svg" alt="badge" aria-label="badge__ln" />
            </li>
            <li>
              <img src="/images/badge-in.svg" alt="badge" aria-label="badge__in" />
            </li>
            <li>
              <img src="/images/badge-fb.svg" alt="badge" aria-label="badge__fb" />
            </li>
          </ul>
        </div>
        <nav className={styles["footer_top_links__container"]}>
          <div className={styles["footer_top_link__container"]}>
            <ul
              className={`${styles["footer_top_link__ul"]} ${fontSyne.className} global__text-meta`}
            >
              <li>
                <h2 className={`global__heading-h4 ${fontSyne.className}`}>Pages</h2>
              </li>
              {pages.map((page) => (
                <NavLink key={page.id} content={page.content} />
              ))}
              <li>
                <Button>more templates</Button>
              </li>
            </ul>
          </div>
          <div className={styles["footer_top_link__container"]}>
            <ul
              className={`${styles["footer_top_link__ul"]} ${fontSyne.className} global__text-meta`}
            >
              <li>
                <h2 className={`global__heading-h4 ${fontSyne.className}`}>CMS</h2>
              </li>
              {cms.map((cmsItem) => (
                <NavLink key={cmsItem.id} content={cmsItem.content} />
              ))}
            </ul>
          </div>
          <div className={styles["footer_top_link__container"]}>
            <ul
              className={`${styles["footer_top_link__ul"]} ${fontSyne.className} global__text-meta`}
            >
              <li>
                <h2 className={`global__heading-h4 ${fontSyne.className}`}>Utility Pages</h2>
              </li>
              {utilityItems.map((utilityItem) => (
                <NavLink key={utilityItem.id} content={utilityItem.content} />
              ))}
            </ul>
          </div>
        </nav>
      </div>
      <div className={styles["footer_bottom__container"]}>
        <div
          className={`${styles["footer_bottom__copyright"]} global__text-meta ${fontRobotoMono.className}`}
        >
          <small>© 2022 Made by Pawel Gola. Powered by Webflow.</small>
        </div>
        <ul
          className={`${styles["footer_bottom__privacy"]} global__text-meta ${fontRobotoMono.className}`}
        >
          <li>
            <small>PRIVACY</small>
          </li>
          <li>
            <small>IMPRINT</small>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
