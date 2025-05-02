import { useState } from 'react'
import validateRegisterForm from '../../utils/validateRegisterForm.js'
import Label from '../Labels/Label.jsx'
import Input from '../Inputs/Input.jsx'
import Button from '../Buttons/Button.jsx'

export default function FormRegister() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    const errorMsg = validateRegisterForm({ email, password, confirmPassword })
    if (errorMsg) {
      setError(errorMsg)
      return
    }

    const newUser = {
      email,
      password
    }
    localStorage.setItem('user', JSON.stringify(newUser))
    setSuccess('Cadastro realizado com sucesso!')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
  }

  
  return (
    <>
    { error && <p style={{ color: 'red' }}>{error}</p> }
    { success && <p style={{ color: 'green' }}>Cadastro realizado com sucesso!</p> }
    <form noValidate onSubmit={handleSubmit}>
      <Label text='Email: ' htmlFor='email' />
      <Input type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)}  /><br></br>
      <Label text='Senha: ' htmlFor='password' />
      <Input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} /><br></br>
      <Label text='Confirmar Senha: ' htmlFor='confirmPassword' />
      <Input type='password' id='confirmPassword' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /><br></br>
      <Button type='submit' text='Enviar' />   
    </form>
    </>
  )
}