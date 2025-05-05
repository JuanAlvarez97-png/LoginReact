import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Se declarán las constantes que tomarán la infoemación de la app
function Conversor() {
  const [textoAVoz, setTextoAVoz] = useState('')
  const [vozATexto, setvozATexto] = useState('')

  function cambiarTexto(evento) {
    setTextoAVoz(evento.target.value)
  }

  // esta función convierte lo que se ingrese a texto en voz
  function convertirTextoAVoz() {
    const synth = window.speechSynthesis
    const utterThis = new SpeechSynthesisUtterance(textoAVoz)
    synth.speak(utterThis)
  }

  // Esta función graba mi voz y la muestra como texto
  function grabarVozATexto() {
    const recongnition = new window.webkitSpeechRecognition()
    recongnition.lang = 'es-ES'
    recongnition.start()
    recongnition.onresult = function(event) {
      setvozATexto(event.results[0][0].transcript)
    }
  }

  // Estos son los botones que permiten ejecutar las instrucciones de las funciones declaradas
  return (
    <>
    <h1>Conversor.SENA</h1>
      <br />
      <h3>Conversor de texto a voz</h3>
      <input type="text" id="textoAVoz" value={textoAVoz} onChange={cambiarTexto}/>
      <button onClick={convertirTextoAVoz}>Convertir</button>

      <h3>Conversor de voz a texto</h3>
      <button onClick={grabarVozATexto}>Grabar</button> 
    </>
  )
}

// exporta el conversor para poder importarlo en el main
export default Conversor
