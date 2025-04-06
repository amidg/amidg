import { getWorkExperiences } from "@/lib/api";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const workExperiences = await getWorkExperiences();
    console.log("API route: Successfully fetched data:", 
                JSON.stringify(workExperiences).substring(0, 200) + "...");
    return NextResponse.json(workExperiences);
  } catch (error) {
    console.error("API route: Error fetching work experiences:", error);
    return NextResponse.json(
      { error: "Failed to fetch work experiences" },
      { status: 500 }
    );
  }
}