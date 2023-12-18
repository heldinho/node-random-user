const axios = require('axios')

const url = 'https://randomuser.me/api/'

async function getRandomUserData() {
  try {
    const response = await axios.get(url)
    const userData = response.data.results[0]
    const user = {
      nome: `${userData.name.first} ${userData.name.last}`,
      email: userData.email,
      pais: userData.location.country,
    }
    console.log('Nome: ', userData.name.first, userData.name.last)
    console.log('Email: ', userData.email)
    console.log('País: ', userData.location.country)
    console.log(user)
  } catch (error) {
    console.error('Erro ao obter dados do usuário aleatório:', error.message)
  }
}

getRandomUserData()
