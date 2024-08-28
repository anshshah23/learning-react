import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <h1 className="text-3xl font-bold mb-4 text-red-500">404 - Not Found</h1>
      <p className="mb-4">The page you're looking for doesn't exist.</p>
      <Link to="/" className="text-blue-500 hover:underline">Go Back Home</Link>
    </div>
  );
};

export default NotFound;
