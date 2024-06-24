import img1 from "@/assets/projects/project1.jpg";
import img2 from "@/assets/projects/project2.jpg";
import img3 from "@/assets/projects/project3.jpg";
import img4 from "@/assets/projects/project4.jpg";
import img5 from "@/assets/projects/project5.jpg";
import img6 from "@/assets/projects/project6.jpg";

export const projects = [
  {
    num: 1,
    title: "NexParcel - Parcel Management System App",
    image: img1,
    category: "Fullstack",
    description:
      "This is an online platform for booking, managing, and delivering parcels, built using the MERN stack.",
    frontend_technology: "ReactJS, TailwindCSS, HeadlessUI, DaisyUI",
    backend_technology: " Node.js, Express.js, MongoDB, Firebase,",
    key_features: [
      {
        f1: "Personalized dashboard for users, deliverymen, and admin, providing specific functionalities and secure access.",
        f2: " Users can easily book parcels with a detailed form, manage their bookings, and track delivery statuses.",
        f3: "Integrated Stripe for secure online payments, with a smooth checkout process.",
      },
    ],
    live_demo: "https://nex-parcel.web.app",
    client_repo: "https://github.com/riyaz-369/nex-parcel-client",
    server_repo: "https://github.com/riyaz-369/nex-parcel-server",
  },
  {
    num: 2,
    title: "VolunTrack - Volunteer Management Web App",
    image: img2,
    category: "Fullstack",
    description:
      "VolunTrack is a full-stack application for browsing, adding volunteer posts, and requesting to be a volunteer.",
    frontend_technology: "ReactJS, TailwindCSS, DaisyUI",
    backend_technology: " Node.js, Express.js, MongoDB, Firebase,",
    key_features: [
      {
        f1: "Users can create volunteer need posts detailing the location, time, and other information. User also bea volunteer for others posts.",
        f2: " Efficiently browse through numerous volunteer posts with pagination and Quickly find specific volunteer using search and filter system.",
        f3: "Dashboard for admin and users.",
      },
    ],
    live_demo: "https://volun-track-9c5ae.web.app",
    client_repo: "https://github.com/riyaz-369/volun-track-client",
    server_repo: "https://github.com/riyaz-369/volun-track-server",
  },
  {
    num: 3,
    title: "DrawingDen - Art & Craft Store",
    image: img3,
    category: "Fullstack",
    description:
      "This is an online platform for booking, managing, and delivering parcels, built using the MERN stack.",
    frontend_technology:
      "ReactJS, TailwindCSS, HeadlessUI, DaisyUI, React Router DOM",
    backend_technology: " Node.js, Express.js, MongoDB, Firebase,",
    key_features: [
      {
        f1: "Users can post their art and crafts items also can edit and delete them.",
        f2: "Users can filter and view items based on categories such as lanndscape painting, oil painting, etc.",
        f3: "This application is fully responsive and works seamlessly on all device sizes.",
      },
    ],
    live_demo: "https://drawing-den.web.app",
    client_repo: "https://github.com/riyaz-369/drawing-den-client",
    server_repo: "https://github.com/riyaz-369/drawing-den-server",
  },
  {
    num: 4,
    title: "Sweet House - Real Estate Residential Home",
    image: img4,
    category: "Frontend",
    description:
      "A specialized real estate website on one specific type of property from the real estate house. The website allows users to browse, view their favorite houses.",
    frontend_technology:
      "ReactJS, TailwindCSS, MambaUI, Firebase Authentication",
    key_features: [
      {
        f1: "Implement email/password based authentication, Google and GitHub login options. Ensure user data persistence with Firebase.",
        f2: "The website is fully responsive, for mobile, tablet, and desktop views.",
        f3: "Use protected routes tonsure pages like estate details and user profile are protected, requiring login to access.",
      },
    ],
    live_demo: "https://sweet-house-61d6e.web.app",
    client_repo: "https://github.com/riyaz-369/sweet-house",
  },
  {
    num: 5,
    title: "Book Vibe - Online Book Catalog",
    image: img5,
    category: "Frontend",
    description:
      "The site allows users to browse books, view detailed information, add books to a reading list or wishlist, and sort books by various criteria.",
    frontend_technology: "ReactJS, TailwindCSS",
    key_features: [
      {
        f1: "The website is fully responsive, for mobile, tablet, and desktop views.",
        f2: "Displays detailed book information with options to Read or Wishlist, showing alerts and storing selections in local storage.",
        f3: "Shows all read and wishlist books with sorting options and tabs for separating read books from wishlist books.",
      },
    ],
    live_demo: "https://book-vibe-digital.netlify.app",
    client_repo: "https://github.com/riyaz-369/book-vibe",
  },
  {
    num: 6,
    title: "Recipe Calorie - Recipe Management App",
    image: img6,
    category: "Frontend",
    description:
      "Recipe Calorie is a web application designed to help users find, create, and manage recipes while tracking the calorie content of each dish.",
    frontend_technology: "ReactJS, TailwindCSS, DaisyUI, React Router DOM",
    backend_technology: " Node.js, Express.js, MongoDB, Firebase,",
    key_features: [
      {
        f1: "Detailed nutritional information for each recipe, including calorie count, to help users monitor their intake.",
        f2: "User can order and prepare recipe also browse, create, and save recipes.",
        f3: "The website is responsive, catering to mobile, tablet, and desktop views.",
      },
    ],
    live_demo: "https://recipe-calorie.netlify.app",
    client_repo: "https://github.com/riyaz-369/recipe-caloree",
  },
];
