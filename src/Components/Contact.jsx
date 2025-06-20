
import { styles } from "../styles"
const Contact = () => {
  return (
    <section className={`${styles.Layout} mt-20 mb-20`}>
      <div className="flex md:flex-row flex-col max-md:justify-center gap-16 items-center">
        <h1 className="text-3xl font-semibold">Sing Up For <span className="text-cyan">Updates</span> <br  className="hidden md:block"/> & NewsLatter</h1>
        <div className="border flex-1 rounded-full flex justify-between px-2 items-center hover:shadow-2xl">
          <input type="text" placeholder="Subscribe@work.com" className=" h-[60px] outline-none border-none px-2 w-[50%] max-md:[50%] py-5" />
          <button className="font-semibold bg-cyan px-15 max-md:px-10 max-md:py-2 max-sm:w-[180px] max-sm:h-[50px]  max-sm:py-[4px] py-4 cursor-pointer border border-cyan rounded-full text-white hover:text-black hover:bg-blue-400">Sing Up</button>
        </div>
      </div>
    </section>
  )
}

export default Contact