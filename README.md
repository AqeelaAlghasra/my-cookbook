# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# my-cookbook
# [My Cookbook](https://github.com/AqeelaAlghasra/my-cookbook)

## Landing Page
![My Cookbook Landing Page](./public/LandingPage.png)

## Dashboard Page
![My Cookbook Landing Page](./public/DashboardPage.png)

## Description 

My Cookbook is a MERN-stack  platform designed for uploading recipes. The project consists of a frontend built with React and Bootstrap, and a backend built with Node.js and Express. The application allows users to browse recipes, upload recipes , and manage their recipes updates.Only the ownerr of the recipe is allowed to edit or delete a recipe

---

## Background

 was created to provide a seamless online shopping experience for customers looking to order traditional and modern sweets. The goal was to build a user-friendly platform that allows users to easily browse products, place orders, and manage their accounts. The project also aimed to provide admin users with tools to manage products and orders efficiently.

---
 
## Getting Started

- **Deployed App**: [My-Cookbok](https://)
- **Frontend Repository**: [My Cookbook Frontend](https://github.com/almashaur/my-cookbook)
- **Backend Repository**: [My Cookbook Backend](https://github.com/almashaur/my-cookbook-backend)
- **Planning Materials**: [Link to Wireframes/User Stories/Project Board](https://trello.com/b/n1IDqiOb/ga-project3-my-cookbook)
---

## Project Structure

### Frontend


```
my-cookbook/
├── node_modules/
├── public
├── src/
│ ├── contexts/
│ │ └── UserContext.jsx
│ ├── services/
│ │ ├── authService.js
│ │ ├── recipeService.js
│ │ └── userService.js
├── components/
│ │ ├── Footer/
│ │ │ └── Footer.css
│ │ │ └── Footer.jsx
│ │ ├── Navbar/
│ │ │ └── Navbar.jsx
│ │ ├── forms/
│ │ │ ├── addRecipe/
│ │ │ │ └── addRecipe.jsx
│ │ │ ├── DropDownList/
│ │ │ │ └── DropDownList.jsx
│ │ │ ├── EditRecipe/
│ │ │ │ └── EditRecipe.jsx
│ │ │ ├── LogInForm/
│ │ │ │ └── LogInForm.jsx
│ │ │ ├── RegisterForm/
│ │ │ │ └── RegisterForm.jsx
│ │ │ ├── pages/
│ │ │ ├── AboutPage/
│ │ │ │ └── AboutPage.jsx
│ │ │ ├── AllRecipes/
│ │ │ │ └── AllRecipes.jsx
│ │ │ ├── HomePage/
│ │ │ │ └── HomePage.jsx
│ │ │ ├── MyRecipes/
│ │ │ │ └── MyRecipes.jsx
│ │ │ ├── RecipeDetails/
│ │ │ │ └── RecipeDetails.jsx
│ ├── App.css
│ ├── App.jsx
│ ├── index.css
│ └── main.jsx
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── vercel.json
└── vite.config.js
```


### Backend


```
├── controllers/
│ ├── auth.js
│ ├── recipes.js
│ └── users.js
├── middleware/
├── models/
│ ├── recipe.js
│ └── user.js
├── node_modules/
├── .env
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── server.js
```
---



---

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Components](#components)
- [Services](#services)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repositories:

    ```bash
    git clone https://github.com/almashaur/my-cookbook.git
    git clone https://github.com/almashaur/my-cookbook-backend.git
    ```

2. Install dependencies for both frontend and backend:

    ```bash
    cd my-cookbook
    npm install
    cd ../my-cookbook-backend
    npm install
    ```

3. Start the development servers:

    - Frontend:

        ```bash
        cd my-cookbook
        npm start
        ```

    - Backend:

        ```bash
        cd my-cookbook-backend
        node server.js
        ```

    The frontend will be available at `http://localhost:3000` and the backend at `http://localhost:5173/`.

## Usage

- Navigate to the homepage to view all recipes .
- Sign in to place upload your own recipes and manage your profile.
- Owner of the recipes only can edit and delete their recieps via the "Add Recipe" and "Edit Recipe" pages.

## Features

- **User Authentication**: Secure sign-in and sign-up functionality.
- **Recipe Management**: Owner of the recipes only can edit and delete their recieps.
- **Responsive Design**: The application is responsive and works on various devices.

## Components

### AddRecipe

The `addRecipe` component allows users to create new recipes. It includes form validation and error handling.

### EditRecipe

The `EditRecipe` component allows component allows users to edit thier own recipes. It includes form validation and error handling. 

## Services

### recipeService

The `recipesService` contains functions to interact with the product-related API endpoints.

- `createRecipe(recipe)`: Creates a new recipe.
- `updateRecipe(recipeId, recipe)`: Updates an existing recipe.
- `deleteRecipe(recipeId)`: Deletes a recipe.
- `getAllRecipes`: returns all recipes.
- `getUserRecipes`: returns all recipes for a specific user.
- `getRecipebyId`: returns a specific recipe.



### authService

The `authService` handles user authentication.

- `login(credentials)`: Authenticates a user.
- `register(user)`: Registers a new user.

## Technologies Used

- **Frontend**:
  - **React**: A JavaScript library for building user interfaces.
  - **Bootstrap**: A CSS framework for responsive design.
  - **Vite**: A build tool for modern web development.

- **Backend**:
  - **Node.js**: A JavaScript runtime for building server-side applications.
  - **Express.js**: A web framework for Node.js.
  - **Mongoose**: An ODM library for MongoDB.

- **Database**:
  - **MongoDB**: A NoSQL database for storing application data.

- **Other Tools**:
  - **Git**: Version control system.
  - **Vercel**: Deployment platform for frontend.
  - **Morgan**: HTTP request logger for Node.js.

---

## Attributions

- [Bootstrap](https://getbootstrap.com/): Used for styling and responsive design.
- [React Icons](https://react-icons.github.io/react-icons/): Used for icons in the application.
- [Vite](https://vitejs.dev/): Used as the build tool for the frontend.

---

## Next Steps

- **User Reviews**: Allow users to leave reviews and ratings for products.
- **Advanced Search**: Implement advanced search and filtering options for recipes.
- **Mobile App**: Develop a mobile version of the application for iOS and Android.
- **Likes and add to favorite recipes Option** :Allow users to add a like , and create their favorites list of recipes 
- **Archiving option**: Allow users to archive their recipes instead of deleting.

---

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

