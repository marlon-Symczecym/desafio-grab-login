import React from "react"
import Form from '../Form/Form'

import {Logo,LoginWrapper, Wrapper, HelperWrapper, Helper, Link} from './LoginStyle'

import logo from '../../assets/images/logo.svg'

const Login = () => {
  return (
    <LoginWrapper>
      <Wrapper>
        <Logo src={logo} alt="logotipo da aplicação" />
        <Form />
        <HelperWrapper>
          <Helper>problemas para entrar ?</Helper>
          <Link href="#">clique aqui</Link>
        </HelperWrapper>
      </Wrapper>
    </LoginWrapper>
  )
}

export default Login;
