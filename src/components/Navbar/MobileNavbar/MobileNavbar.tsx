import React, { useState } from 'react';
import Link from 'next/link';
import { FaBuffer, FaTimes, FaJsfiddle, FaDiceD6, FaDesktop, FaRegWindowRestore } from 'react-icons/fa';
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
							<FaJsfiddle />
							Marph
						</a>
					</Link>
					<button className={styles.mobileNavbar__menu__closeBtn} onClick={() => setShowMobileMenu(false)}>
						<FaTimes />
					</button>
				</div>
				<div className={styles.mobileNavbar__menu__body}>
					<Link href="/products/">
						<a title="Marph Web Products" onClick={() => setShowMobileMenu(false)}>
							<FaDiceD6 />
							Products
						</a>
					</Link>
					<Link href="/plans/">
						<a title="Marph Web Plans" onClick={() => setShowMobileMenu(false)}>
							<FaRegWindowRestore />
							Plans
						</a>
					</Link>
					<Link href="/hosting/">
						<a title="Marph Web Hosting" onClick={() => setShowMobileMenu(false)}>
							<FaDesktop />
							Hosting
						</a>
					</Link>
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
						<FaJsfiddle />
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