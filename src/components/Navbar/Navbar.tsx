import styles from './Navbar.module.scss';
import { FaBars } from "react-icons/fa";
const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <a href="/" className={styles.navbar__logo}>Marph</a>
      <a href='#docs' className={styles.navbar__menuBtn}><FaBars /> </a>
    </header>
  );
}

export default Navbar;
