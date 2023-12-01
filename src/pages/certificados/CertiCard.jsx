import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import certiService from "/src/services/certi.service";
import { Document, Page } from "react-pdf";
import { uploadFile } from '/src/firebase/config.js';

const Card = ({ data, onActive }) => {
  const {
    certificado,
    estudiante,
    documento,
    nivel_academico
  } = data;

  const [openModal, setOpenModal] = useState(false);
  const [file, setFile] = useState(null);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getUTCFullYear();
    const month = `0${date.getUTCMonth() + 1}`.slice(-2);
    const day = `0${date.getUTCDate()}`.slice(-2);
    return `${year}-${month}-${day}`;
  };

  const insertarDocumentoCertificado = async () => {
    let nameDoc = `${data.estudiante.nombres} ${data.estudiante.apellidos}-${formatDate(data.certificado.fecha_creacion)}-${data.estudiante.dni}`
    try {
      const result = await uploadFile(file, nameDoc);
      console.log(result);
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  const changeFile = (e) => {
    const file = e.target.files[0];
    console.log(e.target.files[0]);
    setFile(file);
  }

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

  const modal = () => {
    return (
      <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">Añadir archivo o documento</h3>
                    <div className="mt-2">
                      <input onChange={(e) => changeFile(e)} name={file} type="file" className="border-2 p-2 rounded-lg" />
                    </div>
                    <div>

                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex gap-2 sm:flex-row-reverse sm:px-6">
                <button onClick={insertarDocumentoCertificado} type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Guardar</button>
                <button type="button" className="inline-flex justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 w-fit" onClick={() => setOpenModal(false)}>Cancelar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
        <button onClick={() => setOpenModal(true)} className="w-full text-white max-w-[20rem] p-3 rounded-md flex justify-center items-center cursor-pointer bg-first hover:bg-second">
          <span className="w-8 flex items-center justify-center"><FontAwesomeIcon icon='fa-file' /></span> <span className="hidden all:block">Ver usuario</span>
        </button>
      </div>
      {openModal ? modal() : <></>}
    </section>
  );
};

export default Card;