import React, {useEffect, useState} from "react";
import "./styles.css";
import { useNavigate, useParams } from "react-router-dom";

const getRecetaById = async (id) => {
    const recetaFetch = await fetch(`http://localhost:3000/dishes/${id}`);
    const receta = await recetaFetch.json();
    return receta;
};

const Details = () => {
    const [receta, setReceta] = useState();
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getRecetaById(id).then((receta) => setReceta(receta));
    }, [id]);

    return(
        <div className="container">
            <h1>Detalles</h1>
            {receta && (
                <div>
                    <div className="detail">
                        <span className="detail-content-image">{receta.image}</span>
                    </div>
                    <div className="detail">
                        <span className="detail-name">Nombre: </span>
                        <span className="detail-content">{receta.name}</span>
                    </div>
                    <div className="detail">
                        <span className="detail-description">Descripcion: </span>
                        <span className="detail-content">{receta.description}</span>
                    </div>
                    <div className="detail">
                        <span className="detail-type">Tipo: </span>
                        <span className="detail-content">{receta.type}</span>
                    </div>
                    <div className="detail">
                        <span className="detail-preparation">Preparacion: </span>
                        <span className="detail-content">{receta.preparation}</span>
                    </div>
                </div>
            )}

            <button onClick={() => navigate(-1)} className="back-button">
                Atras
            </button>

        </div>
    );
};

export default Details;