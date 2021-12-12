import { prisma } from "../db";
import generateToken from '../../utils/generateToken';

export default async (req, res)=>{

    //authenticate user
    try{
    
      

        const {email,password, role} = req.body;

        //check is user exists from database
        const user = await prisma.user.findUnique({

            where:{
                email: email,
            },
            include:{
                notifications: true,
            }
        })

        console.log(user)

        if(user && (user.password === password) && (user.role=== role) ){

            res.status(200).json({  

                _id: user.id,
                email: user.email,
                role: user.role,
                notifications: user.notifications,
                token: generateToken(user.id)
            })

        }else{
            res.json({
                error: 'user authentication failed'
            })
        }

    }catch(error){
        res.status(401).json({
            error: 'user authentication failed'
        })
    }



    //generate token
}

