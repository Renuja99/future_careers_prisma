import { useEffect, useState, useContext } from "react";
import { UserContext } from "./context";



export function useUserData(){

    

    const [userInfo, setUser] = useState()

    useEffect(()=>{


        console.log('hook reached')


        const  getUserInfo= async()=>{
            let obj = JSON.parse(localStorage.getItem("userInfo")) ;
            setUser({obj})
        }

        getUserInfo()
        console.log(userInfo)

            

        

        // console.log(JSON.parse(localStorage.getItem("userInfo")))

    }, []) ;

    return {userInfo}
}