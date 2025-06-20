import { styles } from "../styles"
import { logo } from "../assets"
const Footer = () => {
  const footerLinks = [
    {
      id: 1,
      title: "Help",
      data: [
        "About US",
        "FaQs",
        "How it works",
        "Privacy Policy",
        "Payment Policy",
      ],
    },
    {
      id: 2,
      title: "Products",
      data: ["Construction", "Web Dev", "Front end", "Backend", "Full Stock"],
    },
    {
      id: 3,
      title: "Get in Touch",
      data: ["afghanimran92@gmail.com", "+93789399338"],
    },
  ];
  
  return (
    <section className={`${styles.Layout} bg-[#d1e3ff]`}>
      <div className="w-full py-7 flex flex-row justify-between items-center max-md:flex-col">
        <div className="flex sm:flex-col">
          <img src={logo} alt="logo" className="w-[80px] h-[50px]" />
          <p className="text-gray-600 max-w-sm">
          The World Famous and Best construction and Web dev in the History we provide the biggest sport in Decade
          </p>
        </div>
        <div className="flex sm:flex-row flex-col gap-5">
          {footerLinks.map((footer)=>(
            <div key={footer.id}>
              <h1 className="text-2xl font-mono font-semibold">{footer.title}</h1>
              <ul>
                {footer.data.map((data,index)=>(
                  <li className="text-gray-700 cursor-pointer hover:text-cyan" key={index}>{data}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Footer