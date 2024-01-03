export function validateMessage (message) {
  console.log(message)
  if (!message) {
    return 'Mensagem não encontrada'
  } else if (String(message).startsWith('Internal server error')) {
    return 'Erro interno do servidor'
  }


  switch (message) {
    case 'name is invalid':
      return 'O nome é inválido, tente algo como "João Silva"'
    case 'email is invalid':
      return 'O email é inválido, tente algo como exemple@exemple.com'
    case 'password is invalid':
      return 'A senha é inválida, tente novamente'
    case 'email already exists':
      return 'O email já existe, tente outro email ou faça login'
    case 'email not found':
      return 'O email não existe, tente outro email ou crie uma conta'
    case 'password is incorrect':
      return 'A senha está incorreta, tente novamente'
    case 'user created':
      return 'Cadastro criado com sucesso'
    case 'Invalid request method':
      return 'Método de requisição inválido'
    case 'Failed to get data':
      return 'Falha ao obter dados'
    case 'Failed to generate token':
      return 'Falha ao gerar acesso'
    default:
      return message
  }
}