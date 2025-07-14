import {
    HtmlIcon, CssIcon, JsIcon, ReactIcon, NodeIcon, TsIcon, NextIcon, MysqlIcon, MongoIcon, GdriveIcon, SocketIoIcon, RestApiIcon, PhpIcon, ViteIcon, NextAuthIcon, ReduxIcon, TailwindIcon, ZustandIcon, AstroIcon, NanostoresIcon, D3JsIcon, ReactQueryIcon, EdgeStoreIcon, PythonIcon, SupabaseIcon, JupyterIcon
} from "../assets/Icons"

import {
    NextmartLogo, ArmsLogo, ArmsPhpLogo, ClimateLogo, CovidtraxLogo, DaysbeyondLogo, FilmstackLogo, PikturesLogo, SrinivasLogo, XReconLogo, YoatubeLogo, VortexaLogo
} from "../assets/Logos"

import {
    NextmartShots, Armsv1Shots, Armsv2Shots, ClimateShots, CovidTraxShots, DaysbeyondShots, FilmstackShots, PikturesShots, SrinivasShots, XreconShots, YoatubeShots, VortexaShots, Armsv3Shots
} from "../assets/Shots"

import {
    ARMSv1Mockup, ARMSv2Mockup, ARMSv3Mockup, ClimateMockup, DaysbeyondMockup, SrinivasMockup, VortexaMockup, XreconMockup, YoatubeMockup
} from "../assets/Mockup"


type ProjectsListType = {
    Name: string,
    ShortDesc: string,
    Desc: string,
    Logo: ImageMetadata,
    Shot: ImageMetadata,
    Mockup: ImageMetadata,
    Theme: string,
    Status: string,
    Link?: string,
    Source: string,
    Demo?: {
        email: string,
        password: string
    },
    Tech: {
        title: string,
        description: string,
        icon: ImageMetadata
    }[],
    features: {
        title: string,
        description: string
    }[],
    hideProject: boolean,
    LogoSize: number,
    versions: {
        title: string,
        version: string
    }[]
}[]

// -- PROJECTS TEMPLATE --
// {
//     Name: "TITLE",
//     ShortDesc: "SHORT_DESCRIPTION",
//     Desc: "DESCRIPTION",
//     Logo: LOGO_URL,
//     Shot: SCREENSHOT_URL,
//     Mockup: MOCKUP_URL,
//     Theme: "PROJECT_THEME_COLOR_HEX",
//     Status: "completed OR development",
//     Link: "PROJECT_URL",
//     Source: "GITHUB_URL",
//     Demo?: { 
//         email: "DEMO_EMAIL", 
//         password: "DEMO_PASSWORD" 
//     },
//     Tech: [TECH_ICONS_URL],
//     features: [{
//         title: "FEATURE_TITLE",
//         description: "FEATURE_DESCRIPTION"
//     }],
//     hideProject: false,
//     LogoSize: 50,
//     versions: [{ 
//         title: "PREV_PROJECT_TITLE", 
//         version: "VERSION_NO" 
//     }]
// },

const TechInfo = {
    HTML: {
        title: "HTML",
        description: "HyperText Markup Language for creating the structure of web pages.",
        icon: HtmlIcon
    },
    CSS: {
        title: "CSS",
        description: "Cascading Style Sheets for styling the presentation of HTML documents.",
        icon: CssIcon
    },
    JavaScript: {
        title: "JavaScript",
        description: "High-level scripting language for adding interactivity to web pages.",
        icon: JsIcon
    },
    React: {
        title: "React",
        description: "JavaScript library for building user interfaces with reusable components.",
        icon: ReactIcon
    },
    Node: {
        title: "Node.js",
        description: "JavaScript runtime for server-side applications, enabling scalable and event-driven architecture.",
        icon: NodeIcon
    },
    TypeScript: {
        title: "TypeScript",
        description: "A superset of JavaScript adding static typing for building large-scale applications with enhanced maintainability and tooling support.",
        icon: TsIcon
    },
    Next: {
        title: "Next.js",
        description: "A React framework for server-side rendering, static site generation, and routing, offering improved performance and SEO optimization.",
        icon: NextIcon
    },
    MySQL: {
        title: "MySQL",
        description: "Open-source relational database management system for storing and managing structured data.",
        icon: MysqlIcon
    },
    MongoDB: {
        title: "MongoDB",
        description: "NoSQL database offering flexibility and scalability for storing and managing data efficiently.",
        icon: MongoIcon
    },
    GDrive: {
        title: "Google Drive API",
        description: "RESTful API for integrating Google Drive functionalities such as file storage and synchronization into applications.",
        icon: GdriveIcon
    },
    SocketIO: {
        title: "Socket.IO",
        description: "Real-time bidirectional communication library for building interactive web applications.",
        icon: SocketIoIcon
    },
    RESTAPI: {
        title: "REST API",
        description: "Architectural style for designing networked applications with standardized HTTP operations.",
        icon: RestApiIcon
    },
    PHP: {
        title: "PHP",
        description: "Server-side scripting language for building dynamic web applications.",
        icon: PhpIcon
    },
    Vite: {
        title: "Vite",
        description: "Modern build tooling for web development with rapid startup and hot module replacement.",
        icon: ViteIcon
    },
    NextAuth: {
        title: "NextAuth.js",
        description: "Authentication library designed specifically for Next.js applications, providing robust authentication features and seamless integration.",
        icon: NextAuthIcon
    },
    Redux: {
        title: "Redux",
        description: "Predictable state management library for JavaScript applications, enabling developers to write consistent, scalable code with ease.",
        icon: ReduxIcon
    },
    TailwindCSS: {
        title: "Tailwind CSS",
        description: "A utility-first CSS framework providing pre-designed, atomic-level utility classes for rapid UI development with minimal CSS code.",
        icon: TailwindIcon
    },
    Zustand: {
        title: "Zustand",
        description: "Tiny, fast, and scalable state management for React applications, providing a simple and intuitive API.",
        icon: ZustandIcon
    },
    Astro: {
        title: "Astro",
        description: "Frontend framework for streamlined development, integrating seamlessly with popular tools to create fast and modern websites with minimal configuration overhead.",
        icon: AstroIcon
    },
    NanoStores: {
        title: "NanoStores",
        description: "Lightweight state management library for JavaScript applications, designed for simplicity and performance to simplify state management and improve application responsiveness.",
        icon: NanostoresIcon
    },
    D3: {
        title: "D3.js",
        description: "Versatile JavaScript library for data visualization, enabling developers to create dynamic, interactive graphics and charts by binding data to DOM elements.",
        icon: D3JsIcon
    },
    ReactQuery: {
        title: "React Query",
        description: "React library for managing, caching, and synchronizing server state in web applications, providing a powerful and intuitive API for fetching and updating data.",
        icon: ReactQueryIcon
    },
    EdgeStore: {
        title: "EdgeStore",
        description: "EdgeStore is an open-source file storage service, designed for scalability and performance, with efficient updates and minimal API.",
        icon: EdgeStoreIcon
    },
    Supabase: {
        title: "Supabase",
        description: "Open-source Firebase alternative providing a full backend for your projects, including a Postgres database, authentication, and real-time subscriptions.",
        icon: SupabaseIcon
    },
    TensorFlow: {
        title: "TensorFlow",
        description: "An open-source machine learning framework for building and training neural networks.",
    },
    NLP: {
        title: "Natural Language Processing",
        description: "A field of artificial intelligence that focuses on enabling computers to understand, interpret, and generate human language.",
        icon: PythonIcon // Using PythonIcon as a placeholder, consider adding a specific NLP icon if available
    },
    NumPy: {
        title: "NumPy",
        description: "A fundamental package for numerical computing with Python, providing support for large, multi-dimensional arrays and matrices.",
    },
    CNN: {
        title: "Convolutional Neural Networks",
        description: "A class of deep neural networks, most commonly applied to analyzing visual imagery.",
    },
    Keras: {
        title: "Keras",
        description: "A high-level neural networks API, written in Python and capable of running on top of TensorFlow, CNTK, or Theano.",
    },
    Pillow: {
        title: "Pillow",
        description: "The friendly PIL fork, a Python Imaging Library that adds image processing capabilities to your Python interpreter.",
    },
    Tkinter: {
        title: "Tkinter",
        description: "Python's standard GUI (Graphical User Interface) toolkit.",
    },
    Python: {
        title: "Python",
        description: "A versatile high-level programming language known for its readability and extensive libraries.",
        icon: PythonIcon
    },
    JupyterNotebook: {
        title: "Jupyter Notebook",
        description: "An open-source web application that allows you to create and share documents that contain live code, equations, visualizations and narrative text.",
        icon: JupyterIcon
    }
};

// Common Features List
const FeatureList = {
    Responsive: {
        title: "Responsive Design",
        description: "Enjoy a seamless experience across devices with a responsive design that adapts to various screen sizes and orientations."
    },
    SEO: {
        title: "SEO Optimization",
        description: "Crafted with SEO best practices, ensuring optimal visibility on search engines. From keyword-rich content to streamlined meta tags and efficient site architecture."
    }
}

export const ProjectsList: ProjectsListType = [
    {
        Name: "HandWritten Digit Recognition",
        ShortDesc: "A model to identify and classify handwritten digits with high accuracy using Convalutional Neural Networks.",
        Desc: "This project uses a deep learning approach to recognize handwritten digits (0–9) from images. Built using Python and trained on the MNIST dataset, the system implements a Convolutional Neural Network (CNN) for accurate classification. It serves as a foundational example of computer vision in AI and is useful in OCR and document analysis tasks.",
        Logo: ArmsLogo,
        Shot: Armsv3Shots,
        Mockup: ARMSv3Mockup,
        Theme: "#FFF",
        Status: "completed",
        Source: "https://github.com/GirigallaPrathyusha/Handwritten-Digit-Recognition",
        Tech: [TechInfo.Python, TechInfo.JupyterNotebook],
        features: [
            FeatureList.Responsive,
            FeatureList.SEO,
            {
              title: "CNN Model",
              description: "Implements Convolutional Neural Network for digit recognition with high accuracy."
            },
            {
              title: "MNIST Dataset",
              description: "Trained and tested on the industry-standard MNIST dataset of handwritten digits."
            },
            {
              title: "Real-Time Prediction",
              description: "Supports image input or sketchpad input to predict digits dynamically."
            },
            {
              title: "Visualization",
              description: "Displays model architecture and confusion matrix for performance insight."
            }
        ],
        hideProject: false,
        LogoSize: 50,
        versions: [
            { title: "ARMS v3", version: "3" },
            { title: "ARMS v2", version: "2" },
            { title: "ARMS v1", version: "1" },
        ]
    },
    {
        Name: "Automated Job Application & Resume Customization",
        ShortDesc: "A web based system that streamlining everything from search to submission.",
        Desc: "Our system automates the entire job application process.It extracts skills from resumes using NLP, scrapeing matched jobs using jsearch, customizes resumes using AI by adding missing keywords, and auto-fills job applications — Enables users to apply to multiple jobs quickly, increasing their chances of getting shortlisted,it will reducing manual effort.",
        Logo: ArmsLogo, 
        Shot: XreconShots,
        Mockup: XreconMockup, 
        Theme: "#fff",
        Status: "completed",
        Link: undefined, 
        Source: "https://github.com/GirigallaPrathyusha/Automated-Job-Application-and-Resume-Customization",
        Tech: [TechInfo.React, TechInfo.TypeScript, TechInfo.TailwindCSS, TechInfo.Supabase, TechInfo.Python, TechInfo.Vite, TechInfo.Node, TechInfo.HTML],
        features: [
            FeatureList.Responsive,
            FeatureList.SEO,
            {
                title: "Automated Job Application",
                description: "The system extracts resume skills using NLP, finds matching jobs via JSearch, customizes resumes with AI, and auto-fills applications—streamlining the process and reducing manual effort."
            },
            {
                title: "AI Resume Customization",
                description: "Automatically analyzes job descriptions and adds missing keywords to resumes, increasing the chances of getting shortlisted."
            },
            {
                title: "End-to-End Application Submission",
                description: "Enables users to apply to multiple jobs quickly by auto-filling forms and attaching tailored resumes for seamless job applications."
            },
            {
                title: "Skill-Based Job Matching",
                description: "Uses NLP to extract user skills from resumes and match them with the most relevant job openings from multiple portals."
            },
            {
                title: "Web Scraping with JSearch",
                description: "Automatically scrapes job listings using the JSearch API to find updated, relevant opportunities based on user preferences."
            },
            {
                title: "Time-Saving Automation",
                description: "Reduces manual effort by automating resume tailoring and job applications, allowing users to focus on interview preparation."
            },
        ],
        hideProject: false,
        LogoSize: 50,
        versions: [
            { title: "ARMS v3", version: "3" },
            { title: "ARMS v2", version: "2" },
            { title: "ARMS v1", version: "1" },
        ]
    },
    {
        Name: "Slumcare ChatBot",
        ShortDesc: "SlumCare Chatbot is an AI-powered  assistant that helps slum residents report issues and get quick support from relevant authorities.",
        Desc: "SlumCare Chatbot is a web-responsive AI-powered assistant designed to help residents in slum areas report daily issues like sanitation problems, water leaks, or emergency needs. Built using Flask, Supabase, and Google AI APIs, the chatbot identifies first-time users through a registration form and stores chat history for returning users. It provides quick, smart responses to citizen queries and helps connect them with the appropriate higher departments for resolution",
        Logo: ArmsLogo,
        Shot: NextmartShots,
        Mockup: ARMSv1Mockup,
        Theme: "#090b0b",
        Status: "completed",
        Link: undefined,
        Source: "https://github.com/GirigallaPrathyusha/slumchatbot",
        Tech: [TechInfo.HTML, TechInfo.CSS, TechInfo.Python, TechInfo.Supabase, TechInfo.JavaScript],
        features: [
            FeatureList.Responsive,
            FeatureList.SEO,
                {
                    title: "Emergency Issue Reporting",
                    description: "Allow users to instantly report critical slum area issues like water leakage, power cuts, or health hazards directly through the chatbot."
                },
                {
                    title: "Smart Registration Flow",
                    description: "First-time users are prompted with a simple registration form. Returning users are auto-recognized, creating a seamless experience."
                },
                {
                    title: "AI-Powered Responses",
                    description: "Utilizes Google AI to provide intelligent, quick, and context-aware replies tailored to each user's query or complaint."
                },
                {
                    title: "Supabase Integration",
                    description: "Stores user details and chat history securely in Supabase, ensuring data persistence and retrieval for personalized assistance."
                },       
        ],
        hideProject: false,
        LogoSize: 40,
        versions: []
    },
    {
        Name: "XRecon",
        ShortDesc: "A real-time chat app, reminiscent of WhatsApp, allowing users to register, login, and connect with friends and family through instant messaging.",
        Desc: "XRecon is a dynamic real-time chat app that offers a seamless communication experience, akin to popular platforms like WhatsApp. With XRecon, users can effortlessly register and log in to their accounts, enabling them to connect with friends and family through instant messaging. Whether it's sharing updates, engaging in conversations, or simply staying connected, XRecon provides a user-friendly interface for convenient and reliable communication.",
        Logo: XReconLogo,
        Shot: XreconShots,
        Mockup: XreconMockup,
        Theme: "#001220",
        Status: "development",
        Link: "https://xrecon.netlify.app/",
        Source: "https://github.com/ChiragChrg/xrecon",
        Demo: { email: "demouser123@gmail.com", password: "DemoUser123" },
        Tech: [TechInfo.Vite, TechInfo.React, TechInfo.Node, TechInfo.MongoDB, TechInfo.SocketIO],
        features: [
            {
                title: "Real-Time Chat",
                description: "Engage in real-time conversations with other users using Socket.io technology providing seamless communication."
            },
            {
                title: "Dynamic User Avatars",
                description: "Personalize your profile with dynamic user avatars generated using the Multiavatar API. Each user gets a unique and colorful avatar based on their username."
            },
            {
                title: "Private Messaging",
                description: "Communicate privately with other users through secure and encrypted messaging. Exchange messages without the worry of unauthorized access."
            },
            {
                title: "Emojis and Reactions",
                description: "Express yourself with a wide range of emojis and reactions. Add fun and personality to your messages with animated emojis and customizable reactions."
            },
            FeatureList.Responsive,
            FeatureList.SEO,
        ],
        hideProject: true,
        LogoSize: 55,
        versions: []
    },
    {
        Name: "YoaTube",
        ShortDesc: "YoaTube is a YouTube-inspired video streaming app. Enjoy a vast collection of videos, personalized recommendations, and a seamless user interface.",
        Desc: "YoaTube is a dynamic video streaming application, designed with the power of the YouTube API. This innovative platform provides users with an immersive and engaging video-watching experience similar to YouTube. Explore an extensive library of videos. With YoaTube, you can dive into a world of captivating videos, all within a seamless and user-friendly interface.",
        Logo: YoatubeLogo,
        Shot: YoatubeShots,
        Mockup: YoatubeMockup,
        Theme: "#0f0f0f",
        Status: "completed",
        Link: "https://yoatube.netlify.app/",
        Source: "https://github.com/ChiragChrg/yoatube",
        Tech: [TechInfo.HTML, TechInfo.CSS, TechInfo.JavaScript, TechInfo.React, TechInfo.RESTAPI],
        features: [
            {
                title: "Video Streaming",
                description: "Stream high-quality videos seamlessly. Enjoy smooth playback with adaptive streaming technology."
            },
            {
                title: "Search and Discovery",
                description: "Discover new content with powerful search and recommendation algorithms. Find videos based on your interests and preferences."
            },
            FeatureList.Responsive,
            FeatureList.SEO,
        ],
        hideProject: true,
        LogoSize: 55,
        versions: []
    },
    {
        Name: "Online Bus Ticket Booking",
        ShortDesc: "Online Bus Ticket Booking System for Travel Management.",
        Desc: "The system allows users to search for buses based on their desired origin and destination, along with the preferred travel date. Upon entering these details, the system retrieves relevant information from the database and displays available bus options, including departure time, duration, fare, and seat availability.",
        Logo: DaysbeyondLogo,
        Shot: DaysbeyondShots,
        Mockup: DaysbeyondMockup,
        Theme: "#008ee0",
        Status: "completed",
        Link: undefined,
        Source: "https://github.com/ChiragChrg/DaysBeyond",
        Tech: [TechInfo.PHP,TechInfo.HTML, TechInfo.CSS, TechInfo.JavaScript, TechInfo.MySQL],
        features: 
            [
                {
                  title: "Real-Time Seat & Booking Management",
                  description: "Monitor seat availability and manage bookings instantly. Get real-time updates on reserved, available, and pending seats."
                },
                {
                  title: "Destination & Schedule Selection",
                  description: "Search and filter buses based on chosen origin, destination, date, and time. View departure schedules clearly and effortlessly."
                },
                {
                  title: "Interactive Seat Selection",
                  description: "Display seat layouts so users can pick their preferred seats. Ensure accurate availability and reduce booking conflicts."
                },
                {
                  title: "Live Location & Journey Updates",
                  description: "Track buses in real-time and provide live location updates to passengers during their journey."
                },
                {
                  title: "Self-Service Ticketing & E-Ticketing",
                  description: "Enable users to print their own tickets or use digital QR-code passes without needing agent assistance."
                },
                {
                  title: "Admin & Operator Dashboard",
                  description: "Allow operators to manage routes, schedules, and buses. Admins can view overall system performance and adjust pricing."
                },
                {
                  title: "Notifications & Alerts",
                  description: "Automatically send booking confirmations, reminders, and cancellations via email/SMS."
                },
            FeatureList.Responsive,
            FeatureList.SEO,
        ],
        hideProject: false,
        LogoSize: 55,
        versions: []
    },
    {
        Name: "Hostel Management System",
        ShortDesc: "A system to manage hostel activities.",
        Desc: "Developed a web application to automate student accommodation, permissions, andsecurity,hostel room allocation, leave requests, and visitor management, enhancingefficiency and transparency.",
        Logo: ArmsLogo, 
        Shot: Armsv2Shots, 
        Mockup: ARMSv2Mockup, 
        Theme: "#007bff", 
        Status: "completed",
        Link: undefined, 
        Source: "https://github.com/GirigallaPrathyusha/Hostel-Management-System",
        Tech: [TechInfo.HTML, TechInfo.CSS, TechInfo.JavaScript, TechInfo.PHP, TechInfo.MySQL], // Example tech stack
        features: [
            FeatureList.Responsive,
            {
                title: "Student Management",
                description: "Manage student details, room assignments, and academic records."
            },
            {
                title: "Room Allocation",
                description: "Automated and manual room allocation based on availability and preferences."
            },
            {
                title: "Leave Management",
                description: "Students can apply for leave and administrators can approve/reject."
            },
            {
                title: "Visitor Tracking",
                description: "Log and manage visitor entries and exits for security."
            }
        ],
        hideProject: false,
        LogoSize: 50,
        versions: []
    }
]