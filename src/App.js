import React, { useState, useEffect } from 'react';
import axios from 'axios'

function Frase ({frase}) {
  return (
    <div className="frase">
      <h1>{frase.quote}</h1>
      <p>- {frase.author}</p>
    </div>
  )
}

const App = () => {

const [frase, obtenerFrase] = useState({})


//tener un metodo aparte, ya que en useEffect no se puede hacer, solo llamar a la funcion
const consultarAPI = async () => {
    const resultado = await axios('https://breaking-bad-quotes.herokuapp.com/v1/quotes');

    //agregar el resultado del api al state (similiar a setState)
    obtenerFrase(resultado.data[0]);
}

//consulta a una rest API con axios
useEffect(
  () => {
    consultarAPI()
  }, [] //este array vacio hace que no llame muchas veces, dependencias.
)

console.log(frase) //frase = this.state

  return (
    <div className="contenedor">
      <Frase 
        frase={frase}
      />
      <button
        onClick={consultarAPI}
      >Generar Nueva</button>
    </div>
   );
}
 
export default App;