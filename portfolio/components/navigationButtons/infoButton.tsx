import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { FaInfo } from "react-icons/fa6";
import { GoInfo } from "react-icons/go";

interface NavigateToOtherPageProps {
  route: string;
  toolTipText: string;
}

export default function InfoButton({ route, toolTipText }: NavigateToOtherPageProps) {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger>
          <a
            href={route}
            target="_blank"
            rel="noopener noreferrer" 
            className="flex w-6 h-6"
          >
            <GoInfo className="text-[#8994ae] hover:text-white transition ease-in-out duration-200" size={22} />
          </a>
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-white">{toolTipText}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}