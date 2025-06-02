import { Button } from '@/components/ui/button';
import React from 'react';

export default function Signup() {
  return (
    <div className="min-h-screen bg-blue-300 flex flex-col items-center justify-center px-4">
      <header className="text-white text-3xl font-semibold mb-6">Sign-up</header>
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full">
        <h4 className="text-xl font-medium mb-6 text-gray-800 text-center">
          Signup for News-Nation
        </h4>
        <input
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your Username"
          type="text"
          autoComplete="username"
        />
        <input
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your Email"
          type="email"
          autoComplete="email"
        />
        <input
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your Password"
          type="password"
          autoComplete="new-password"
        />
        <input
          className="w-full mb-6 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Confirm your Password"
          type="password"
          autoComplete="new-password"
        />
        <Button className="w-full">Signup</Button>
      </div>
    </div>
  );
}
