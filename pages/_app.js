import Navbar from '../components/Navbar'
import '../styles/globals.css'
// You can import the global css here that will apply every component
// In the component you can only add the module.css files 

// Every Component Will come here and render from here
export default function MyApp({ Component, pageProps }) {
  // console.log("Abhishek");
  return<>
  <Navbar/>
   <Component {...pageProps} />
  </>
}

// export default MyApp
