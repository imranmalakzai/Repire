import { logo } from "../assets"
import { useState } from "react"
import { menu } from "../assets"
import { close } from "../assets"
import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"
const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)
 const navLinks = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "About",
    },
    {
      id: 3,
      name: "Services",
    },
    {
      id: 4,
      name: "Contact",
    },
  ];
  

  return (
   <div className="w-full">
     <div className="w-full bg-[rgba(112,82,212,0.2)] fixed top-0 z-20">
      <div className="px-6 sm:px-16 py-2 xl:max-w-7xl mx-auto w-full">
        <div className="flex flex-row justify-between items-center">
            <img src={logo} alt="logo" width={50} height={50} />
            <ul className="flex gap-10 max-md:hidden">
              {navLinks.map((navLink) => (
                <li key={navLink.id} onClick={()=>setActive(navLink.name)}
                className={`${active === navLink.name ? 'text-black' : 'text-white'} cursor-pointer
                text-[16px]  font-serif`}
                >
                  <Link to={`${navLink.name === 'Home' ? '/' : navLink.name}`}>
                    {navLink.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="md:hidden flex justify-end">
              <img src={toggle ? close : menu} alt="toggle" width={35} height={35} className="cursor-pointer"   onClick={()=> setToggle((prev) =>!prev)} />
              <div className={`${toggle ? 'block' : 'hidden'} sidebar absolute top-[60px] w-[150px] rounded-xl  h-[200px] justify-center flex bg-[rgba(0,0,0,0.3)] text-white`}>
              <ul className="flex flex-col justify-evenly items-center">
                {navLinks.map((navLink) => (
                  <li key={navLink.id} onClick={()=>setActive(navLink.name)} className="cursor-pointer hover:text-black">
                      <Link to={`${navLink.name === 'Home' ? '/' : navLink.name}`}>
                    {navLink.name}
                  </Link>
                  </li>
                ))}
            </ul>
              </div>
            </div>
        </div>
      </div>
    </div>
    <Outlet />
   </div>
  )
}

export default Navbar