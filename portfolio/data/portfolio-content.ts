export const websiteContent = {
    about: {
      title: "Dmitrii Gusev",
      subtitle: "Robotics Engineer && Open-source fanatic!",
      aboutTitle: "About me",
      nowTitle: "Now",
      description: 
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " +
        "when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      current: [
        {
          id: 1,
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
               "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " +
               "when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
          id: 2,
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
               "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " +
               "when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
          id: 3,
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
               "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " +
               "when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ],
      avatar: {
        src: "/DmitriiAvatar.jpeg",
        fallback: "CN"
      }
    },
    workExperience: { 
        title: "Work Experience"
    }, 
    chronology: { 
        title: "Chronology"
    },
    contact: {
        email: "gusevtech@gmail.com"
    },
  };
  
  export type WebsiteContent = typeof websiteContent;