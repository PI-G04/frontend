import React from 'react';
import './Sobre.css'
import sobreLogo from '../../assets/sobre.jpg'
import PerfilLucas from '../../assets/PerfilLucas.jpg'
import PerfilIsrael from '../../assets/PerfilIsrael.jpg'
import PerfilRillary from '../../assets/PerfilRillary.jpg'
import PerfilMaria from '../../assets/PerfilMaria.jpg'
import GitHub from '../../assets/icons8-github.svg'
import Linkedin from '../../assets/icons8-linkedin (1).svg'

const groupMembers = [
  {
    name: 'Maria De Fatima',
    linkedin: 'https://www.linkedin.com/in/mariadefatimabatistadecarvalho/',
    github: 'https://github.com/Maria621',
    photo:  <img src={PerfilMaria} alt="Foto de um dos Membros" />
  },
  {
    name: 'Lucas Vinicius',
    linkedin: 'https://www.linkedin.com/in/lucasbarbato/',
    github: 'https://github.com/lucaolv',
    photo: <img src={PerfilLucas} alt="Foto de um dos Membros" />
  },
  {
    name: 'Israel Bernado',
    linkedin: 'https://www.linkedin.com/in/israel-bernardo-da-silva/',
    github: 'https://github.com/Israelsilva02',
    photo: <img src={PerfilIsrael} alt="Foto de um dos Membros" />
  },
  {
    name: 'Raissa Rillary',
    linkedin: 'https://www.linkedin.com/in/rillarydev/',
    github: 'https://github.com/RillaryDev',
    photo:  <img src={PerfilRillary} alt="Foto de um dos Membros" />
  },
 
];

const memberElements = groupMembers.map((member, index) => (
  <div key={index} className="  ">
    <div className="rounded-full Perfil_img overflow-hidden ">
     {member.photo} 
    </div>
    <h3 className="text-lg text-center font-semibold">{member.name}</h3>
    <div className="Perfil_icons flex m-4 gap-2 space-x-3 ">
      <a href={member.linkedin} target="_blank" rel="noreferrer">
        <img src={Linkedin} alt={`LinkedIn de ${member.name}`} />
      </a>
      <a href={member.github} target="_blank" rel="noreferrer">
        <img src={GitHub} alt={`GitHub de ${member.name}`} />
      </a>
    </div>
  </div>
));

function Sobre() {
    return (
       
        <div className="bg-purple-400 ...">
        <div className="bg-purple-500 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Sobre nós!</h2>
              <p className='text-xl'>Nossa trajetoria ate aqui</p>
  
            </div>
            <div className="flex justify-center ">
              <img src={sobreLogo} alt="" className='w-2/3' />
        
              </div>
            </div>
        </div>
     

        <div className="bg-purple-400 ...">
        <div className=" flex justify-center">
          <div className='container grid grid-cols-1 text-black'>
            <div className="flex flex-col gap-4 items-center justify-center p-40 py-4">
  <h2 className='text-5xl p-20 text-center '>Ola, conheça quem somos!</h2>
            <p className='text-xl text-center '>Num cenário onde a igualdade de gênero era um 
              ideal a ser alcançado, cinco jovens, unidos por uma 
              visão de transformação, decidiram criar um projeto revolucionário de 
              ONG voltado para a inclusão de mulheres no mercado de trabalho. 
              Com o objetivo central de ampliar a presença feminina nas mais variadas
              empresas e setores, esse grupo tinha uma missão clara: 
              aumentar o índice de empregabilidade das mulheres e encorajá-las a 
              ocupar cargos de liderança e influência.</p>
            
            <p className='text-xl text-center '>A essência do projeto era inspirar e apoiar 
              mulheres a ingressarem em áreas tradicionalmente dominadas por homens. 
              As duas mulheres e os dois homens acreditavam profundamente que, ao 
              proporcionar igualdade de oportunidades e capacitar as mulheres, a 
              sociedade como um todo se beneficiaria de uma força de trabalho mais 
              diversificada e talentosa. O projeto não apenas visava aumentar o número
               de mulheres no mercado de trabalho, mas também garantir que elas 
               ocupassem posições de alto calão e contribuíssem significativamente em 
               diversos setores.</p>

              <p className='text-xl text-center '>Com paixão e comprometimento, o grupo criou 
            uma plataforma inovadora que oferecia sessões virtuais com profissionais 
            especializados em empregabilidade. Essas sessões eram direcionadas para 
            ajudar as mulheres a construir currículos impressionantes, aprimorar suas 
            habilidades de apresentação e desenvolver comportamentos essenciais no 
            ambiente profissional, como as chamadas "soft skills". Acreditavam que, ao 
            transmitir conhecimento prático e dicas valiosas, as mulheres ganhariam 
            confiança e competência para enfrentar entrevistas e desafios com segurança.
            </p>
            
            <p className='text-xl text-center'>No entanto, a jornada não foi isenta de 
              desafios. Um dos co-fundadoras, infelizmente, teve que partir
               precocemente devido a razões pessoais. Sua partida trouxe uma mistura 
               de tristeza e determinação para os outros membros do grupo. Eles sabiam
                que a melhor maneira de honrar sua contribuição era continuar com o 
                projeto e transformar a visão em realidade.</p>

             <p className='text-xl text-center '>Além de suas metas intrínsecas, o projeto 
             estava alinhado com os Objetivos de Desenvolvimento Sustentável (ODS), 
             especialmente o ODS 5 - Igualdade de Gênero. A meta 5.B, que promove o 
             empoderamento das mulheres através das tecnologias de informação e 
             comunicação, ressoava profundamente com a essência do projeto.</p>
            
            <p className='text-xl text-center'>Assim, impulsionados pela paixão, empatia e visão 
              de futuro, quatro dos jovens continuaram a jornada que começaram. O 
              projeto "Minas na Area" nasceu não apenas como um impulso 
              para a inclusão de mulheres no mercado de trabalho, mas também como uma 
              homenagem ao membro que partiu, uma mulher cujo espírito inspirador 
              permaneceria sempre presente. E assim, eles se comprometeram a transformar 
              vidas, enfrentar desafios e pavimentar o caminho para um futuro mais justo, 
              igualitário e brilhante para todos.</p>
              </div>
              </div>
              </div>
              </div>
      <div className="bg-purple-400 flex justify-center items-center">
        <div className="text-center p-20 m-3">
        <h2 className='text-5xl p-12 font-bold'>Nossos Membros</h2>
          <div className="flex flex-wrap justify-center items-center space-x-8 m-10">
        
              {memberElements}
              </div>
            </div>
        </div>
      </div>
   

    );
}
export default Sobre;