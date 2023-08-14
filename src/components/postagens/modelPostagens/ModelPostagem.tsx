import FormularioPostagem from '../formularioPostagem/FormularioPostagem';
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import './ModelPostagem.css'
import FormularioTema from '../../temas/formularioTema/FormularioTema';


function ModelPostagem() {
  return (
    <>
      <Popup 
      trigger={<button className='rounded-xl p-4 text-white bg-pink-500 hover:bg-green-400 flex items-center m-1 text-white-300'>Nova Mentoria</button>} modal>
        <div>
          <FormularioPostagem />
        </div>
      </Popup>
      <Popup 
      trigger={<button className='rounded-xl text-white bg-pink-500 hover:bg-green-400 flex items-center m-1 text-white-300'>Novo Assunto</button>} modal >
        <div>
          <FormularioTema />
        </div>
      </Popup>
    </>
  );
}

export default ModelPostagem;