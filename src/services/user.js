import axios from 'axios'
const baseUrl = '/api/users'

const get = async (user_id) => {
  const response = await axios.get(`${baseUrl}/${user_id}`)
  return response.data
}

const create = async (newUser) => {
  const response = await axios.post(baseUrl, newUser)
  return response.data
}

export default { get, create }