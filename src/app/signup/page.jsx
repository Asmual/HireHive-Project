"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signUp, signOut } from "@/lib/auth-client";
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import toast from "react-hot-toast";

export default function SignupPage() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const toastId = toast.loading("Creating your account...");

    try {
      // 1. Create the user account
      await signUp.email({
        email: formData.email,
        password: formData.password,
        name: formData.name,
        disableAutoSignIn: true, 
      });
      
      // 2. Forcefully clear any client-side session token cached by better-auth
      await signOut({
        redirect: false
      });

      toast.success("Account created successfully! Please sign in.", { id: toastId });
      
      // 3. Move user to login view safely
      router.push("/login"); 
      router.refresh();
    } catch (err) {
      toast.error(err.message || "Something went wrong. Please try again.", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen w-full bg-[#09090b] text-zinc-100 flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />

      <div className="w-full max-w-md bg-[#121214]/90 border border-zinc-800/80 rounded-2xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.6)] relative z-10">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 font-bold text-xl tracking-wide group mb-4">
            <span className="bg-emerald-500 text-zinc-950 px-2.5 py-1 rounded-lg text-lg font-black shadow-[0_0_15px_rgba(16,185,129,0.5)]">H</span>
            <span className="text-zinc-100">Hire<span className="text-emerald-400">Hive</span></span>
          </Link>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-200">Create an account</h2>
          <p className="text-sm text-zinc-500 mt-1">Get started with your career journey today</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2">Full Name</label>
            <div className="relative flex items-center">
              <FiUser className="absolute left-4 text-zinc-600 text-lg" />
              <input
                type="text"
                required
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl pl-11 pr-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-emerald-500/40 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2">Email Address</label>
            <div className="relative flex items-center">
              <FiMail className="absolute left-4 text-zinc-600 text-lg" />
              <input
                type="email"
                required
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl pl-11 pr-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-emerald-500/40 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2">Password</label>
            <div className="relative flex items-center">
              <FiLock className="absolute left-4 text-zinc-600 text-lg" />
              <input
                type={showPassword ? "text" : "password"}
                required
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl pl-11 pr-12 py-3 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-emerald-500/40 transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 text-zinc-500 hover:text-zinc-300 transition-colors focus:outline-none"
              >
                {showPassword ? <FiEyeOff className="text-lg" /> : <FiEye className="text-lg" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold py-3 px-4 rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.6)] transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none text-sm mt-2"
          >
            {loading ? "Creating account..." : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-sm text-zinc-500 mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-emerald-400 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </main>
  );
}