import React from 'react'

import Input from '../Input/Input'

import emailIcon from '../../assets/images/email.svg'
import passwordIcon from '../../assets/images/password.svg'

import {FormWrapper, Button} from './FormStyle'

const Form = () => {
  return (
    <FormWrapper>
      <Input id="email" type="email" icon={emailIcon} alt="icone do input do email"/>
      <Input id="password" type="password" icon={passwordIcon} alt="icone do input do password"/>

      <Button>Entrar</Button>
    </FormWrapper>
  )
}

export default Form
