import React from "react";
import { mockGifs } from "./mock-data/gifs.mock";

const GifsApp = () => {
  return (
    <>
      {/* Header */}
      <div className="content-center">
        <h1>Buscador de Gifs</h1>
        <p>Descubre y comparte el gift perfecto</p>
      </div>

      {/* Search */}
      <div className="search-container content-center">
        <input
          type="text"
          placeholder="Buscar gifs..."
          className="input-search"
        />
        <button>Buscar</button>
      </div>

      {/* Busquedas Previas */}
      <div className="previous-searches">
        <h2>Búsquedas Previas</h2>
        <ul className="previous-searches-list">
          <li>Gatos</li>
          <li>Perros</li>
          <li>Memes</li>
          <li>Reacciones</li>
          <li>Películas</li>
        </ul>
      </div>

      {/* Gif Results */}
      <div className="gifs-container">
        {mockGifs.map((gif) => (
          <div key={gif.id} className="gif-card">
            <img src={gif.url} alt={gif.title} />
            <h3>{gif.title}</h3>
            <p>
              {gif.width} x {gif.height} ( 1.5mb )
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default GifsApp;
