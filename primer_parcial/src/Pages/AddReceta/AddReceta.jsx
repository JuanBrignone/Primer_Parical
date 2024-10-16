import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";


const AddReceta =() => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState("");
    const [image, setImage] = useState("");
    const [preparation, setPreparation] = useState("");
    const navigate = useNavigate();

    const handleAddReceta = async () => {
        const response = await fetch("http://localhost:3000/dishes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name, description, type, image, preparation}),
        });

        if(response.ok){
            navigate("/");  
        }
    };

    return(
        <div>
            <h1>Añadir Receta</h1>
            <form>
                <div>
                    <input
                        type="text"
                        placeholder="Nombre"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Descripcion"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Tipo"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Imagen de portada"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Preparación"
                        value={preparation}
                        onChange={(e) => setPreparation(e.target.value)}
                    />
                </div>
            </form>

            <button
                className="add-button"
                onClick={handleAddReceta}
            >
                Añadir Receta
            </button>

            <button onClick={() => navigate(-1)} className="back-button">
                Atras
            </button>
        </div>
    );
};

export default AddReceta;

