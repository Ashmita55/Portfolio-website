// Change website animations
const animation = {
    // make it false to switch off fade-up animation
    animate: true,
    // animation playing duration
    duration: 750,
    // if true, animation plays only once when element comes on screen
    once: false,
  };
  // Change your display name on tha landing display
  const header = {
    name: "Ashmita",
  };
  const background = {
    // Options: Snow or Particle
    type: "Snow",
  };
  // Write a para about yourself here
  // To update your image, go to './styles/images.css'
  const section2title = "About Me";
  const about = {
    paragraph:
      "I'm Ashmita Tiwari, a 22-year-old frontend enthusiast. I am friendly and positive communicator who loves solving inerpersonal problems. I like to resolve design problems, create smart user interface and imagine useful interaction and learn to develop rich web experiences and web applications. When not learning or fuzing around the code, I love reading novels and I keep on searching for best place for hire.",
  };
  // Edit your skill and the percentage you know about it
  // To Add a skill, copy any one below and paste it after the last comma
  const skillsBar = [
    {
      name: "HTML",
      faClass: "fab fa-html5",
    },
    {
      name: "CSS",
      faClass: "fab fa-css3",
    },
    {
      name: "Javascript",
      faClass: "fab fa-js",
    },
    
    {
      name: "ReactJS",
      faClass: "fab fa-react",
    },
    {
      name: "AdobeXD",
      faClass: "fab fa-adobe",
    },
    
  ];
  // Edit your projects, its name, your skills used to make it, and the url.
  // You can omit freely anything if you dont have it
  // To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
  const section3Title = "Past Projects";
  const projects = [
    {
      // Add image in './styles/images.css' in #project1
      id: "project1",
      name: "React Blog",
      skills: ["Developed Blog app using React JS, Node JS and MongoDB"],
      url: "https://github.com/Ashmita55/Blog",
    },
    {
      // Add image in './styles/images.css' in #project2
      id: "project2",
      name: "Pregnancy Helper",
      skills: ["Developed frontend of this project using HTML and CSS"],
      url: "https://github.com/aditikhanal/Pregnancy-helper",
    },
    {
      // Add image in './styles/images.css' in #project3
      id: "project3",
      name: "Plant Disease Classification",
      skills: ["Designed frontend of this project using AdobeXD and Photoshop"],
      url: "https://github.com/aditikhanal/Krisi_Doctor?fbclid=IwAR2s7VYO5pTdsmSvu6FQNaqGqbbZTMQeq52havEyI5GMK6GzvvjjsaiDlyE",
    },
    {
      // Add image in './styles/images.css' in #project3
      id: "project4",
      name: "Style Studio",
      skills: ["Designed UI/UX using AdobeXD and Photoshop"],
      url: "https://drive.google.com/file/d/1DOwCOKMj_U9jFSWLZnT52-pVmRTc91Ks/view?usp=sharing",
    },
    {
      // Add image in './styles/images.css' in #project3
      id: "project5",
      name: "Nepalese For Nepalese",
      skills: ["Designed UI/UX using AdobeXD and Photoshop"],
      url: "https://drive.google.com/file/d/17QRTGYxeCg6tDBsCiQ7rhjym6pT5qxAW/view?usp=sharing",
    },
  ];
  // Contact form text, and Jotforms link
  // To get your own jotform link, go to https://www.jotform.com/
  // If you hacve the link already, paste it in the contactUrl below
  const section5Title = "Get in Touch";
  const contact = {
    pitch:
      "Let's get connected !!"
  };
  // Paste your respective social media links. You can omit any if you dont have it
  // Upload your resume in your drive, get the shaareable link and paste it in the resume section
  const social = {
    github: "https://github.com/Ashmita55",
    linkedin: "https://www.linkedin.com/in/ashmita-tiwari-25b101142/",
    Behance: "https://www.behance.net/ashmitatiwari",
  };
  // Dont change anything here
  export {
    animation,
    header,
    background,
    about,
    skillsBar,
    projects,
    contact,
    social,
    section2title,
    section3Title,
    section5Title,
  };