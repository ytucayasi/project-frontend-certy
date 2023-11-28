import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ data, onActive }) => {
  const {
    certificado,
    estudiante,
    documento,
    nivel_academico
  } = data;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getUTCFullYear();
    const month = `0${date.getUTCMonth() + 1}`.slice(-2);
    const day = `0${date.getUTCDate()}`.slice(-2);
    return `${year}-${month}-${day}`;
  };

  const renderStatusBadge = (status) => {
    const statusMappings = {
      '0': { className: 'bg-yellow-500', text: 'Aun por revisar' },
      '1': { className: 'bg-blue-500', text: 'Pendiente' },
      '2': { className: 'bg-gray-500', text: 'Cancelado' },
      '3': { className: 'bg-purple-500', text: 'Revisado' },
    };
  
    const { className, text } = statusMappings[status] || { className: 'bg-gray-500', text: 'Desconocido' };
  
    return (
      <span className={`p-1 text-center text-white rounded-md ${className}`}>
        {text}
      </span>
    );
  };

  return (
    <section
      id="card-container"
      className="text-sm bg-white rounded-lg p-5 w-96 flex-col justify-between items-center text-center hidden 2xl:flex"
    >
      <div className="flex flex-col justify-center w-full items-center gap-2">
        <div className="w-full bg-general rounded-lg p-2 flex flex-col items-center justify-center gap-1">
          <p className="font-raleway-bold">{certificado.nombre_certificado}</p>
          <p>{certificado.tipo === '0' ? 'Certificado modular' : 'Certificado auxiliar'}</p>
          <p>{formatDate(certificado.fecha_creacion)}</p>
          <p>{certificado.lugar}</p>
          {renderStatusBadge(certificado.estado)}
        </div>
        <div className="w-full bg-general rounded-lg p-2 flex flex-col items-center justify-center gap-1">
          <span className="text-xs">Nombres y apellidos: </span>
          <p>{estudiante.nombres} {estudiante.apellidos}</p>
          <span className="text-xs">DNI: </span>
          <p>{estudiante.dni}</p>
          <span className="text-xs">Código universitario: </span>
          <p>{estudiante.codigo_universitario}</p>
        </div>
        <div className="w-full bg-general rounded-lg p-2 flex flex-col items-center justify-center gap-1">
          <span className="text-xs">Nivel Académico: </span>
          <p>
            {nivel_academico.nivel === '0' ? 'Bachiller técnico' : 'Profesional técnico'}
          </p>
        </div>
      </div>
      <div className="w-full flex flex-row gap-2 all:flex-col">
        <button onClick={() => onActive(data)} className="w-full text-white max-w-[20rem] p-3 rounded-md flex justify-center items-center cursor-pointer bg-first hover:bg-second">
          <span className="w-8 flex items-center justify-center"><FontAwesomeIcon icon='fa-eye' /></span> <span className="hidden all:block">Ver usuario</span>
        </button>
      </div>
    </section>
  );
};

export default Card;