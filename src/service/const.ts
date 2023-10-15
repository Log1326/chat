import process from 'process'

export const HOST = process.env.API_HOST
const AUTH_ROUTE = `${HOST}/api/auth`
const MESSAGES_ROUTE = `${HOST}/api/messages`

export const CHECK_AUTH_ROUTE = `${AUTH_ROUTE}/check-user`
export const ONBOARD_USER_ROUTE = `${AUTH_ROUTE}/onboard-user`
export const GET_ALL_USERS = `${AUTH_ROUTE}/users-contacts`
export const ADD_MESSAGES = `${MESSAGES_ROUTE}/add-message`
export const GET_MESSAGES = `${MESSAGES_ROUTE}/get-messages`
export const GET_CONTACTS = `${MESSAGES_ROUTE}/get-contacts`
export const ADD_MESSAGE_IMAGE = `${MESSAGES_ROUTE}/add-image-message`
export const ADD_MESSAGE_AUDIO = `${MESSAGES_ROUTE}/add-audio-message`
