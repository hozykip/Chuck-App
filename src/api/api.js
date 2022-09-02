import axios from "axios"
import { handleError, handleResponse } from "./apiUtils"

const baseUrl = 'http://127.0.0.1:6143/api/'

export function getChuckCategories() {
    let url = baseUrl + 'chuck/categories'
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