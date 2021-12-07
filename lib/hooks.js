import { useEffect, useState } from "react";



export function useUserData(){

    

    const [userData, setUser] = useState()

    useEffect(()=>{


       
        const fetchData = async()=>{

            const response = await fetch('/api/user')

            const data = await response.json()

            setUser(data)
        }

        fetchData()

    }, []) ;

    return {userData}
}