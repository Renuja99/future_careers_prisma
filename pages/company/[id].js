/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import Table from './job_adverts_table'
// import Modal from './job_advert_form_modal'
import Layout from './layout'
import { useState } from 'react'
import { prisma } from "../db";

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example({parsed}) {

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full">
        
        <Layout/>
        <header className="bg-white shadow">
          <div className="w-3/4 mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Job Advertisements</h1>
            {/* <Modal /> */}
          </div>
        </header>
        <main className="bg-gray-100 h-4/5">
          <div className="w-3/4  mx-auto py-6 sm:px-6 lg:px-8">
            
            
            <Table parsed={parsed}/>
            {/* /End replace */}
          </div>
        </main>
      </div>
    </>
  )
}

export const getServerSideProps = async(context)=>{

   const id = context.params.id;

    const company = await prisma.company.findUnique({

      where:{

        userId: parseInt(id)
      }
    })

    

    

    const job_adverts = await prisma.job_advert.findMany({

      where: {
        company_id: parseInt(company.id)
      }
    })

   const parsed= JSON.parse(JSON.stringify(job_adverts))

   console.log(parsed)

    return{
        props:{
           parsed
        }
    }
  }