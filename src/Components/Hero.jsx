import { styles } from "../styles"
import { sliderImg } from "../assets"
import Button from "./Button"
const Hero = () => {
  return (
    <main className="bg-[#d1e3ff] h-max pt-30">
      <div className={`${styles.Layout}`}>
        <div className="w-full flex md:flex-row flex-col items-center justify-evenly ga-10 max-sm:g">
          <div className="flex flex-col items-start">
            <h1 className="text-4xl text-cyan font-bold sm:max-w-sm">Repair and Maintenance Services</h1>
            <p className="text-xl pb-4 font-mono max-w-md mt-4 text-gray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui harum voluptatem adipisci. Quos molestiae saepe dicta nobis pariatur, tempora iusto, ad possimus soluta hic praesentium mollitia consequatur beatae, aspernatur culpa.</p>
            <Button Text={"Contact US"}/>
          </div>
          <div>
            <img src= {sliderImg} alt="slider" className="max-h-full" />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Hero