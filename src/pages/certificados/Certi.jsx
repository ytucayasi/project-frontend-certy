import React, { useState, useEffect } from "react";
import MainHeader from "/src/components/header/MainHeader.jsx";
import CertiService from "/src/services/certi.service";
import NivelAcademicoService from "/src/services/nivelAcademico.service.jsx";
import CertiList from "./CertiList";
import CertiCreate from "./CertiCreate";

const Certi = ({ service, entityName, createButtonText, listButtonText }) => {
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState([]);
  const [message, setMessage] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [buttonText, setButtonText] = useState(createButtonText || 'Registrar');
  const [isInputVisible, setIsInputVisible] = useState(true);

  const [dataNivelAcademico, setdataNivelAcademico] = useState([]);

  const fetchData = async (itemId) => {
    try {
      const response = itemId
        ? await service.getAll(itemId)
        : await service.getAll();
      if (response.data) {
        setData(response.data);
      } else {
        setData([]);
        console.log(`Elemento(s) no encontrado(s) para ${entityName}`);
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setData([]);
        setMessage(`Elemento(s) no encontrado(s) para ${entityName}`);
      } else {
        console.error(`Error fetching data for ${entityName}:`, error);
      }
    }
  };

  const fetchNivelAcademico = async (itemId) => {
    try {
      const response = itemId
        ? await NivelAcademicoService.getAll(itemId)
        : await NivelAcademicoService.getAll();
      if (response.data) {
        const transformedData = response.data.map(item => ({
          id: item.id,
          value: item.nivel,
          label: item.nivel === '0' ? "Bachiller técnico" : "Profesional técnico"
        }));
        setdataNivelAcademico(transformedData);
      } else {
        setdataNivelAcademico([]);
        console.log(`Elemento(s) no encontrado(s)`);
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setdataNivelAcademico([]);
        setMessage(`Elemento(s) no encontrado(s)`);
      } else {
        console.error(`Error fetching data`, error);
      }
    }
  };

  const handleToggle = (selectedData) => {
    setSelectedData(selectedData || []);
    setIsActive((prevIsActive) => !prevIsActive);
    setButtonText((prevButtonText) => (prevButtonText === listButtonText ? createButtonText : listButtonText));
    setIsInputVisible((prevIsInputVisible) => !prevIsInputVisible);
    fetchData();
  }

  useEffect(() => {
    fetchData();
    fetchNivelAcademico();
  }, []);

  const fields = [
    { id: '1', name: 'estudiante', placeholder: 'Estudiante', type: 'text', index: true, isVisible: true},
    { id: '2', name: 'nombre_certificado', placeholder: 'Nombre del certificado', type: 'text', isVisible: true },
    { id: '3', name: 'programa_estudios', placeholder: 'Programa de estudios', type: 'text', isVisible: false },
    { id: '4', name: 'modulo_formativo', placeholder: 'Programa de estudios', type: 'text', isVisible: false },
    { id: '5', name: 'codigo', placeholder: 'Código de la SUNEDU', type: 'text', isVisible: true },
    { id: '6', name: 'creditos', placeholder: 'Créditos', type: 'text', isVisible: true },
    { id: '7', name: 'horas', placeholder: 'Horas', type: 'text', isVisible: true },
    { id: '8', name: 'lugar', placeholder: 'Lugar', type: 'text', isVisible: true },
    { id: '9', name: 'fecha_inicio', placeholder: 'Fecha Inicio', type: 'date', isVisible: true },
    { id: '10', name: 'fecha_fin', placeholder: 'Fecha Fin', type: 'date', isVisible: true },
    { id: '11', name: 'fecha_creacion', placeholder: 'Fecha Creación', type: 'date', isVisible: false },
    {
      id: '12', name: 'estado', placeholder: 'Estado', type: 'text', isSelect: true, isVisible: true, options: [
        { id: 'bg-yellow-500', value: '0', label: 'Aun por revisar' },
        { id: 'bg-blue-500', value: '1', label: 'Pendiente' },
        { id: 'bg-gray-500', value: '2', label: 'Cancelado' },
        { id: 'bg-purple-500', value: '3', label: 'Revisado' },
      ]
    },
  ];

  return (
    <>
      <MainHeader
        search={fetchData}
        onToggle={handleToggle}
        buttonText={buttonText}
        isInputVisible={isInputVisible}
      />
      {isActive
        ? <CertiCreate onActive={handleToggle} data={selectedData} fields={fields} />
        : <CertiList items={data} message={message} onToggle={handleToggle} />
      }
    </>
  );
}

Certi.defaultProps = {
  service: CertiService,
  entityName: 'certificados',
  createButtonText: 'Registrar',
  listButtonText: 'Listar'
};

export default Certi;