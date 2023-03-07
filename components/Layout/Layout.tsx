import React, { ReactNode, useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Scrollbar from "../common/Scrollbar/Scrollbar";
import Contact from "../common/Modals/Contact/Contact";
import VinesThree from "../common/Illustrations/VinesThree";

import styles from "./Layout.module.css";
import LoadingScreen from "../common/LoadingScreen/LoadingScreen";

type Props = {
  children: ReactNode;
  title?: string;
  cart: any;
  showCart: any;
  setShowCart: any;
};

const vid =
  "https://www.dropbox.com/s/nsxdztjr3dxc1xs/sui-vid%20copy.mp4?raw=1";

const Layout = ({
  children,
  title = "Next.js App",
  cart,
  showCart,
  setShowCart,
}: Props) => {
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [menuOpen]);

  useEffect(() => {
    if (contactOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [contactOpen]);

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div className={styles.container}>
          <Head>
            <title>SUI Wine Imports - {title}</title>
            <link rel="icon" href="/logo-l.png" />
            <link rel="preload" href={vid} as="video" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no"
            />
          </Head>
          <Scrollbar />
          <header className={styles.header}>
            <div className={styles.logo}>
              <Link href="/">
                <img src="/logo.png" alt="SWI Logo" />
              </Link>
            </div>
            <nav className={menuOpen === true ? styles.open : undefined}>
              <ul>
                <li
                  className={
                    router.pathname === "/" ? styles.active : undefined
                  }
                >
                  <Link href="/">Home</Link>
                </li>
                <li
                  className={
                    router.pathname === "/about" ? styles.active : undefined
                  }
                >
                  <Link href="/about">About</Link>
                </li>
                <li
                  className={
                    router.pathname === "/winemakers"
                      ? styles.active
                      : undefined
                  }
                >
                  <Link href="/winemakers">Winemakers</Link>
                </li>
                <li
                  className={
                    router.pathname === "/portfolio" ? styles.active : undefined
                  }
                >
                  <Link href="/portfolio">Portfolio</Link>
                </li>
              </ul>
              {menuOpen && <VinesThree />}
            </nav>
            <a href="mailto:sui-wineimports@protonmail.com">
              <button>Contact</button>
            </a>
            {contactOpen && (
              <Contact
                contactOpen={contactOpen}
                setContactOpen={setContactOpen}
              />
            )}
            <div
              className={styles.menuBtn}
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
            >
              {menuOpen ? "Close" : "Menu"}
            </div>
          </header>
          <main className={styles.main}>{children}</main>
          <footer className={styles.footer}>
            <p>&copy; {new Date().getFullYear()} SUI Wine Imports Limited.</p>
          </footer>
        </div>
      )}
    </>
  );
};

export default Layout;
