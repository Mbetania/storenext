import {get as restGet} from './shared/rest.service'

export const getInitialData =async (userId:string, token:string) =>{
    const endpoint = 'initial'
    const params = {userId:userId}
    try {
        const result = await restGet(endpoint, params, token)
        return result
    } catch (error) {
        console.error(error)
        return error
    }
}