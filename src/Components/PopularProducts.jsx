import { Products } from "./util"
import PopularProduct from './util/PopularProdec'
function PopularProducts() {
  return (
   <section id="Products" className="max-sm:mt-12">
    <div className="flex flex-col justify-start gap-5">
      <h2 className="font-mono text-4xl font-bold"><span className="text-red-400">Popular</span> Products</h2>
      <p className="font-sans font-bold lg:max-w-lg text-gray-600">Experience top-notch quality and style with our sought-after selections. Discover  a world of comfort, design, and value</p>
    </div>
    <div className="mt-5 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
      {
        Products.map((Product) => (
          <PopularProduct  key={Product.name} {...Product} />
        ))
      }
    </div>
   </section>
  )
}

export default PopularProducts