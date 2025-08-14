# To-Do List App

This is a simple, single-page To-Do List application built with React and Vite. The app allows users to create, manage, and track their daily tasks. It features a clean, modern interface and all task data is stored locally in the browser, ensuring your to-dos are saved even after you refresh the page.

👉 **Live Demo:** [https://todo-app-lemon-theta-54.vercel.app/](https://todo-app-lemon-theta-54.vercel.app/)

---

## 🌟 Features

- **Add Tasks:** Easily add new tasks to your list using a text input.
- **Mark as Complete:** Toggle tasks as complete or incomplete with a clickable checkbox.
- **Delete Tasks:** Permanently remove individual tasks from the list.
- **Clear Completed:** A dedicated button to delete all completed tasks at once.
- **Data Persistence:** All tasks are saved to `localStorage` and will remain in the app upon refresh.

---

## 📁 Project Structure

```bash
/src
├── components/
│ ├── Button.jsx # Reusable button
│ ├── Input.jsx # Reusable input
├── hooks/
│ ├── useTodos.js # Contains all helper and utility functions
└── App.jsx # Main component
```

## 🚀 Technologies Used

- **React** – Component-based UI
- **Vite** – Blazing-fast development server
- **Tailwind CSS** – Utility-first styling
- **react-icons** – A library for including popular icons in your React projects.
- **JavaScript (ES6+)** – Modern JS with modules
- **Vercel** – Instant deployment

---

## 🛠 How to Clone

### Clone the repo:

```bash
git clone https://github.com/asifjirayat/todo-app
cd todo-app
```

### Install dependencies:

```bash
npm install
```

### Run locally:

```bash
npm run dev
```

The app will be available at `http://localhost:5173/` by default.

### Build for production:

```bash
npm run build
```

## 📄 License

This project is open source and available under the MIT License.

## 🙌 Created By

Designed and built with ❤️ by **Asif Jirayat**
