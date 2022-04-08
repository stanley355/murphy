import styles from './Footer.module.scss';
import React from 'react';
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      The Open Source Service and Code is authored by
      <a href="https://github.com/stanley355">
        winatastanley355
        <FaGithub />
      </a>
    </footer>
  )
}

export default Footer;
