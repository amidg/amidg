"use client"

import * as React from "react"
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react"
import { motion } from "framer-motion";
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { workExperienceEntries, workExperienceValue } from "@/data/workExperience";

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  currentIndex: number
  scrollToIndex: (index: number) => void
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

const transition = {
  type: "spring",
  stiffness: 260,
  damping: 28,
};


function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins
    )

    const [currentIndex, setCurrentIndex] = React.useState(0)

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return
      }

      setCurrentIndex(api.selectedScrollSnap())
    }, [])

    const scrollToIndex = React.useCallback((index: number) => {
      api?.scrollTo(index)
    }, [api])

    React.useEffect(() => {
      if (!api || !setApi) {
        return
      }

      setApi(api)
    }, [api, setApi])

    React.useEffect(() => {
      if (!api) {
        return
      }

      onSelect(api)
      api.on("reInit", onSelect)
      api.on("select", onSelect)

      return () => {
        api?.off("select", onSelect)
      }
    }, [api, onSelect])

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation:
            orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          currentIndex,
          scrollToIndex
        }}
      >
        <div
          ref={ref}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    )
  }
)
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div ref={carouselRef} className="overflow-hidden relative">
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  )
})
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel()

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  )
})
CarouselItem.displayName = "CarouselItem"

const CarouselIndicatorScroll = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, ...props }, ref) => {
  const { currentIndex, scrollToIndex } = useCarousel()

  return (
    <div className="mt-8 flex h-8 items-center justify-center space-x-2">
      {workExperienceValue.map((item, index) => (
        <div key={index} onClick={() => scrollToIndex?.(index)}>
          <motion.button
            initial={false}
            className="flex cursor-pointer select-none items-center justify-center overflow-hidden rounded-full bg-stone-200 text-sm dark:bg-[#1f2937] border-[0.5px] border-[#1E2A45]"
            animate={{
              width: currentIndex === index ? 26 : 12,
              height: currentIndex === index ? 26 : 12,
            }}
            transition={transition}
          >
            <motion.span
              initial={false}
              className="block whitespace-nowrap px-3 py-1"
              animate={{
                opacity: currentIndex === index ? 1 : 0,
                scale: currentIndex === index ? 1 : 0,
                filter: currentIndex === index ? "blur(0)" : "blur(4px)",
                transformOrigin: "center",
              }}
              transition={transition}
            >
              <span className="p-1">{item.id}</span>
            </motion.span>
          </motion.button>
        </div>
      ))}
    </div>
  );
})
CarouselIndicatorScroll.displayName = "CarouselIndicatorScroll"

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselIndicatorScroll
}
