import { prisma } from "../../db";

export default async function get_cv(req, res) {
  
 console.log('reached')   
  
 const { user_id } = req.query;
 
 console.log(user_id)

  const user = await prisma.job_seeker.findUnique({
      where:{
          userId: parseInt(user_id)
      }
  })


  res.status(200).json(user)
}
