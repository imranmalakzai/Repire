import styles from "../style"
import { arrowUp } from "../assets"
function GetStarted() {
  return (
     <div className="text-white self-start justify-end h-28 w-28  bg-gradient-to-r from-cyan-400 to-white rounded-full p-0.5">
      <div className="bg-black h-full w-full rounded-full flex justify-center items-center flex-col text-xl cursor-pointer">
      <div className="flex text-gradient">
        <p>Get</p>
      <img src={arrowUp} alt="arrow" />
      </div>
       <p className="text-gradient">Started</p>
      </div>
     </div>
  )
}

export default GetStarted