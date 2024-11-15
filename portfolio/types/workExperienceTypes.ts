export interface experienceCard {
  id: number;
  company: string;
  title?: string;
  location?: string;
  description?: string;
  position?: string;
  startDate?: string;
  endDate?: string;
  technologies?: string[];
  accomplishments?: string[];
  media?: {
    photos?: string[];
    videos?: string[];
  };
  logo?: string;
  logoScale?:number;
  logoWidth?:number;
  logoHeight?:number;
  filterColor?:string;
  colorFunction?: (options: { x: number }) => string;
  url?:string;
}

export interface CardsByCompany {
  [company: string]: experienceCard[];
}
