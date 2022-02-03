import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="/">Morph</a>
      <a href='#docs'>docs</a>
    </header>
  );
}

export default Header;
