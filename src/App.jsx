import styles from "./style"
import Billing from "./Components/Billing";
import CardDeal from "./Components/CardDeal";
import Clients from "./Components/Clients";
import CTA from "./Components/CTA";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import States from "./Components/States";
import Testimonials from "./Components/Testimonials";
import Business from "./Components/Business";


const App = () => (
  <div className="w-full bg-black overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}>
      <Navbar />
    </div>
    </div>

    <div className={`bg-black ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
          <Hero />
      </div>
    </div>

    <div className={`bg-black ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
      <States />
      <Business />
      <Billing />
      <CardDeal />
      <Testimonials />
      <Clients />
      <CTA />
      <Footer/>
      
      </div>
    </div>
  </div>
) 

export default App