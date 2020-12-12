import React from 'react'

import {Wrapper,InputWrapper,FormInput, Icon, MessageError} from './InputStyle'

interface IInput {
  id: string;
  type: string;
  messageError?: string
  icon: string,
  alt: string
}

const Input = ({icon, alt, id, type, messageError}: IInput) => {
  return ( 
    <Wrapper>
      <MessageError>{messageError}</MessageError>
      <InputWrapper>
        <Icon src={icon} alt={alt}/>
        <FormInput type={type} name={id} id={id} required/>
      </InputWrapper>
    </Wrapper>
   )
}

export default Input
