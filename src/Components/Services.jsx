import {styles} from '../styles'
import { support,truckFast,shieldTick } from '../assets';
const Services = () => {
   const servicesData = [
    {
      id: 1,
      name: support,
      title: "Support",
      about:
        "We provide the best frond-end and backend for all the types of our products if you interested contact us",
    },
    {
      id: 2,
      name: truckFast,
      title: "truckFast",
      about:
        "we provide the best way for carry our product to all around the world I would be happy to know which kinds transition your like",
    },
    {
      id: 3,
      name: shieldTick,
      title: "shieldTick",
      about:
        "We provide the best frond-end and backend for all the types of our products if you interested contact us",
    },
  ];
  return (
    <section className={`${styles.Layout} mt-20`}>
      <div className='flex justify-center gap-16 flex-wrap'>
        {servicesData.map((prev)=>(
          <div key={prev.id} className='flex flex-col  shadow-2xl p-8 justify-center rounded-2xl'>
            <div className='flex gap-2 items-center mb-2'>
            <img src={prev.name} alt='collection' className='bg-cyan p-2 rounded-full w-10 h-10' />
            <h1 className='font-mono text-3xl'>{prev.title}</h1>
            </div>
            <p className='max-w-[260px] text-gray-700 text-xl'>{prev.about}</p>
            
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services