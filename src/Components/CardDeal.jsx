import React from 'react'
import { card } from '../assets'
import Button from './Button'

function CardDeal() {
  return (
    <section className='flex sm:flex-row flex-col mt-40 gap-5'>
      <div className='flex max-w-xl flex-col  text-white justify-center'>
        <h1 className='font-mono text-4xl min-w-md font-semibold mb-4'>Find a better card deal in few easy steps.</h1>
        <p className='text-2xl text-gray-400'>Arcu tortor, purus in mattis at sed integer facubus. Aliquest quist aliquest eget mauris torotr. c aliquest ultrices ad, ametau</p>
        <Button Text={"Get Started"} className="self-start" />
      </div>
      <div>
      <img src={card} alt='card'  className='w-full h-full'/>
      </div>
    </section>
  )
}

export default CardDeal