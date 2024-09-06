import React from "react";

export default function page({
  params,
}: {
  params: { workExperienceId: string };
}) {
  return (
    <div>
      <h1>Details about product</h1>
      {params.workExperienceId}
    </div>
  );
}
