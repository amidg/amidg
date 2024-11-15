export interface Card {
    id: number;
    title: string;
    description: string;
    ctaText: string;
    date?: string;
  }
  
  // Define the type for cards grouped by year
  export interface CardsByYear {
    [year: number]: Card[];
  }
  
 export interface ProjectsListProps {
    title?: string;
    useSlice?: boolean;
    displayAllProjects?: boolean;
    backButton?: boolean;
    sliceAmount?: number;// Define more specific typing based on card structure
  }
  
