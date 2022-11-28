import { onUnhandledRequestOptions, startOptions } from './options'

const isServer = typeof window === 'undefined'


async function initialzeMocks(){
    if (isServer){
        const { server } = await import('./server')
        server.listen(onUnhandledRequestOptions)
    }else{
        const { browserWorker } = await import ('./browser')
        browserWorker.start(startOptions)
    }
}
initialzeMocks()
export {}