import { useEffect, useState } from 'react'
import './App.css'
import Conversor from './Conversor'
import Usuarios from './Usuarios' //llamando al conversor
import Registro from './Registro'

function App() {
  const [usuario, setUsuario] = useState('')
  const [clave, setClave] = useState('')
  const [logueado, setLogueado] = useState(false)
  const [recargar, setRecargar] = useState(false)

  //Esta funciona permite grabar y cambiar todo lo que se escriba en usuario
  function cambiarUsuario(evento) {
    setUsuario(evento.target.value)
  }

  //Esta funciona permite grabar y cambiar todo lo que se escriba en contraseña
  function cambiarClave(evento) {
    setClave(evento.target.value)
  }

  function recargarAhora(){
    setRecargar(!recargar)
  }

  //Esta función permite validar si el usuario y contraseña es correcto, iniciara sesión y mostrará la app
    async function ingresar() {
    const peticion = await fetch('http://localhost:3000/login?usuario='+usuario+ '&clave='+clave, {credentials:'include'})
    if(peticion.ok){
      setLogueado(true)
    }else{
      alert('Usuario o clave incorrectos')
    }
  }

//Esta función permite mantener la sesión del usuario abierta
    async function validar(){
      const peticion = await fetch('http://localhost:3000/validar', {credentials:'include'})
      if(peticion.ok)
        setLogueado(true)
    }

    useEffect(()=>{
      validar()
    },[])

  // si el usuario se loguea correctamente tendra acceso a la app
  if(logueado){
    return (
      <>
    <Conversor/>
    <Usuarios recargar={recargar}/>
    <Registro recargarAhora={recargarAhora}/>
    </>)
  }

  return (
    // Esta sección permite iniciar sesión
    <>
    <h1>Inicio de Sesión</h1>
        <input placeholder='Usuario' type="text" name="usuario" id="usuario" value={usuario} onChange={cambiarUsuario}/>
        <input placeholder='Contraseña' type="password" name="clave" id="clave" value={clave} onChange={cambiarClave}/>
        <button onClick={ingresar}>Ingresar</button>



    </>
    
    
  )
}

export default App
