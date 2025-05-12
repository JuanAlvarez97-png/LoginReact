import { useEffect, useState } from 'react'
import './App.css'

function Registro({recargarAhora}) {
  const [usuarioRegistro, setUsuarioRegistro] = useState('')
  const [claveRegistro, setClaveRegistro] = useState('')

    function cambiarUsuarioRegistro(evento) {
    setUsuarioRegistro(evento.target.value)
  }

  //Esta funciona permite grabar y cambiar todo lo que se escriba en contraseña
  function cambiarClaveRegistro(evento) {
    setClaveRegistro(evento.target.value)
  }
    async function registrar() {
    const peticion = await fetch('http://localhost:3000/registro?usuario='+usuarioRegistro+ '&clave='+claveRegistro, {credentials:'include'})
    if(peticion.ok){
      alert("Usuario Registrado")
      recargarAhora()
    }else{
      alert('Usuario no registrado')
    }
  }

    useEffect(()=>{
    },[])

  return (
    // Esta sección permite iniciar sesión
    <>
        <h1>Registro</h1>
        <input placeholder='Usuario' type="text" name="usuario" id="usuario" value={usuarioRegistro} onChange={cambiarUsuarioRegistro}/>
        <input placeholder='Contraseña' type="password" name="clave" id="clave" value={claveRegistro} onChange={cambiarClaveRegistro}/>
        <button onClick={registrar}>Ingresar</button>
    </>
  )
}
export default Registro
