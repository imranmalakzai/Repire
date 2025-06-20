import {Navbar,Hero,Services,Clients,Contact,Footer, About} from '../Components'
import Profession from '../Components/Profession'
const Home = () => {
  return (
    <div>
         <Hero />
         <About />
         <Services />
         <Profession />
         <Clients />
         <Contact />
         <Footer />
    </div>
  )
}

export default Home