import {styles} from '../styles'
import Button from './Button'
import { professionalImg } from '../assets'
function Profession() {
  return (
    <section className={`${styles.Layout} bg-[#d1e3ff] mt-25 py-10`}>
      <div className='flex justify-center items-center max-md:flex-col'>
          <img src={professionalImg} alt="img" />
        <div>
          <h1 className='text-cyan font-bold text-3xl font-mono max-w-md'>    
              We Provide Professional
              Home Services.
          </h1>
          <p className='font-mono text-gray-700 max-w-md mt-5 mb-4'>
          randomized words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All randomized words which don't look even slightly
          </p>
          <Button Text={"Read More"} />
        </div>
      </div>
    </section>
  )
}

export default Profession