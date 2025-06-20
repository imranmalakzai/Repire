import { quotes } from "../assets/index.js"
const Feedback = ({name,title,content,img}) =>(
    <div className="text-white bg-quote feedback-card max-w-sm p-4 rounded-2xl flex flex-col justify-center ">
      <img src={quotes} alt="quote"  height={22} width={42}/>
      <p className="text-2xl text-gray-200 font-sans">{content}</p>
      <div  className="flex gap-4 mt-5 ju">
        <img src={img} alt="person" className="h-[50px] w-[50px]"/>
        <div>
          <h2>{name}</h2>
          <h5>{title}</h5>
        </div>
      </div>
  </div>
  )


export default Feedback