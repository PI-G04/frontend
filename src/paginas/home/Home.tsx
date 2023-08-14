import { useContext } from 'react';
import ListaPostagens from '../../components/postagens/listaPostagens/ListaPostagens';
import ModalPostagem from '../../components/postagens/modelPostagens/ModelPostagem';
import { AuthContext } from '../../contexts/AuthContext';

function Home() {

  
const { usuario } = useContext(AuthContext);
const userTipo = usuario.tipo === 'mentor';

    return (
   
      <div>
      {userTipo ? (
        <div>
          <section className="bg-pink-100 ">
          <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
              <div className="max-w-lg">
                <h2 className="text-3xl font-base font-extrabold text-gray-900 sm:text-4xl">Seja bem-vindo(a) à jornada de mentoria</h2>
                <p className="mt-4 pt-8 text-gray-600 text-lg font-base"> Comece sua trajetória como mentor(a) hoje mesmo.</p>
                <div className=" flex gap-4 p-7">
                  <ModalPostagem />
                  </div>
              </div>
              <div className="mt-12 ml-24 md:mt-0">
                <img src="https://i.imgur.com/9Wpiv9j.png" alt="mulheres unidas" className="object-cover rounded-lg " />
              </div>
            </div>
          </div>
        </section>
        <section id='post'className=" font-base relative block px-6 py-10 md:py-20 md:px-10  border-t border-b border-neutral-900 bg-neutral-900/30">
        <div className="">
             
        <ListaPostagens />
        
      </div>
     
      </section>
      </div>

      ) : (
        <div>
        <section className="bg-pink-100 ">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
              <h2 className="text-3xl font-base font-extrabold text-gray-900 sm:text-4xl">Seja bem vinda Mentorada!</h2>
              <p className="mt-4 pt-8 text-gray-600 text-lg font-base">Comece já sua jornada rumo ao sucesso e ao crescimento pessoal.</p>
            
            </div>
            <div className="mt-12 ml-24 md:mt-0">
              <img src="https://i.imgur.com/9Wpiv9j.png" alt="mulheres unidas" className="object-cover rounded-lg " />
            </div>
          </div>
         
        </div>
      </section>
      <section id='post2'className=" font-base relative block px-6 py-10 md:py-20 md:px-10  border-t border-b border-neutral-900 bg-neutral-900/30">
      <div className="">
           
      <ListaPostagens />
      
    </div>
   
    </section>
    </div>
      )}
  </div>
 
);
}

export default Home;

