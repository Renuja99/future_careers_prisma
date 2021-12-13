import React from 'react'
import Layout from '../layout'
import Table from './applicants_table'
import { prisma } from "../../db";

const Applicants = ({parsed_applicants}) => {
    return (
        <>
           <Layout/>
           <Table parsed={parsed_applicants}/>
        </>
    )
}

export default Applicants


export const getServerSideProps = async(context)=>{

    const job_advert_id = context.params.id

    const applicants = await prisma.jobAdvertsOnSeekers.findMany({

        where: {
            jobAdvertId: parseInt(job_advert_id)
        },
        include:{
            jobSeeker: true
        }
    })

    

    const parsed_applicants= JSON.parse(JSON.stringify(applicants))

    console.log(parsed_applicants)

    return{
        props:{
                parsed_applicants
        }
    }
}