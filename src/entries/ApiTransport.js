import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/api'
axios.defaults.headers = { dataIdentefier: `Some person` }

export class Api {
	static getInstance() {
		return new Api()
	}

	get(url, options) {
		return axios.get(`${url}`, options)
	}

	put(url, data) {
		return axios.put(`${url}`, data)
	}

	post(url, data) {
		return axios.post(`${url}`, data)
	}

	patch(url, data) {
		return axios.patch(`${url}`, data)
	}

	delete(url) {
		return axios.delete(`${url}`)
	}
}
