import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import userService from "/src/services/user.service";
import { useState, useEffect } from "react";

const UserCreate = ({ onActive, data }) => {
  const [msg, setMsg] = useState('');
  const [estudiante, setEstudiante] = useState({
    nombre: '',
    correo: '',
    clave: '',
    estado: '',
    nombres: '',
    apellidos: '',
    foto: '',
    dni: '',
    codigo_universitario: '',
    fecha_nacimiento: '',
  });

  useEffect(() => {
    if (data) {
      setEstudiante(data);
    }
  }, [data]);

  useEffect(() => {
    if (msg) {
      const timeoutId = setTimeout(() => {
        setMsg('');
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [msg]);

  const createOrUpdateEstudiante = async () => {
    const camposFaltantes = Object.keys(estudiante).filter(key => !estudiante[key]);

    if (camposFaltantes.length > 0) {
      setMsg('Faltan datos, ingrese bien los datos');
      return;
    }

    // Formatear la fecha
    estudiante.fecha_nacimiento = formatDate(estudiante.fecha_nacimiento);

    estudiante.estado = '1';
    estudiante.foto = 'src/comon/pgn.png';

    let response;

    try {
      if (data && data.usuario_id) {
        // Si hay datos, estamos editando, así que llamamos a la función de actualizar
        response = await userService.update(data.usuario_id, estudiante);
        console.log('Estudiante actualizado exitosamente:', response.data);
        console.log('Editar usuario');
      } else {
        // Si no hay datos, estamos creando un nuevo estudiante
        response = await userService.create(estudiante);
        console.log('Estudiante creado exitosamente:', response.data);
        console.log('crear usuario');
      }

      setEstudiante({
        nombre: '',
        correo: '',
        clave: '',
        estado: '',
        nombres: '',
        apellidos: '',
        foto: '',
        dni: '',
        codigo_universitario: '',
        fecha_nacimiento: '',
      });

      onActive();
    } catch (error) {
      setMsg('Ingrese datos correctos');
      console.error('Error al crear/actualizar estudiante:', error);
    }
  };

  const handleEstudianteChange = (e) => {
    const { name, value } = e.target;
    setEstudiante(prevEstudiante => ({
      ...prevEstudiante,
      [name]: value,
    }));
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getUTCFullYear();
    const month = `0${date.getUTCMonth() + 1}`.slice(-2);
    const day = `0${date.getUTCDate()}`.slice(-2);
    return `${year}-${month}-${day}`;
  };

  const renderInputField = (name, placeholder, type = 'text') => {
    const inputValue = type === 'date' ? formatDate(estudiante[name]) : estudiante[name];

    return (
      <div className="flex items-center w-full md:w-fit">
        <span className="p-2 border-solid border-s-2 border-y-2 border-first rounded-s-lg h-full">
          <FontAwesomeIcon className="text-first" icon="fa-magnifying-glass" />
        </span>
        <input
          name={name}
          className="text-first border-solid border-2 border-first outline-none rounded-e-lg p-2 w-full md:w-60"
          type={type}
          placeholder={placeholder}
          value={inputValue || ''}
          onChange={handleEstudianteChange}
        />
      </div>
    );
  };

  return (
    <section className="gap-4 w-full h-full flex flex-row overflow-hidden">
      <div className="flex flex-col gap-4 rounded-lg overflow-auto w-full">
        <div className="table-auto w-full h-full rounded-lg flex flex-col gap-2 bg-white">
          <div className="overflow-auto p-5 flex flex-col gap-4">
            <div>Datos del usuario:</div>
            {renderInputField('nombre', 'Nombre del usuario')}
            {renderInputField('correo', 'Correo del usuario')}
            {renderInputField('clave', 'Ingresar contraseña', 'password')}
            <div>Datos del estudiante:</div>
            {renderInputField('nombres', 'Nombres')}
            {renderInputField('apellidos', 'Apellidos')}
            {renderInputField('dni', 'DNI')}
            {renderInputField('codigo_universitario', 'Código universitario')}
            {renderInputField('fecha_nacimiento', 'Fecha de nacimiento', 'date')}
          </div>
          <div className="p-5 flex flex-col gap-4 md:flex-row">
            <button
              className={`text-white p-2 rounded-lg bg-blue-500 hover:bg-blue-900`}
              onClick={createOrUpdateEstudiante}
            >
              {data && data.length !== undefined ? 'Registrar' : 'Actualizar'}
            </button>
            {msg && <div className="text-white p-2 rounded-lg bg-red-400">{msg}</div>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserCreate;