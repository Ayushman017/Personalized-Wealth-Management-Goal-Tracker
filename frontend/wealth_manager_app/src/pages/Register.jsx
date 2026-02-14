import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    risk_profile: "moderate",
  });
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await API.post("/auth/register", form);
      navigate("/login");
    } catch (err) {
      setError("Registration failed. Try again.");
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
          Begin your journey in{" "}
          <span className="text-yellow-500">wealth.</span>
        </h2>

        <p className="mt-6 text-gray-300 max-w-md">
          Create your private account to manage assets, define goals,
          and receive personalized financial insights.
        </p>

        <div className="absolute bottom-10 text-xs text-gray-400">
          © 2026 WealthifyX · Privacy Policy · Regulatory Disclosures
        </div>
      </div>

      <div className="absolute inset-0 bg-black opacity-40"></div>
    </div>

    {/* RIGHT REGISTER PANEL */}
    <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-1">Create Account</h2>
        <p className="text-sm text-gray-500 mb-6">
          Fill in your details to get started
        </p>

        {error && (
          <p className="text-sm text-red-600 mb-4">{error}</p>
        )}

        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full mb-4 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-800"
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email address"
            onChange={handleChange}
            className="w-full mb-4 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-800"
            required
          />

          <input
            name="password"
            type="password"
            placeholder="Security key"
            onChange={handleChange}
            className="w-full mb-4 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-800"
            required
          />

          <select
            name="risk_profile"
            onChange={handleChange}
            className="w-full mb-6 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-800"
          >
            <option value="conservative">Conservative</option>
            <option value="moderate">Moderate</option>
            <option value="aggressive">Aggressive</option>
          </select>

          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-2 rounded hover:bg-gray-800 transition"
          >
            CREATE ACCOUNT
          </button>
        </form>

        <p className="text-xs text-center text-gray-500 mt-6">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-gray-800 font-medium cursor-pointer"
          >
            Sign in
          </span>
        </p>
      </div>
    </div>
  </div>
);

 
};

export default Register;
