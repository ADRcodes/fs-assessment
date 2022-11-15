import axios from "axios"

const baseUrl = "http://localhost:5050/users"

const api = axios.get(baseUrl).then((response) => {
  console.log(response.data)
})

export default api
