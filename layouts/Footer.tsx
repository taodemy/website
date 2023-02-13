import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import fylla from "@/public/layouts/fyllaIcon.png";
import badgeLN from "@/public/layouts/badge-ln.png";
import badgeIN from "@/public/layouts/badge-in.png";
import badgeFB from "@/public/layouts/badge-fb.png";
import Button from "@/components/button/Button";

const Footer = () => {
  return (
    <footer className={styles["footer-container"]}>
      <div className={styles["footer-main-container"]}>
        <div className={styles["footer-main-fylla-container"]}>
          <div className={styles["footer-main-fylla-top-container"]}>
            <div className={styles["footer-main-fylla-top-icon-container"]}>
              <Image src={fylla} alt="icon" className={styles["footer-main-fylla-top-icon"]} />
              <p className={styles["footer-main-fylla-top-title"]}>FYLLA</p>
            </div>
            <p className="text-default">Main Street. 1<br/> 22222 Berlin</p>
          </div>
          <ul className={styles["footer-main-fylla-ul"]}>
            <li>
              <Image src={badgeLN} alt="badge" />
            </li>
            <li>
              <Image src={badgeIN} alt="badge" />
            </li>
            <li>
              <Image src={badgeFB} alt="badge" />
            </li>
          </ul>
        </div>
        <div className={styles["footer-main-border"]}></div>
        <div className={styles["footer-main-links-container"]}>
					<div className={styles["footer-main-link-container"]}>
						<ul className={styles["footer-main-link-ul"] + " text-meta"}>
							<li className="heading-h4">Pages</li>
							<li>HOME</li>
							<li>SERVICES</li>
							<li>STUDIO</li>
							<li>CONTACT</li>
							<li>
								<Button buttonWidth="172px" buttonHeight="35px" isBlack={true} placeHolder="More Templates"></Button>
							</li>
						</ul>
					</div>
					<div className={styles["footer-main-link-container"]}>
						<ul className={styles["footer-main-link-ul"] + " text-meta"}>
							<li className="heading-h4">CMS</li>
							<li>WORK</li>
							<li>WORK SINGLE</li>
							<li>BLOG</li>
							<li>BLOG POST</li>
							<li>SHOP</li>
							<li>SHOP SINGLE</li>
						</ul>
					</div>
					<div className={styles["footer-main-link-container"]}>
						<ul className={styles["footer-main-link-ul"]  + " text-meta"}>
							<li className="heading-h4">Utility Pages</li>
							<li>404 ERROR PAGE</li>
							<li>PASSWORD PROTECTED</li>
							<li>STYLEGUIDE</li>
							<li>LICENSING</li>
							<li>CHANGELOG</li>
						</ul>
					</div>
				</div>
      </div>
      <div className={styles["footer-bottom-container"]}>
				<div className={styles["footer-bottom-copyright"] + " text-meta"}>© 2022 Made by Pawel Gola. Powered by Webflow.</div>
				<ul className={styles["footer-bottom-privacy"] + " text-meta"}>
					<li>PRIVACY</li>
					<li>IMPRINT</li>
				</ul>
			</div>
    </footer>
  );
};

export default Footer;
