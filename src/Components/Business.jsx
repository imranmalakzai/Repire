import React from 'react'
import Button from './Button'
import {features} from "../Constants/index.js"

function Business() {
  return (
   <section id='Features' className='flex max-sm:flex-col-reverse flex-row text-white mt-10 gap-1.5'>
    <div>
      <h1 className='font-mono text-5xl max-w-xl mb-5 font-bold'>You do the <span className='text-gradient'>Business</span> while we handle the money</h1>
      <p className='text-2xl text-gray-300 max-w-md' >With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
      <Button Text="Get Started"/>
    </div>
    <div className='flex flex-col max-w-xl justify-center gap-1.5 max-sm:mb-7 '>
      {features.map((feature)=>(
        <div key={feature.id} className='flex justify-between gap-3 cursor-pointer rounded-2xl px-5 py-6 hover:bg-gray-700 max-sm:px-1 max-sm:py-1.5'>
          <img src={feature.icon} alt={feature.icon} height={50} width={50} />
          <div>
            <h1 className='font-mono text-2xl'>{feature.title}</h1>
            <p className='text-gray-300 text-xl'>{feature.content}</p>
          </div>
        </div>
      ))}
    </div>
   </section>
  )
}

export default Business