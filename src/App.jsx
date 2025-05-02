import { useState } from 'react'
import './App.css'
import Label from './components/Labels/Label.jsx'
import Input from './components/Inputs/Input.jsx'
import Button from './components/Buttons/Button.jsx'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    if (!email || !password || !confirmPassword) {
      return setError('Preencha todos os campos')
    }
    if (password !== confirmPassword) {
      return setError('Senhas não conferem')
    }
    if (!validateEmail(email)) {
      return setError('Email inválido')
    }
    if (password.length < 6) {
      return setError('Senha deve ter pelo menos 6 caracteres')
    }
    const newUser = {
      email,
      password
    }
    localStorage.setItem('user', JSON.stringify(newUser))
    setSuccess('Cadastro realizado com sucesso!')

  }

  
  return (
    <>
    { error && <p style={{ color: 'red' }}>{error}</p> }
    { success && <p style={{ color: 'green' }}>Cadastro realizado com sucesso!</p> }
    <form>
      <Label text='Email: ' htmlFor='email' />
      <Input type='text' id='email' value={email} onChange={(e) => setEmail(e.target.value)}  /><br></br>
      <Label text='Senha: ' htmlFor='password' />
      <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} /><br></br>
      <Label text='Confirmar Senha: ' htmlFor='confirmPassword' />
      <Input type='password' id='confirmPassword' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /><br></br>
      <Button type='submit' onClick={handleSubmit} text='Enviar' />   
    </form>
    </>
  )

}

export default App
