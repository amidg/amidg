const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
const API_URL = `${BASE_URL}/api`;

/**
 * Helper to make GET requests to Strapi API endpoints
 * @param {string} path Path of the API route
 * @param {Object} urlParamsObject URL params object, will be stringified
 */
export async function fetchAPI(path: string, urlParamsObject = {}) {
  // Merge default and user params
  const mergedOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
    next: { revalidate: 60 }, // Revalidate every minute
  };

  // Build request URL
  const queryString = Object.entries(urlParamsObject)
    .map(([key, value]) => {
      if (typeof value === 'object' && value !== null) {
        return `${encodeURIComponent(key)}=${encodeURIComponent(JSON.stringify(value))}`;
      }
      return `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`;
    })
    .join('&');
    
  const requestUrl = `${API_URL}/${path}${queryString ? `?${queryString}` : ''}`;
  console.log('Fetching from URL:', requestUrl);

  try {
    // Trigger API call
    console.log(`Making request to: ${requestUrl}`);
    const response = await fetch(requestUrl, mergedOptions);
    console.log(`Response status: ${response.status}`);
    
    // Handle response
    if (!response.ok) {
      console.error(`Error fetching ${path}:`, response.status, response.statusText);
      // Try to get more error details if possible
      try {
        const errorData = await response.text();
        console.error(`Error response body:`, errorData);
      } catch (parseError) {
        console.error(`Could not parse error response`);
      }
      return { data: null, error: { status: response.status, message: response.statusText } };
    }
    
    const data = await response.json();
    console.log(`Data received from ${path} (first 200 chars):`, 
                JSON.stringify(data).substring(0, 200) + "...");
    return data;
  } catch (error) {
    console.error(`Failed to fetch from ${path}:`, error);
    return { data: null, error: { message: 'Failed to fetch data' } };
  }
}

// Home page data
export async function getHomePageData() {
  console.log("Getting home page data");
  // Using a string-based query parameter which is more reliable with Strapi
  const data = await fetchAPI('home-page', {
    'populate[blocks][populate]': '*', 
    'populate[ChronologySection][populate]': '*'
  });
  
  // Check if data exists
  if (!data?.data) {
    console.warn('Home page data is missing expected structure');
    return {
      blocks: [],
    };
  }
  
  return data.data;
}

// Blog posts
export async function getBlogPosts() {
  try {
    // Add sorting parameter to use the order field
    const data = await fetchAPI('blogs', {
      'populate': '*',
      'sort[0]': 'order:asc'  // Sort by order field in ascending order
    });
    
    console.log("Blogs data structure:", 
                data ? `Has data: ${!!data.data}, Meta: ${!!data.meta}` : "No data returned");
    
    // Apply defaults if data is missing
    if (!data?.data) {
      console.warn("No blogs data found, returning empty array");
      return { data: [], meta: { pagination: { page: 1, pageSize: 10, pageCount: 0, total: 0 } } };
    }
    
    return data;
  } catch (error) {
    console.error("Error in getBlogs:", error);
    // Return a default structure to prevent breaking the UI
    return { data: [], meta: { pagination: { page: 1, pageSize: 10, pageCount: 0, total: 0 } } };
  }
}

export async function getBlogPost(slug: string) {
  console.log("Getting blog post with slug:", slug);
  const data = await fetchAPI(`blogs/${slug}`, {
    populate: ['featured_image', 'category', 'author.avatar', 'content', 'seo'],
  });
  
  // Apply defaults if data is missing
  if (!data?.data) {
    return null;
  }
  
  return data.data;
}

// Work Experiences
export async function getWorkExperiences() {
    console.log("Getting work experiences - sorted by order field");
    
    try {
      // Add sorting parameter to use the order field
      const data = await fetchAPI('work-experiences', {
        'populate': '*',
        'sort[0]': 'order:asc'  // Sort by order field in ascending order
      });
      
      console.log("Work experiences data structure:", 
                  data ? `Has data: ${!!data.data}, Meta: ${!!data.meta}` : "No data returned");
      
      // Apply defaults if data is missing
      if (!data?.data) {
        console.warn("No work experiences data found, returning empty array");
        return { data: [], meta: { pagination: { page: 1, pageSize: 10, pageCount: 0, total: 0 } } };
      }
      
      return data;
    } catch (error) {
      console.error("Error in getWorkExperiences:", error);
      // Return a default structure to prevent breaking the UI
      return { data: [], meta: { pagination: { page: 1, pageSize: 10, pageCount: 0, total: 0 } } };
    }
  }

  // All Projects

export async function getProjects() {
  try {
    // Add sorting parameter to use the order field
    const data = await fetchAPI('projects', {
      'populate': '*',
      'sort[0]': 'order:asc'  // Sort by order field in ascending order
    });
    
    console.log("Projects data structure:", 
                data ? `Has data: ${!!data.data}, Meta: ${!!data.meta}` : "No data returned");
    
    // Apply defaults if data is missing
    if (!data?.data) {
      console.warn("No projects data found, returning empty array");
      return { data: [], meta: { pagination: { page: 1, pageSize: 10, pageCount: 0, total: 0 } } };
    }
    
    return data;
  } catch (error) {
    console.error("Error in getProjects:", error);
    // Return a default structure to prevent breaking the UI
    return { data: [], meta: { pagination: { page: 1, pageSize: 10, pageCount: 0, total: 0 } } };
  }
}

export async function getWorkExperienceBySlug(slug: string) {
    console.log("Getting work experience with slug:", slug);
    
    try {
      // Use the fetchAPI helper with the appropriate filter
      const data = await fetchAPI('work-experiences', {
        'filters[slug][$eq]': slug,
        'populate': '*'
      });
      
      console.log("Work experience data structure:", 
                  data ? `Has data: ${!!data.data}, Items: ${data.data?.length || 0}` : "No data returned");
      
      // Check if data exists and has at least one item
      if (!data?.data || data.data.length === 0) {
        console.warn(`No work experience found with slug: ${slug}`);
        return null;
      }
      
      // Return the first matching item (should be only one with that slug)
      return data.data[0];
    } catch (error) {
      console.error(`Error in getWorkExperienceBySlug for slug ${slug}:`, error);
      return null;
    }
  }


// Categories
export async function getCategories() {
  console.log("Getting categories");
  const data = await fetchAPI('categories');
  
  // Apply defaults if data is missing
  if (!data?.data) {
    return { data: [] };
  }
  
  return data;
}

// Footer data
export async function getFooterData() {
  console.log("Getting footer data");
  const data = await fetchAPI('home-page', {
    populate: '*',
  });
  
  // Find the footer section block
  const footerBlock = data?.data?.blocks?.find(
    (block: any) => block.__component === 'blocks.footer-section'
  );
  
  if (!footerBlock) {
    return {
      copyright: '© 2025 Portfolio',
      location: 'Vancouver, Canada',
      aboutText: 'Portfolio'
    };
  }
  
  return footerBlock;
} 

export function getStrapiMedia(media: { url: string }) {
  if (!media) return null;
  
  const imageUrl = media.url.startsWith('/') 
    ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${media.url}`
    : media.url;
    
  return imageUrl;
}