# 🍲 PS2: Recipe Finder

## 📌 Problem Statement
**PS2 – Recipe Finder**

## 📝 About the Project
Recipe Finder is a web application that allows users to search for recipes by dish name and explore complete recipe details. Users can discover meals, view ingredients and their measurements, read cooking instructions, and access related YouTube cooking videos.

The application uses **TheMealDB API** to fetch recipe data dynamically.

## ✨ Features
- **Home Page:** Hero section with quick-search buttons for Chicken, Pasta, and Cake.
- **Search Recipes:** Search for dishes and view matching recipes in real-time.
- **Recipe Cards:** Display recipe images, names, cuisine, and direct link to recipe details.
- **Recipe Details:** View full recipe information, including ingredients, measurements, cooking instructions, and YouTube tutorial.
- **No Results Message:** Displays friendly "No recipe found" message when no matching recipes are returned.
- **404 Page:** Clean Page Not Found message with a link to navigate back to Home.

## 🛠️ Technologies Used
- React 19
- Vite
- React Router 7
- Vanilla CSS
- TheMealDB API

## 🔗 API Used
**TheMealDB API**

1. **Search meals by name**
   - https://www.themealdb.com/api/json/v1/1/search.php?s=chicken

2. **Lookup meal details by ID**
   - https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772

3. **Fetch meal categories**
   - https://www.themealdb.com/api/json/v1/1/categories.php

4. **Filter meals by category**
   - https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood

## 🛣️ Application Routes

| Route | Description |
|---|---|
| `/` | Home page with hero section and quick-search buttons |
| `/meals` | Displays searchable meal cards with images, names, and cuisine |
| `/meal/:id` | Displays full recipe details, ingredients, measurements, instructions, and YouTube link |
| `*` | Displays a Page Not Found message with a link to Home |

## 📸 Screenshots

### 1. Home Page
![Recipe Finder Home Page](screenshots/home.png)

### 2. Recipe Details Page
![Recipe Finder Recipe Details](screenshots/recipe.png)

## 🚀 Live Demo
- **Live Website:** [https://ps2-recipe-finder.vercel.app](https://ps2-recipe-finder.vercel.app)

## 💻 Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/ekanshbannsal/ps2-recipe-finder.git
   ```

2. Navigate to the project directory:

   ```bash
   cd ps2-recipe-finder
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal (usually `http://localhost:5173`).

## 📂 Project Structure

```text
recipe-finder/
├── public/
├── src/
│   ├── components/
│   │   ├── MealCard.jsx
│   │   └── Navbar.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── MealDetails.jsx
│   │   ├── Meals.jsx
│   │   └── NotFound.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── screenshots/
│   ├── home.png
│   └── recipe.png
├── vercel.json
├── package.json
└── README.md
```

## 👨‍💻 Author
**Ekansh Bansal**

- GitHub: [https://github.com/ekanshbannsal/ps2-recipe-finder](https://github.com/ekanshbannsal/ps2-recipe-finder)
- Live Demo: [https://ps2-recipe-finder.vercel.app](https://ps2-recipe-finder.vercel.app)

## 📄 License
This project was created for educational purposes as part of the PS2 Recipe Finder assignment.
