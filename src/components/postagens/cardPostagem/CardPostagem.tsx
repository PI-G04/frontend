import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem'


interface CardPostagemProps {
  post: Postagem
}

function CardPostagem({post}: CardPostagemProps) {
  return (
   <div>
        <div className="transition-transform transform hover:scale-110 bg-green-500  dark:bg-gray-800  shadow-lg mx-auto rounded-xl p-4">
          <h4 className='text-gray-600 dark:text-white text-center text-4xl '>{post.titulo}</h4>
          <img src={post.foto} className='mx-auto object-cover'></img>
             <p className="text-gray-600 dark:text-white text-3xl"> {post.texto}</p>
                        <div className="flex items-center mt-4">
                            <a className="relative block">
                                <img alt="profil" src={post.usuario?.foto} className="mx-auto object-cover rounded-full h-10 w-10 " />
                            </a>
                            <div className="flex flex-col justify-between ml-2">
                                <span className="text-md text-2xl font-semibold text-green-100">
                                {post.usuario?.nome}
                                </span>
                                <span className=" text-1xl flex items-center  dark:text-gray-400">
                                <p>Tema: {post.tema?.descricao}</p>
                                </span>
                                <span className="flex items-center text-1xl text-xs dark:text-gray-400">     <p>Data: {new Intl.DateTimeFormat(undefined, {
                                    dateStyle: 'full',
                                    timeStyle: 'medium',
                                  }).format(new Date(post.data))}</p> 
                                </span>
                            </div>
                        </div>
                        <div className="flex p-9">
                               <Link to={`/editarMentoria/${post.id}`} className='rounded-xl p-4 w-full text-white bg-green-600 hover:bg-green-400 flex items-center justify-center py-2 m-1 text-white-300'>
                                <button>Editar Mentoria</button>
                               </Link>
                               <Link to={`/cancelarMentoria/${post.id}`} className='rounded-xl p-4 text-white bg-pink-800 hover:bg-pink-600 w-full flex items-center justify-center py-2 m-1 text-white-300'>
                                <button>Cancelar Mentoria</button>
                               </Link>
                        </div>
                          
                  </div>
              </div>   

  )
}

export default CardPostagem