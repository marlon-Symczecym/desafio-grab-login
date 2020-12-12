import React from "react"
import Form from '../Form/Form'

import {Logo, Art, LoginWrapper, WrapperContainer, Wrapper, HelperWrapper, Helper, Link} from './LoginStyle'

import logo from '../../assets/images/logo.svg'
import art from '../../assets/images/art-login.svg'

const Login = () => {
  return (
    <LoginWrapper>
      <WrapperContainer>
        <Wrapper>
          <Logo src={logo} alt="logotipo da aplicação" />
          <Form />
          <HelperWrapper>
            <Helper>problemas para entrar ?</Helper>
            <Link href="#">clique aqui</Link>
          </HelperWrapper>
        </Wrapper>
      </WrapperContainer>
      <Art src={art} alt="arte do lado do login"/>
    </LoginWrapper>
  )
}

export default Login;
