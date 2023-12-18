const axios = require('axios')

const url = 'https://randomuser.me/api/'

async function getRandomUserData() {
  try {
    const response = await axios.get(url)

    console.log(response.data)

    const userData = response.data.results[0]

    console.log('Nome: ', userData.name.first, userData.name.last)
    console.log('Email: ', userData.email)
    console.log('País: ', userData.location.country)
    // Adicione mais informações conforme necessário
  } catch (error) {
    console.error('Erro ao obter dados do usuário aleatório:', error.message)
  }
}

getRandomUserData()
