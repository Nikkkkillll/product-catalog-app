📦 Product Catalog App
  A modern React + Vite application that displays a data-driven product/catalog-style interface with:

    •	Category Sidebar
    •	Paginated New Releases List
    •	Dataset Switching (India, IMF, etc.)
    •	Search
    •	Selection Counter
    •	Fully responsive layout
    •	Login screen (optional)

This project uses static JSON datasets and is optimized for fast rendering even with large data files.

🚀 Live Demo (Optional)

    Add your Netlify/Vercel/Render URL here
    Example:
    https://product-catalog-app.netlify.app/

📚 Table of Contents
    •	Features
    •	Tech Stack
    •	Project Structure
    •	Installation
    •	Running Locally
    •	Improvements

✨ Features

   🔐 Login Screen
      •	Simple email/password login
      •	Header also displayed on login page
      •	After login, user is redirected to the Catalogue

   📁 Dataset Driven Catalogue
      •	Loads dataset from /public/data/response1.json by default
      •	Can switch to IMF (response2.json) or other datasets
      •	Category sidebar auto-populates from JSON
      •	New Releases list shows frequent[] items

   🔍 Search

      Search by:
      •	Title 
      •	Sub-category
      •	Category

   🗂 Pagination
      •	10 items per page
      •	Smooth navigation
      •	Auto-adjust when filters change

   ✔ Selection Counter
      •	User can click to "select" items
      •	Selection count updates in the top bar
  
   🎨 UI Replicated from the screenshot you provided
      •	Matching layout
      •	Matching typography spacing & structure
      •	Custom buttons
      •	Icon bar
      •	Left sidebar + right main results

🛠 Tech Stack
   
      Tool        	Purpose

      React 19	    UI Framework
      Vite 7	      Fast bundler & dev server
      CSS	          Custom UI styling
      Static JSON	  Dataset source

📁 Project Structure
    
    my-catalog-app/
    │ package.json
    │ vite.config.js
    │ README.md
    │
    ├── public/
    │   ├── _redirects
    │   ├── lock.svg
    │   └── data/
    │        ├── response1.json
    │        └── response2.json 
    │
    └── src/
        ├── App.jsx
        ├── index.css
        ├── main.jsx
        │
        ├── pages/
        │   ├── LoginPage.jsx
        │   └── CataloguePage.jsx
        │
        ├── components/
        │   ├── Header.jsx
        │   ├── Sidebar.jsx
        │   ├── ListRow.jsx
        │   ├── Pagination.jsx
        │   └── …
        │
        └── data/
            └── loadDataset.js

🧩 Installation

    Make sure you have:
    •	Node.js 18+
    •	NPM 8+

    Then clone:
    git clone https://github.com/Nikkkkillll/product-catalog-app
    cd product-catalog-app/my-catalog-app
    Install packages:
    npm install

▶ Running Locally
   
   Start development server:
   npm run dev
   This will launch:
   http://localhost:5173

🧑‍💻 Usage Guide
    
    🔐 1. Login
        Enter any email + password.
        (This project does not use real authentication.)

    🧭 2. Catalogue Page Layout
        Left Sidebar
        •	Shows dynamic category list
        •	Click category → filters items

        Top Action Bar
        •	Back arrow
        •	Icons
        •	Selection Count
        •	View Graph button
        
        Search
        •	Type any keyword to filter results

        Pagination
        •	Buttons under the results list

        Dataset Dropdown
        •	Switch between:
        •	India & States
        •	Global
        •	BIS
        •	IMF 
        •	World Bank
        •	UN

        Whenever dataset changes, the app:
        •	Reloads data
        •	Resets filters
        •	Resets selections

🚀 Future Improvements
   •	Dark Mode
   •	Real user authentication
   •	API-based dataset loading
   •	Bookmark system
   •	Tabs for Latest / Trending / Favorites
   •	Animated transitions

