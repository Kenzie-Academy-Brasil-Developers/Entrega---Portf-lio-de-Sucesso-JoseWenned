export const projects = [

    {
        id: 1,
        image: "./src/assets/Project Front End.png",
        name: "Project Nu Kenzie",
        language: "Html, Css3 ( SCSS ), Javascript, React",
        description: `Nu Kenzie is a React application for managing expenses. The components were structured and styled with SASS. The logic uses state to capture transactions, dynamically render them, and calculate the total. Features include add/delete transactions and total calculation. Ternaries are used to improve user experience. The project promotes the practice of componentization, styling and state manipulation in React, providing an intuitive and efficient interface for financial control.`,
        linkGitHub: "https://github.com/Kenzie-Academy-Brasil-Developers/Project-NuKenzie-JoseWenned",
        linkVercel: "https://project-nu-kenzie-jose-wenned.vercel.app/",
        category: "Frontend"
    },

    {
        id: 2,
        image: "./src/assets/Project Front End.png",
        name: "Project Burguer Kenzie",
        language: "Html, Css3 ( SCSS ), Javascript, React",
        description: `The Burguer Kenzie project implements features of a shopping cart using React and styling with SASS. The application consumes an API to list products, allowing you to add and remove items from the cart, with automatic calculation of totals. Responsiveness is guaranteed for a consistent experience across different devices. Using useEffect makes it easier to integrate with the API and persist cart data to localStorage. Additionally, a simple modal is implemented to detail additional information about the products. As an optional challenge, it is proposed to refine the modal's behavior with features such as closing when clicking outside or pressing "Esc". The project offers comprehensive practice in styling, API integration, state management, and event handling in React.`,
        linkGitHub: "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s3-template-hamburgueria-JoseWenned",
        linkVercel: "https://react-entrega-s3-template-hamburgueria-jose-wenned-erqnro5fs.vercel.app/",
        category: "Frontend"
    },

    {
        id: 3,
        image: "./src/assets/Project Front End.png",
        name: "Project Kenzie Hub",
        language: "Html, Css3 ( Styled-Components ), Javascript, React",
        description: `This project is a user authentication and management system in React, with routes for Login, Registration and Dashboard. The components are structured in a modular way, facilitating development and maintenance. Using React Router Dom, routes are configured to direct the user to the corresponding pages. Forms are managed with React Hook Form, including field validations. The registration form requires data such as name, email, password, biography, and course module. In the contact form, you only need your email and password. Registration and login functionalities are implemented via POST requests to the appropriate routes. After successful registration, the user is redirected to the home page. Upon login, the user's state is stored and the token is saved in localStorage for future authentication. Logout reverses the login actions, clearing the user's state and removing the localStorage token, redirecting the user back to the home page. This project provides a fluid and secure experience for users, with a well-defined architecture and robust authentication features.`,
        linkGitHub: "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-kenzie-hub-JoseWenned",
        linkVercel: "https://react-entrega-kenzie-hub-jose-wenned.vercel.app/",
        category: "Frontend"
    },

    {
        id: 4,
        image: "./src/assets/Project Front End.png",
        name: "Project Kenzie Movie",
        language: "Html, Css3 ( Tailwind ), Javascript, React, TypeScript",
        description: `This project aims to create a streaming platform with different access levels for logged in and logged out users. For logged in users, there is the ability to view a variety of films, each with detailed information including genre, name, duration and average rating. Plus, they can write, edit, and delete their own reviews. Logged out users can access all screens except the rating functionality. There is an emphasis on password security and data validation. The project makes use of ContextAPI to manage the global state of the application and allows the use of style/component libraries to facilitate code development and maintenance, encouraging the exploration of new technologies by collaborators.`,
        linkGitHub: "https://github.com/Kenzie-Academy-Brasil-Developers/M3-Project-KenzieMovie",
        linkVercel: "https://m3-project-kenzie-movie-lewb5mvh3-josewenneds-projects.vercel.app/",
        category: "Frontend"
    },

    {
        id: 5,
        image: "./src/assets/Project Api.png",
        name: "Project Autonomous Market",
        language: "Node.js, Express.js, TypeScript",
        description: `This REST API was developed to meet the inventory control needs of a startup transitioning to a network of autonomous markets, Smart Stores. Focusing on the most common product types, food and cleaning, the API offers routes for creating, listing, updating and deleting products. Using the provided design document, endpoints were implemented to ensure efficient inventory management, allowing the startup to maintain precise control over its products and facilitating its evolution into a network of autonomous marketplaces.`,
        linkGitHub: "https://github.com/Kenzie-Academy-Brasil-Developers/Entrega-Mercado-Autonomo-JoseWenned",
        linkVercel: "",
        category: "Backend"
    },

    {
        id: 6,
        image: "./src/assets/Project Api.png",
        name: "Project Movie Rental Store",
        language: "Node.js, Express.js, TypeScript",
        description: `The request consists of creating an API to manage a video store's film collection, aiming for integration with a streaming platform. The client demands a service that strictly complies with established rules, which include CRUD operations for films, with detailed information such as title, director, genre and year of release. The objective is to ensure an efficient and accurate system for collection management, meeting customer expectations and enabling a high-quality streaming experience for users.`,
        linkGitHub: "https://github.com/Kenzie-Academy-Brasil-Developers/Entrega-2-Locadora-de-Filmes-JoseWenned",
        linkVercel: "",
        category: "Backend"
    },

    {
        id: 7,
        image: "./src/assets/Project Api.png",
        name: "Project Kenzie Velopers",
        language: "Node.js, Express.js, TypeScript",
        description: `The task consists of developing a REST API in TypeScript to manage developers and projects at a technology startup. Developers can be registered, associated with extra information, and linked to specific projects. Business rules must be strictly followed, including using a PostgreSQL database and creating tables as specified. Automated testing is mandatory, with a separate database for running tests. The project structure should include specific folders for SQL and diagrams, with appropriate scripts for cleaning the database. The code must be organized and follow previously established practices, ensuring consistency and quality.`,
        linkGitHub: "https://github.com/Kenzie-Academy-Brasil-Developers/Entrega-3-KenzieVelopers-JoseWenned",
        linkVercel: "",
        category: "Backend"
    },

    {
        id: 8,
        image: "./src/assets/Project Api.png",
        name: "Project User and Courses",
        language: "Node.js, Express.js, TypeScript",
        description: `This project consists of creating an MVP of an API for controlling users and courses, with authentication and access control features. Users will be able to register, log in and be enrolled in courses. Additionally, the API will have administration functionality, allowing users with administrator permissions to manage courses and users. Restricted features will only be accessible to authenticated users and, in some cases, only to administrators. The MVP aims to provide a solid foundation for future development, meeting the basic needs of controlling users and courses securely and efficiently.`,
        linkGitHub: "https://github.com/Kenzie-Academy-Brasil-Developers/User-Courses-JoseWenned",
        linkVercel: "",
        category: "Backend"
    },

    {
        id: 9,
        image: "./src/assets/Project Api.png",
        name: "Project Kenzie Properties",
        language: "Node.js, Express.js, TypeScript",
        description: `The Kimóveis real estate service management application allows the registration of properties and interested users, facilitating communication between buyers and sellers. Users can schedule visits to available properties, optimizing the property search and acquisition process. Focusing on efficiency and practicality, the application aims to provide an intuitive and agile experience for clients and real estate employees, strengthening its position in the real estate market.`,
        linkGitHub: "https://github.com/Kenzie-Academy-Brasil-Developers/ProjetoFinal-KIm-veis-JoseWenned",
        linkVercel: "",
        category: "Backend"
    },

    {
        id: 10,
        image: "./src/assets/Project Api.png",
        name: "Project Kiosque",
        language: "Python",
        description: `This food store management application development project aims to provide the client with an efficient solution to manage their business. The application will allow you to check the existence of products on the menu, list foods by category, calculate the total cost of a table and other essential features to facilitate the store's day-to-day operations. The implementation will be carried out in stages, following the business rules and functionalities described in each task. The goal is to deliver a robust and user-friendly application that meets the customer's specific needs.`,
        linkGitHub: "https://github.com/Kenzie-Academy-Brasil-Developers/Kioque-JoseWenned",
        linkVercel: "",
        category: "Backend"
    },

    {
        id: 11,
        image: "./src/assets/Project Api.png",
        name: "Project World Cup",
        language: "Python, Django ( Rest Framework )",
        description: `This project consists of creating an API to organize a football championship, where each team represents a national team. The proposal aims to provide the sporting events company with an efficient solution to manage the tournament with adequate organization and validations. Development will be divided into stages, with business rules and functionalities detailed in each task. The objective is to ensure that the championship takes place in a fluid and organized manner, meeting the specific needs of the client and participants.`,
        linkGitHub: "https://github.com/Kenzie-Academy-Brasil-Developers/CupWorld-JoseWenned",
        linkVercel: "",
        category: "Backend"
    },

    {
        id: 11,
        image: "./src/assets/Project Api.png",
        name: "Project PetKare",
        language: "Python, Django ( Rest Framework )",
        description: `This project aims to implement an API for the PetKare petshop, providing greater control and organization of customer and pet data. The company currently faces challenges from manual processes and information disorganization. The API will be developed to centralize and automate tasks such as animal registration, appointment history, scheduling, among others. The goal is to modernize and optimize PetKare operations, improving the experience for both customers and employees.`,
        linkGitHub: "https://github.com/Kenzie-Academy-Brasil-Developers/PetKare-JoseWenned",
        linkVercel: "",
        category: "Backend"
    },

    {
        id: 12,
        image: "./src/assets/Project Api.png",
        name: "Project Kenzie Buster",
        language: "Python, Django ( Rest Framework )",
        description: `This project aims to develop an API for film sales management, replacing old-fashioned methods with a modern and efficient system. The application covers user, movie and purchase management, implementing authentication and route permissions for different types of users. The initial project configuration will follow best practices, including .gitignore and requirements.txt. Users will be customized based on AbstractUser, relationships will be established between users and movies, and serializers, customized validations and route protection via JWT authentication will be implemented. In addition, custom pivot tables, choice fields for model attributes and pagination with APIView will be created. The objective is to create a robust and modern solution for film sales management, providing greater efficiency and organization for the company.`,
        linkGitHub: "https://github.com/Kenzie-Academy-Brasil-Developers/KenzieBuster-JoseWenned",
        linkVercel: "",
        category: "Backend"
    },

    {
        id: 13,
        image: "./src/assets/Project Api.png",
        name: "Project BandKamp Generic View",
        language: "Python, Django ( Rest Framework )",
        description: `This project consists of refactoring a legacy project developed in Django, replacing the views in APIView and the basic serializers with Concrete Views and Model Serializer. In addition, the database will be transitioned from SQLite3 to PostgreSQL. The application must also have documentation in Swagger and/or Redoc format and be in production, with deployment on the Render platform. Two bugs related to application logic and configuration will be fixed, in addition to ensuring that .env.example and requirements.txt are configured correctly. The objective is to modernize the application, improving its structure and performance, ensuring its stability and functionality.`,
        linkGitHub: "https://github.com/Kenzie-Academy-Brasil-Developers/BandKampGenericView-JoseWenned",
        linkVercel: "",
        category: "Backend"
    },
    
];

export const experiences = [

    {    
        id: 1,
        company: "",
        office: "",
        date: ""
    }

]

export const educations = [

    {   

        id: 1,
        intitution: "Kenzie Academy Brasil",
        training: "Developer full stack",
        date: "jan 2023 - jan 2024"

    },

]

export const skills = [

    {   
        id: 1,
        image: "./src/assets/icons8-html-48.png"
    },

    {   
        id: 2,
        image: "./src/assets/icons8-css-48.png"
    },

    {
        id: 3,
        image: "./src/assets/scss-svgrepo-com.png"
    },

    {
        id: 4,
        image: "./src/assets/tailwindcss-icon-svgrepo-com.png"
    },

    {
        id: 5,
        image: "./src/assets/file-type-styled.png"
    },

    {
        id: 6,
        image: "./src/assets/icons8-javascript-48.png"
    },

    {
        id: 7,
        image: "./src/assets/icons8-texto-datilografado-48.png"
    },
    
    {
        id: 8,
        image: "./src/assets/react-javascript-js-framework-facebook-svgrepo-com.png"
    },

    {
        id: 9,
        image: "./src/assets/node-js-svgrepo-com.png"
    },

    {
        id: 10,
        image: "./src/assets/express-svgrepo-com.png"
    },

    {
        id: 11,
        image: "./src/assets/icons8-python-48.png"
    },

    {
        id: 12,
        image: "./src/assets/django-svgrepo-com.png"
    },

    {
        id: 13,
        image: "./src/assets/postgresql-svgrepo-com.png"
    },

    {
        id: 14,
        image: "./src/assets/mongodb-svgrepo-com.png"
    },

    {
        id: 15,
        image: "./src/assets/sqlite-svgrepo-com.png"
    },

    {
        id: 16,
        image: "./src/assets/docker-svgrepo-com.png"
    },

]

export const tools = [

    {
        id: 1,
        image: "./src/assets/icons8-windows-10-80.png"
    },

    {
        id: 2,
        image: "./src/assets/icons8-dbeaver-64.png"
    },

    {
        id: 3,
        image: "./src/assets/icons8-visual-studio-48.png"
    },

    {
        id: 4,
        image: "./src/assets/Insomnia.png"
    },

    {
        id: 5,
        image: "./src/assets/jira-svgrepo-com.png"
    },

    {
        id: 6,
        image: "./src/assets/trello-color-svgrepo-com.png"
    },

    {
        id: 7,
        image: "./src/assets/icons8-noção-50 (1).png"
    },

    {
        id: 8,
        image: "./src/assets/git-svgrepo-com.png"
    },

    {
        id: 9,
        image: "./src/assets/github-color-svgrepo-com.png"
    },

    {
        id: 10,
        image: "./src/assets/figma-svgrepo-com.png"
    },

]

