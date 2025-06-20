import Button from "./Button"
const CTA = () =>(
 <div className="flex items-center justify-center">
   <div className="mt-10 bg-gradient-to-r from-gray-800 to-gray-800 max-md:px-6 py-10 max-sm:pb-2 flex items-center rounded-2xl sm:justify-evenly sm:w-[70%] max-md:flex-col ">
    <div>
      <h1 className="font-semibold text-3xl text-white max-w-sm ">Lets Try Our Services Today</h1>
      <p  className="text-xl text-gray-200 max-w-sm">Everything you need to accept card payments and grow your business anywhere on the planet.</p>
    </div>
    <Button  Text={"Get Started"}/>w
  </div>
 </div>
)

export default CTA