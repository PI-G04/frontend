import { Link } from 'react-router-dom'
import Tema from '../../../models/Tema'

interface CardTemaProps {
  tema: Tema
}

function CardTemas({ tema }: CardTemaProps) {
  return (

      <div className='transition-transform transform hover:scale-110 bg-green-500 dark:bg-gray-800 shadow-lg mx-auto rounded-xl p-4'>
        <header className='text-gray-600 dark:text-white text-center text-4xl'>Tema</header>
        <p className='text-gray-600 dark:text-white text-3xl'>{tema.descricao}</p>
        <div className="flex p-9">
          <Link to={`/editarAssunto/${tema.id}`} className='rounded-xl p-4 w-full text-white bg-green-600 hover:bg-green-400 flex items-center justify-center py-2 m-1 text-white-300'>
            <button>Editar Mentoria</button>
          </Link>
          <Link to={`/deletarAssunto/${tema.id}`} className='rounded-xl p-4 text-white bg-pink-800 hover:bg-pink-600 w-full flex items-center justify-center py-2 m-1 text-white-300'>
            <button>Cancelar Mentoria</button>
          </Link>
        </div>
      </div>
   
  )
}


export default CardTemas