import { socialMedia } from "../Constants/index.js"
const Info = () => {
  return (
    <section className="flex md:flex-row flex-col max-md:justify-center max-md:items-center leading-13 md:justify-between text-gray-300 pt-2 border-t-2 border-t-cyan  ">
      <p>&copy;All Right reserved | Imran Malakzai</p>
      <div className="flex gap-3">
        {socialMedia.map((social)=>(
          <a href={social.link} key={social.id}>
            <img src={social.icon} className="w-full h-full object-contain rounded-full" alt="icon" />
          </a>
        ))}
      </div>
    </section>
  )
}

export default Info