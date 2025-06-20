function ShoeCard({imgURL,changeBigShoeImage,bigShoeImage}) {
  return (
  <div  className={`border-2 rounded-xl ${bigShoeImage === imgURL ? 'border-red-500' : 'border-transparent'} cursor-pointer bg-gradient-to-r from-purple-300 to-pink-200`} onClick={changeBigShoeImage}>
    <img src={imgURL} alt="collection of Image" width={127} height={103} className="object-contain" />
  </div>
  )
}

export default ShoeCard