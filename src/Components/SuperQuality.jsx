import { shoe8 } from "../assets/images"
import Button from "./util/Button"
function SuperQuality() {
  return (
    <section id="AboutUs" className="flex justify-between flex-col sm:flex-row  items-center gap-10 w-full m-0">
      <div className="flex-1 flex flex-col">
    <h2 className="capitalize mt-10 font-mono text-4xl max-sm:text-7xl max-sm:leading-[82px] font-bold">
      <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">We Provide You</span>
      <span className="inline-block mt-3 text-red-400">Super</span><br />
      <span className="inline-block mt-3 text-red-400">Quality</span> shoes
    </h2>
    <p className="font-mono text-gray-600 text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Discover stylish Nike arriva
       for your active life.
       stylish Nike arriva
       for your active lif
       iscover stylish Nike
       </p>
    <p className="font-mon text-bolder text-lg leading-0 mt-0 mb-14 sm:max-w-sm">Best Quality over the history </p>
    <div className="mt-4">
    <Button label="View Details" />
    </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt="product"  width={570} height={522} className="object-contain"/>
      </div>
    </section>
  )
}

export default SuperQuality