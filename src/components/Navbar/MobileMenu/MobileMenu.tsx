import React from 'react';
import Link from 'next/link';
import { FaTimes } from 'react-icons/fa';
import styles from './MobileMenu.module.scss';

interface MobileMenuInterface {
    isOpen: boolean
}

const MobileMenu = (props: MobileMenuInterface) => {
    const { isOpen } = props;

    return (
        <div className={styles.mobileMenu}>
            <div className={styles.mobileMenu__head}>
                <Link href="/">
                    <a
                        title="Marph"
                        className={styles.mobileMenu__logo} >
                        Marph
                    </a>
                </Link>
                <button className={styles.mobileMenu__closeBtn}>
                    <FaTimes />
                </button>
            </div>
        </div>
    );
}

export default MobileMenu;