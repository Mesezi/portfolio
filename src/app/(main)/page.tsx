import { getExperiences, getMyDetails } from "@/sanity/query";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact, FaGitAlt, FaNode, FaSass } from "react-icons/fa";
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiAdobephotoshop, SiExpress, SiPrisma, SiRedux, SiSanity, SiSupabase } from "react-icons/si";

export default async function Home() {
  const stack = [
    { icon: <IoLogoJavascript size={20} />, title: "Javascript" },
    { icon: <BiLogoTypescript size={20} />, title: "Typescript" },
    { icon: <FaReact size={20} />, title: "React Js" },
    { icon: <RiNextjsLine size={20} />, title: "Next Js" },
    { icon: <FaNode size={20} />, title: "Node.js" },
    { icon: <SiExpress size={20} />, title: "Express" },
    { icon: <SiPrisma size={20} />, title: "Prisma" },
    { icon: <SiSupabase size={20} />, title: "Supabase" },
    { icon: <RiTailwindCssFill size={20} />, title: "Tailwind CSS" },
    { icon: <FaSass size={20} />, title: "Sass" },
    { icon: <SiRedux size={20} />, title: "Redux Toolkit" },
    { icon: <IoLogoFirebase size={20} />, title: "Firebase" },
    { icon: <SiSanity size={20} />, title: "Sanity CMS" },
    { icon: <FaGitAlt size={20} />, title: "Git" },
    { icon: <SiAdobephotoshop size={20} />, title: "Adobe Photoshop" },
  ];

  const data = await getMyDetails();
  const experiences = await getExperiences();

  return (
    <main className="flex flex-col">
      <p className="text-lg">{data.desc}</p>

      {data.aboutExpansion && (
        <p className="text-base mt-4 text-[#272727]/80">{data.aboutExpansion}</p>
      )}

      {data.currentlyExploring && (
        <p className="text-sm mt-3 italic text-[#272727]/60">
          Currently exploring: {data.currentlyExploring}
        </p>
      )}

      <div className="mt-10">
        <h3 className="text-xl">Skills</h3>
        <div className="flex justify-evenly flex-wrap gap-4 gap-y-4 mt-5">
          {stack.map((item) => (
            <div className="flex gap-2" key={item.title}>
              {item.icon}
              {item.title}
            </div>
          ))}
        </div>
      </div>

      <div className="my-10">
        <h3 className="text-xl">Experience</h3>

        {experiences.length > 0 ? (
          <div className="mt-5 ml-1 border-l-2 border-[#ebebeb] pl-6 space-y-6">
            {experiences.map((experience: {
              role: string;
              company: string;
              startDate: string;
              endDate?: string;
              description?: string;
            }) => {
              const formatDate = (date: string) =>
                new Date(`${date}T00:00:00`).toLocaleDateString('en', { month: 'short', year: 'numeric' });

              return (
                <article key={`${experience.company}-${experience.startDate}`} className="relative">
                  <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-[#272727]" />
                  <h4 className="font-semibold text-[#272727]">{experience.role}</h4>
                  <p className="text-sm text-[#555]">
                    {experience.company} ({formatDate(experience.startDate)} - {experience.endDate ? formatDate(experience.endDate) : 'Present'})
                  </p>
                  {experience.description && <p className="mt-2 text-sm text-[#272727]/80">{experience.description}</p>}
                </article>
              );
            })}
          </div>
        ) : (
          <p className="mt-4 text-sm text-[#272727]/60">No experience added yet.</p>
        )}
      </div>
    </main>
  );
}
