import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Home from './pages/home';
import Users from './pages/users';
import UserDetail from './pages/userDetail';
import Teams from './pages/teams';
import TeamDetail from './pages/teamDetail';

const App = () => (
  <Router>
    <Navbar />
    <div className="flex">
      <Sidebar />
      <main className="flex-grow p-4 transition-all duration-300">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:userId" element={<UserDetail />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/teams/:teamId" element={<TeamDetail />} />
        </Routes>
      </main>
    </div>
  </Router>
);

export default App;
