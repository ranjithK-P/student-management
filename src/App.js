import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ApplicationsTable from './ApplicationsTable'; // Adjust the path based on your project structure

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define the route for ApplicationsTable */}
        <Route path="/applications" element={<ApplicationsTable />} />

        {/* Example: Add more routes if needed */}
        <Route path="/" element={<div>Welcome to the App!</div>} />
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default App;
