import 'tailwindcss/tailwind.css'
import '../styles.css'
import '../global.css'
import { Toaster } from 'react-hot-toast'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function MyApp({ Component, pageProps }) {
  

  
  return  ( 

        <>
          <Component {...pageProps} />
          <Toaster />
        </>
          
       
  )
  
}

export default MyApp
