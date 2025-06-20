function ServiceCard({imgURL,label,subText}) {
  return (
    <div className=" max-sm:w-[350px] sm:w-[370px] w-ful rounded-[20px] shadow-2xl px-10 py-16">
    <div className="w-11 h-11 justify-center flex bg-red-500 rounded-full items-center">
      <img src={imgURL} alt="collection" className="" width={24} height={24}/>
    </div>
    <h3 className="mt-5 text-2xl font-bold font-mono leading-normal mb-5">{label}</h3>
    <p className="text-gray-500">{subText}</p>

    </div>
  )
}

export default ServiceCard