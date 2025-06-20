function Button({label,iconUrl}) {
  return (
    <button className="flex justify-center items-center border px-5 py-3 rounded-full bg-orange-600 text-white border-red-600 cursor-pointer gap-3">
      {label}
     {
      iconUrl &&   <img src={iconUrl} alt="arrow"  className="ml-2 rounded-full  w-5 h-5"/>
     }
    </button>
  )
}

export default Button