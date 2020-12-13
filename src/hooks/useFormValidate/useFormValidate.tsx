import React from 'react'

const useFormValidate = () => {
  const [errorField, setErrorField] = React.useState({
    email: '',
  })

  function validatePassword(password: string): boolean | undefined {
    if(password.length >= 4) {
      setErrorField({ email: ''})
      return true;
    }
  }

  function validateData(email: string): boolean | undefined  {
    if(email.includes('@')) {
      const value = email.valueOf();
      const beforeSign = value.split("@")

      if(beforeSign[0].length >= 4) {
        setErrorField({ email: ''})
        return true
      }else {
        setErrorField({email: 'Insira um e-mail valído'})
      }
    }else {
      setErrorField({email: 'Insira um e-mail valído'})
    }
  }

  return {validatePassword, validateData, errorField }
}

export default useFormValidate;
