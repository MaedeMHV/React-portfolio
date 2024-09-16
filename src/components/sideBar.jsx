import { BsSun } from "react-icons/bs"; 
import { BsArrowUp } from "react-icons/bs"; 
import { AiOutlineContacts } from "react-icons/ai"; 
import { BsPerson } from "react-icons/bs"; 
import { BiCommentEdit } from "react-icons/bi"; 
import { AiOutlineFundProjectionScreen } from "react-icons/ai"; 
import { MdCastForEducation } from "react-icons/md"; 
import { TbMicroscope } from "react-icons/tb"; 
import { BiNetworkChart } from "react-icons/bi";  
import { BsHouse } from "react-icons/bs"; 
import { SlArrowRight } from "react-icons/sl"; 
import { SlArrowLeft } from "react-icons/sl"; 
import color from "../assets/color.png";
import { useState } from "react";
import { Link } from 'react-scroll';

export default function SideBar(){

 const [toggle,setToggle]=useState(true)
 const [darkModeToggle,setDarkModeToggle]=useState('')
 function darkMode() {
  if ( darkModeToggle=== 'dark') {
    document.documentElement.classList.remove('dark')
    setDarkModeToggle('')

  } else {
    setDarkModeToggle('dark')
    document.documentElement.classList.add('dark')
 
  }

}
    return (
<>
<div className=" fixed-btn fixed flex flex-col justify-center items-center gap-2 bottom-8 z-50 right-4">
       <button  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}> <BsArrowUp size={22}/> </button>
       <button  onClick={()=>darkMode()}> <BsSun size={22}/></button>
        </div>
      <section className={`${!toggle ? 'w-24' : ' w-64 '} sidebar  `}>

            <button onClick={()=>setToggle(!toggle)} className=" bg-purple-900 p-1 rounded-l-xl pl-2 right-0 top-16 absolute">
              < SlArrowLeft className={`${!toggle && 'hidden'}`} /><SlArrowRight className={`${toggle && 'hidden'}`} /></button>
            <img className={`${!toggle && 'hidden'} w-32  h-32 rounded-full mb-9 `} src={color} alt="" />
            <nav className="flex ">
            <div className="navMenu flex flex-col w-full h-fit gap-6 ">
            <Link className="navItem" to="home"   activeClass="active" spy={true} smooth={true}   > <BsHouse size={25} /> <span className={`${!toggle && 'hidden'} `} >Home</span></Link>
            <Link className="navItem" to="about"   activeClass="active" spy={true} smooth={true}   > <BsPerson size={25} /> <span className={`${!toggle && 'hidden'} `} >About</span></Link>
            <Link className="navItem" to="work"   activeClass="active" spy={true} smooth={true}   > <BiNetworkChart size={25} />  <span className={`${!toggle && 'hidden'}`} >Work</span></Link>
            <Link className="navItem" to="tech"   activeClass="active" spy={true} smooth={true}   > <TbMicroscope size={25} /> <span className={`${!toggle && 'hidden'} `} >Tech Stack</span></Link>
            <Link className="navItem" to="project"   activeClass="active" spy={true} smooth={true}   > <AiOutlineFundProjectionScreen size={25}/><span className={`${!toggle && 'hidden'} `} >Project</span></Link>
            <Link className="navItem" to="edu"    activeClass="active" spy={true} smooth={true} > <MdCastForEducation size={25} /><span className={`${!toggle && 'hidden'} `} >Education</span></Link>
            <Link className="navItem" to="testimonial"   activeClass="active" spy={true} smooth={true}    > <BiCommentEdit size={25} /><span className={`${!toggle && 'hidden'} `} >Testimonial</span></Link>
            <Link className="navItem" to="contact"   activeClass="active" spy={true} smooth={true}     > <AiOutlineContacts size={25}/><span className={`${!toggle && 'hidden'} `} >Contact</span> </Link>
            </div>
            </nav>
                    </section>
                    </>
                )
           }