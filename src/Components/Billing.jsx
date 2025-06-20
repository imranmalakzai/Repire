import React from 'react'
import { apple,google,bill } from '../assets'
import styles,{layout} from '../style'

function Billing() {
  return (
    <section id='Product' className=' flex md:flex-row flex-col-reverse text-white mt-10'>
      <div>
        <img src={bill} alt='bill' className='relative z-10 w-full h-full object-contain' />
        <div className="absolute z-1 w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        <div className="absolute z-2 w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-3 w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
      <div className='self-center'>
        <h2 className='font-mono text-4xl max-w-md font-semibold'>Easily control your billing & invoicing.</h2>
        <p className='mt-4 text-2xl max-w-2xl text-gray-400'>Elit enim sed mssa etiam. Mauris eu adipiscing ultries ametodio annecan fusce ipsum orci rhoncus titor intergter platea placerat adipiscing ultries ametodio annecan</p>
        <div className='mt-5 flex justify-center items-center cursor-pointer'>
        <img src={apple} alt='apple' />
        <img src={google} alt='goglePlay' />
        </div>
      </div>
    </section>
  )
}

export default Billing