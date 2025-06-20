import {Navbar,Hero,PopularProducts,SuperQuality,Services,SpacialOffer,SubScribe,CustomersReviews,Footer} from '../../index'


function Rander() {
  return (
   <main>
    <Navbar />
    <section className='padding-x' >
      <Hero />
    </section>
    <div className='mx-auto xl:max-w-7xl' >
    <section className="padding"  >
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="w-full">
      <Services />
    </section>
    <section className="padding">
      <SpacialOffer />
    </section>
    <section className="bg-gray-100">
      <CustomersReviews />
    </section>
    <section className="padding-y">
      <SubScribe />
    </section>
   <footer>
    <Footer />
   </footer>
    </div>
   </main>
  )
}

export default Rander