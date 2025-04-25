'use client'
import { useRouter } from "next/navigation";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FaArrowRight } from "react-icons/fa6";

interface NavigateToOtherPageProps {
  route: string;
  toolTipText: string;
}

export default function NavigateToOtherPage({
  route,
  toolTipText,
}: NavigateToOtherPageProps) {
  const router = useRouter();
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger>
          <div className="flex justify-center items-center w-6 h-6" onClick={() => router.push(route)}>
            <FaArrowRight className="text-[#8994ae] hover:text-white transition ease-in-out duration-200" size={15} />
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-white">{toolTipText}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
