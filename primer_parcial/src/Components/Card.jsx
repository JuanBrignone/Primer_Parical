import React from "react";
import "./styles.css";
import {useNavigate} from "react-router-dom";

const eliminarReceta = async (id) => {
    const recetaEliminar = await fetch("http://localhost:3000/dishes/" + id, {
        method: "DELETE",
    });
    return recetaEliminar;
};

const Card = ({name, image, type, id, refreshReceta }) => {
    const navigate = useNavigate();

    const handleDetailsClick = () => {
        navigate(`/details/${id}`);
    };

    const handleDeleteClick = async () => {
        const response = await eliminarReceta(id);
        if(response.ok){
            refreshReceta();
        }
    };

    return(
        <div className="card">
            <div className="card-content">
                <h1 className="card-image">{image}</h1>
                <h2 className="card-name">Nombre: {name}</h2>
                <p className="card-type">Tipo de Receta: {type}</p>
                <div className="card-wrapp-buttons">
                    <button className="card-button-details" onClick={handleDetailsClick}>
                        Ver Detalles
                    </button>
                    <button className="card-button-delete" onClick={handleDeleteClick}>
                        Eliminar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;