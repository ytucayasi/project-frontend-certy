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
    { id: '1', name: 'documento', placeholder: 'Nombre del usuario', type: 'file' },
    { id: '2', name: 'correo', placeholder: 'Correo del usuario', type: 'text' },
    { id: '3', name: 'correo', placeholder: 'Correo del usuario', type: 'text' },
    { id: '4', name: 'correo', placeholder: 'Correo del usuario', type: 'text', isSelect: true, options: dataNivelAcademico },
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