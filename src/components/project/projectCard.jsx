import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md"; 
import { MdKeyboardArrowUp } from "react-icons/md"; 


export default function ProjectCard({project}){
  const [hoverToggle,setHoverToggle]=useState(false)
    return(
        <div onMouseEnter={()=>setHoverToggle(true)} onMouseLeave={()=>setHoverToggle(false)} className="w-[400px] relative hover:border-l-4 border-yellow-400 p-8 shadow-md hover:h-72 bg-gray-800 group overflow-hidden">
       <button className=" absolute top-3 right-6"><MdKeyboardArrowUp className={`${!hoverToggle && "hidden"}`} />
       <MdKeyboardArrowDown  className={`${hoverToggle && "hidden"}`}  /></button>
            <h3 className="text-xl capitalize mb-4 ">{project.subject}</h3>
            <p className="line-clamp-2 text-sm mb-4 group-hover:line-clamp-none">{project.desc}</p>
            <div className=" flex flex-row flex-wrap gap-2 justify-start">
            { 
            project.skills.map((skill,idx)=>(
                <span className="bg-purple-900 p-2 text-sm rounded-2xl" key={"00"+idx}>{skill}</span>
            ))
            }</div>


        </div>
    )

}