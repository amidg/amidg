"use client"
import useReadingProgress from "@/app/hooks/useReadingProgress";

const ReadingBar = () => {
    const completion = useReadingProgress(); // Adding the type annotation
    
    return ( 
        <span
        style={{ transform: `translateX(${completion - 100}%)` }}
        className="flex fixed bg-text h-[2px] w-full max-w-4xl bottom-0 transition-all ease-in-out"
      />
     );
}
 
export default ReadingBar;



