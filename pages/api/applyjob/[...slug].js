import { prisma} from "../../db";
import {Prisma} from "@prisma/client";

export default async function sendCV(req, res) {


    try{

        console.log(' send cv reached')   
        
        const { slug } = req.query;
        
        console.log(slug[0])
        console.log(slug[1])
        
        //  let jobadvertSeeker = Prisma.JobAdvertsOnSeekersCreateInput

        //  jobadvertSeeker ={
        //      jobSeekerId: parseInt(slug[0]),
        //      jobAdvertId: parseInt(slug[1])
        //  }

        const user = await prisma.jobAdvertsOnSeekers.create({
            data:{
                jobSeeker:{
                    connect:{
                        userId: parseInt(slug[1])
                    }
                },
                jobAdvert:{
                    connect:{
                        id: parseInt(slug[0])
                    }
                }
            }
        })

     res.status(200).json({message: 'successful'})


    }catch(err){
        res.status(500).json({message : 'Unsuccess'})
    }
  
 


}
