import '../styles/globals.css'
// You can import the global css here that will apply every component

// Every Component Will come here and render from here
function MyApp({ Component, pageProps }) {
  // console.log("Abhishek");
  return <Component {...pageProps} />
}

export default MyApp
