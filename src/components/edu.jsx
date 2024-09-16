import { MdCastForEducation } from "react-icons/md"; 
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { education, colors } from "./data/projectList";
 
 export default function Edu(){
  return(
        <section className="xl:ml-64  p-10  flex flex-col justify-center items-center" id="edu">
              <h2 className="titleOne">Education</h2> 
              <div className='underline'></div>
    <VerticalTimeline className="text-black dark:text-white " lineColor="yellow">
    {
    education.map((edu,idx)=>(
        <VerticalTimelineElement
        key={idx}
        className="vertical-timeline-element--work dark:text-white "
        contentStyle={{ background: colors[Math.floor(Math.random()*colors.length)], color: "black dark:white"   }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="2011 - present"
        iconStyle={{ background: colors[Math.floor(Math.random()*colors.length)], color: 'white' }}
        icon={<MdCastForEducation />}
      >
        <h3 className="vertical-timeline-element-title">{edu.subject}</h3>
        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
        <p>
         {edu.description}
        </p>
      </VerticalTimelineElement>
    ))
    }
    </VerticalTimeline>
    </section>
    )}
