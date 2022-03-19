const axios = require('axios');

const api = axios.create({
    baseURL : 'http://localhost:3000/api'
})

const getAllStudents = () => api.get(`/student`)

export default getAllStudents;