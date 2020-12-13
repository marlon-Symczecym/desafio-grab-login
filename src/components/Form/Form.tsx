import React from 'react'

import Input from '../Input/Input'

import {FormWrapper, Button, MessageError} from './FormStyle'
import useFormValidate from '../../hooks/useFormValidate/useFormValidate'

const Form = () => {
  const [form, setForm] = React.useState({
    email: '',
    password: ''
  });
  const [messageForm, setMessageForm] = React.useState<string | boolean | any>({
    erro: true,
    message: ''
  });
  const timeoutRef = React.useRef(0)
  const {validatePassword, validateData, errorField} = useFormValidate()

  function messageSetTimeOut(time: number) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = setTimeout(() => {
        setMessageForm({erro: false, message: ''})
      }, time)
  }

 async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()

    if(validateData(form.email) && 
       validatePassword(form.password))
    {
      
      setMessageForm({erro: false, message: "Login efetuado com sucesso!"})
      messageSetTimeOut(3000)
    } else {
      setMessageForm({erro: true, message: 'Dados incorretos!'})
      messageSetTimeOut(3000)
    }
  }

  function handleChange ({target}: React.ChangeEvent<HTMLInputElement>) {
    const {id, value} = target
    setForm({...form, [id]: value})
  }

  return (
    <>
      <FormWrapper onSubmit={handleSubmit}>
        <MessageError 
          style={{color: messageForm.erro ? '#FF5757' : '#00D857', 
                  display: messageForm.message ? 'block' : 'none'}}>
          {messageForm.message}
        </MessageError>
        <Input 
          values={form.email} 
          handleChange={handleChange} 
          id="email" type="email" 
          alt="icone do input do email"
          messageError={errorField.email}
          icon="email"
        />
        <Input 
          values={form.password}
          handleChange={handleChange}
          id="password" 
          type="password" 
          alt="icone do input do password"
          icon="password"
        />

        <Button>Entrar</Button>
      </FormWrapper>
    </>
  )
}

export default Form
