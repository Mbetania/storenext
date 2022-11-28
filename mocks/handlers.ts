import { rest } from 'msw' 
import { getUserName } from './responses'

export const handlers = [
    getUserName,
    
]