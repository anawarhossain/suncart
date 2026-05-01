"use client";
import { Search, ShoppingCart, Sun } from "lucide-react";
import Link from "next/link";
import React from "react";
import NavbarMenu from "./NavbarMenu";
import { useSpring, animated } from "@react-spring/web";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "My Profile", href: "/profile" },
];

const Navbar = () => {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  // console.log(session, "session")
  console.log(user, "user");

  const renderNavLinks = () =>
    navItems.map((item) => (
      <li key={item.href}>
        <NavbarMenu href={item.href}>{item.name}</NavbarMenu>
      </li>
    ));

  const props = useSpring({
    from: { rotate: 0 },
    to: { rotate: 360 },
    loop: true,
    config: { duration: 8000 }, // slow rotation
  });

  const LogoutHandeler = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login"); // redirect to login page
        },
      },
    });
  };

  return (
    <div className="sticky top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-amber-100/20 shadow-lg shadow-amber-900/5 font-display antialiased">
      <div className="flex justify-between items-center px-4 md:px-6 py-2 container mx-auto">
        <div className="navbar-start w-auto">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {renderNavLinks()}
            </ul>
          </div>
          <Link
            href={"/"}
            className="text-xl md:text-2xl font-black text-amber-500 flex items-center gap-2 cursor-pointer"
          >
            <animated.div
              style={{ transform: props.rotate.to((r) => `rotate(${r}deg)`) }}
            >
              <Sun className="fill-amber-400 text-amber-500 h-6 w-6 md:h-8 md:w-8" />
            </animated.div>
            SunCart
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-">{renderNavLinks()}</ul>
        </div>
        <div className="navbar-end">
          <div className="flex items-center gap-1 md:gap-2">
            <div className="hidden lg:flex items-center bg-surface-container-low px-3 py-1.5 rounded-full border border-outline-variant">
              <Search size={18} className="text-outline" />
              <input
                className="bg-transparent border-none focus:ring-0 text-sm w-40 ml-2 shadow-none outline-none"
                placeholder="Search essentials..."
                type="text"
              />
            </div>
            <button className="text-slate-600 hover:text-amber-500 transition-colors relative p-2">
              <ShoppingCart size={18} className="md:size-6" />
              <span className="absolute top-1 right-1 bg-secondary text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                2
              </span>
            </button>
            <div>
              {isPending ? (
                <span className="loading loading-spinner text-success"></span>
              ) : user ? (
                <div className="flex gap-1 md:gap-3 items-center justify-center">
                  <Link href={"/profile"}>
                    <Image
                      src={user?.image || null}
                      alt="User Photo"
                      width={40}
                      height={40}
                      className="w-8 h-8 rounded-full"
                    />
                  </Link>

                  <button
                    onClick={LogoutHandeler}
                    className="bg-amber-500 text-white font-bold p-2 rounded-lg shadow-md shadow-amber-900/10 hover:bg-amber-600 transition-all active:scale-95 text-sm md:text-base"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex gap-1 md:gap-1">
                  <Link
                    href={"/login"}
                    className=" text-amber-500 font-semibold px-3 md:px-4 py-2 hover:bg-amber-50 rounded-lg transition-all text-sm md:text-base"
                  >
                    Login
                  </Link>
                  <Link
                    href={"/register"}
                    className="bg-amber-500 text-white font-bold px-4 md:px-6 py-2 rounded-lg shadow-md shadow-amber-900/10 hover:bg-amber-600 transition-all active:scale-95 text-sm md:text-base"
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
