import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://merntinderclone.herokuapp.com'
})

export default instance;