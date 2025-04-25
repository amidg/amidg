import NavigateBack from "@/components/navigationButtons/NavigationBack";

export default async function BlogListingPage() {
  return (
    <div className="w-full mt-[5rem] flex justify-center">
      <div className="w-full max-w-2xl relative">
        {/* Absolute positioned navigation button */}
        <div className="absolute left-[-40px] top-1">
          <NavigateBack />
        </div>

        {/* Perfectly centered content */}
        <div className="flex flex-col items-center">
          <div className="w-full mb-16">
            <h1 className="text-2xl font-bold">Projects</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
