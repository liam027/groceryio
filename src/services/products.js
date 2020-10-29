import axios from 'axios'
const baseUrl = '/api/products'

let token = null

const setToken = (newToken) => {
  token = `bearer ${newToken}`
}

const create = async (newObject) => {
  const config = {
    headers: { Authorization: token }
  }
  const response = await axios.post(baseUrl, newObject, config)
  return response.data
}

const update = async (id, newObject) => {
  const response = await axios.put(`${baseUrl}/${id}`, newObject)
  return response.data
}

const deleteProduct = async (id) => {
  await axios.delete(`${baseUrl}/${id}`)
  return id
}

export default { create, update, deleteProduct, setToken }