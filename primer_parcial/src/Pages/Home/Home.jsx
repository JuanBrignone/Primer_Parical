import React, {useEffect, useState} from "react";
import "./styles.css";
import Card from "../../Components/Card";
import { useNavigate } from "react-router-dom";

const getRecetas = async () => {
    const recetasFetch = await fetch("http://localhost:3000/dishes")
    const recetas = await recetasFetch.json();
    return recetas;
}

const Home = () => {
    const [recetas, setRecetas] = useState([]);
    const navigate = useNavigate()
    const [searchFilter, setSearchFilter] = useState('')

    const refreshReceta = async () => {
        const updatedRecetas = await getRecetas();
        setRecetas(updatedRecetas);
    }

    useEffect (() => {
        refreshReceta();
    },[]);

    const handleAddRecetaClick = () => {
        navigate("/agregar")
    };

    const handleSearchChange = (event) => {
        setSearchFilter(event.target.value);
    };

    const filteredRecetas = recetas.filter(receta =>
        receta.name.toLowerCase().includes(searchFilter.toLowerCase())
    );

    return (
        <div>
            <div className="home-title">
                <h1>RECETAS</h1>
                <button onClick={handleAddRecetaClick} className="add-receta-button">
                    Añadir Receta
                </button>
            </div>

            <input

                type="text"
                placeholder="Buscar Receta"
                value={searchFilter}
                onChange={handleSearchChange}
                className="search-input"
            ></input>

            {filteredRecetas.length ? (
                <div className="home-cards">
                    {filteredRecetas.map((receta) => (
                        <Card
                            key={receta.id}
                            image={receta.image}
                            name={receta.name}
                            type={receta.type}
                            id={receta.id}
                            refreshReceta={refreshReceta}
                        />
                    ))}
                </div>
            ):(
                <div className="home-no-games">No hay recetas para mostrar</div>
            )}
        </div>
    );
};

export default Home;