import '../styles/globals.css'

// Every Component Will come here and render from here
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
