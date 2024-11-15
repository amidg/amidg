import { CardsByCompany } from "@/types/workExperienceTypes";

export const workExperienceCards: CardsByCompany = {
  "Sanctuary AI": [
    {
      id: 1,
      company: 'Sanctuary AI',
      title: "Frontend Developer",
      location: 'Vancouver, BC',
      description: "Built and maintained responsive web applications using React, improving UI/UX and performance by 30%. Collaborated closely with backend teams and designers to implement new features.",
      technologies: ['React', 'TypeScript', 'CSS3', 'GraphQL'],
      accomplishments: ['Improved load times by 30%', 'Led UI redesign efforts'],
      startDate: 'July 2020',
      endDate: 'Present',
      media: {
        photos: [
          '/assets/sanctuary/project-photo1.jpg',
          '/assets/sanctuary/project-photo2.jpg'
        ],
        videos: [
          '/assets/sanctuary/project-demo.mp4'
        ]
      },
      logo: 'sanctuary-ai.png',
      logoWidth: 200,
      logoHeight: 200,
      logoScale: 0.35,
      filterColor: '#ffffff',
      url: 'https://sanctuary.ai/'
    },
  ],
  "Tesla": [
    {
      id: 2,  
      company: 'Tesla',
      title: "Software Engineer",
      location: 'Toronto, ON',
      description: "Developed RESTful APIs and microservices in a fast-paced environment, focusing on scalability and security.",
      technologies: ['Node.js', 'Express', 'AWS', 'Docker'],
      accomplishments: ['Reduced API response times by 20%', 'Implemented CI/CD pipelines'],
      startDate: 'July 2020',
      endDate: 'July 2021',
      media: {
        photos: [
          '/assets/tesla/project-photo1.jpg',
          '/assets/tesla/project-photo2.jpg'
        ],
        videos: [
          '/assets/tesla/project-demo.mp4'
        ]
      },
      logo: 'tesla-logo.png',
      logoWidth: 200,
      logoHeight: 200,
      filterColor: 'red',
      logoScale: 0.20,
      url: 'https://www.tesla.com/'
    },
  ],
  'Industrial Next': [
    {
      id: 3, 
      company: 'Industrial Next',
      title: "Software Engineering Intern",
      location: 'Vancouver,BC',
      description: "Contributed to both frontend and backend development tasks, helping to optimize application performance.",
      technologies: ['JavaScript', 'React', 'Node.js'],
      accomplishments: ['Reduced page load times by 15%', 'Assisted in backend service refactoring'],
      startDate: 'Jun',
      endDate: 'Aug 2019',
      media: {
        photos: [
          '/assets/company2/photo1.jpg'
        ],
        videos: [
          '/assets/company2/project-demo.mp4'
        ]
      },
      logo: 'industrial-next.png',
      logoWidth: 450,
      logoHeight: 100,
      filterColor: '#D44D5C',
      logoScale: 0.3,
      colorFunction: ({ x }: { x: number }) => {
        const imageWidth = 1545;
        return x < imageWidth / 2 ? "red" : "white";
      },
      url: 'https://industrialnext.ai/en'
    },
  ],
};
  export const workExperienceEntries = Object.entries(workExperienceCards);
  export const workExperienceValue = Object.values(workExperienceCards).flat();