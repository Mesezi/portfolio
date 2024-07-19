import { getMyDetails } from "@/sanity/query";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact, FaNode, FaGitAlt } from "react-icons/fa";
import { IoCheckmarkSharp, IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill, RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiAdobephotoshop, SiExpress, SiMongodb, SiRedux, SiSanity } from "react-icons/si";

export default async function Home() {
  const stack = [
    {
      icon: <IoLogoJavascript size={20}/>,
      title: 'Javascript'
    },
{
      icon: <FaGitAlt  size={20}/>,
      title: 'Git'
    },
    
    {
      icon: <FaReact  size={20}/>,
      title: 'React Js'
    }, 
    {
      icon: <BiLogoTypescript  size={20}/>,
      title: 'Typescript'
    },
    {
      icon: <IoLogoFirebase  size={20}/>,
      title: 'Firebase'
    },

{
      icon: <RiNextjsLine  size={20}/>,
      title: 'Next Js'
    },
    
    // {
    //   icon: <FaNode  size={20}/>,
    //   title: 'Node js'
    // },
    {
      icon: <SiSanity  size={20}/>,
      title: 'Sanity CMS'
    },
    // {
    //   icon: <SiExpress  size={20}/>,
    //   title: 'Express Js'
    // },
    // {
    //   icon: <SiMongodb  size={20}/>,
    //   title: 'Mongodb'
    // },
    {
      icon: <RiTailwindCssFill  size={20}/>,
      title: 'Tailwind CSS'
    },  
     {
      icon: <SiAdobephotoshop  size={20}/>,
      title: 'Adobe Photoshop'
    },
    {
      icon: <SiRedux size={20}/>,
      title: 'Redux toolkit'
    },

  ]

  const data = await getMyDetails();

  return (
 <main className="flex flex-col">
      <p className="text-lg">{data.desc}</p>
        <div className="mt-10">
          <h3 className="text-xl">Skills</h3>
          <div className="flex justify-evenly flex-wrap gap-4 gap-y-4 mt-5">
            {
              stack.map((item)=> <div className="flex gap-2" key={item.title}>
                {item.icon}
                {item.title}
              </div>)
            }
          </div>

        </div>


        <div className="my-10">
          <h3 className="text-xl">Experience</h3>

          <div className='flex flex-col justify-center items-center w-3 mt-5'>
        <div className='h-3 w-3 rounded-full bg-[#272727] relative'>
            <div className="absolute left-[250%] top-[-50%] text-black flex flex-col whitespace-nowrap">
                <h3 className='font-semibold text-[#272727]'>Frontend Developer</h3>
                <p className='text-sm'> Quickleap (Sep 2023 - Present)</p>
            </div>
        </div>
        <div className='h-20 w-0.5 bg-[#ebebeb]'></div>

        <div className='h-3 w-3 rounded-full bg-[#ebebeb] relative'>
        <div className="absolute left-[250%] top-[-50%] text-black flex flex-col whitespace-nowrap">
                <h3 className='font-semibold text-[#272727]'>Web Developer </h3>
                <p className='text-sm'> Freelancer (August 2022 - July 2023)</p>
            </div>
        </div>

    
    </div>
        </div>

       
      </main>

  );
}
