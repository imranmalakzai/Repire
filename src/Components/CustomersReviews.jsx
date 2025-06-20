import { reviews } from "./util"
import Review from "./util/Review"
function CustomersReviews() {
  return (
    <section className="xl:max-w-7xl mx-auto sm:px-16 px-6 py-5 w-full">
      <h3 className="text-center font-bold font-mono text-4xl">
        What Our 
        <span className="text-red-400"> Customers</span> Say?
      </h3>
      <p className="text-gray-500 mt-4 m-auto max-w-lg center">
      Hear genuine stories from our satisfied customers about their exceptional experiences with us.
      </p>
      <div className="mt-2 flex flex-1 justify-evenly items-center max-lg:flex-row max-sm:flex-col " >
        {
          reviews.map((item)=>(
            <Review key={item.customerName} {...item}/>
          ))
        }
        </div>
    </section>
  )
}

export default CustomersReviews