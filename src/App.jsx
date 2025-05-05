import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Conversor from './Conversor' //llamando al conversor

function App() {
  const [usuario, setUsuario] = useState('')
  const [clave, setClave] = useState('')
  const [logueado, setLogueado] = useState(false)

  //Esta funciona permite grabar y cambiar todo lo que se escriba en usuario
  function cambiarUsuario(evento) {
    setUsuario(evento.target.value)
  }

  //Esta funciona permite grabar y cambiar todo lo que se escriba en contraseña
  function cambiarClave(evento) {
    setClave(evento.target.value)
  }

  //Esta función permite validar si el usuario y contraseña es correcto, iniciara sesión y mostrará la app
  function ingresar() {
    if (usuario == "admin" && clave == "admin") {
      alert("Bienvenido")
      setLogueado(true)
    }else{ // en caso contrario mostrará esta alerta
      alert("Usuario o contraseña incorrectos")
    }
  }

  // si el usuario se loguea correctamente tendra acceso a la app
  if(logueado){
    return <Conversor/>
  }

  return (
    <>
    <h1>Inicio de Sesión</h1>
        <input placeholder='Usuario' type="text" name="usuario" id="usuario" value={usuario} onChange={cambiarUsuario}/>
        <input placeholder='Contraseña' type="password" name="clave" id="clave" value={clave} onChange={cambiarClave}/>
        <button onClick={ingresar}>Ingresar</button>
    </>
  )
}

export default App
