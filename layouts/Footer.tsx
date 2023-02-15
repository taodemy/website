import React from "react";
import { textFont, titleFont } from "@/pages/_app";
import FooterNaviLink from "@/components/FooterNaviLink";
import styles from "@/styles/Footer.module.css";
import Image from "next/image";
import fylla from "@/public/images/fyllaIcon.png";
import badgeLN from "@/public/images/badge-ln.png";
import badgeIN from "@/public/images/badge-in.png";
import badgeFB from "@/public/images/badge-fb.png";
import Button from "@/components/Button";

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
      <div className={styles["footer__main__container"]}>
        <div className={styles["footer__main__fylla__container"]}>
          <div className={styles["footer__main__fylla__top__container"]}>
            <div className={styles["footer__main__fylla__top__icon__container"]}>
              <Image
                src={fylla}
                alt="icon"
                className={styles["footer__main__fylla__top__icon"]}
                aria-label="icon__fylla"
              />
              <p className={`${styles["footer__main__fylla__top__title"]} ${titleFont.className}`}>
                TAOTECH
              </p>
            </div>
            <p className={`${textFont.className} global__text-default`}>
              Main Street. 1<br /> 22222 Berlin
            </p>
          </div>
          <ul className={styles["footer__main__fylla__ul"]}>
            <li>
              <Image src={badgeLN} alt="badge" aria-label="badge__ln" />
            </li>
            <li>
              <Image src={badgeIN} alt="badge" aria-label="badge__in" />
            </li>
            <li>
              <Image src={badgeFB} alt="badge" aria-label="badge__fb" />
            </li>
          </ul>
        </div>
        <div className={styles["footer__main__links__container"]}>
          <div className={styles["footer__main__link__container"]}>
            <ul
              className={`${styles["footer__main__link__ul"]} ${titleFont.className} global__text-meta`}
            >
              <li className={`global__heading-h4 ${titleFont.className}`}>Pages</li>
              {pages.map((page) => (
                <FooterNaviLink key={page.id} content={page.content} />
              ))}
              <li>
                <Button
                  buttonWidth="172px"
                  buttonHeight="35px"
                  isBlack={true}
                  placeHolder="More Templates"
                ></Button>
              </li>
            </ul>
          </div>
          <div className={styles["footer__main__link__container"]}>
            <ul
              className={`${styles["footer__main__link__ul"]} ${titleFont.className} global__text-meta`}
            >
              <li className={`global__heading-h4 ${titleFont.className}`}>CMS</li>
              {cms.map((c) => (
                <FooterNaviLink key={c.id} content={c.content} />
              ))}
            </ul>
          </div>
          <div className={styles["footer__main__link__container"]}>
            <ul
              className={`${styles["footer__main__link__ul"]} ${titleFont.className} global__text-meta`}
            >
              <li className={`global__heading-h4 ${titleFont.className}`}>Utility Pages</li>
              {utilityPages.map((up) => (
                <FooterNaviLink key={up.id} content={up.content} />
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={styles["footer__bottom__container"]}>
        <div className={`${styles["footer__bottom__copyright"]} global__text-meta`}>
          © 2022 Made by Pawel Gola. Powered by Webflow.
        </div>
        <ul className={`${styles["footer__bottom__privacy"]} global__text-meta`}>
          <li>PRIVACY</li>
          <li>IMPRINT</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
