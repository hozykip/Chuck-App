import axios from "axios"
import { handleError, handleResponse } from "./apiUtils"

const baseUrl = process.env.REACT_APP_BASE_API;

export function getChuckCategories() {
    let url = baseUrl + 'chuck/categories'
    console.log('getChuckCategories')
    return axios.get(url).then(handleResponse).catch(handleError)
}

export function getRandomJoke(category) {
    let url = baseUrl + 'chuck/random?category=' + category
    return axios.get(url).then(handleResponse).catch(handleError)
}

export function getPeople(page) {
    let url = baseUrl + 'swapi/people?page=' + page
    return axios.get(url).then(handleResponse).catch(handleError)
}

export function search(query, page) {
    let url = baseUrl + `search?query=${query}&page=${page}`
    return axios.get(url).then(handleResponse).catch(handleError)
}