🍽️ Recipe App
A modern, responsive React application for browsing and discovering delicious recipes from around the world. Built with Material-UI and powered by TheMealDB API.

✨ Features

🔍 Smart Search - Search recipes by category with debounced input
📱 Responsive Design - Works seamlessly on desktop, tablet, and mobile
⚡ Fast Performance - Optimized with React useMemo and useRef hooks
🎨 Modern UI - Clean interface built with Material-UI components
📄 Pagination - Browse recipes with easy-to-use navigation
⚠️ Error Handling - Graceful error messages and loading states

🔗 **Live Demo:** https://recipeapp53.netlify.app/

📋 Prerequisites
Before you begin, ensure you have the following installed:

Node.js (v14 or higher)
npm or yarn

🛠️ Installation

Clone the repository:

bashgit clone https://github.com/yourusername/recipe-app.git
cd recipe-app

Install dependencies:

bashnpm install
# or
yarn install

Start the development server:

bashnpm start
# or
yarn start

Open http://localhost:3000 in your browser

📦 Technologies Used

React - Frontend library
Material-UI (MUI) - UI component library
TheMealDB API - Recipe data source
CSS3 - Custom styling

🏗️ Project Structure
recipe-app/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Search bar component
│   │   ├── RecipeCard.jsx      # Recipe card display
│   │   └── ShowRecipe.jsx      # Recipe list container
│   ├── App.jsx                 # Main application component
│   ├── App.css                 # Global styles
│   └── index.js                # Application entry point
├── package.json
└── README.md
🎯 Key Components
App.jsx
Main component managing:

State management (meals, loading, errors, pagination)
API calls to TheMealDB
Search and category filtering
Pagination logic

Header.jsx
Search bar component with:

Debounced search input (500ms delay)
Material-UI styled components
Responsive design

RecipeCard.jsx
Displays individual recipe cards with:

Recipe image
Recipe name
Details button (expandable)

ShowRecipe.jsx
Container component handling:

Loading states
Error messages
Recipe grid display

🔧 API Reference
This app uses TheMealDB API:
javascript// Filter by category
GET https://www.themealdb.com/api/json/v1/1/filter.php?c={category}
Available categories:

Seafood
Beef
Chicken
Dessert
Lamb
Pasta
Pork
Vegetarian
And more...

💡 Usage

Browse Recipes: The app loads Seafood recipes by default
Search: Type a category name in the search bar (e.g., "Chicken", "Dessert")
Navigate: Use "Prev" and "Next" buttons to browse through pages
View Details: Click "Show Details" button on any recipe card (feature coming soon)

🚧 Features in Development

 Recipe detail modal/page
 Favorite recipes functionality
 Filter by multiple categories
 Ingredient-based search

🐛 Known Issues

Search requires exact category names (e.g., "Seafood" not "Sea Food")
Show Details button is not yet functional

🤝 Contributing
Contributions are welcome! Please follow these steps:

Fork the repository
Create a feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request

📝 Code Quality
The project follows best practices:

✅ Debounced search to minimize API calls
✅ Error boundaries and graceful error handling
✅ Performance optimization with useMemo
✅ Consistent code formatting
✅ Responsive design patterns

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.
👤 Author
Mohamed Gaber

GitHub: [@Mohamed-Gaber53](https://github.com/Mohamed-Gaber53)
LinkedIn: https://www.linkedin.com/in/mohamed-gaber-dev/

🙏 Acknowledgments

TheMealDB for the free recipe API
Material-UI for the beautiful components
React team for the amazing framework

📞 Support
If you have any questions or need help, please open an issue or contact me directly.

⭐ Star this repo if you found it helpful! ⭐
