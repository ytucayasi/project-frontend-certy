import { useState } from 'react'

import Sidebar from './components/sidebar/Sidebar.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import User from './pages/admin/User.jsx';
import Login from './pages/login.jsx';
import TplContent from './templates/TplContent.jsx';
import { Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard.jsx';

function App() {
  const [userAccess, setUserAccess] = useState(false);
  return (
    <>
      {
        userAccess
          ?
          <div className="flex justify-center items-center h-screen p-5 md:p-10 bg-gradient-to-r from-active via-blue-500 to-purple-500">
            <Login />
          </div>
          :
          <div className='font-raleway-medium grid grid-cols-16'>
            <Sidebar />
            <div className='relative col-span-full md:col-span-11 lg:col-span-12 2xl:col-span-13 all:col-span-14 wmax:col-span-15'>
              <Navbar />
              <TplContent>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/usuarios" element={<User />} />
                </Routes>
              </TplContent>
            </div>
          </div>
      }
    </>
  );
}

export default App;
