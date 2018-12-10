import axios from 'axios'

const client = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development' ? '/' : 'https://zzakzzak-e.vlpt.us/',
    withCredentials: true
})

export default client