import React, { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import InputField from "./InputField";
import { useAuth } from "../../context/AuthContext";

export default function LoginForm() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/authentication/login",
        formData
      );
      const { token, user_role } = response.data;
      login(token, user_role); // Set auth state globally

      toast.success("Login successful!");
      if (user_role === "recruiter") {
        navigate("/recruiter/dashboard");
      } else {
        navigate("/candidate/dashboard");
      }
      window.dispatchEvent(new Event("storage"));
    } catch (error) {
      console.error("Login failed", error);
      toast.error("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <InputField
        icon={Mail}
        name="email"
        type="email"
        placeholder="Enter your email"
        required
        value={formData.email}
        onChange={handleChange}
      />

      <InputField
        icon={Lock}
        name="password"
        type="password"
        placeholder="Enter your password"
        required
        value={formData.password}
        onChange={handleChange}
      />

      <div className="flex justify-end">
        <button
          type="button"
          className="text-sm text-purple-400 hover:text-purple-300"
          onClick={() => toast.info("Password reset coming soon!")}
        >
          Forgot Password?
        </button>
      </div>

      <button
        type="submit"
        className="w-full bg-purple-500 text-white py-2 rounded-lg font-medium hover:bg-purple-600 transition-colors"
        disabled={loading}
      >
        {loading ? "Logging in..." : "Login"}
      </button>

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-700"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-slate-800/30 text-slate-400">
            Or continue with
          </span>
        </div>
      </div>

      <button
        type="button"
        className="w-full bg-slate-700/50 text-white py-2 rounded-lg font-medium hover:bg-slate-700 transition-colors flex items-center justify-center gap-2"
        onClick={() => toast.info("Google sign-in coming soon!")}
      >
        <img
          src="https://www.google.com/favicon.ico"
          alt="Google"
          className="w-4 h-4"
        />
        Sign in with Google
      </button>
    </form>
  );
}