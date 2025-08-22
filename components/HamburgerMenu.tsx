import React from 'react';
import Link from 'next/link';
import BootstrapClient from './bootstrapClient';


interface HamburgerMenuProps {
  onSelect: (menu: string) => void;
}

export default function HamburgerMenu({ onSelect }: HamburgerMenuProps) {
  return (
    <>
    <BootstrapClient />
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Menu
      </button>
      <ul className="dropdown-menu">
        <li>
          <Link
            className="dropdown-item"
            href="/"
            onClick={() => onSelect("Home")}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="dropdown-item"
            href="/about"
            onClick={() => onSelect("About")}
          >
            About
          </Link>
        </li>
      </ul>
    </div>
    </>
  );
}
