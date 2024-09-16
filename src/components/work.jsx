import { BsPersonWorkspace } from "react-icons/bs"; 
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { workExperience, colors } from "./data/projectList";

export default function Work(){
  
return(
    <section className="md:ml-64 p-10  flex flex-col justify-center items-center" id="work">
          <h2 className="titleOne">Work</h2> 
          <div className='underline'></div>
<VerticalTimeline className="text-black dark:text-white" lineColor="yellow">
{
workExperience.map((exp,idx)=>(
    <VerticalTimelineElement
    key={idx}
    className="vertical-timeline-element--work dark:text-white"
    contentStyle={{ background: colors[Math.floor(Math.random()*colors.length)], color: "black dark:white" }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2011 - present"
    iconStyle={{ background: colors[Math.floor(Math.random()*colors.length)], color: 'white' }}
    icon={<BsPersonWorkspace />}
  >
    <h3 className="vertical-timeline-element-title">{exp.subject}</h3>
    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    <p>
     {exp.description}
    </p>
  </VerticalTimelineElement>
))
}
</VerticalTimeline>
</section>
)}