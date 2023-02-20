import React from "react";
import { fontSatoshi, fontSyne, fontRobotoMono } from "@/pages/_app";
import FooterNaviLink from "@/components/general/FooterNaviLink";
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
  const utilityPages = [
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
              <p className={`${styles["footer_top_taotech_top__title"]} ${fontSyne.className}`}>
                TAOTECH
              </p>
            </div>
            <p className={`${fontSatoshi.className} global__text-default`}>
              Main Street. 1<br /> 22222 Berlin
            </p>
          </div>
          <ul className={styles["footer_top_taotech__ul"]}>
            <li>
              <img src="/images/badge-ln.png" alt="badge" aria-label="badge__ln" />
            </li>
            <li>
              <img src="/images/badge-in.png" alt="badge" aria-label="badge__in" />
            </li>
            <li>
              <img src="/images/badge-fb.png" alt="badge" aria-label="badge__fb" />
            </li>
          </ul>
        </div>
        <div className={styles["footer_top_links__container"]}>
          <div className={styles["footer_top_link__container"]}>
            <ul
              className={`${styles["footer_top_link__ul"]} ${fontSyne.className} global__text-meta`}
            >
              <li className={`global__heading-h4 ${fontSyne.className}`}>Pages</li>
              {pages.map((page) => (
                <FooterNaviLink key={page.id} content={page.content} />
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
              <li className={`global__heading-h4 ${fontSyne.className}`}>CMS</li>
              {cms.map((cmsItem) => (
                <FooterNaviLink key={cmsItem.id} content={cmsItem.content} />
              ))}
            </ul>
          </div>
          <div className={styles["footer_top_link__container"]}>
            <ul
              className={`${styles["footer_top_link__ul"]} ${fontSyne.className} global__text-meta`}
            >
              <li className={`global__heading-h4 ${fontSyne.className}`}>Utility Pages</li>
              {utilityPages.map((utilityPage) => (
                <FooterNaviLink key={utilityPage.id} content={utilityPage.content} />
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={styles["footer_bottom__container"]}>
        <div
          className={`${styles["footer_bottom__copyright"]} global__text-meta ${fontRobotoMono.className}`}
        >
          © 2022 Made by Pawel Gola. Powered by Webflow.
        </div>
        <ul
          className={`${styles["footer_bottom__privacy"]} global__text-meta ${fontRobotoMono.className}`}
        >
          <li>PRIVACY</li>
          <li>IMPRINT</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
