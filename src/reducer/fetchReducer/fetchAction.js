import { ERROR, LOADING, SUCCESS } from "./fetchType"

export const loadingAction = (payload) => ({
    type:LOADING,
    payload
})

export const errorAction = (payload) => ({
    type: ERROR,
    payload
})

export const successAction = (payload) => ({
    type:SUCCESS,
    payload
})