# Project README

## 🚀 Responsive React App with Gmail Authentication

This project is a responsive React application fully integrated with Google (Gmail) Authentication using Firebase. The UI is designed following a Figma layout.

---

## 📦 Installation

Make sure you have **Node.js** and **npm** installed.

Clone the project and install dependencies:

```bash
npm install
```

---

## ▶️ Start the Project

Run the development server:

```bash
npm run start
```

Your app will start at:

```
http://localhost:3000
```

---

## 🔐 Google Authentication Setup

This project uses **Firebase Authentication** with **Google Provider**.

### Steps to Configure:

1. Go to Firebase Console → **Create a Project**.
2. Navigate to **Authentication → Sign-in Method**.
3. Enable **Google**.
4. Go to **Project Settings → General**.
5. Copy your Firebase Config and paste it into your project:

```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

---

## 📱 Responsive Figma Design

The UI is built fully responsive using:

* Tailwind CSS
* Grid + Flexbox layout
* Mobile-first approach

If modifying the design, refer to your Figma file and adjust class names accordingly.

---

## 📚 Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm install`   | Install all dependencies |
| `npm run start` | Start development server |

---

## 🛠️ Tech Stack

* React.js
* Tailwind CSS
* Firebase Authentication
* Figma Design Reference

---

## 🙌 Author

Project built as part of responsive UI + Gmail authentication integration.
