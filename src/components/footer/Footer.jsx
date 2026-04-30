"use client";
import { Globe, Mail, Phone, Send, Sun } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

import { useSpring, animated } from "@react-spring/web";

const Footer = () => {
  const props = useSpring({
    from: { rotate: 0 },
    to: { rotate: 360 },
    loop: true,
    config: { duration: 8000 }, // slow rotation
  });

  return (
    <footer className="w-full bg-slate-900 border-t border-slate-800 text-sm leading-relaxed mt-auto">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto px-8 py-16">
        {/* Brand */}
        <div>
          <div className="text-xl font-bold mb-4 flex items-center gap-2 md:text-2xl text-amber-500">
            <animated.div
              style={{ transform: props.rotate.to((r) => `rotate(${r}deg)`) }}
            >
              <Sun className="fill-amber-400 text-amber-500 h-6 w-6 md:h-8 md:w-8" />
            </animated.div>
            SunCart
          </div>

          <p className="text-slate-400">
            Curating the finest summer essentials for your next adventure.
          </p>

          {/* Social */}
          <div className="flex gap-4 mt-6">
            <Link href="#" className="text-slate-400 hover:text-amber-400">
              <FaFacebook size={20} />
            </Link>
            <Link href="#" className="text-slate-400 hover:text-amber-400">
              <FaTwitter size={20} />
            </Link>
            <Link href="#" className="text-slate-400 hover:text-amber-400">
              <FaInstagram size={20} />
            </Link>
          </div>
        </div>

        {/* About */}
        <div>
          <h4 className="text-white font-semibold mb-6">About Us</h4>
          <ul className="space-y-4">
            <li>
              <Link href="#" className="text-slate-400 hover:text-amber-400">
                Our Story
              </Link>
            </li>
            <li>
              <Link href="#" className="text-slate-400 hover:text-amber-400">
                Sustainability
              </Link>
            </li>
            <li>
              <Link href="#" className="text-slate-400 hover:text-amber-400">
                Careers
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-4">
            <li>
              <Link href="#" className="text-slate-400 hover:text-amber-400">
                Shop All
              </Link>
            </li>
            <li>
              <Link href="#" className="text-slate-400 hover:text-amber-400">
                My Account
              </Link>
            </li>
            <li>
              <Link href="#" className="text-slate-400 hover:text-amber-400">
                Order Tracking
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact + Newsletter */}
        <div>
          <h4 className="text-white font-semibold mb-6">Contact</h4>

          <div className="space-y-3 text-slate-400 text-sm">
            <p className="flex items-center gap-2">
              <Mail size={16} /> support@suncart.com
            </p>
            <p className="flex items-center gap-2">
              <Phone size={16} /> +880 1234-567890
            </p>
            <p className="flex items-center gap-2">
              <Globe size={16} /> https://anawarhossain-suncart.vercel.app
            </p>
          </div>

          {/* Newsletter */}
          <div className="mt-6">
            <p className="text-slate-400 mb-3 text-xs">
              Get 10% off your first order
            </p>

            <form className="flex gap-2">
              <input
                type="email"
                required
                placeholder="Email address"
                className="bg-slate-800 rounded px-3 py-2 w-full text-white text-sm focus:ring-1 focus:ring-amber-500 outline-none"
              />

              <button
                type="submit"
                className="bg-amber-500 text-slate-900 p-2 rounded hover:bg-amber-600 transition"
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-8 py-6 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-xs">
        <p>© 2026 SunCart. All rights reserved.</p>

        <div className="flex gap-4">
          <Link href="#" className="hover:text-amber-400">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-amber-400">
            Terms & Conditions
          </Link>
          <Link href="#" className="hover:text-amber-400">
            Cookies
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
