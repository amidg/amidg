'use client'

export default function ChronologySection({ chronologyItems }: { chronologyItems: any[] }) {
  if (!chronologyItems || chronologyItems.length === 0) {
    return null;
  }

  console.log(chronologyItems)
  
  return (
    <div className="w-full mt-16">
   Hell oworld
    </div>
  );
}