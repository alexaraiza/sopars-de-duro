'use client';
import { useState } from 'react';
import Branding from './branding';
import Menu from './menu';

import styles from './header.module.scss';

export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <Branding />
        <button type="button" title="Menú" className={styles.hamburger} onClick={() => setMenuIsOpen(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z" />
          </svg>
        </button>
      </div>
      <Menu isOpen={menuIsOpen} setIsOpen={setMenuIsOpen} />
    </header>
  );
}
