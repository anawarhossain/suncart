"use client";

import { authClient } from "@/lib/auth-client";
import { useSpring, animated } from "@react-spring/web";
import { Camera, Mail, Shield, Sun, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  const user = session?.user;

  const props = useSpring({
    from: { rotate: 0 },
    to: { rotate: 360 },
    loop: true,
    config: { duration: 8000 }, // slow rotation
  });

  // ── Loading ──
  if (isPending) {
    return (
      <main className="min-h-screen bg-linear-to-br from-orange-50 via-white to-amber-100 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-amber-400 border-t-transparent rounded-full animate-spin" />
          <p className="text-gray-400 text-sm font-medium">
            Loading profile...
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-linear-to-br from-orange-50 via-white to-amber-100 py-16 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Page title */}
        <div className="text-center mb-10">
          <span className="inline-block bg-amber-100 text-amber-700 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">
            Account
          </span>
          <h1 className="text-4xl font-extrabold text-gray-800">My Profile</h1>
          <p className="text-gray-400 mt-2 text-sm">
            Manage your SunCart account information
          </p>
        </div>

        {/* Profile card */}
        <div className="bg-white rounded-3xl shadow-xl border border-amber-100 overflow-hidden">
          {/* Cover banner */}
          <div className="h-28 bg-linear-to-r from-amber-400 via-orange-400 to-amber-300 relative">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px),
                                  radial-gradient(circle at 80% 20%, white 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <div className="px-8 pb-8">
            {/* Avatar */}
            <div className="flex justify-between items-end -mt-12 mb-6">
              <div className="relative">
                <div className="w-24 h-24 rounded-2xl border-4 border-white shadow-lg overflow-hidden bg-amber-100">
                  {user?.image ? (
                    <Image
                      src={user?.image || null}
                      alt={user.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                      width={400}
                      height={400}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-amber-400 to-orange-400">
                      <User className="w-10 h-10 text-white" />
                    </div>
                  )}
                </div>
              </div>

              {/* Update button */}
              <Link
                href="/profile/update"
                className="flex items-center gap-2 bg-amber-400 hover:bg-orange-500 text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <Camera className="w-4 h-4" />
                Update Info
              </Link>
            </div>

            {/* User name */}
            <div className="mb-6">
              <h2 className="text-2xl font-extrabold text-gray-800">
                {user?.name || "No Name"}
              </h2>
              <div className="flex items-center gap-2">
                <p className="text-amber-500 text-sm font-semibold mt-0.5">
                  SunCart Member
                </p>
                <animated.div
                  style={{
                    transform: props.rotate.to((r) => `rotate(${r}deg)`),
                  }}
                >
                  <Sun className="fill-amber-400 text-amber-500 h-6 w-6 md:h-8 md:w-8" />
                </animated.div>
              </div>
            </div>

            {/* Info rows */}
            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-center gap-4 p-4 bg-amber-50 rounded-2xl border border-amber-100">
                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-amber-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-0.5">
                    Email Address
                  </p>
                  <p className="text-gray-800 font-semibold truncate">
                    {user?.email || "No email"}
                  </p>
                </div>
              </div>

              {/* Name */}
              <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-2xl border border-orange-100">
                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center shrink-0">
                  <User className="w-5 h-5 text-orange-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-0.5">
                    Full Name
                  </p>
                  <p className="text-gray-800 font-semibold">
                    {user?.name || "Not set"}
                  </p>
                </div>
              </div>

              {/* Account status */}
              <div className="flex items-center gap-4 p-4 bg-green-50 rounded-2xl border border-green-100">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5 text-green-500" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-0.5">
                    Account Status
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
                    <p className="text-green-600 font-semibold text-sm">
                      Active & Verified
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
