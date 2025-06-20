import { feedback } from "../Constants/index.js"
import Feedback from "./Feedback"

const Testimonials = () => 
  (
    <section className="flex  flex-col sm:mt-11 mt-6 gap-15">
      <div className="flex md:flex-row flex-col sm:gap-16 gap-3 sm:justify-evenly ">
        <h1 className="text-white font-semibold uppercase text-5xl leading-14 max-w-md">What People Are Saying About US</h1>
        <p className="max-w-[530px] text-xl self-center text-gray-200">
        Every thing your need to accept card payments and grow your business anywhere on the plants
        </p>
      </div>
      <div className="flex relative z-10 sm:justify-between flex-wrap max-sm:gap-5">
        {
          feedback.map((feed)=>(
            <Feedback  key={feed.id} {...feed}/>
          ))
        }
      </div>
    </section>





  )


export default Testimonials