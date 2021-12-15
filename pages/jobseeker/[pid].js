import React, {useState, useEffect} from 'react'
import Navbar from '../../components/navbar'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'


const index = () => {

    const [preview, setPreview] = useState(true);

    const [cv_user, setCV] = useState()

    const router = useRouter()

   

    

    useEffect(()=>{
 
        const getCv = async()=>{


           const last = window.location.href.split('/').pop() 
           console.log(last)       
          const response = await fetch( `/api/cv_info/${last}`,{
            method: 'GET',
            headers:{
              'Content-Type':'application/json'
            }
          })

          const data = await response.json()

          console.log(data.cv_user.trim())
          console.log(data.cv_user)


          setCV(data.cv_user)

          

         

        }

        
        getCv()
        



    },[])

    return (
        <div>
            <header>
             <Navbar/>
         </header>
            <main className="bg-gray-200 max-w-full h-auto p-10 px-64" style={{ height: '91vh'}}>
                <h1 className="text-5xl">Create Your CV to land your dream job...</h1>
             <div className=" flex justify-between items-start gap-7 mt-6 ">
                 <div className="h-96 w-full bg-white border-gray-400 border-2 rounded-2xl" style={{ height: '700px'}}>
                       
                     { cv_user ? <PostManager preview={preview} cv_user={cv_user}/> : null }   
                 </div>
                 <div className="w-96 h-64 flex flex-col gap-7 justify-center">
                    <a href="#" className="inline-flex items-center justify-center w-full px-20 py-5 text-xl font-bold leading-6 text-white bg-red-400  border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-0 " onClick={()=>{setPreview(true);console.log(preview)}}>Preview</a>

                    <a href="#" className="inline-flex items-center justify-center w-full px-20 py-5 text-xl font-bold leading-6 text-black bg-gray-400  rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-0 " onClick={()=>{setPreview(false);console.log(preview)}}>Edit</a>
                 </div>
             </div>
         </main>   
        </div>
    )
}

export default index


function PostManager({preview, cv_user}){

    const router = useRouter();
    const {slug} = router.query;

    return(

        <main>
            
                
                    <section>

                        <PostForm  preview={preview} cv_user={cv_user}></PostForm>
                    </section>
                

            
        </main>
    )
}

function PostForm({cv_user, preview}){

    const previewStyling = 'py-10 px-10'

    const [previewText, setPreviewText] = useState(modifiedText)

    const { register, handleSubmit, reset, watch} = useForm({ defaultValues:{},  mode:'onChange' });

    const updatePost = async({content, published}) =>{

    }

   


    const replaceText = ()=>{

        

        return cv_user.replace(/<br>/g, "<br>\r\n")
    }

    const modifiedText = replaceText()

    return (

        <form onSubmit={handleSubmit(updatePost)}>

            { preview && (
                <div className={`${previewStyling}`}  >
                        <ReactMarkdown className="reactMarkDown line-break" remarkPlugins={[remarkGfm]}  skipHtml={true} 
                        rehypePlugins={[rehypeRaw]} >{modifiedText.replace(/<br>/g, "")}</ReactMarkdown>
                </div>
                
            )}
            <div className="flex">
            <textarea id="text-area" name="content" defaultValue={modifiedText} {...register('content')} className={`w-full my-0 mb-14 rounded-3xl reactTextArea ${previewStyling}`} style={ preview ? ({ display:"none"}):{height:"600px", resize: "none"}}  cols="100"
            onLoad={(e)=>{setPreviewText(e.target.value.replace(/<br>/g, ""))}}>
               
            </textarea>

            
            <aside>
            <button type="submit" className={preview? ("hidden"):("bg-green-400  inline-flex items-center justify-center w-full px-20 py-5 text-xl font-bold leading-6 text-white  border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-60 -mr-96 ml-8")}>
                <p> Save Changes </p>
            </button>
            </aside>
           
        </div>
            
            

            
        </form>
    )
}


