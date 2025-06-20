import { star } from "../../assets/icons"
function PopularProduct({img,name,price}) {
  return (
    <div className="flex-1 flex flex-col w-full ml-5">
      <img src={img} alt="popular Collection" width={280} height={280}/>
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-mono text-xl leading-normal text-red-400 ">4.5</p>
      </div>
      <h3 className="font-mono font-bold text-2xl">{name}</h3>
      <p className="font-mono font-bold text-2xl text-red-400">{price}</p>
    </div>
  )
}

export default PopularProduct