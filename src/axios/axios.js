import axios from 'axios'

const getAlluser = async (id) => {
    return await axios.get(`http://localhost:8080/get-crud?id=${id}`)
}

export { getAlluser }