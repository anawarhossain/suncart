"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff, User } from "lucide-react";
import { CiImageOn } from "react-icons/ci";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Register submitted");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20 bg-linear-to-br from-orange-50 via-white to-amber-100">
      {/* Card */}
      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-xl border">
        {/* Heading */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-extrabold text-slate-900">
            Create Account
          </h1>
          <p className="text-slate-500 mt-2">
            Join us and start your journey today
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">
              Full Name
            </label>

            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />

              <input
                type="text"
                required
                placeholder="Enter your name"
                className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 outline-none"
              />
            </div>
          </div>
          {/* Image Url */}
          <div>
            <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">
              Your Image URL
            </label>

            <div className="relative">
              <CiImageOn className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />

              <input
                type="text"
                required
                placeholder="Enter Your Image URL"
                className="w-full pl-11 pr-12 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">
              Email Address
            </label>

            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />

              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">
              Password
            </label>

            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                placeholder="Enter password"
                className="w-full pl-11 pr-12 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 outline-none"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl shadow-md active:scale-[0.98] transition"
          >
            Create Account
          </button>
        </form>

        {/* Footer */}
        <p className="text-center mt-6 text-slate-500">
          Already have an account?
          <Link
            href="/login"
            className="text-orange-500 font-bold ml-1 hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
