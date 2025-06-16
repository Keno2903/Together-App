# Together App

The Together App is a mobile application designed to help users document and share their life stories in a deeply personal and interactive way. It combines a rich, visual timeline with voice notes and inspirations to create a unique digital autobiography.

## Core Features

- **Modern Profile Page:** A redesigned, social-media-style profile featuring a cover photo, avatar, and a tabbed layout for navigating different aspects of a user's story.
- **Image Gallery:** A beautiful grid-style gallery that aggregates all images from a user's life timeline and visual inspirations.
- **Vertical Timeline:** An elegant, custom-built vertical timeline that showcases life events in a chronological and engaging format.
- **Inspirations Section:** A dedicated space for users to display their favorite quotes, books, and heroes, presented in a clean card layout.
- **Voice Notes:** A complete voice recording and playback feature that allows users to capture their thoughts and memories in their own voice.

## Getting Started

To get the app running locally, follow these steps:

1.  **Install Dependencies:**

    ```bash
    npm install
    ```

2.  **Run the App:**

    ```bash
    npx expo start
    ```

    This will open the Expo developer tools in your browser. From there, you can launch the app on an iOS simulator, Android emulator, or on your own device using the Expo Go app.

## Available Scripts

- `npm start`: Starts the Expo development server.
- `npm run android`: Starts the app on a connected Android device or emulator.
- `npm run ios`: Starts the app on the iOS simulator.
- `npm run web`: Runs the app in a web browser.
- `npm run lint`: Lints the entire codebase using ESLint to find and report any issues.
- `npm run format`: Formats all files in the project with Prettier to ensure a consistent code style.

## Code Quality

This project uses ESLint, Prettier, and Husky to enforce code quality and a consistent style. A pre-commit hook is configured to automatically lint and format your code before each commit, ensuring that no errors or style inconsistencies make it into the codebase.
