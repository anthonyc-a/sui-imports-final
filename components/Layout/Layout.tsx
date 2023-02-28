import React, { ReactNode, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Scrollbar from '../common/Scrollbar/Scrollbar';

import styles from './Layout.module.css';

type Props = {
    children: ReactNode;
    title?: string;
};

const Layout = ({ children, title = 'Next.js App' }: Props) => {
    const router = useRouter();

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className={styles.container}>
            <Head>
                <title>SUI Wine Imports - {title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Scrollbar />
            <header className={styles.header}>
                <div className={styles.logo}>
                    <img src="/logo.png" alt="SWI Logo" />
                </div>
                <nav className={menuOpen === true ? styles.open : undefined}>
                    <ul>
                        <li className={router.pathname === '/' ? styles.active : undefined}>
                            <Link href="/">
                                Home
                            </Link>
                        </li>
                        <li className={router.pathname === '/about' ? styles.active : undefined}>
                            <Link href="/about">
                                About
                            </Link>
                        </li>
                        <li className={router.pathname === '/winemakers' ? styles.active : undefined}>
                            <Link href="/winemakers">
                                Winemakers
                            </Link>
                        </li>
                        <li className={router.pathname === '/portfolio' ? styles.active : undefined}>
                            <Link href="/portfolio">
                                Portfolio
                            </Link>
                        </li>
                    </ul>
                    <button>Contact</button>
                </nav>
                <div className={styles.menuBtn} onClick={()=>{
                    setMenuOpen(!menuOpen)
                }}>
                    {menuOpen ? "Close" : "Menu"}
                </div>
            </header>
            <main className={styles.main}>{children}</main>
            <footer className={styles.footer}>
                <p>&copy; {new Date().getFullYear()} SUI Wine Imports Limited.</p>
            </footer>
        </div>
    );
};

export default Layout;
