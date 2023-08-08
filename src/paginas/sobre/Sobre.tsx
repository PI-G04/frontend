import React from 'react';
import './Sobre.css'
import sobreLogo from '../../assets/sobre.jpg'




function Sobre() {
    return (
       
        <div className="bg-pink-100 ...">
        <div className="bg-pink-200 flex justify-center">
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
     

  <div className="grid justify-items-stretch m-20 ">
  <h2 className='text-5xl justify-self-center'>Ola, conheça quem somos!</h2>
            <p className='text-xl text-center p-10'>Num cenário onde a igualdade de gênero era um 
              ideal a ser alcançado, cinco jovens, unidos por uma 
              visão de transformação, decidiram criar um projeto revolucionário de 
              ONG voltado para a inclusão de mulheres no mercado de trabalho. 
              Com o objetivo central de ampliar a presença feminina nas mais variadas
              empresas e setores, esse grupo tinha uma missão clara: 
              aumentar o índice de empregabilidade das mulheres e encorajá-las a 
              ocupar cargos de liderança e influência.</p>
            
            <p className='text-xl text-center p-10'>A essência do projeto era inspirar e apoiar 
              mulheres a ingressarem em áreas tradicionalmente dominadas por homens. 
              As duas mulheres e os dois homens acreditavam profundamente que, ao 
              proporcionar igualdade de oportunidades e capacitar as mulheres, a 
              sociedade como um todo se beneficiaria de uma força de trabalho mais 
              diversificada e talentosa. O projeto não apenas visava aumentar o número
               de mulheres no mercado de trabalho, mas também garantir que elas 
               ocupassem posições de alto calão e contribuíssem significativamente em 
               diversos setores.</p>

              <p className='text-xl text-center p-10'>Com paixão e comprometimento, o grupo criou 
            uma plataforma inovadora que oferecia sessões virtuais com profissionais 
            especializados em empregabilidade. Essas sessões eram direcionadas para 
            ajudar as mulheres a construir currículos impressionantes, aprimorar suas 
            habilidades de apresentação e desenvolver comportamentos essenciais no 
            ambiente profissional, como as chamadas "soft skills". Acreditavam que, ao 
            transmitir conhecimento prático e dicas valiosas, as mulheres ganhariam 
            confiança e competência para enfrentar entrevistas e desafios com segurança.
            </p>
            
            <p className='text-xl text-center p-10'>No entanto, a jornada não foi isenta de 
              desafios. Um dos co-fundadoras, infelizmente, teve que partir
               precocemente devido a razões pessoais. Sua partida trouxe uma mistura 
               de tristeza e determinação para os outros membros do grupo. Eles sabiam
                que a melhor maneira de honrar sua contribuição era continuar com o 
                projeto e transformar a visão em realidade.</p>

             <p className='text-xl text-center p-10'>Além de suas metas intrínsecas, o projeto 
             estava alinhado com os Objetivos de Desenvolvimento Sustentável (ODS), 
             especialmente o ODS 5 - Igualdade de Gênero. A meta 5.B, que promove o 
             empoderamento das mulheres através das tecnologias de informação e 
             comunicação, ressoava profundamente com a essência do projeto.</p>
            
            <p className='text-xl text-center p-10'>Assim, impulsionados pela paixão, empatia e visão 
              de futuro, quatro dos jovens continuaram a jornada que começaram. O 
              projeto "Minas na Area" nasceu não apenas como um impulso 
              para a inclusão de mulheres no mercado de trabalho, mas também como uma 
              homenagem ao membro que partiu, uma mulher cujo espírito inspirador 
              permaneceria sempre presente. E assim, eles se comprometeram a transformar 
              vidas, enfrentar desafios e pavimentar o caminho para um futuro mais justo, 
              igualitário e brilhante para todos.</p>
              </div>
              </div>
    );
}
export default Sobre;