import { url } from 'inspector'
import {StartOptions} from 'msw'

export const onUnhandledRequestOptions = {
    onUnhandledRequest : (({method , url}:any) => {
        if ( !url.pathname.startWith('./api')){
            throw new Error (`Unhandled ${method} request to ${url}`)
        }else{
            return null
        }
    })
}

export const startOptions: StartOptions = {
    // quiet: true
    ...onUnhandledRequestOptions
}