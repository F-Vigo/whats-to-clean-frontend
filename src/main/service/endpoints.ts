import axios from "axios"
import { Chore } from "../domain/chore"

const host: string = process.env.REACT_APP_HOST!

const getUsername = (): string => {
    const user_index : string | null = window.localStorage.getItem("user_index")
    return user_index === null ? ""  : user_index
}

const endpointPath = (path: string): string => {
    return `${host}/${path}`
}


const getEndpoint = (path: string): Promise<any> => {
    return axios.get(endpointPath(path), {headers: {"user_index": getUsername()}})
}

const postEndpoint = (path: string, data: any): Promise<any> => {
    return axios.post(endpointPath(path), data, {headers: {"user_index": getUsername()}})
}

const putEndpoint = (path: string, data: any): Promise<any> => {
    return axios.put(endpointPath(path), data, {headers: {"user_index": getUsername()}})
}

const deleteEndpoint = (path: string): Promise<any> => {
    return axios.delete(endpointPath(path), {headers: {"user_index": getUsername()}})
}


export const logInEndpoint = (): Promise<any> => {
    return getEndpoint("login")
}

export const logOutEndpoint = (): Promise<any> => {
    return deleteEndpoint("logout")
}




export const getByDateEndpoint = (year: string, month: string, day: string): Promise<any> => {
    return getEndpoint(`chore/${year}-${month}-${day}`)
}

export const getAllEndpoint = (): Promise<any> => {
    return getEndpoint("chore")
}

export const postChoreEndpoint = (data: Chore): Promise<any> => {
    return postEndpoint("chore", data)
}

export const putChoreEndpoint = (room: string, section: string, description: string, data: Chore): Promise<any> => {
    return putEndpoint(`chore/${room}::${section}::${description}`, data)
}

export const deleteChoreEndpoint = (room: string, section: string, description: string): Promise<any> => {
    return deleteEndpoint(`chore/${room}::${section}::${description}`)
}

export const getFileEndpoint = (): Promise<any> => {
    return getEndpoint("file")
}

export const postFileEndpoint = (data: FormData): Promise<any> => {
    return postEndpoint("file", data)
}

export default {}