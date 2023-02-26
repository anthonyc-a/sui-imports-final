import React, { useState } from "react";
import Link from "next/link";


const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="header">
      <div className="logo">Logo</div>
      <nav className={`menu ${showMenu ? "active" : ""}`}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <button className="menu-toggle" onClick={handleToggleMenu}>
        Menu
      </button>
    </header>
  );
};

export default Header;
