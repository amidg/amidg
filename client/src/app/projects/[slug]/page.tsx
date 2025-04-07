import { getProjectBySlug } from '@/lib/api';
import { notFound } from 'next/navigation';

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  // Fetch data directly on the server
  const projectData = await getProjectBySlug(params.slug);

  console.log(projectData)
  
  // Handle 404
  if (!projectData) {
    notFound();
  }
  
  return (
    <div className="container mx-auto py-8">
      hell owolrd
    </div>
  );
}