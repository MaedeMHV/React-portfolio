import {  useState } from "react";
import { colors, skills } from '../data/projectList'
import SkillItem from "./techItem";

export default function TechStack() {
  const [hoverState, setHoverState] = useState(-1);
  const [techShow, setTechShow] = useState(9);

  const loadMore = () => {
    return setTechShow(techShow + 3);
  };

  return (
    <section className="techStack w-screen xl:pl-72 pl-24 h-fit flex flex-col justify-center items-center " id="tech">
      <h2 className="titleOne">Tech Stack</h2>
      <div className="underline"></div>

      <div className=" py-8 gap-10 flex justify-center items-start flex-wrap">
        {skills.slice(0, techShow).map((skill, idx) => (
          <SkillItem
            key={idx}
            skill={skill}
            idx={idx}
            hoverState={hoverState}
            setHoverState={setHoverState}
            colors={colors}
          />
        ))}
      </div>
      <button className="btn bg-purple-900" onClick={() => loadMore()}>
        Load More
      </button>
    </section>
  );
}