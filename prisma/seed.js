import pkg  from "@prisma/client";

const { PrismaClient } = pkg;

const prisma = new PrismaClient();


const jobadverts = [
   
]

const companies = [
    {
        
    }
]

async function main(){
    for( let job_advert of jobadverts){
        await prisma.job_advert.create({
            data: job_advert
        })
    }
}

main().catch(e=>{
    console.log(e)
    process.exit(1)
}).finally(()=>{
    prisma.$disconnect();
})