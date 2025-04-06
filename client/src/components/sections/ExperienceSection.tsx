import ExperienceList from "../cards/ExperienceList";


export default function ExperienceSection() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-8 relative mb-2">
      <div className="flex flex-col w-full items-center justify-center md:items-start">
        <div className="text-base font-bold">
          <h2 className="text-xl font-bold">Work Experience</h2>
          <ExperienceList />
        </div>
      </div>
    </div>
  );
}