import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'

require('../mocks')

export default function App({ Component, pageProps }: AppProps) {
  const isDevelopment = process.env.NODE_ENV === 'development'
    const [isMockReady, setIsMockReady] = useState<boolean>(false)
    if (isDevelopment && !isMockReady) {
      setTimeout(() =>{
        setIsMockReady(true)
      },100)
    }
    
    if (isDevelopment){
      if(isMockReady){
        return <Component {...pageProps} />
      }
      return <>Cargando mock inicial...</>
    }
  return <Component {...pageProps} />
}
