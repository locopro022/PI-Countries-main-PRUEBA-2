import React from 'react';
import { useState } from 'react';

//pegar a nuestro backend para crear una nueva actividad
//renderizar un formalario para crear una nueva actividad

export default function CreateActivity() {
  const [activity, setactivity] = useState({
    name: '',
    difficulty: [],
    durationUnity: [],
    durationNumber: [],
    season: [],
  });

  const [botton, setbotton] = useState(false);

  function handleSubmit() {
    
  }

  function handleChange() {}

  function handleDuration() {}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre de la actividad</label>
          <input
            name="name"
            value={activity.name}
            onChange={handleChange}></input>
          ---------------
          <label>Dificultad</label>
          <input></input>
          ---------------
          <label>Duracion</label>
          <select
            name="durationUnity"
            value={activity.duration}
            onChange={handleDuration}
          >
            <option value="minutos">Minutos</option>
            <option value="horas">Horas</option>
            <option value="dias">Dias</option>
          </select>
          ---------------
          <label>Temporada</label>
          <input></input>
          ---------------
        </div>
      </form>
    </div>
  );
}
