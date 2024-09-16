import ProjectCard from "./projectCard"
import { projectList } from "../data/projectList"

export default function Projects(){

    return(
        <section className="w-screen  pl-28 pr-3 xl:pl-72 h-fit py-11 flex flex-col flex-wrap justify-center items-center " id="project">
              <h2 className="titleOne">Projects</h2> 
              <div className='underline '></div>
              <div className="flex flex-row flex-wrap gap-9 justify-center items-start mt-6">
            {
                projectList.map((item,idx)=>(
                        <ProjectCard key={"00"+idx} project={item} />
                ))
            }
             </div>

        </section>
    )
}