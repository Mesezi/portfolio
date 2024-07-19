import { getProjects } from '@/sanity/query';
import Link from 'next/link'
import React from 'react'
export const dynamic = "force-dynamic";

const index = async () => {
  const data = await getProjects();
      
  return (
    <div className="mt-5 mb-10">
    <h3 className="text-xl font-semibold">Projects</h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5">
      {
        data.map((project:any)=> <Link href={project.liveLink} className="flex flex-col gap-1 group border-b py-7 sm:border-o sm:py=0">
        <img src={project.image.url} className="rounded-md object-cover filters grayscale 
        ease-in duration-200 group-hover:grayscale-0 aspect-[1.7/1]" alt="" />
        <h4 className="text-lg font-semibold mt-2">{project.title}</h4>
        <p className="max-w-[80%]">{project.desc}</p>
        <div className='flex gap-2 flex-wrap'>
            {
              project?.stack.map((el:string)=> <span className='text-sm px-3 p-1 rounded-full border'>{el}</span>)
            }
        </div>
        </Link>)
      }
    </div>

    </div>
  )
}

export default index
