import client from './client'

export const register = ({username, password}) =>
  client.post('/api/auth/register', {
    username,
    password
  })

export const login = ({username, password}) =>
  client.post('/api/auth/login', {
    username,
    password
  })

export const checkAuth = () => client.get('/api/auth/check')
export const refreshToken = () => client.post('/api/auth/refresh-token')
export const logout = () => client.post('/api/auth/logout')