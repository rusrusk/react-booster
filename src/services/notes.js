import axios from 'axios'

const url = 'http://localhost:3001/notes'

const getAll = () => {
	const req =  axios.get(url)
	return req.then(response => response.data)
}

const create = newObject => {

	const req = axios.post(url, newObject)
	return req.then(response => response.data)
}


const update = (id, newObject) => {
	const req = axios.put(`${url}/${id}`, newObject)
	return req.then(response => response.data)
}


export default { getAll, create, update }