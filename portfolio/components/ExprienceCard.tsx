import { useRef, useState } from "react";

interface ExperienceCardProps {
    colspan?: string,
    children: React.ReactNode;
  }

  const ExperienceCard:React.FC<ExperienceCardProps> = ({ children, colspan }) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!divRef.current || isFocused) return;

      const div = divRef.current;
      const rect = div.getBoundingClientRect();

      setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => {
      setIsFocused(true);
      setOpacity(1);
    };

    const handleBlur = () => {
      setIsFocused(false);
      setOpacity(0);
    };

    const handleMouseEnter = () => {
      setOpacity(1);
    };

    const handleMouseLeave = () => {
      setOpacity(0);
    };
    return (
      <div
        ref={divRef}
        onMouseMove={handleMouseMove}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`row-span-1 ${colspan} relative overflow-hidden 
        rounded-xl border-2 border-[#D6E3FA] dark:border-[#1E2A45] 
        bg-second-light dark:bg-[#141B2D] p-6 m-4 md:m-0`}
      >
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
          style={{
            opacity,
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(86, 134, 245, 0.2)
            , transparent 40%)`,
          }}
        />
        {children}
      </div>
    );
  }

  export default ExperienceCard