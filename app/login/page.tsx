import React from "react";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-300">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <header className="text-2xl font-bold mb-6 text-center text-purple-800">
          Login
        </header>
        <h3 className="text-center text-gray-700 mb-8">
          Login into News-Nation
        </h3>
        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
            required
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
            required
          />
          <button
            type="submit"
            className="mt-4 bg-purple-800 text-white py-2 rounded-md hover:bg-purple-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
