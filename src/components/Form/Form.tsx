import React from 'react'

import Input from '../Input/Input'

import {FormWrapper, Button, MessageError} from './FormStyle'

const Form = () => {
  const [form, setForm] = React.useState({
    email: '',
    password: ''
  })
  const [errorField, setErrorField] = React.useState({
    email: '',
  })
  const [messageForm, setMessageForm] = React.useState<string | boolean | any>({
    erro: true,
    message: ''
  })
  const timeoutRef = React.useRef(0)

  function validatePassword() {
    if(form.password.length >= 4) {
      setErrorField({email: ''})
      return true;
    }
  }

  function validateData()  {
    if(form.email.includes('@')) {
      const value = form.email.valueOf();
      const beforeSign = value.split("@")

      if(beforeSign[0].length >= 4) {
        setErrorField({email: ''})
        return true
      }else {
        setErrorField({...errorField, email: 'Insira um e-mail valído'})
      }
    }else {
      setErrorField({...errorField, email: 'Insira um e-mail valído'})
    }
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    if(validateData() && validatePassword()) {
      setMessageForm({erro: false, message: 'Login feito com sucesso!'})

      clearTimeout(timeoutRef.current)
      timeoutRef.current = setTimeout(() => {
        setMessageForm({erro: false, message: ''})
      }, 3000)
    } else {
      setMessageForm({erro: true, message: 'Os dados estão incorretos!'})

      clearTimeout(timeoutRef.current)
      timeoutRef.current = setTimeout(() => {
        setMessageForm('')
      }, 3000)
    }
  }

  function handleChange ({target}: React.ChangeEvent<HTMLInputElement>) {
    const {id, value} = target
    setForm({...form, [id]: value})
  }

  return (
    <>
      <FormWrapper onSubmit={handleSubmit}>
        <MessageError style={{color: messageForm.erro ? '#FF5757' : '#00D857', display: messageForm.message ? 'block' : 'none'}}>{messageForm.message}</MessageError>
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
