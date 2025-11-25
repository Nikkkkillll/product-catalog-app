# Product Catalogue App

A React.js application that displays a product/data catalogue with:

* Login page
* Sidebar categories
* Paginated dataset items
* Dataset switching (India & States, IMF, etc.)
* Pixel‑perfect UI inspired by IndiaDataHub
* Selectable items with counter
* Search bar & action toolbar

## 🚀 Features

### 1. **Login Page**

* Email & password fields
* Sign-in validation
* "Forgot Password" and "Don’t have an account? Sign Up" links
* Circular lock icon displayed above the form

### 2. **Catalogue Page Layout**

* Two-column responsive layout
* Left sidebar with:

  * Dataset dropdown
  * Category list
* Right main content with:

  * Action toolbar (search, bookmark, filter, view graph)
  * Search input
  * Paginated list rows
  * Selected item count

### 3. **Dataset Loading**

* JSON files placed in `public/data/`
* Loaded dynamically using `fetch`
* `response1.json`, `response2.json` supported

### 4. **Sidebar**

* Dynamically generated categories
* Active category highlighting
* Filters catalogue results

### 5. **List Rows**

Each row shows:

* Title
* Breadcrumbs (cat / subCat / subset)
* Frequency
* Unit
* Coverage badges (N / S / D)
* Icons (bookmark, add, compare, more)
* Selectable "+" button toggles selected state

### 6. **Pagination**

* Shows 10 items per page
* Next, Prev, First, Last

### 7. **Action Toolbar**

Styled exactly like screenshot:

* Back arrow
* Page title: Economic Monitor
* Search, Bookmark, Filter icons
* Selected counter
* Cart, Star icons
* "View Graph" button

---

## 📁 Project Folder Structure

```
src/
  components/
    Sidebar.jsx
    ListRow.jsx
    Pagination.jsx
    CategoryAccordion.jsx
  pages/
    LoginPage.jsx
    CataloguePage.jsx
  data/
    loadDataset.js
  index.css
public/
  data/
    response1.json
    response2.json
  icons/
    lock.svg
    search.svg
    bookmark.svg
    cart.svg
    star.svg
```

---

## ⚙️ Installation

```bash
npm install
npm run dev
```

Then open:

```
http://localhost:5173/
```

---

## 📥 Adding Datasets

Place dataset JSON files in:

```
public/data/
```

Example:

```
public/data/response1.json
public/data/response2.json
```

Your JSON must contain:

```json
{
  "categories": { ... },
  "frequent": [ ... ]
}
```

---

## 🔌 loadDataset.js

Loads datasets dynamically from `public/data/` folder.

```
export async function loadDataset(name) {
  const res = await fetch(`/data/${name}`);
  return await res.json();
}
```

---

## 🎨 UI Styling

Main styling is in `index.css`.
Includes:

* Layout
* Sidebar
* Action toolbar
* Buttons
* Row styling
* Pagination

---

## 🛠 Customization

You can easily customize:

* Icons (place in `public/icons/`)
* Colors (update CSS variables)
* Dataset list (update JSON)
* Row actions
* Login page logo

---

## 📌 TODO (Optional Enhancements)

* Graph modal popup
* Row details drawer
* Sidebar accordion for subcategories
* Dark mode
* Live API datasets


