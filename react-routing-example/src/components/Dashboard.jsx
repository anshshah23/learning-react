import React from 'react';
import { Route, Routes, Link, useMatch } from 'react-router-dom';
import Settings from './Settings';
import Profile from './Profile';

const Dashboard = () => {
  let match = useMatch('/dashboard/*');

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md max-w-full overflow-x-auto">
      <h1 className="text-xl sm:text-2xl font-bold mb-4">Dashboard</h1>
      <nav className="mb-4">
        <Link to={`${match.pathnameBase}/settings`} className="text-blue-500 hover:underline block sm:inline mr-0 sm:mr-4">Settings</Link>
        <Link to={`${match.pathnameBase}/profile`} className="text-blue-500 hover:underline block sm:inline">Profile</Link>
      </nav>
      <Routes>
        <Route path="settings" element={<Settings />} />
        <Route path="profile" element={<Profile />} />
        <Route path="/" element={<h3>Please select an option.</h3>} />
      </Routes>
    </div>
  );
};

export default Dashboard;
