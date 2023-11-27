import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ user, onActive }) => {
  const {
    foto,
    nombre,
    correo,
    estado,
    nombres,
    apellidos,
    fecha_nacimiento,
    dni,
    codigo_universitario,
  } = user;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getUTCFullYear();
    const month = `0${date.getUTCMonth() + 1}`.slice(-2);
    const day = `0${date.getUTCDate()}`.slice(-2);
    return `${year}-${month}-${day}`;
  };

  return (
    <section
      id="card-container"
      className="text-sm bg-white rounded-lg p-5 w-96 flex-col justify-between items-center text-center hidden 2xl:flex"
    >
      <div className="flex flex-col justify-center w-full items-center gap-2">
        <div className="w-full bg-general rounded-lg p-2 flex flex-col items-center justify-center gap-1">
          <p className="font-raleway-bold">{nombre}</p>
          <p>{correo}</p>
          {estado === '0' ?
            <span className="bg-red-500 p-1 text-center text-white rounded-md">Inactivo</span> :
            <span className="bg-green-500 p-1 text-center text-white rounded-md">Activo</span>}
        </div>
        <div className="w-full bg-general rounded-lg p-2 flex flex-col items-center justify-center gap-1">
          <span className="text-xs">Nombres: </span>
          <p>{nombres}</p>
          <span className="text-xs">Apellidos: </span>
          <p>{apellidos}</p>
          <span className="text-xs">Fecha de Nacimiento: </span>
          <p>{formatDate(fecha_nacimiento)}</p>
          <span className="text-xs">DNI: </span>
          <p>{dni}</p>
          <span className="text-xs">Código Universitario: </span>
          <p>{codigo_universitario}</p>
        </div>
      </div>
      <div className="w-full flex flex-row gap-2 all:flex-col">
        {/* Botones comentados temporalmente */}
        {/* <button className="w-full text-white max-w-[20rem] p-3 rounded-md flex justify-center items-center cursor-pointer bg-first hover:bg-second">
          <span className="w-8 flex items-center justify-center"><FontAwesomeIcon icon='fa-message' /></span> <span className="hidden all:block">Enviar mensaje</span>
        </button> */}
        <button onClick={() => (onActive(user))} className="w-full text-white max-w-[20rem] p-3 rounded-md flex justify-center items-center cursor-pointer bg-first hover:bg-second">
          <span className="w-8 flex items-center justify-center"><FontAwesomeIcon icon='fa-eye' /></span> <span className="hidden all:block">Ver usuario</span>
        </button>
      </div>
    </section>
  );
};

export default Card;
