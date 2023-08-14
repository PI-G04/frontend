import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { toastAlerta } from '../../util/toastAlerta'

function Perfil() {
  let navigate = useNavigate()

  const { usuario } = useContext(AuthContext)
  const userTipo = usuario.tipo === 'mentor';

  // useEffect(() => {
  //   if (usuario.token === "") {
  //     toastAlerta('Dados inconsistentes. Verifique as informações de cadastro.', 'erro')
  //     navigate("/login")
  //   }
  // }, [usuario.token])

  return (

    // <div className='container mx-auto mt-4 rounded-2xl overflow-hidden'>
    //   <img className='w-full h-72 object-cover border-b-8 border-white' src= "" alt="Capa do Perfil" />
    //   <img src={usuario.foto} alt={`Foto de perfil de ${usuario.nome}`} className='rounded-full w-56 mx-auto mt-[-8rem] border-8 border-white relative z-10' />
    //   <div className="relative mt-[-6rem] h-72 flex flex-col bg-sky-500 text-white text-2xl items-center justify-center">
    //     <p>Nome: {usuario.nome} </p>
    //     <p>Email: {usuario.usuario}</p>
    //   </div>
    // </div>
<div className="bg-pink-100 h-screen py-1">
    <div className="bg-white-100 font-base max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
    <div className="rounded-t-lg h-32 overflow-hidden">
        <img className="object-cover object-top w-full" src='https://i.imgur.com/4NKFDtM.png' alt='mulheres'/>
    </div>
    <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
        <img className="object-cover object-center h-32" src={usuario.foto} alt= "foto de perfil "/>
    </div>
    <div className="text-center mt-2">
        <h2 className="font-semibold">{usuario.nome} </h2>
        <p className="text-gray-900">{usuario.usuario}</p>
        <p className="text-gray-900">{usuario.tipo}</p>
    </div>
    <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
        <li className="flex flex-col items-center justify-around">
           
        </li>
        <li className="flex flex-col items-center justify-between">
            
        </li>
        <li className="flex flex-col items-center justify-around">
            
        </li>
    </ul>
        {userTipo ? (
        <div className="p-4 border-t mx-8 mt-2">
        
            <button href="/postagens" className="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg text-center text-white-100 px-3 py-2"><a href="/postagens">Mentorias</a> </button>
        </div>):( <div className="p-4 border-t mx-8 mt-2">
 
        <button href="/postagens" className="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg text-center text-white-100 px-3 py-2"><a href="/postagens">Agendamentos</a> </button>
    </div>
    )}

    </div>
</div>
  )
}

export default Perfil