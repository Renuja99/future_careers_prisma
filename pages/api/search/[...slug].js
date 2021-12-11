import { prisma } from "../../db";


export default async function (req, res) {
  
   
  try{
    const { slug } = req.query;

    console.log(slug)

    const result = await prisma.job_advert.findMany({
      where: {
        job_title: {
          search: `${slug[0]}`,
        },
        job_description:{
          search: `${slug[0]}`
        }
      },
      include:{
        company: {
          select: {
            company_name:true,
            address: true
          }
        }
      }
            
    })
    if(result.length === 0){
      const result2 = await prisma.company.findMany({
       where: {
         company_name: {
           search: `${slug[0]}`,
         }
       },
       include:{
         job_adverts: true
       }
       
       
     })

     let results2Modified = [] ;
     result2.map((result)=>{
        const { company_name, address, job_adverts } = result 
        job_adverts.map(jobadvert=>{
                
           const obj = {

            id: jobadvert.id,
            job_title: jobadvert.job_title,
            company_id: jobadvert.company_id,
            click_count: jobadvert.click_count,
            job_type_id: jobadvert.job_type_id,
            closing_date: jobadvert.closing_date,
            job_time_id: jobadvert.job_time_id,
            exp_level_id: jobadvert.exp_level_id,
            min_wage: jobadvert.min_wage,
            max_wage: jobadvert.max_wage,
            industry_type_id: jobadvert.industry_type_id,
            job_description: jobadvert.job_description,
            company:{
              company_name: company_name,
              address: address
            }
           }

           results2Modified.push(obj)
        
        })

     })
     console.log(results2Modified)
     console.log(result2)
     res.status(200).json(results2Modified)
   }else{

     console.log(result)
     res.status(200).json(result)
   }
  }catch(err){
    console.error(err)
  }
    

    

   
    
   
  }
  