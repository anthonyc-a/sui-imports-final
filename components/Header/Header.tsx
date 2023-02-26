import React, { useState } from 'react';
import styles from '../../styles/Header.module.css';

interface Link {
  text: string;
  url: string;
}

interface HeaderProps {
  links: Link[];
}

const Header: React.FC<HeaderProps> = ({ links }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Logo</div>
      <nav className={`${styles.nav} ${showMenu ? styles.show : ''}`}>
        <ul className={styles.menu}>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.url}>{link.text}</a>
            </li>
          ))}
        </ul>
      </nav>
      <button className={styles.menuButton} onClick={handleMenuClick}>
        Menu
      </button>
      {showMenu &&
      <button className={styles.closeBtn} onClick={handleMenuClick}>Close</button>
    }

    </header>
  );
};

export default Header;
