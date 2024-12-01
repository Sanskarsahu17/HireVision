import React, { useState } from "react";
import { Toaster } from "sonner";
import LoginForm from "../../components/auth/LoginForm";
import SignUpForm from "../../components/auth/SignUpForm";
import AuthHeader from "../../components/auth/AuthHeader";

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("login"); // Fixed the state initialization

  return (
    <div className='min-h-screen bg-slate-900 flex items-center justify-center p-4'>
      <Toaster position='top-right' />
      <div className='w-full max-w-md'>
        <AuthHeader />

        <div className='bg-slate-800/30 rounded-xl p-6 backdrop-blur-sm'>
          <div className='flex mb-6'>
            <button
              className={`flex-1 py-2 text-center transition-colors ${
                activeTab === "login"
                  ? "text-white border-b-2 border-purple-500"
                  : "text-slate-400 hover:text-white"
              }`}
              onClick={() => setActiveTab("login")}
            >
              Login
            </button>
            <button
              className={`flex-1 py-2 text-center transition-colors ${
                activeTab === "signup"
                  ? "text-white border-b-2 border-purple-500"
                  : "text-slate-400 hover:text-white"
              }`}
              onClick={() => setActiveTab("signup")}
            >
              Sign Up
            </button>
          </div>

          {activeTab === "login" ? <LoginForm /> : <SignUpForm />}
        </div>
      </div>
    </div>
  );
}
