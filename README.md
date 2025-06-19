# 🛡️ Human Firewall - Gamified Cybersecurity Training

This is an interactive and highly-themed web application designed to teach users about cybersecurity awareness in a fun and engaging way.

Users progress through three levels of quizzes, earning XP, stars, and ranks, culminating in a game-style victory screen that celebrates their achievement.

## ✨ Features

  - **Gamified Feedback Screen:** A dynamic results page that feels like a game's "level up" screen, complete with:
      - An animated XP bar based on the final score.
      - A 1 to 3-star rating system.
      - A rank progression system (Trainee → Cyber Scout → Cyber Hero).
      - An animated "Cyber Hero" title reveal and a self-drawing SVG badge.
  - **Multi-Level Quizzes:** Three distinct quiz levels covering different cybersecurity topics:
      - **Level 1:** Basics of Social Engineering
      - **Level 2:** Identifying Real-World Cyber Threats
      - **Level 3:** Password Management Best Practices
  - **Responsive Design:** The entire application is fully responsive and provides an optimal experience on mobile, tablet, and desktop screens.
  - **Sound Effects with Global Mute:** Interactive sound effects for button clicks and milestone events, with a convenient global mute button in the header.
  - **Score Persistence:** The user's high score is saved to the browser's `localStorage` to track their best performance.

## 🛠️ Tech Stack

  - **Frontend:** [React](https://reactjs.org/)
  - **Styling:** [Tailwind CSS](https://tailwindcss.com/)
  - **Routing:** [React Router](https://reactrouter.com/)
  - **Icons:** Inline SVG and React components

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

### Installation

1.  **Clone the repo**
    ```sh
    git clone https://github.com/Govind-19/cyber_training_.git
    ```
2.  **Navigate to the project directory**
    ```sh
    cd cyber_training_
    ```
3.  **Install NPM packages**
    ```sh
    npm install
    ```

## 📜 Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.  
Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) to view it in your browser. The page will automatically reload when you make changes.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

## 部署 (Deployment)

This app is ready to be deployed on any static site hosting service like Netlify, Vercel, or GitHub Pages.

1.  Run `npm run build` to create a production-ready `build` folder.
2.  Deploy the contents of the `build` folder to your hosting service.