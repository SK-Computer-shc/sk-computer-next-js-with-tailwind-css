import '../styles/globals.css'
import Header from '../public/components/header'
import Footer from '../public/components/footer'

function MyApp({ Component, pageProps }) {
  return <> 
  <Header/>
  <Component {...pageProps} />
  <Footer/>
  </>
}

export default MyApp
