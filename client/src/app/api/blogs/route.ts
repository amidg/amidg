import { NextResponse } from 'next/server';
import { getBlogPosts } from '@/lib/api';

export async function GET() {
  try {
    const blogs = await getBlogPosts();
    return NextResponse.json(blogs);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}