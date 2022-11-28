import axios from "axios";

const baseUrl = 'https://localhost:3000/'

export const get = async (endpoint:string, params:Object, token:string) =>{
    const url = `${baseUrl}api/v1/${endpoint}`
    const options = {
        method : 'GET',
        headers: {
            "Content-Type" : "application/json",
            "Accept" : "application/json",
            "Authorizacion" : `Bearer ${token}`
        },
        params : params,
        url,
    }


    try {
        const result = await axios(options)
        return result?.data || result
    } catch (error:any) {
        console.warn(error)
        throw new Error(await error?.response?.data?.error || 'Ocurrió un error')
        
    }
}