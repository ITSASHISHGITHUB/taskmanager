// components/Index.js
import React from 'react';
import { useRouter } from 'next/router';

const Index = () => {
  const router = useRouter();

  const handleSignInClick = () => {
    router.push('/login');
  };

  const handleSignUpClick = () => {
    router.push('/signup');
  };
  const handleProceedClick = () => {
    router.push('/home');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="h-96 w-96 bg-amber-300 flex flex-col gap-5 justify-center items-center rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-center mb-4">
          Please Choose What You Want to Select
        </h2>
        <button 
          onClick={handleSignInClick} 
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Sign In
        </button>
        <button 
          onClick={handleSignUpClick} 
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-200"
        >
          Sign Up
        </button>
        <button 
          onClick={handleProceedClick} 
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-200"
        >
          Proceed to the application
        </button>
      </div>
    </div>
  );
};

export default Index;
