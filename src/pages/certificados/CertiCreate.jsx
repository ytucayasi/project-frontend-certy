import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import userService from "/src/services/user.service";
import { useState, useEffect } from "react";
import CertificadoModular from "./pdf/CertificadoModular";
import { PDFViewer } from "@react-pdf/renderer";
import CertificadoAuxiliar from "./pdf/CertificadoAuxiliar";
import GradoBachiller from "./pdf/GradoBachiller";
import CertificadoTecnico from "./pdf/CertifcadoTecnico";

const CertiCreate = ({ onActive, data, fields }) => {
  const [msg, setMsg] = useState("");
  const [formData, setFormData] = useState(getInitialFormData());
  const [typeUser, setTypeUser] = useState('0');

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
    console.log(dataTest);
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
      <div className="flex flex-col gap-4 rounded-lg overflow-auto w-full">
        <div className="w-full h-full rounded-lg flex flex-col gap-2 bg-white">
          <div className="p-5 flex flex-col md:flex-row">
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
          <div className="overflow-auto p-5 flex flex-col lg:flex-row md:items-center lg:justify-center lg:items-start gap-4 w-full h-full">
            <div className="h-full overflow-auto w-full md:w-fit">
              {fields.map((field) => renderInputField(field))}
            </div>
            <div className="w-full h-full">
              {loadPdf()}
            </div>
          </div>
          <div className="p-5 flex flex-row gap-2">
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