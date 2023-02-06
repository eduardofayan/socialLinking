import React from 'react';
import styled from 'styled-components';
import Linking from '../src/components/Linking';
import 'bootstrap/dist/css/bootstrap.min.css';

const FundoApp = styled.main`
  background: url("images/fundolinking.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Titulo = styled.h3`
  margin: 0;
  color: #ffffff;

`;

export default function index() {
  return (
    <FundoApp>
      <Linking/>
    </FundoApp>
  );
}

