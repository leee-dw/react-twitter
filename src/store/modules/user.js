import { createAction, handleActions} from 'redux-actions'
import * as api from 'lib/api'
import { applyPenders } from 'redux-pender'
import produce from 'immer'

const CHECK_AUTH = 'user/CHECK_AUTH'
const TEMP_SET_USER = 'user/TEMP_SET_USER'
const REFERSH_TOKEN = 'user/REFRESH_TOKEN'
const LOGOUT = 'user/LOGOUT'


export const checkAuth = createAction(CHECK_AUTH, api.checkAuth)
export const tempSetUser = createAction(TEMP_SET_USER, user => user)
export const refreshToken = createAction(REFERSH_TOKEN, api.refreshToken)
export const logout = createAction(LOGOUT, api.logout)

const initialState = {
  user: null,
  tokenExp: null,
}



const reducer = handleActions(
  {

}, initialState)

export default reducer

