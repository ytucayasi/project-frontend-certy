import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import userData from "/src/config/userData.js";

const Card = ({ user }) => {
    return (
        <section id="card-container" className="text-sm bg-white rounded-lg p-5 w-96  flex-col justify-between items-center text-center hidden 2xl:flex">
            <div className="flex flex-col justify-center w-full items-center gap-2">
                <figure className="w-24">
                    <img className="w-full rounded-full" src={userData.image} alt={userData.altImage} />
                </figure>
                <div className="w-full bg-general rounded-lg p-2">
                    <p className="font-raleway-bold">{user.nombre}</p>
                    <p>{user.correo}</p>
                    <p>{user.estado}</p>
                </div>
                <div className="w-full bg-general rounded-lg p-2">
                    <span className="text-xs">CU: </span>
                    <p>202012379</p>
                    <span className="text-xs">DNI: </span>
                    <p>74701343</p>
                    <span className="text-xs">celular: </span>
                    <p>930639150</p>
                    <span className="text-xs">correo: </span>
                    <p>saul.ytucayasi@upeu.edu.pe</p>
                </div>
            </div>
            <div className="w-full flex flex-row gap-2 all:flex-col">
                <button className="w-full text-white max-w-[20rem] p-3 rounded-md flex justify-center items-center cursor-pointer bg-first hover:bg-second">
                    <span className="w-8 flex items-center justify-center"><FontAwesomeIcon icon='fa-message' /></span> <span className="hidden all:block">Enviar mensaje</span>
                </button>
                <button className="w-full text-white max-w-[20rem] p-3 rounded-md flex justify-center items-center cursor-pointer bg-first hover:bg-second">
                    <span className="w-8 flex items-center justify-center"><FontAwesomeIcon icon='fa-eye' /></span> <span className="hidden all:block">Ver usuario</span>
                </button>
            </div>
        </section>
    );
}

export default Card;