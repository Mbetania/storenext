import { useEffect, useState } from "react"
import { userNameRest } from "../mocks/responses.types"
import { getInitialData } from "../services/login.service"

export const useInitialData = () => {
    const initialValue = {userId : '', storeName: '', storeUrl: ''}
    const [initialData, setInitialData] = useState<userNameRest>(initialValue)
    const handlerInitialData = async () => {
        try {
            const response = await getInitialData('909516', '02103921309213290')
            setInitialData(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        handlerInitialData()
    },[])

    return { initialData }
}