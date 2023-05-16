import axios from 'axios'

const url = 'http://localhost:3001/persons'

const getAllPeople = () => {
	const request = axios.get(url)
	return request.then(response => response.data)
}

const createPerson = newObject => {
	const request = axios.post(url, newObject)
	return request.then(response => response.data)
}

const updatePerson = (newObject, id) => {
	const request = axios.put(`${url}/${id}`, newObject)
	return request.then(response => response.data)
}

const deletePerson = (id) => {
	// console.log("newObject ID: ", id);
	const request = axios.delete(`${url}/${id}`)
	return request.then(response => response.data)
}




export default {getAllPeople, createPerson, updatePerson, deletePerson}