import styles from './Header.module.scss';

const Header = () => {
  return(
    <header className={styles.header}>
      <a>Morph</a>
      <a>docs</a>
    </header>
  );
}

export default Header;
