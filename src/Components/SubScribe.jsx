import Button from "./util/Button"
function SubScribe() {
  return (
    <section className="flex flex-row max-lg:flex-col justify-evenly items-center gap-10 px-12" id="ContactUs">
      <h3 className="text-4xl lg:max-w-sm leading-17 font-bold font-sans">
        Sing Up For <span className="text-red-400 ">Updates</span> & NewsLatter
      </h3>
      <div className="flex justify-between items-center border w-[80%] p-2 hover:shadow-2xl rounded-full border-gray-600 max-sm:w-full">
        <input type="text" placeholder="Subscribe@nike.com" className="focus:outline-none h-full flex-1 pl-2" />
        <Button label="Sing UP"  />
      </div>
    </section>
  )
}

export default SubScribe