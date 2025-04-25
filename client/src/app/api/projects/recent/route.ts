import { getRecentProjects } from '@/lib/api';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const projects = await getRecentProjects();
    return NextResponse.json(projects);
  } catch (error) {
    console.error('Error in Recent Projects API route:', error);
    return NextResponse.json(
      { error: 'Failed to fetch recent projects' },
      { status: 500 }
    );
  }
}