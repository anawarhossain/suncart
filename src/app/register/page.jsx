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

  const HandleGoogleLogin = async () => {
      const data = await authClient.signIn.social({
        provider: "google",
      });
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
                    message: "password must be at least 6 charecter",
                  },
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

          {/* Divider */}
          <div className="relative my-6">
            <div className="border-t border-slate-200"></div>
            <span className="absolute left-1/2 -translate-x-1/2 -top-2 bg-white px-3 text-xs text-slate-400 uppercase">
              Or continue with
            </span>
          </div>

          {/* Google Button */}
          <button
            onClick={HandleGoogleLogin}
            type="button"
            className="w-full flex items-center justify-center gap-3 py-3 border border-slate-200 rounded-xl bg-white hover:bg-slate-50 hover:shadow-md transition"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>

            <span className="text-xs font-bold text-slate-700 uppercase">
              Sign in with Google
            </span>
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
