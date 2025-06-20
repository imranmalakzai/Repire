
import { styles } from "../styles"
import { aboutImg } from "../assets"
import Button from "./Button"

function About() {
  return (
    <section className="w-full mt-25">
     <div className={`${styles.Layout}`}>
         <div className="flex justify-evenly items-center md:flex-row flex-col gap-8">
         <div>
       <h1 className="text-3xl text-cyan mb-2 font-semibold">About Us</h1>
       <p className="max-w-md mb-3 text-xl text-gray-800">
       There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomisedThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised
       </p>
       <Button  Text={"Read More"}/>
     </div>
     <div>
       <img src={aboutImg} alt="About" />
     </div>
         </div>
     </div>
    </section>
   )
}

export default About