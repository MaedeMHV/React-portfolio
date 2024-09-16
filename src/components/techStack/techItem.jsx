import { useInView } from "react-intersection-observer";

const SkillItem = ({ skill, idx, hoverState, setHoverState, colors }) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div
      ref={ref}
      className={`${
        inView ? "show" : ""
      } techBox w-72 h-24 shadow-md  text-black shrink-0 justify-center flex items-center relative transition-all duration-200`}
      style={{
        backgroundColor: hoverState === idx
        ? randomColor
        : "white",
      }}
      onMouseEnter={() => setHoverState(idx)}
      onMouseLeave={() => setHoverState(-1)}
    >
      <div
        style={{ backgroundColor: colors[idx] }}
        className="rounded-full absolute w-9 h-9 flex items-center justify-center text-sm text-white p-3 shadow-sm top-0 right-1/2 translate-x-1/2 -translate-y-1/2 z-3"
      >
        {idx + 1}
      </div>
      {skill}
    </div>
  );
};

export default SkillItem;