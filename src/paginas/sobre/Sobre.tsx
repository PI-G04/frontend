import  { useState } from 'react';
import './Sobre.css';
import sobreLogo from '../../assets/sobre1.png';
import Linkedin from '../../assets/icons8-linkedin (1).svg';
import GitHub from '../../assets/icons8-github.svg';
import PerfilMariaImage from '../../assets/PerfilMaria.jpg';
import PerfilLucasImage from '../../assets/PerfilLucas.jpg';
import PerfilIsraelImage from '../../assets/PerfilIsrael.jpg';
import PerfilRillaryImage from '../../assets/PerfilRillary.jpg';

const groupMembers = [
  {
    name: 'Maria De Fatima',
    linkedin: 'https://www.linkedin.com/in/mariadefatimabatistadecarvalho/',
    github: 'https://github.com/Maria621',
    photo:  <img src={PerfilMariaImage}></img>,
    message:'Óla ,  tenho 24 anos, com experiência profissional no Boticário e Salomão Zoppi. Habilidades em administração, secretariado e informática. Possuo paixão por criação digital me levou a estudar Gestão da Tecnologia da Informação e a ingressar na Generation para aprender desenvolvimento full stack. '
  },
  {
    name: 'Lucas Vinicius',
    linkedin: 'https://www.linkedin.com/in/lucasbarbato/',
    github: 'https://github.com/lucaolv',
    photo: <img src={PerfilLucasImage}></img>,
    message:'Olá, Sou uma pessoa muito motivada a aprender e me interesso por coisas inovadoras, e foi assim que me apaixonei pela tecnologia. Sempre tive foco nos estudos e a persistência fez eu sempre buscar o lugar onde me identifico para poder trabalhar com aquilo que amo. Estou sempre em um constante aprendizado, procurando aprimorar minhas habilidades usando minha curiosidade e comunicação para chegar nos mais experientes.'
  },
  {
    name: 'Israel Bernado',
    linkedin: 'https://www.linkedin.com/in/israel-bernardo-da-silva/',
    github: 'https://github.com/Israelsilva02',
    photo: <img src={PerfilIsraelImage}></img>,
    message:'Olá, Estudo Faculdade de análise e desenvolvimento de sistemas no Senac. Autodidata e curioso, complemento meus estudos com o curso de Desenvolvedor Júnior Full Stack da Generation. Minhas experiências na CORTEVA e projetos da faculdade me deram conhecimentos em Java, Spring Boot, SQL e mais. Comunicativo e comprometido, estou sempre em busca de aprendizado.'
  },
  {
    name: 'Raissa Rillary',
    linkedin: 'https://www.linkedin.com/in/rillarydev/',
    github: 'https://github.com/RillaryDev',
    photo:  <img src={PerfilRillaryImage} ></img>,
    message:'Sou Raissa Rillary, apaixonada por tecnologia e determinada a causar impacto. Minha trajetória inclui projetos desafiadores, como o "Minas na Área", inspirado pelo ODS 5. Minha jornada do GitHub ao LinkedIn reflete meu compromisso em capacitar mulheres na tecnologia.'
  },
 
];

function Sobre() {
  const [selectedMember, setSelectedMember] = useState(null);

 
  const handleMemberClick = (member) => {
    if (selectedMember === member) {
      setSelectedMember(null); // Fechar o popover se clicar novamente no mesmo membro
    } else {
      setSelectedMember(member);
    }
  };

  const currentMember = selectedMember;

  return (
    <div className="sobre-container">
      <div className="bg-pink-200 L3 flex justify-center">
        <div className='bg-green-100 container grid grid-cols-2 text-white'>
          <div className="flex flex-col gap-9 items-center justify-center">
            <h2 className='text-9xl text-purple-400 font-title'>Sobre nós!</h2>
          </div>
          <div className="flex justify-center ">
            <img src={sobreLogo} alt="" className='w-2/3' />
          </div>
        </div>
      </div>
        
     
        <div className="bg-pink-200 L">
          <div className="flex justify-center ">
            <div className='container grid grid-cols-1 p-20 bg-pink-100 text-purple-400'>
              <div className="flex flex-col gap-4 items-center font-title justify-center py-5">
                <h2 className='text-6xl bottom-spacing font-p text-center '>Nossa trajetoria ate aqui</h2>
                  <p className='text-3xl text-center '>Num cenário onde a igualdade de gênero era um 
              ideal a ser alcançado, cinco jovens, unidos por uma 
              visão de transformação, decidiram criar um projeto revolucionário de 
              ONG voltado para a inclusão de mulheres no mercado de trabalho. 
              Com o objetivo central de ampliar a presença feminina nas mais variadas
              empresas e setores, esse grupo tinha uma missão clara: 
              aumentar o índice de empregabilidade das mulheres e encorajá-las a 
              ocupar cargos de liderança e influência.
            </p>
            
            <p className='text-3xl text-center '>A essência do projeto era inspirar e apoiar 
              mulheres a ingressarem em áreas tradicionalmente dominadas por homens. 
              As duas mulheres e os dois homens acreditavam profundamente que, ao 
              proporcionar igualdade de oportunidades e capacitar as mulheres, a 
              sociedade como um todo se beneficiaria de uma força de trabalho mais 
              diversificada e talentosa. O projeto não apenas visava aumentar o número
               de mulheres no mercado de trabalho, mas também garantir que elas 
               ocupassem posições de alto calão e contribuíssem significativamente em 
               diversos setores.
            </p>

            <p className='text-3xl text-center '>Com paixão e comprometimento, o grupo criou 
            uma plataforma inovadora que oferecia sessões virtuais com profissionais 
            especializados em empregabilidade. Essas sessões eram direcionadas para 
            ajudar as mulheres a construir currículos impressionantes, aprimorar suas 
            habilidades de apresentação e desenvolver comportamentos essenciais no 
            ambiente profissional, como as chamadas "soft skills". Acreditavam que, ao 
            transmitir conhecimento prático e dicas valiosas, as mulheres ganhariam 
            confiança e competência para enfrentar entrevistas e desafios com segurança.
            </p>
            
            <p className='text-3xl text-center'>No entanto, a jornada não foi isenta de 
              desafios. Um dos co-fundadoras, infelizmente, teve que partir
               precocemente devido a razões pessoais. Sua partida trouxe uma mistura 
               de tristeza e determinação para os outros membros do grupo. Eles sabiam
                que a melhor maneira de honrar sua contribuição era continuar com o 
                projeto e transformar a visão em realidade.
            </p>

            <p className='text-3xl text-center '>Além de suas metas intrínsecas, o projeto 
             estava alinhado com os Objetivos de Desenvolvimento Sustentável (ODS), 
             especialmente o ODS 5 - Igualdade de Gênero. A meta 5.B, que promove o 
             empoderamento das mulheres através das tecnologias de informação e 
             comunicação, ressoava profundamente com a essência do projeto.
            </p>
            
            <p className='text-3xl text-center'>Assim, impulsionados pela paixão, empatia e visão 
              de futuro, quatro dos jovens continuaram a jornada que começaram. O 
              projeto "Minas na Area" nasceu não apenas como um impulso 
              para a inclusão de mulheres no mercado de trabalho, mas também como uma 
              homenagem ao membro que partiu, uma mulher cujo espírito inspirador 
              permaneceria sempre presente. E assim, eles se comprometeram a transformar 
              vidas, enfrentar desafios e pavimentar o caminho para um futuro mais justo, 
              igualitário e brilhante para todos.
            </p>
              </div>
            </div>
          </div>
        </div>
   
   
     
      <div className="bg-pink-200 flex justify-center items-center ">
       <div className="membros-container L2  bg-green-100 font-title">
        <h2 className="titulo-membros EL text-6xl text-purple-400">Nossos Membros</h2>
        <div className="membros-grid EL">
          {groupMembers.map((member, index) => (
            <div
              key={index}
              className="member-container"
              onClick={() => handleMemberClick(member)}
            >
              <div className="Perfil_img rounded-full space-x-3">
                {member.photo}
              </div>
            </div>
          ))}
        </div>
        {currentMember && (
          <div className="popover-container" onClick={() => setSelectedMember(null)}>
            <div className="popover-content" onClick={(e) => e.stopPropagation()}>
              <h3 className="member-name">{currentMember.name}</h3>
              <p className="member-message">{currentMember.message}</p>
              <div className="Perfil_icons">
                <a href={currentMember.linkedin} target="_blank" rel="noreferrer">
                  <img src={Linkedin} alt={`LinkedIn de ${currentMember.name}`} />
                </a>
                <a href={currentMember.github} target="_blank" rel="noreferrer">
                  <img src={GitHub} alt={`GitHub de ${currentMember.name}`} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
  );
}

export default Sobre;
