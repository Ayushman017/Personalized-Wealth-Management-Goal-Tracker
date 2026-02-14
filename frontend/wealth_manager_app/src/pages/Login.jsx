import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await API.post("/auth/login", {
        email,
        password,
      });

      // ✅ store BOTH tokens
      localStorage.setItem("access_token", res.data.access_token);
      localStorage.setItem("refresh_token", res.data.refresh_token);

      navigate("/dashboard"); // OK even if dashboard not ready
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    
  <div className="min-h-screen flex bg-gray-900">

    {/* LEFT BRAND PANEL */}
    <div className="hidden md:flex w-1/2 relative text-white p-12 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="z-10">
        <div className="flex items-center mb-10">
          <div className="w-3 h-3 bg-yellow-500 mr-2"></div>
          <h1 className="text-xl tracking-wide">WealthifyX</h1>
        </div>

        <h2 className="text-4xl font-serif leading-tight">
          Precision in <span className="text-yellow-500">growth.</span><br />
          Clarity in Wealth.
        </h2>

        <p className="mt-6 text-gray-300 max-w-md">
          Access your private portal to manage assets, track performance,
          and connect with your dedicated advisor.
        </p>

        <div className="absolute bottom-10 text-xs text-gray-400">
          © 2026 WealthifyX · Privacy Policy · Regulatory Disclosures
        </div>
      </div>

      <div className="absolute inset-0 bg-black opacity-40"></div>
    </div>

    {/* RIGHT LOGIN PANEL */}
    <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-1">Secure Sign-In</h2>
        <p className="text-sm text-gray-500 mb-6">
          Please enter your credentials to continue
        </p>

        {error && (
          <p className="text-sm text-red-600 mb-4">{error}</p>
        )}

        <form onSubmit={handleSubmit}>
          <label className="block text-sm mb-1 font-medium">
            Email
          </label>
          <input
            type="email"
            placeholder="name@firm.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-800"
            required
          />

          <label className="block text-sm mb-1 font-medium">
           Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-4 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-800"
            required
          />

          <div className="flex items-center mb-6">
            <input type="checkbox" className="mr-2" />
            <span className="text-sm text-gray-600">
              Keep my session active
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-2 rounded hover:bg-gray-800 transition"
          >
            ENTER PORTAL
          </button>
        </form>

        <p className="text-xs text-center text-gray-500 mt-6">
          Client assistance: +91 (XXXXXXXXXX) WealthifyX
        </p>
      </div>
    </div>
  </div>
);

  
};

export default Login;
