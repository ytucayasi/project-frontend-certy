import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import userService from "/src/services/user.service";
import { useState, useEffect } from "react";
import CertificadoModular from "./pdf/CertificadoModular";
import { PDFViewer } from "@react-pdf/renderer";

const CertiCreate = ({ onActive, data, fields }) => {
  const [msg, setMsg] = useState("");
  const [formData, setFormData] = useState(getInitialFormData());

  const [verPdf, setVerPdf] = useState(true);
  const [dataTest, setDataTest] = useState([
    { nombre: 'nombre', edad: '13' },
    { nombre: 'nombre', edad: '13' },
  ])

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
      <div className="flex h-full w-full md:w-fit" key={field.id}>
        <span className="flex items-center p-2 border-solid border-s-2 border-y-2 border-first rounded-s-lg">
          <FontAwesomeIcon className="text-first" icon="fa-pencil-alt" />
        </span>
        {field.isSelect ? (
          <select
            name={field.name}
            className="text-first border-solid border-2 border-first outline-none rounded-e-lg p-2 w-full h-full md:w-60"
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
            className="text-first border-solid border-2 border-first outline-none rounded-e-lg p-2 w-full md:w-60"
            type={field.type}
            placeholder={field.placeholder}
            value={inputValue || ""}
            onChange={handleFieldChange}
          />
        )}
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
          <div className="overflow-auto p-5 flex flex-col lg:flex-row md:items-center lg:justify-center lg:items-start gap-4 w-full h-full">
            <div className=" flex flex-col gap-4 h-fit">
              {fields.map((field) => renderInputField(field))}
            </div>
            <div className="w-full h-full">
              {dataTest ? verPdf ? <PDFViewer className="w-full h-full"><CertificadoModular data={dataTest} /></PDFViewer> : <></> : null}
            </div>
          </div>
          <div className="p-5 flex flex-row gap-2">
            <button
              className={`text-white p-2 h-fit rounded-lg bg-blue-500 hover:bg-blue-900`}

            >
              Descargar
            </button>
            <button
              className={`text-white p-2 h-fit rounded-lg bg-blue-500 hover:bg-blue-900`}
              onClick={() => (setVerPdf(true))}
            >
              Ver
            </button>
            <button
              className={`text-white p-2 h-fit rounded-lg bg-blue-500 hover:bg-blue-900`}
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