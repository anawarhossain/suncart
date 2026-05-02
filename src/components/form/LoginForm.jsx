"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-toastify";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const router = useRouter();
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") || "/";

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const handleLogin = async (data) => {
        try {
            setLoading(true);

            const { data: res, error } = await authClient.signIn.email({
                email: data.email,
                password: data.password,
            });

            if (error) {
                toast.error(error.message);
                return;
            }

            if (res) {
                toast.success("Login successfully");
                reset();
                router.push(callbackUrl);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(handleLogin)} className="space-y-6">
            {/* Email */}
            <div>
                <label className="text-xs font-bold text-slate-500 uppercase">
                    Email
                </label>
                <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                        {...register("email", { required: true })}
                        className="w-full pl-10 py-3 border rounded-xl"
                    />
                </div>
            </div>

            {/* Password */}
            <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                    type={showPassword ? "text" : "password"}
                    {...register("password", { required: true })}
                    className="w-full pl-10 py-3 border rounded-xl"
                />
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                >
                    {showPassword ? <EyeOff /> : <Eye />}
                </button>
            </div>

            <button className="w-full py-3 bg-orange-500 text-white rounded-xl">
                {loading ? "Logging..." : "Login"}
            </button>
        </form>
    );
};

export default LoginForm;
