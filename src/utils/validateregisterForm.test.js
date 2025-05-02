import validateRegisterForm from './validateRegisterForm';

describe('validateRegisterForm', () => {
    it('retorna erro se algum campo estiver vazio', () => {
        expect(validateRegisterForm({email: '', password: '123456', confirmPassword: '123456'})).toBe('Preencha todos os campos'); 
        expect(validateRegisterForm({email: 'teste', password: '123456', confirmPassword: ''})).toBe('Preencha todos os campos'); 
        expect(validateRegisterForm({email: 'teste@teste.com.br', password: '', confirmPassword: '123456'})).toBe('Preencha todos os campos');
        expect(validateRegisterForm({email: '', password: '', confirmPassword: ''})).toBe('Preencha todos os campos');  
    })
    it('retorna erro se as senhas não conferem', () => {
        expect(validateRegisterForm({email: 'teste@teste.com.br', password: '123456', confirmPassword: '654321'})).toBe('Senhas não conferem');
})
it('retorna erro se o email for inválido', () => {
    expect(validateRegisterForm({ email: 'invalidemail', password: '123456', confirmPassword: '123456' }))
      .toBe('Email inválido')
  })

  it('retorna erro se a senha for muito curta', () => {
    expect(validateRegisterForm({ email: 'a@a.com', password: '123', confirmPassword: '123' }))
      .toBe('Senha deve ter pelo menos 6 caracteres')
  })

  it('retorna null se os dados forem válidos', () => {
    expect(validateRegisterForm({ email: 'a@a.com', password: '123456', confirmPassword: '123456' }))
      .toBe(null)
  })
}
)