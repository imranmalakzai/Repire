function Review({imgURL,customerName,rating,feedback}) {
  return (
    <div className="flex justify-center items-center flex-col mt-12">
      <img src={imgURL} alt="customers"  className="rounded-full object-cover" height={120} width={120}/>
      <p className="mt-4 max-w-sm">{feedback}</p>
      <div>
        <img src={rating} alt="rate" className="object-contain" width={24} height={24} />
        (4.5)
      </div>
      <h2 className="font-bold text-3xl">{customerName}</h2>

    </div>
  )
}

export default Review