import { NextResponse } from 'next/server';
import { getProjectBySlug } from '@/lib/api';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const slug = params.slug;
    const project = await getProjectBySlug(slug);
    
    if (!project) {
      return NextResponse.json(
        { error: "Project not found" },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ data: project });
  } catch (error) {
    console.error(`Error fetching project with slug ${params.slug}:`, error);
    return NextResponse.json(
      { error: "Failed to fetch project" },
      { status: 500 }
    );
  }
}