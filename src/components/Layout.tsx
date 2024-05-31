'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaCodeCommit, FaXTwitter } from "react-icons/fa6";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathName = usePathname()
  return (
    <main>
      <div className="max-w-[1000px] mx-auto px-4">
        <section className="flex flex-col gap-0.5 py-10 border-b border-[#272727]/20">
          <img
            src="/assets/menuchim.jpg"
            alt=""
            className="h-16 w-16 rounded-full filters grayscale object-cover object-top"
          />
          <h1 className="text-2xl leading-[1.5rem] font-semibold mt-3">
            Ezi-umeonu Menuchim
          </h1>
          <p className="text-lg">Frontend Developer</p>
          <div className="flex items-center gap-5 mt-4">
            <Link href={"https://github.com/Mesezi"} target="_blank">
              <FaGithub size={25} />
            </Link>

            <Link href={"https://x.com/_mesezi"} target="_blank">
              <FaXTwitter size={25} />
            </Link>

            <Link href={"https://www.linkedin.com/in/menuchim-ezi-umeonu-088470224"} target="_blank">
              <FaLinkedin size={25} />
            </Link>
          </div>
        </section>

        <section className="py-5">
          <nav>
            <ul className="flex gap-2 items-center">
              <li className={`p-1 px-2 duration-150 ease-in-out rounded-md ${pathName === '/'
              ? 'bg-[#272727] text-white' : 'text-[#272727] '}`}><Link href={'/'}>About</Link></li>
              <li className={`p-1 px-2 duration-150 ease-in-out rounded-md ${pathName === '/projects'
              ? 'bg-[#272727] text-white' : 'text-[#272727] '}`}><Link href={'/projects'}>Projects</Link></li>
              <li className={`p-1 px-2 duration-150 ease-in-out rounded-md ${pathName === '/contact'
              ? 'bg-[#272727] text-white' : 'text-[#272727] '}`}><Link href={'/contact'}>Contact</Link></li>
            </ul>
          </nav>

          <div className="py-2 mt-4">{children}</div>
        </section>

        <footer className="py-10  border-b border-[#272727]/20 flex flex-col justify-center items-center">
        <FaCodeCommit size={25}/>
        <p className="mt-2 text-center">
					&copy; {new Date().getFullYear()}- Ezi-umeonu Menuchim
				</p>

        
        </footer>
      </div>
    </main>
  );
};

export default Layout;
