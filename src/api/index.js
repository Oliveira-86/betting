import axios from "axios"

const API = axios.create({ baseURL: "https://demo1.demofabets.com", headers: {
  'Content-Type': 'application/json',
} })

export const fetchLeagues= () => API.get('/sports/get_sports')