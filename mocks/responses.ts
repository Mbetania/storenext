import {rest} from 'msw' 
import username from './json/username.json'
import usernameinvalid from './json/usernameinvalid.json'
const baseUrl = 'https://localhost:3000/api/v1'
const valueUserId= '909516'
// const validToken = 'canelacanela123'

export const getUserName = rest.get(`${baseUrl}/initial`,(req:any,res,context)=>{
    const userId  =  req.url.searchParams.get('userId')
    const token  =  req.url.searchParams.get('token')
    // token !== validToken || 
    if (userId !== valueUserId){
        return res(
            context.delay(300),
            context.json(usernameinvalid)
        )
    }

    console.log(userId)
    return res(
        context.delay(400),
        context.json(username)
        )
})