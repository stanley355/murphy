import React, { useState } from 'react';
import { FaBuffer, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import { NAVIGATION_MENU } from '../../../lib/constant';
import styles from './MobileNavbar.module.scss';

const MobileNavbar = () => {
	const [showMobileMenu, setShowMobileMenu] = useState(false);

	const MobileMenu = () => {
		return (
			<div className={styles.mobileNavbar__menu}>
				<div className={styles.mobileNavbar__menu__head}>
					<Link href="/">
						<a
							title="Marph"
							className={styles.mobileNavbar__menu__logo} >
							Marph
						</a>
					</Link>
					<button className={styles.mobileNavbar__menu__closeBtn} onClick={() => setShowMobileMenu(false)}>
						<FaTimes />
					</button>
				</div>
				<div className={styles.mobileNavbar__menu__body}>
					<ul>
						{NAVIGATION_MENU.map((menu) =>
							<li>
								<Link href={menu.url}>
									<a title={menu.title}>
										{menu.title}
									</a>
								</Link>
							</li>
						)}
					</ul>
				</div>
			</div>
		);
	}


	return (
		<nav className={styles.mobileNavbar}>
			<div className={styles.mobileNavbar__head}>
				<Link href="/">
					<a
						title="Marph"
						className={styles.mobileNavbar__logo} >
						Marph
					</a>
				</Link>
				<button className={styles.mobileNavbar__menuBtn} onClick={() => setShowMobileMenu(true)}>
					<FaBuffer />
				</button>
			</div>
			{showMobileMenu && <MobileMenu />}
		</nav>
	);
}

export default MobileNavbar;