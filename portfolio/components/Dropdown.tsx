import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface DropdownItem {
  name: string;
  icon: React.ReactNode; // Accepts any valid React node, including icon components
}

interface DropdownProps {
  items: DropdownItem[];
}

const Dropdown: React.FC<DropdownProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const dropdownVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 30,
      },
    },
    closed: {
      opacity: 0,
      y: -20,
    },
  };

  return (
    <div className="relative inline-block text-left">
      <div ref={dropdownRef} className="-mb-1">
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger>
              <FiMoreHorizontal
                size={22}
                onClick={handleToggle}
                className="mx-1"
              />
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-white">Show more</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            variants={dropdownVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="origin-bottom-center absolute bottom-full mb-2 -left-1/2 translate-x-1/2 w-40 
            rounded-md shadow-lg bg-[#3f507a] 
            ring-1 ring-black ring-opacity-5 
            focus:outline-none z-10 
            overflow-hidden 
            border-[1px] border-[#1e2a45]"
          >
            {items.map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center justify-left align-middle px-2 py-2 text-sm text-gray-700 hover:bg-[#495b88] hover:text-gray-900 cursor-pointer rounded-md"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
              >
                {item.icon}
                <p className="mx-1 text-white font-normal">{item.name}</p>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
