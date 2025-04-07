"use client";

import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export function useProjects() {
  const { data, error, isLoading } = useSWR('/api/projects', fetcher);
  
  return {
    projects: data?.data || [],
    meta: data?.meta,
    isLoading,
    isError: error
  };
}

export function useProject(slug: string) {
  const { data, error, isLoading } = useSWR(
    slug ? `/api/projects/${slug}` : null, 
    fetcher
  );
  
  return {
    project: data?.data,
    isLoading,
    isError: error
  };
}

export function useBlog() {
  const { data, error, isLoading } = useSWR('/api/blogs', fetcher);
    
  return {
    blog: data?.data || [],
    meta: data?.meta,
    isLoading,
    isError: error
  };
}