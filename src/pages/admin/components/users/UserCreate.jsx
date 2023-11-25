import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import userService from "/src/services/user.service";
import { useState, useEffect } from "react";

const UserCreate = () => {
  const [typeUser, setTypeUser] = useState('0');
  const [msg, setMsg] = useState('');
  const [estudiante, setEstudiante] = useState({
    nombre: '',
    correo: '',
    clave: '',
    estado: '1',
    nombres: '',
    apellidos: '',
    foto: '',
    dni: '',
    codigo_universitario: '',
    fecha_nacimiento: '',
  });
  const [admin, setAdmin] = useState({
    nombre: '',
    correo: '',
    clave: '',
    estado: '1'
  });
  const [secre, setSecre] = useState({
    nombre: '',
    correo: '',
    clave: '',
    estado: '1'
  });

  useEffect(() => {
    if (msg) {
      const timeoutId = setTimeout(() => {
        setMsg('');
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [msg]);

  const createEstudiante = async () => {
    const camposFaltantes = Object.keys(estudiante).filter(key => !estudiante[key]);

    if (camposFaltantes.length > 0) {
      setMsg('Faltan datos, ingrese bien los datos')
      return;
    }

    try {
      const response = await userService.create(estudiante);

      setEstudiante({
        nombre: '',
        correo: '',
        clave: '',
        estado: '1',
        nombres: '',
        apellidos: '',
        foto: '',
        dni: '',
        codigo_universitario: '',
        fecha_nacimiento: '',
      });
      console.log('Estudiante creado exitosamente:', response.data);
    } catch (error) {
      console.error('Error al crear estudiante:', error);
    }
  };

  const handleEstudianteChange = (e) => {
    const { name, value } = e.target;
    setEstudiante((prevEstudiante) => ({
      ...prevEstudiante,
      [name]: value,
    }));
  };

  const showFormUser = () => {
    let showData = <></>;
    if (typeUser == '0') {
      showData = (
        <div className="overflow-auto p-5 flex flex-col gap-4">
          <div>
            Datos del usuario:
          </div>
          <div className="flex items-center w-full md:w-fit">
            <span className="p-2 border-solid border-s-2 border-y-2 border-first rounded-s-lg">
              <FontAwesomeIcon className="text-first" icon='fa-magnifying-glass' />
            </span>
            <input
              name="nombre"
              className="text-first border-solid border-2 border-first outline-none rounded-e-lg p-2 w-full md:w-fit"
              type="text"
              placeholder='Nombre del usuario'
              value={estudiante.nombre}
              onChange={handleEstudianteChange}
            />
          </div>
          <div className="flex items-center w-full md:w-fit">
            <span className="p-2 border-solid border-s-2 border-y-2 border-first rounded-s-lg">
              <FontAwesomeIcon className="text-first" icon='fa-magnifying-glass' />
            </span>
            <input
              name="correo"
              className="text-first border-solid border-2 border-first outline-none rounded-e-lg p-2 w-full md:w-fit"
              type="text"
              placeholder='Correo del usuario'
              value={estudiante.correo}
              onChange={handleEstudianteChange}
            />
          </div>
          <div className="flex items-center w-full md:w-fit">
            <span className="p-2 border-solid border-s-2 border-y-2 border-first rounded-s-lg">
              <FontAwesomeIcon className="text-first" icon='fa-magnifying-glass' />
            </span>
            <input
              name="clave"
              className="text-first border-solid border-2 border-first outline-none rounded-e-lg p-2 w-full md:w-fit"
              type="password"
              placeholder='Ingresar contraseña'
              value={estudiante.clave}
              onChange={handleEstudianteChange}
            />
          </div>
          <div>
            Datos del estudiante:
          </div>
          <div className="flex items-center w-full md:w-fit">
            <span className="p-2 border-solid border-s-2 border-y-2 border-first rounded-s-lg">
              <FontAwesomeIcon className="text-first" icon='fa-magnifying-glass' />
            </span>
            <input
              className="text-first border-solid border-2 border-first outline-none rounded-e-lg p-2 w-full md:w-fit"
              type="text"
              placeholder='Nombres'
              name="nombres"
              value={estudiante.nombres}
              onChange={handleEstudianteChange}
            />
          </div>
          <div className="flex items-center w-full md:w-fit">
            <span className="p-2 border-solid border-s-2 border-y-2 border-first rounded-s-lg">
              <FontAwesomeIcon className="text-first" icon='fa-magnifying-glass' />
            </span>
            <input
              className="text-first border-solid border-2 border-first outline-none rounded-e-lg p-2 w-full md:w-fit"
              type="text"
              placeholder='Apellidos'
              name="apellidos"
              value={estudiante.apellidos}
              onChange={handleEstudianteChange}
            />
          </div>
          <div className="flex items-center w-full md:w-fit">
            <span className="p-2 border-solid border-s-2 border-y-2 border-first rounded-s-lg">
              <FontAwesomeIcon className="text-first" icon='fa-magnifying-glass' />
            </span>
            <input
              className="text-first border-solid border-2 border-first outline-none rounded-e-lg p-2 w-full md:w-fit"
              type="text"
              placeholder='DNI'
              name="dni"
              value={estudiante.dni}
              onChange={handleEstudianteChange}
            />
          </div>
          <div className="flex items-center w-full md:w-fit">
            <span className="p-2 border-solid border-s-2 border-y-2 border-first rounded-s-lg">
              <FontAwesomeIcon className="text-first" icon='fa-magnifying-glass' />
            </span>
            <input
              className="text-first border-solid border-2 border-first outline-none rounded-e-lg p-2 w-full md:w-fit"
              type="text"
              placeholder='Código universitario'
              name="codigo_universitario"
              value={estudiante.codigo_universitario}
              onChange={handleEstudianteChange}
            />
          </div>
          <div className="flex items-center w-full md:w-fit">
            <span className="p-2 rounded-s-lg">
              <FontAwesomeIcon className="text-first" icon='fa-magnifying-glass' />
            </span>
            <input
              className="text-first outline-none rounded-e-lg p-2 w-full md:w-fit"
              type="date"
              placeholder='Fecha de nacimiento'
              name="fecha_nacimiento"
              value={estudiante.fecha_nacimiento}
              onChange={handleEstudianteChange}
            />
          </div>
          <div className="flex items-center w-full md:w-fit">
            <span className="p-2 rounded-s-lg">
              <FontAwesomeIcon className="text-first" icon='fa-magnifying-glass' />
            </span>
            <input
              className="text-first outline-none rounded-e-lg p-2 w-full md:w-fit"
              type="file"
              name="foto"
              value={estudiante.foto}
              onChange={handleEstudianteChange}
            />
          </div>
        </div>
      );
    } else if (typeUser == '1') {
      showData = (
        <div className="overflow-auto p-5 flex flex-col gap-4">
          <div>
            Datos del Administrador:
          </div>
          <div className="flex items-center w-full md:w-fit">
            <span className="p-2 border-solid border-s-2 border-y-2 border-first rounded-s-lg">
              <FontAwesomeIcon className="text-first" icon='fa-magnifying-glass' />
            </span>
            <input
              className="text-first border-solid border-2 border-first outline-none rounded-e-lg p-2 w-full md:w-fit"
              type="text"
              placeholder='Nombre del usuario'
            />
          </div>
          <div className="flex items-center w-full md:w-fit">
            <span className="p-2 border-solid border-s-2 border-y-2 border-first rounded-s-lg">
              <FontAwesomeIcon className="text-first" icon='fa-magnifying-glass' />
            </span>
            <input
              className="text-first border-solid border-2 border-first outline-none rounded-e-lg p-2 w-full md:w-fit"
              type="text"
              placeholder='Correo del usuario'
            />
          </div>
          <div className="flex items-center w-full md:w-fit">
            <span className="p-2 border-solid border-s-2 border-y-2 border-first rounded-s-lg">
              <FontAwesomeIcon className="text-first" icon='fa-magnifying-glass' />
            </span>
            <input
              className="text-first border-solid border-2 border-first outline-none rounded-e-lg p-2 w-full md:w-fit"
              type="text"
              placeholder='Ingresar contraseña'
            />
          </div>
          <div className="flex items-center w-full md:w-fit">
            <span className="p-2 border-solid border-s-2 border-y-2 border-first rounded-s-lg">
              <FontAwesomeIcon className="text-first" icon='fa-magnifying-glass' />
            </span>
            <input
              className="text-first border-solid border-2 border-first outline-none rounded-e-lg p-2 w-full md:w-fit"
              type="text"
              placeholder='Confirmar contraseña'
            />
          </div>
        </div>
      );
    } else {
      showData = (
        <div className="overflow-auto p-5 flex flex-col gap-4">
          <div>
            Datos del Secretario:
          </div>
          <div className="flex items-center w-full md:w-fit">
            <span className="p-2 border-solid border-s-2 border-y-2 border-first rounded-s-lg">
              <FontAwesomeIcon className="text-first" icon='fa-magnifying-glass' />
            </span>
            <input
              className="text-first border-solid border-2 border-first outline-none rounded-e-lg p-2 w-full md:w-fit"
              type="text"
              placeholder='Nombre del usuario'
            />
          </div>
          <div className="flex items-center w-full md:w-fit">
            <span className="p-2 border-solid border-s-2 border-y-2 border-first rounded-s-lg">
              <FontAwesomeIcon className="text-first" icon='fa-magnifying-glass' />
            </span>
            <input
              className="text-first border-solid border-2 border-first outline-none rounded-e-lg p-2 w-full md:w-fit"
              type="text"
              placeholder='Correo del usuario'
            />
          </div>
          <div className="flex items-center w-full md:w-fit">
            <span className="p-2 border-solid border-s-2 border-y-2 border-first rounded-s-lg">
              <FontAwesomeIcon className="text-first" icon='fa-magnifying-glass' />
            </span>
            <input
              className="text-first border-solid border-2 border-first outline-none rounded-e-lg p-2 w-full md:w-fit"
              type="text"
              placeholder='Ingresar contraseña'
            />
          </div>
          <div className="flex items-center w-full md:w-fit">
            <span className="p-2 border-solid border-s-2 border-y-2 border-first rounded-s-lg">
              <FontAwesomeIcon className="text-first" icon='fa-magnifying-glass' />
            </span>
            <input
              className="text-first border-solid border-2 border-first outline-none rounded-e-lg p-2 w-full md:w-fit"
              type="text"
              placeholder='Confirmar contraseña'
            />
          </div>
        </div>
      );
    }

    return showData;
  }

  const handleButtonClick = (type) => {
    setTypeUser(type);
    setEstudiante({ ...estudiante, foto: null });
  };

  return (
    <section className="gap-4 w-full h-full flex flex-row overflow-hidden">
      <div className="flex flex-col gap-4 rounded-lg overflow-auto w-full">
        <div className="table-auto w-full h-full rounded-lg flex flex-col gap-2 bg-white">
          <div className="p-5 flex flex-col gap-4 md:flex-row">
            <button
              className={`text-white p-2 rounded-lg hover:bg-orange-900 ${typeUser == '0' ? 'bg-orange-900' : 'bg-orange-500'}`}
              onClick={() => (handleButtonClick('0'))}>
              Estudiante
            </button>
            <button
              className={`text-white p-2 rounded-lg hover:bg-purple-900 ${typeUser == '1' ? 'bg-purple-900' : 'bg-purple-500'}`}
              onClick={() => (handleButtonClick('1'))}>
              Administrador
            </button>
            <button
              className={`text-white p-2 rounded-lg hover:bg-green-900 ${typeUser == '2' ? 'bg-green-900' : 'bg-green-500'}`}
              onClick={() => (handleButtonClick('2'))}>
              Secretario
            </button>
          </div>
          {showFormUser()}
          <div className="p-5 flex flex-col gap-4 md:flex-row">
            <button
              className={`text-white p-2 rounded-lg bg-blue-500 hover:bg-blue-900`}
              onClick={() => (createEstudiante())}>
              Registrar
            </button>
            {msg ?
              <div className="text-white p-2 rounded-lg bg-red-400">{msg}</div> : <></>}
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserCreate;