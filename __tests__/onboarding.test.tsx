import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { server } from '../mocks/server'
import Home  from '../pages'


describe('Gets the initial data and render it on screen ', () =>{
    it('Reads storeName on screen', async() =>{
        render( <Home /> )
        const welcomeMessage = await screen.findByTestId('storeName')
        expect(welcomeMessage).toHaveTextContent('Tienda Mia')
    })
})