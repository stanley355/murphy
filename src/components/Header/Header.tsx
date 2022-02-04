import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="/">Marph</a>
      <a href='#docs'>docs</a>
    </header>
  );
}

export default Header;
