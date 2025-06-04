# Gif Generator
A web application that allows users to generate and view random GIFs based on selected categories. Built with React and hosted on GitHub Pages.

# 🌐 Live Demo
Access the live application here: Gif Generator

# 🚀 Features
Random GIF Generation: Fetches and displays random GIFs from various categories.

Category Selection: Users can choose from predefined categories to generate specific types of GIFs.

Responsive Design: Ensures optimal viewing experience across different devices.

🛠️ Technologies Used
Frontend: React.js

API Integration: Giphy API (or similar) for fetching GIFs

Hosting: GitHub Pages

📂 Project Structure
pgsql
Copy
Edit
Gifgenerator/
├── public/
├── src/
│   ├── components/
│   ├── App.js
│   └── index.js
├── .gitignore
├── package.json
└── README.md
💻 Getting Started
To run this project locally:

Clone the repository:

bash
Copy
Edit
git clone https://github.com/Shantanu-121/Gifgenerator.git
Navigate to the project directory:

bash
Copy
Edit
cd Gifgenerator
Install dependencies:

bash
Copy
Edit
npm install
Start the development server:

bash
Copy
Edit
npm start
The application will open in your default browser at http://localhost:3000.

📦 Deployment
This project is deployed using GitHub Pages. To deploy your own version:

Build the project:

bash
Copy
Edit
npm run build
Deploy to GitHub Pages:

bash
Copy
Edit
npm install --save gh-pages
Add the following to your package.json:

json
Copy
Edit
"homepage": "https://yourusername.github.io/Gifgenerator",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
Then run:

bash
Copy
Edit
npm run deploy
🤝 Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

📄 License
This project is open-source and available under the MIT License.
