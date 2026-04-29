"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavbarMenu = ({ href, className = "", children }) => {
    const pathName = usePathname();
    const isActive = pathName === href;
    return (
      <div>
        <Link
          href={href}
          className={`text-md ${
            isActive
              ? "text-amber-600 font-bold border-b-2 border-amber-500 pb-1 md:pb-1"
              : "text-slate-600 font-medium hover:text-amber-500  transition-all duration-300 px-3 py-2"
          } ${className}`}
        >
          {children}
        </Link>
      </div>
    );
};

export default NavbarMenu;