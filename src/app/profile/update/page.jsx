"use client";

import { authClient } from "@/lib/auth-client";
import { ArrowLeft, Camera, Loader2, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function UpdateProfilePage() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);

  const user = session?.user;

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const imageValue = watch("image");

  // pre-fill existing data
  useEffect(() => {
    if (user) {
      setValue("name", user.name || "");
      setValue("image", user.image || "");
      setPreview(user.image || null);
    }
  }, [user, setValue]);

  // live preview when image url changes
  useEffect(() => {
    if (imageValue) setPreview(imageValue);
  }, [imageValue]);

  const toastOptions = {
    position: "top-center",
    autoClose: 3000,
    theme: "light",
  };

  async function onSubmit(data) {
    try {
      setLoading(true);
      await authClient.updateUser({
        name: data.name,
        image: data.image,
      });
      toast.success("Profile updated successfully!", toastOptions);
      router.push("/profile");
    } catch (err) {
      toast.error("Failed to update profile. Try again.", toastOptions);
    } finally {
      setLoading(false);
    }
  }

  // ── Loading ──
  if (isPending) {
    return (
      <main className="min-h-screen bg-linear-to-br from-orange-50 via-white to-amber-100 flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-amber-400 border-t-transparent rounded-full animate-spin" />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-linear-to-br from-orange-50 via-white to-amber-100 py-16 px-4">
      <div className="max-w-lg mx-auto">
        {/* Back link */}
        <Link
          href="/profile"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-amber-500 text-sm font-medium transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Profile
        </Link>

        {/* Page title */}
        <div className="text-center mb-8">
          <span className="inline-block bg-amber-100 text-amber-700 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">
            Edit Account
          </span>
          <h1 className="text-3xl font-extrabold text-gray-800">
            Update Information
          </h1>
          <p className="text-gray-400 mt-2 text-sm">
            Change your name or profile photo
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-amber-100 p-8">
          {/* Avatar preview */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-24 h-24 rounded-2xl border-4 border-amber-100 shadow-md overflow-hidden bg-amber-50">
                {preview ? (
                  <Image
                    src={preview || null}
                    width={400}
                    height={400}
                    alt="Preview"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    onError={() => setPreview(null)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-amber-100 to-orange-100">
                    <User className="w-10 h-10 text-amber-400" />
                  </div>
                )}
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-amber-400 rounded-xl flex items-center justify-center shadow-md">
                <Camera className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className={`w-full pl-11 pr-4 py-3 border rounded-xl outline-none transition focus:ring-2 focus:ring-amber-400/30 focus:border-amber-400 ${
                    errors.name ? "border-red-400" : "border-gray-200"
                  }`}
                  {...register("name", { required: "Name is required" })}
                />
              </div>
              {errors.name && (
                <p className="text-red-500 text-xs mt-1.5">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Photo URL */}
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                Photo URL
              </label>
              <div className="relative">
                <Camera className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="url"
                  placeholder="https://example.com/photo.jpg"
                  className={`w-full pl-11 pr-4 py-3 border rounded-xl outline-none transition focus:ring-2 focus:ring-amber-400/30 focus:border-amber-400 ${
                    errors.image ? "border-red-400" : "border-gray-200"
                  }`}
                  {...register("image")}
                />
              </div>
              {errors.image && (
                <p className="text-red-500 text-xs mt-1.5">
                  {errors.image.message}
                </p>
              )}
              <p className="text-gray-400 text-xs mt-1.5">
                Paste a direct image link to update your avatar
              </p>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-amber-400 hover:bg-orange-500 text-white font-bold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Updating...
                </>
              ) : (
                "Update Information"
              )}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
