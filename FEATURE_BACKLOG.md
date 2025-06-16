# Together App: Feature Backlog

This document outlines the prioritized features for the Together App, based on the project concept paper. It is divided into phases that align with our product roadmap.

## Phase 1: MVP (Complete)

These features represent the core prototype of the application.

- **[x] User Profile:** Modern, tabbed layout with a cover photo, avatar, and bio.
- **[x] Visuals Gallery:** A grid-style gallery of all images from the user's timeline and inspirations.
- **[x] Interactive Life Timeline:** A vertical timeline displaying a user's life events.
- **[x] Inspirations:** A dedicated section to showcase a user's favorite quotes, books, and heroes.
- **[x] Voice Note Recording:** An MVP for recording and playing back voice notes.
- **[x] Code Quality Tooling:** ESLint, Prettier, and Husky configured for automated code quality checks.

## Phase 2: Core Social Features (Next Steps)

This phase focuses on building out the core social and safety features required for a closed beta.

- **User Authentication:**
  - [ ] User registration (email/password and social logins).
  - [ ] Secure user login and session management (e.g., using JWT).
  - [ ] "Forgot Password" functionality.
- **Basic Discovery Feed:**
  - [ ] A simple, chronologically-ordered feed of public posts from other users.
  - [ ] Ability to tap on a post to view the author's profile.
- **Reflections & Fears Journal:**
  - [ ] A secure, private-by-default journal for text entries.
  - [ ] End-to-end encryption for all journal entries.
  - [ ] Option to share a specific entry with "Close Friends" or anonymously.
- **Backend Persistence:**
  - [ ] Develop a Node.js backend to store user data, profiles, and voice notes.
  - [ ] Set up a PostgreSQL database with Prisma ORM.
  - [ ] Create API endpoints for all frontend features.

## Phase 3: Public Launch & Growth

Features required for a public launch and to begin community growth.

- **Authenticity Badge:**
  - [ ] ID verification flow.
  - [ ] Periodic selfie prompts to maintain account authenticity.
- **Enhanced Discovery:**
  - [ ] "Connections Corner" to surface users with mutual interests.
  - [ ] Algorithmic suggestions based on shared passions and inspirations.
- **Direct & Group Messaging:**
  - [ ] Secure, private messaging between users.
  - [ ] Ability to create small group chats.
- **Advanced Search:**
  - [ ] Implement Elasticsearch for powerful content search.

## Phase 4: Monetization & Scale

- **Together Plus Subscription:**
  - [ ] Implement premium features (e.g., extended storage, advanced themes).
  - [ ] In-app purchase integration.
- **Marketplace:**
  - [ ] A dedicated section for small-group experiences.
- **B2B API:**
  - [ ] API for third-party integrations (e.g., dating apps).
