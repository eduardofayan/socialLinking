import React from 'react';
import styled, {keyframes} from 'styled-components';
import RedesSociais from './RedesSociais';
import SitesList from './SitesList';

const AreaLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 600px;
  width: 800px;
  padding: 1rem;
  margin: 0 0.5rem;
  background: rgba(0,0,0,0.75);
  border-radius: 2rem;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.5);
`;
const pulse = keyframes`
 0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const PhotoPerfil = styled.div`
    background: url("images/fotoperfil.jpg");
    background-position: 50% 35%;
    background-repeat: no-repeat;
    background-size: cover;
    width: 8rem;
    height: 10rem;
    border-radius: 10rem;
    justify-content: center;
    animation: ${pulse} 2s linear infinite;

    @media only screen and (max-width:367px) {
      width: 6rem;
      height: 8rem;
    }

    @media only screen and (min-width:368px) and (max-width:434px) {
      width: 7rem;
      height: 11rem;
    }
`;

const Content = styled.div`
  height: 100%;
  color: #FFFFFF;
  text-align: center;

`;

const Description = styled.div`
  padding: 0 4rem;
  font-size: 14px;

  @media only screen and (max-width:767px) {
    font-size: 13px;
    padding: 0;
    }
`;

export default function Linking() {
  return (
    <AreaLink>
      <PhotoPerfil>
      </PhotoPerfil>
      <Content>
        <div>
          <h3 className='mb-0 mt-4'> Eduardo Vinícius Fayan</h3>
          <h6 className='mb-4'>Developer Front-end</h6>
        </div>
        <Description>
          <p className='m-0 text-break'>
            Esse Social Linking tem a funcionalidade
            de apresentar os projetos que desenvolvi como Developer Front-end
            na empresa F5 Web Net - Tecnologia da Informação! 
            Todos os projetos listados possuem 100% da minha colaboração, e
            são Collab com Lucas Belório (Back-end) e Michele Silva(Front-end), desenvolvedores da F5.
          </p>
        </Description>
        <div className='container'>
          <SitesList name="Sala da Redação" link="https://saladaredacao.com.br/" />
          <SitesList name="Capela do Alto" link="https://www.capeladoalto.sp.gov.br/" />
          <SitesList name="Portal 156 - Ouvidoria" link="https://capeladoalto.cidadeinteligente.app.br/portal#" />
          <SitesList name="Central do Aluno - em Breve" link="/" />
        </div>
        <RedesSociais/>
      </Content>
    </AreaLink>
  )
}
