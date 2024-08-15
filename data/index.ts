export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a SaaS software for startups",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Cloning Amazon Web store ",
    des: "Explore the Founctionalities of the Amazon store with the power of stripe payments",
    img: "/p_1.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/firebase.svg",
      "/redux.svg",
      "/nextauth.png",
    ],
    link: "https://amazon-clone-react-pied.vercel.app",
  },
  {
    id: 2,
    title: "Netfilex - Video Streeming App",
    des: "Simplify your movie watching experience with Netfilex . Seamlessly watch and enjoy the nights .",
    img: "/p_2.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/redux.svg"],
    link: "https://netfilex-react-prject.vercel.app",
  },
  {
    id: 3,
    title: "Modren Dashboard ",
    des: "A modren dashboard that include well designed managment System using the latest tech stack.",
    img: "/p_3.png",
    iconLists: ["/re.svg", "/tail.svg"],
    link: "https://dashboard-project-react.vercel.app",
  },
  {
    id: 4,
    title: "Modren UI/UX Store",
    des: "with well designed web app this is a cool web store that made with simplestey and powrful Check-out system usin Strip",
    img: "/p_4.png",
    iconLists: ["/re.svg", "/tail.svg", "/redux.svg", "/stripe.png"],
    link: "/https://mansour-g.netlify.app",
  },
];

export const testimonials = [
  {
    quote:
      "لجئت لهذا الشخص الطيب لمساعدتي في حل معضلة برمجية واجهتني في مشروع تخرجي, و انبهرت جدًا في إستجابته و فهمه للمشكلة وحلها في أفضل طريقة و أسرع وقت 🤩⚡ محظوظ كل من سيحصل على خدمات المهندس منصور لما فيها من الإخلاص و الإبداع الحقيقي في العمل ... اوصيكم بقلبًا صادق 👌.",
    name: "Raghad",
    title: "Nitco",
  },
  {
    quote:
      "I resorted to this kind person to help me solve a programming problem I faced in our project, and I was very impressed with his response and understanding of the problem and solving it in the best way and fastest time 🤩⚡ Lucky is everyone who will receive the services of Engineer Mansour for his sincerity and true creativity in work ... I recommend you with a sincere heart 👌",
    name: "Raghad",
    title: "Nitco",
  },
  {
    quote:
      "Collaborating with Mansour was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Mansour is the ideal partner.",
    name: "Hanouf",
    // title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "firebase",
    img: "/firebase.png",
    // nameImg: "/firebase.png",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    // nameImg: "/app.svg",
  },
  {
    id: 3,
    name: "stripe",
    img: "/stripe.png",
    // nameImg: "/stripe.png",
  },
  {
    id: 5,
    name: "amazon.",
    img: "/amazon.png",
    // nameImg: "amazon.",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Mansour-G",
  },
  {
    id: 2,
    img: "/insta.svg",
    link: "https://www.instagram.com/mr.code_7",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/mansour-barnawi-9a6882116",
  },
];
