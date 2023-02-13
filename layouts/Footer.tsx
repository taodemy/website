import React from "react";
import styles from "./Footer.module.css"
import Image from "next/image";
import fylla from '@/public/fyllaIcon.png'
import badgeLN from '@/public/badge-ln.png'
import badgeIN from '@/public/badge-in.png'
import badgeFB from '@/public/badge-fb.png'

const Footer = () => {
  return (
		<section className={styles['footer-container']}>
			<div className={styles['footer-main-container']}>
				<div className={styles['footer-main-fylla-container']}>
					<div className={styles['footer-main-fylla-top-container']}>
						<div className={styles['footer-main-fylla-top-icon-container']}>
							<Image src={fylla} alt="icon" className={styles['footer-main-fylla-top-icon']}/>
							<p className="text-default">FYLLA</p>
						</div>
						<p className="text-default">
							Main Street. 1
							22222 Berlin
						</p>
					</div>
					<ul className={styles['footer-main-fylla-ul']}>
						<li>
							<Image src={badgeLN} alt="badge"/>
						</li>
						<li>
							<Image src={badgeIN} alt="badge"/>
						</li>
						<li>
							<Image src={badgeFB} alt="badge"/>
						</li>
					</ul>
				</div>
				<div className={styles['footer-main-border']}></div>
				<div className={styles['']}></div>
			</div>
			<div className={styles['footer-bottom-container']}></div>
		</section>
	);
};

export default Footer;