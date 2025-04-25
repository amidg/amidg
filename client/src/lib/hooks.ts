import useSWR from "swr";

// Simple fetcher that works with your endpoint structure
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useProjects() {
  const { data, error, isLoading } = useSWR("/api/projects", fetcher);

  return {
    projects: data?.data || [],
    meta: data?.meta,
    isLoading,
    isError: error,
  };
}

export function useBlog() {
  // Changed URL to match your Postman request
  const { data, error, isLoading } = useSWR("/api/blogs", fetcher);

  return {
    blog: data?.data || [],
    meta: data?.meta,
    isLoading,
    isError: error,
  };
}

export function useRecentProjects() {
  const { data, error, isLoading } = useSWR("/api/projects/recent", fetcher);

  return {
    recentProjects: data?.data || [],
    meta: data?.meta,
    isLoading,
    isError: error,
  };
}

