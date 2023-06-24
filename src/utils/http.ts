import axios from 'axios'
import { BACKEND } from '@config/constants'

const http = axios.create({
  baseURL: BACKEND,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default http
