// Login.jsx
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoUpeu from '/images/logoupeu.png';

function Login({ onLogin, onRegister }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = () => {
    onLogin(email, password);
  };

  const handleRegisterClick = () => {
    onRegister({ correo: email, clave: password });
  };

  return (
    <div className="bg-white text-first max-w-[400px] max-h-full w-full h-fit flex flex-col items-center p-5 md:p-10 overflow-auto">
      <figure className="w-44 md:w-52 mb-10">
        <img className="w-full" src={logoUpeu} alt="Logo de la empresa" />
      </figure>
      <p className="text-2xl mb-10">Acceder</p>
      <div className="flex flex-col justify-center items-center gap-4 w-full mb-10">
        <div className="flex w-full">
          <span className="w-8 flex items-center justify-center bg-active text-white">
            <FontAwesomeIcon icon='fa-user' size="xs" />
          </span>
          <input
            placeholder="Ingrese su correo"
            className="w-full bg-slate-100 px-3 py-3 outline-none"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex w-full">
          <span className="w-8 flex items-center justify-center bg-active text-white">
            <FontAwesomeIcon icon='fa-key' size="xs" />
          </span>
          <input
            placeholder="Ingrese su contraseña"
            className="w-full px-3 py-3 bg-slate-100 outline-none"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <button
        className="text-white bg-active hover:shadow-active hover:shadow-sm p-3 w-full"
        onClick={handleLoginClick}
      >
        Ingresar
      </button>
    </div>
  );
}

export default Login;
