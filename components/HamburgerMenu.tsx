import React, { useEffect, useState } from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import BootstrapClient from "./bootstrapClient";

interface HamburgerMenuProps {
  onSelect: (menu: string) => void;
}

export default function HamburgerMenu({ onSelect }: HamburgerMenuProps) {
  const [activeMenu, setActiveMenu] = useState<string>("Home");

  // Load last selected menu from cookie on mount
  useEffect(() => {
    const savedMenu = Cookies.get("activeMenu");
    if (savedMenu) {
      setActiveMenu(savedMenu);
      onSelect(savedMenu);
    }
  }, [onSelect]);

  const handleMenuClick = (menu: string) => {
    setActiveMenu(menu);
    onSelect(menu);
    Cookies.set("activeMenu", menu, { expires: 7 }); // remember for 7 days
  };

  return (
    <>
      <BootstrapClient />
      <div className="dropdown">
        <button
          className="btn btn-secondary"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="bi bi-list"></i>
        </button>
        <ul className="dropdown-menu">
          <li>
            <Link
              className={`dropdown-item ${activeMenu === "Home" ? "active" : ""}`}
              href="/"
              onClick={() => handleMenuClick("Home")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`dropdown-item ${activeMenu === "About" ? "active" : ""}`}
              href="/about"
              onClick={() => handleMenuClick("About")}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
