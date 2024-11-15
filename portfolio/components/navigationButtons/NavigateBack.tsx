import { useRouter } from "next/navigation";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip";
import { FaArrowLeft } from "react-icons/fa6";


interface NavigateBackProps {
  toolTipText?: string;
}

export default function NavigateBack({ toolTipText }: NavigateBackProps) {
  const router = useRouter();

  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger>
          <div
            className="flex justify-start items-center w-6 h-6 mb-4"
            onClick={() => router.back()}
          >
            <FaArrowLeft className="text-[#8994ae] hover:text-white transition ease-in-out duration-200" size={15} />
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-white">{toolTipText ? toolTipText : "Back"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
