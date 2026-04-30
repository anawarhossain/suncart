"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff, User } from "lucide-react";
import { CiImageOn } from "react-icons/ci";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const toastOptions = {
    position: "top-center",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  };

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const RegistrationFormHandleFunc = async (data) => {
    try {
      setLoading(true);

      const { data: res, error } = await authClient.signUp.email({
        name: data.name,
        email: data.email,
        password: data.password,
        image: data.photourl,
        callbackURL: "/",
      });

      console.log(res,error,"---Errors---")
      if (error) {
        toast.error(error.message, toastOptions);
        return;
      }

      if (res) {
        toast.success("Account Create successfully", toastOptions);
        reset();
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
      router.push("/");
      
    }
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
        <form
          onSubmit={handleSubmit(RegistrationFormHandleFunc)}
          className="space-y-6"
        >
          {/* Name */}
          <div>
            <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">
              Full Name
            </label>

            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />

              <input
                type="text"
                placeholder="Enter your name"
                className={`w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 outline-none ${errors.name ? "border-red-500" : ""}`}
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <span className="text-red-500 text-sm mt-1 block">
                  {errors.name.message}
                </span>
              )}
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
                placeholder="Enter Your Image URL"
                className={`w-full pl-11 pr-12 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 outline-none ${errors.photourl ? "border-red-500" : ""}`}
                {...register("photourl", { required: "Photo URL is Required" })}
              />
              {errors.photourl && (
                <span className="text-red-500 text-sm mt-1 block">
                  {errors.photourl.message}
                </span>
              )}
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
                className={`w-full pl-11 pr-12 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 outline-none ${errors.email ? "border-red-500" : ""}`}
                {...register("email", { required: "Email is Required" })}
              />
              {errors.email && (
                <span className="text-red-500 text-sm mt-1 block">
                  {errors.email.message}
                </span>
              )}
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
                className={`w-full pl-11 pr-12 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 outline-none ${errors.password ? "border-red-500" : ""}`}
                {...register("password", {
                  required: "Password is Required",
                  minLength: {
                    value: 6,
                    message: "password must be at least 6 charecter"
                  }
                 })}
              />
              {errors.password && (
                <span className="text-red-500 text-sm mt-1 block">
                  {errors.password.message}
                </span>
              )}

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
            disabled={loading}
            className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl shadow-md active:scale-[0.98] transition disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Creating...
              </span>
            ) : (
              "Create Account"
            )}
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
