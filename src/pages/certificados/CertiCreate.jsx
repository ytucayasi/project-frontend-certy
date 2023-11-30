import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import userService from "/src/services/user.service";
import PEEService from "/src/services/pee.service";
import React, { useState, useEffect } from "react";
import CertificadoModular from "./pdf/CertificadoModular";
import { PDFViewer } from "@react-pdf/renderer";
import CertificadoAuxiliar from "./pdf/CertificadoAuxiliar";
import GradoBachiller from "./pdf/GradoBachiller";
import CertificadoTecnico from "./pdf/CertifcadoTecnico";

const CertiCreate = ({ onActive, data, fields }) => {
  const [msg, setMsg] = useState("");
  const [formData, setFormData] = useState(getInitialFormData());
  const [typeUser, setTypeUser] = useState('0');

  const [showModal, setShowModal] = React.useState(false);

  const handleButtonClick = (type) => {
    setTypeUser(type);
  };

  function getInitialFormData() {
    const initialData = {};
    fields.forEach((field) => {
      initialData[field.name] = "";
    });
    return initialData;
  }

  useEffect(() => {
    if (data) {
      setFormData(data);
    }
  }, [data]);

  useEffect(() => {
    if (msg) {
      const timeoutId = setTimeout(() => {
        setMsg("");
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [msg]);

  const handleFieldChange = (e) => {
    const { name } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: e.target.value }));
  };

  const eventModal = () => {
    const [cod, setCod] = useState('');
    const [planId, setPlanId] = useState('');
    const [users, setUsers] = useState([]);
    const [pPEEs, setPEEs] = useState([]);
    const [msg, setMsg] = useState('');
    const [programas, setProgramas] = useState([]);
    const [programa, setPrograma] = useState([]);
    const [modulos, setModulos] = useState([]);

    const searchUsercodU = async (codU) => {
      let limitedUsers = [];
      try {
        if (codU) {
          const response = await userService.get(codU);
          if (response.data) {
            limitedUsers = response.data.slice(0, 3);
            setUsers(limitedUsers);
            setMsg('');
          } else {
            setUsers([]);
            console.log('Usuario no encontrado');
          }
        } else {
          const response = await userService.getAll();
          limitedUsers = response.data.slice(0, 3);
          setUsers(limitedUsers);
        }
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setUsers([]);
          setMsg('Elemento no encontrado');
        } else {
          console.error('Error fetching users:', error);
        }
      }
    };

    const fetchPEE = async (id) => {
      try {
        if (id) {
          const response = await PEEService.get(id);
          if (response.data) {
            console.log(response.data);
            setPEEs(response.data);
            setMsg('');
          } else {
            setPEEs([]);
            console.log('PEE no encontrado');
          }
        } else {
          const response = await PEEService.getAll();
          const limitedPEEs = response.data.slice(0, 3);
          setPEEs(limitedPEEs);
        }
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setPEEs([]);
          setMsg('El estudiante no tiene asignado un Plan');
        } else {
          console.error('Error fetching PEEs:', error);
        }
      }
    };

    const fetchProgramasPorPlan = async (planEstudioId) => {
      try {
        if (planEstudioId) {
          const response = await PEEService.getProgramas(planEstudioId);
          if (response.data) {
            console.log(response.data);
            setProgramas(response.data.programas_estudio);
            setMsg('');
          } else {
            setProgramas([]);
            console.log('Programas de estudio no encontrados para el plan de estudios');
          }
        } else {
          // Tratar el caso donde no se proporciona un planEstudioId
          console.log('Error: Se requiere un planEstudioId para obtener programas de estudio');
        }
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setProgramas([]);
          setMsg('No se encontraron programas de estudio para el plan de estudios');
        } else {
          console.error('Error fetching programas de estudio:', error);
        }
      }
    };

    const fetchDataPorProgramaEstudio = async (programaEstudioId) => {
      try {
        if (programaEstudioId) {
          // Obtener información del programa
          const programaResponse = await PEEService.getPrograma(programaEstudioId);
          console.log(programaResponse.data.estado);
          if (programaResponse.data.estado == 1) {
            if (programaResponse.data) {
              console.log(programaResponse.data);
              setMsg('');
              setPrograma(programaResponse.data);

              // Obtener módulos por programa
              const modulosResponse = await PEEService.getModulosPorId(programaEstudioId);

              if (modulosResponse.data) {
                console.log(modulosResponse.data);
                setModulos(modulosResponse.data.modulos_formativos);
                setMsg('');
              } else {
                setModulos([]);
                console.log('Módulos formativos no encontrados para el programa de estudio');
              }
            } else {
              console.log('No se encontró información para el programa de estudio');
              setPrograma([]);
            }
          } else {
            setMsg('Programa de estudio no disponible');
          }
        } else {
          console.log('Error: Se requiere un programaEstudioId para obtener información del programa');
          setPrograma([]);
        }
      } catch (error) {
        if (error.response && error.response.status === 404) {
          console.log('No se encontró información para el programa de estudio');
          setMsg('No se encontró información para el programa de estudio');
        } else {
          console.error('Error fetching información del programa:', error);
        }
        setPrograma([]);
      }
    };

    const onChangeSearch = (e) => {
      const inputValue = e.target.value;
      setCod(inputValue);
      searchUsercodU(inputValue);
    };

    const onChangePlan = (e) => {
      const inputValue = e.target.value;
      fetchProgramasPorPlan(inputValue);
    };

    const onChangePrograma = (e) => {
      const inputValue = e.target.value;
      fetchDataPorProgramaEstudio(inputValue);
    };

    useEffect(() => {
      searchUsercodU(cod);

    }, [cod]);

    useEffect(() => {
      if (msg) {
        const timeoutId = setTimeout(() => {
          setMsg('');
        }, 2000);

        return () => clearTimeout(timeoutId);
      }
    }, [msg]);

    return (
      showModal ? (
        <>
          <div
            className="pt-[5.5rem] md:pt-[7.5rem] justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[50] outline-none focus:outline-none"
          >
            <div className="relative w-[900px] my-6 mx-auto max-w-3xl h-full xl:h-auto xl:mt-0">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Seleccionar estudiante
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex gap-4 flex-col">
                  <input className="w-full md:w-80 outline-none border p-2 rounded-lg border-1" placeholder="Ingresa el código del estudiante" type="text" name="cod" onChange={onChangeSearch} value={cod} />
                  {msg ? <span className="w-full bg-red-500 p-2 rounded-lg text-white">{msg}</span> : <></>}
                  <ul className="text-first flex flex-col gap-2">
                    {users.map(user => (
                      <li className="bg-slate-200 p-2 rounded-lg flex flex-col md:flex-row justify-between items-center" key={user.id}>
                        <span>{user.nombres} {user.apellidos}</span>
                        <span>{user.codigo_universitario}</span>
                        <span>{user.dni} {user.id}</span>
                        <span><button onClick={() => fetchPEE(user.id)} className="flex bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-900">
                          <FontAwesomeIcon icon="fa-check" />
                        </button></span>
                      </li>
                    ))}
                  </ul>
                  {pPEEs && pPEEs.length !== 0 ? (
                    <div className="flex flex-col gap-4">
                      <span className="">Selecciona un plan</span>
                      <select
                        name='pee'
                        defaultValue='0'
                        className="text-first border-solid border-2 border-first outline-none rounded-lg p-2 w-full "
                        onChange={onChangePlan}
                      >
                        <option value='0' disabled>Selecciona el Plan</option>
                        {pPEEs.map((pee) => (
                          <option key={pee.id} value={pee.plan_estudio_id}>
                            {pee.plan_estudio_nombre}
                          </option>
                        ))}
                      </select>
                      {programas && programas.length !== 0 ? (
                        <div className="flex flex-col gap-4">
                          <span className="">Selecciona un Programa</span>
                          <select
                            name='programa'
                            defaultValue='0'
                            className="text-first border-solid border-2 border-first outline-none rounded-lg p-2 w-full "
                            onChange={onChangePrograma}
                          >
                            <option value='0' disabled>Selecciona el Programa</option>
                            {programas.map((programa) => (
                              <option key={programa.id} value={programa.id} disabled={programa.estado == 0 ? true : false} className={`${programa.estado == 1 ? 'text-white bg-green-500' : 'text-white bg-red-500'}`}>
                                {programa.nombre}
                              </option>
                            ))}
                          </select>
                        </div>
                      ) : <></>}
                    </div>
                  ) : <></>}
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-white bg-red-500 hover:bg-red-900 rounded-lg font-bold px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cerrar
                  </button>
                  <button
                    className="text-white bg-green-500 hover:bg-green-900 rounded-lg px-6 py-2 active:bg-green-600 font-bold text-sm shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Guardar cambios
                  </button>
                </div>
              </div>
            </div>
          </div >
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null
    );
  };

  const renderInputField = (field) => {
    const inputValue =
      field.type === "date"
        ? formatDate(formData[field.name])
        : formData[field.name];
    return (
      <div className="w-full flex flex-col" key={field.id}>
        <div>
          {field.placeholder}
        </div>
        <div className=" flex w-full ">
          <span
            className={`flex items-center p-2 border-solid border-s-2 border-y-2 border-first rounded-s-lg text-first ${field.index ? "cursor-pointer hover:bg-first hover:text-white" : ""}`}
            onClick={() => (field.index ? setShowModal(true) : "")}
          >
            <FontAwesomeIcon icon="fa-pencil-alt" />
          </span>
          {field.isSelect ? (
            <select
              name={field.name}
              className="text-first border-solid border-2 border-first outline-none rounded-e-lg p-2 w-full "
              value={inputValue || ""}
              onChange={handleFieldChange}
            >
              {field && field.options && Array.isArray(field.options) ? (
                field.options.map((option) => (
                  <option key={option.id} value={option.value}>
                    {option.label}
                  </option>
                ))
              ) : (
                <option value="" disabled>
                  No hay opciones disponibles para este campo.
                </option>
              )}
            </select>
          ) : (
            <input
              name={field.name}
              className="text-first border-solid border-2 border-first outline-none rounded-e-lg p-2 w-full"
              type={field.type}
              placeholder={field.placeholder}
              value={inputValue || ""}
              onChange={handleFieldChange}
            />
          )}
        </div>
      </div>
    );
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getUTCFullYear();
    const month = `0${date.getUTCMonth() + 1}`.slice(-2);
    const day = `0${date.getUTCDate()}`.slice(-2);
    return `${year}-${month}-${day}`;
  };

  const loadPdf = () => {
    const dataTest = [formData];
    return (
      typeUser === '0' ? <PDFViewer className="w-full h-full"><CertificadoModular data={dataTest} /></PDFViewer> :
        typeUser === '1' ? <PDFViewer className="w-full h-full"><CertificadoAuxiliar data={dataTest} /></PDFViewer> :
          typeUser === '2' ? <PDFViewer className="w-full h-full"><GradoBachiller data={dataTest} /></PDFViewer> :
            typeUser === '3' ? <PDFViewer className="w-full h-full"><CertificadoTecnico data={dataTest} /></PDFViewer> : <></>
    );
  }

  const handleSubmit = async () => {
    try {
      for (const field in formData) {
        if (!formData[field]) {
          setMsg(`El campo ${field} es obligatorio, por favor ingréselo.`);
          return;
        }
      }

      if (typeof formData.value === "string") {
        Object.keys(formData).forEach((key) => {
          formData[key] = formData[key].trim();
        });
      }

      formData.fecha_nacimiento = formatDate(formData.fecha_nacimiento);
      formData.foto = "src/comon/pgn.png";

      let response;

      if (data && data.usuario_id) {
        response = await userService.update(data.usuario_id, formData);
        console.log("Estudiante actualizado exitosamente:", response.data);
        console.log("Editar usuario");
      } else {
        formData.estado = "1";
        response = await userService.create(formData);
        console.log("Estudiante creado exitosamente:", response.data);
        console.log("Crear usuario");
      }

      setFormData(getInitialFormData());
      onActive();
    } catch (error) {
      setMsg("Ingrese datos correctos");
      console.error("Error al crear/actualizar estudiante:", error);
    }
  };

  return (
    <section className="gap-4 w-full h-full flex flex-row overflow-hidden">
      {eventModal()}
      <div className="flex flex-col gap-4 rounded-lg overflow-auto w-full">
        <div className="w-full h-full rounded-lg flex flex-col gap-2 bg-white">
          <div className="p-2 flex flex-col md:flex-row">
            <button
              className={`text-white p-2 rounded-s-lg hover:bg-orange-900 ${typeUser == '0' ? 'bg-orange-900' : 'bg-orange-500'}`}
              onClick={() => (handleButtonClick('0'))}>
              Certificado Modular
            </button>
            <button
              className={`text-white p-2 hover:bg-purple-900 ${typeUser == '1' ? 'bg-purple-900' : 'bg-purple-500'}`}
              onClick={() => (handleButtonClick('1'))}>
              Certificado Auxiliar
            </button>
            <button
              className={`text-white p-2 hover:bg-blue-900 ${typeUser == '2' ? 'bg-blue-900' : 'bg-blue-500'}`}
              onClick={() => (handleButtonClick('2'))}>
              Certificado Grado Bachiller
            </button>
            <button
              className={`text-white p-2 rounded-e-lg hover:bg-red-900 ${typeUser == '3' ? 'bg-red-900' : 'bg-red-500'}`}
              onClick={() => (handleButtonClick('3'))}>
              Certificado técnico / profesional
            </button>
          </div>
          <div className="overflow-auto px-2 flex flex-col lg:flex-row md:items-center lg:justify-center lg:items-start gap-4 w-full h-full">
            <div className="h-full overflow-auto w-full md:w-fit px-10">
              {fields.map((field) => renderInputField(field))}
            </div>
            <div className="w-full h-full">
              {loadPdf()}
            </div>
          </div>
          <div className="p-2 flex flex-row gap-2">
            <button
              className={`text-white p-2 h-fit rounded-lg bg-blue-500 hover:bg-blue-900`}
              onClick={() => (loadPdf())}
            >
              Descargar
            </button>
            <button
              className={`text-white p-2 h-fit rounded-lg bg-orange-500 hover:bg-orange-900`}
            >
              Cargar
            </button>
            <button
              className={`text-white p-2 h-fit rounded-lg bg-green-500 hover:bg-green-900`}
              onClick={handleSubmit}
            >
              {data && data.id ? "Actualizar" : "Registrar"}
            </button>
            {data && data.length !== undefined ? (
              <></>
            ) : (
              <button
                className={`text-white p-2 h-fit rounded-lg bg-red-500 hover:bg-red-900`}
                onClick={() => { }}
              >
                Eliminar
              </button>
            )}
            {msg && (
              <div className="text-white p-2 rounded-lg bg-red-400">{msg}</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertiCreate;