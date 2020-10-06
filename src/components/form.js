import React, { useState } from 'react'

export default function Formulario(){
const [altura, setAltura] = useState();
const [peso, setPeso] = useState();
const [resultado, setResultado] = useState();

    function handleSubmit(event){
        event.preventDefault();
        setResultado(peso/(altura*altura))       
        
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <label>Altura</label>
            <input
            placeholder="Altura"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            ></input>
            <label>Peso</label>
            <input
            placeholder="Peso"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            ></input>
            <button type="submit">Calcular</button>
        </form>
    <div>Total do IMC: {resultado}</div>
    </>
    );
}
