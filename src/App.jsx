import { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import Login from './pages/login.jsx';
import userService from "/src/services/user.service";
import Sidebar from './components/sidebar/Sidebar.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import TplContent from './templates/TplContent.jsx';
import Dashboard from './pages/Dashboard.jsx';
import User from './pages/admin/User.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {
  const [userData, setUserData] = useState(
    localStorage.getItem('userData')
      ? JSON.parse(localStorage.getItem('userData'))
      : null
  );
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (userData && location.pathname === '/login') {
      navigate('/');
    }
  }, [userData, location, navigate]);

  const handleLogin = async (email, password) => {
    console.log(email, password);
    try {
      const response = await userService.login({ correo: email, clave: password });
      const userData = response.data;

      console.log('Inicio de sesión exitoso:', userData);

      setUserData(userData);
      localStorage.setItem('userData', JSON.stringify(userData));
      navigate('/');
    } catch (error) {
      console.error('Error durante el inicio de sesión:', error);
    }
  };

  const handleRegister = async (userData) => {
    try {
      const response = await userService.create(userData);
      console.log('Usuario registrado exitosamente:', response.data);
      setUserData(userData);
      // Almacenar el estado de inicio de sesión en localStorage
      localStorage.setItem('userData', JSON.stringify(userData));
    } catch (error) {
      console.error('Error durante el registro de usuario:', error);
    }
  };

  const handleLogout = () => {
    setUserData(null);
    localStorage.removeItem('userData');
    navigate('/');
  };

  return (
    <>
      {userData ? (
        <div className='font-raleway-medium grid grid-cols-16'>
          <Sidebar onLogout={handleLogout} userAccess={userData} />
          <div className='relative col-span-full md:col-span-11 lg:col-span-12 2xl:col-span-13 all:col-span-14 wmax:col-span-15'>
            <Navbar />
            <TplContent>
              <Routes>
                <Route index="/" element={<Dashboard />} />
                <Route path="/certificados" element={<Dashboard />} />
                <Route path="/solicitudes" element={<Dashboard />} />

                {userData && userData.rol_nombre === 'Admin' && (
                  <Route path="/estudiantes" element={<User />} />
                )}

                {userData && userData.rol_nombre === 'Estudiante' && (
                  <>Hola</>
                )}

                {userData && userData.rol_nombre === 'Secretario' && (
                  <Route path="/secretario" element={<User />} />
                )}

                <Route path="*" element={<NotFound />} />
              </Routes>
            </TplContent>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen p-5 md:p-10 bg-gradient-to-r from-active via-blue-500 to-purple-500">
          <Login onLogin={handleLogin} onRegister={handleRegister} />
        </div>
      )}
    </>
  );
}

export default App;