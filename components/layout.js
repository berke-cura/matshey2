import Navbar from './navbar.js'
import Footer from './footer.js'
import Contact from './contact.js'

 
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Contact />
      <Footer />
    </>
  )
}