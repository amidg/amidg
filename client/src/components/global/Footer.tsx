import Link from "next/link";
import { getFooterData } from '@/lib/api';

const Footer = async () => {
  const footerData = await getFooterData();
  
  // First column links with fallbacks
  const leftColumnLinks = [
    {
      text: "About",
      href: "/about",
      target: "_self"
    },
    {
      text: footerData?.resume?.text || "Resume",
      href: footerData?.resume?.href || "/resume",
      target: "_blank"
    }
  ];
  
  // Second column links with fallbacks
  const rightColumnLinks = [
    {
      text: footerData?.github?.text || "Github",
      href: footerData?.github?.href || "https://github.com",
      target: "_blank"
    },
    {
      text: footerData?.linkedin?.text || "LinkedIn",
      href: footerData?.linkedin?.href || "https://linkedin.com",
      target: "_blank"
    }
  ];

  return (
    <footer className="footer bg-white mt-28 border-t-[0.5px] border-gray-200 dark:border-[#1E2A45] py-10">
      <div className="mx-auto w-full max-w-2xl">
        {/* Top section with name */}
        <div className="text-center mb-8 md:mb-0 md:hidden">
          <Link href="/">
            <p className="text-gray-800 dark:text-white font-bold text-lg">
              Dmitrii Gusev
            </p>
          </Link>
        </div>
        
        {/* Main footer content - different layouts for mobile/desktop */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-0">
          {/* Links section - centered column on mobile, two columns on desktop */}
          <div className="flex flex-col items-center md:flex-row md:items-start gap-8 md:gap-x-12">
            {/* On mobile: stacked in one column centered */}
            {/* On desktop: back to 2 columns */}
            <div className="flex flex-col items-center md:items-start">
              {leftColumnLinks.map(({ href, text, target }) => (
                <Link 
                  key={text} 
                  href={href} 
                  target={target}
                >
                  <p className="text-gray-700 dark:text-white mb-4 hover:underline hover:underline-offset-4 text-sm md:text-base text-center md:text-left">
                    {text}
                  </p>
                </Link>
              ))}
            </div>
            
            <div className="flex flex-col items-center md:items-start">
              {rightColumnLinks.map(({ href, text, target }) => (
                <Link 
                  key={text} 
                  href={href} 
                  target={target}
                >
                  <p className="text-gray-700 dark:text-white mb-4 hover:underline hover:underline-offset-4 text-sm md:text-base text-center md:text-left">
                    {text}
                  </p>
                </Link>
              ))}
            </div>
          </div>
          
          {/* Name - hidden on mobile, shown on desktop */}
          <div className="hidden md:block">
            <Link href="/">
              <p className="text-gray-800 dark:text-white font-bold">
                Dmitrii Gusev
              </p>
            </Link>
          </div>
        </div>
        
        {/* Bottom section with copyright and location */}
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-2 mt-10 md:mt-20">
          <div className="text-gray-600 dark:text-white text-sm text-center md:text-left">
            {footerData?.copyright || '© 2025 Dmitrii Gusev'}
          </div>
          <div className="text-gray-600 dark:text-white text-sm text-center md:text-right">
            {footerData?.location || 'Vancouver, Canada'}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;