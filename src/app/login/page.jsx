
import LoginForm from "@/components/form/LoginForm";
import React, { Suspense } from "react";

const LoginPage = () => {
  

  
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-8 bg-white rounded-3xl shadow">
        <h1 className="text-2xl font-bold text-center mb-6">Welcome back</h1>

        <Suspense fallback={<p>Loading form...</p>}>
          <LoginForm />
        </Suspense>
      </div>
    </div>
  );
};

export default LoginPage;
