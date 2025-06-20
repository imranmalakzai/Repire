import Button from "./util/Button"
import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
function SpacialOffer() {
  return (
   <section className="flex sm:flex-row-reverse gap-10 flex-col-reverse justify-center mt-8">
    <div className="flex-1 flex flex-col">
    <h2 className="capitalize mt-10 font-mono text-4xl max-sm:text-7xl max-sm:leading-[82px] font-bold">
      <span className="inline-block mt-3 text-red-400">Special</span> Offer
    </h2>
    <p className="font-mono text-gray-600 text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Discover stylish Nike arriva
       for your active life.
       stylish Nike arriva
       for your active lif
       iscover stylish Nike
       </p>
    <p className="font-mon text-bolder text-lg leading-0 mt-0 mb-14 sm:max-w-sm">Best Quality over the history </p>
    <div className="mt-4">
    <div className="flex justify-left gap-5">
    <Button label="Shop Now" iconUrl={arrowRight} />
    <button className="px-7 cursor-pointer py-3 rounded-full border">Learn more</button>
    </div>
    </div>
      </div>
      <div className="flex-1">
        <img src={offer} alt="Offer" />
      </div>
   </section>
  )
}

export default SpacialOffer