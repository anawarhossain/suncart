import RegisterForm from "@/components/form/RegisterForm";
import { Suspense } from "react";

export const metadata = {
  title: "SunCart | Register",
};

const RegisterPage = () => {
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

        <Suspense fallback={<p>Loading form...</p>}>
          <RegisterForm />
        </Suspense>
      </div>
    </div>
  );
};

export default RegisterPage;
