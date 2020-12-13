import React from 'react'

import EmailIcon from '../Svg/IconEmail'
import PasswordIcon from '../Svg/IconPassword'

import {Wrapper,InputWrapper,FormInput, Icon, MessageError} from './InputStyle'

interface IInput {
  id: string;
  type: string;
  messageError?: string;
  alt: string;
  handleChange: any;
  values: any;
  icon?: string;
}

const Input = (props: IInput) => {
  return ( 
    <Wrapper>
      <InputWrapper style={{borderColor: props.messageError && '#FF5757'}}>
        <Icon>
          {props.icon === 'email' ? 
            <EmailIcon widthEmail="2rem" heightEmail="2rem" fillEmail={props.messageError ? '#FF5757' : 'white'}/>
          : props.icon === 'password' &&
          <PasswordIcon widthPassword="2rem" heightPassword="2rem" fillPassword={props.messageError ? '#FF5757' : 'white'}/>
          }
        </Icon>
        <FormInput value={props.values} onChange={props.handleChange}  autoComplete='false' {...props}/>
      </InputWrapper>
      <MessageError style={{color: props.messageError && '#FF5757'}}>{props.messageError}</MessageError>
    </Wrapper>
   )
}

export default Input


