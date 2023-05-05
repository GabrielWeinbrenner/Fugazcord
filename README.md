# Fugazcord

Our project is a chat application built with React on the front-end and Node.js on the back-end. It allows users to create channels, send messages, and see online users. We use Socket.IO for real-time communication and Postgresql for data storage.


We have a suite of Jest test cases for the front-end and back-end code. We test various functionalities such as creating channels, sending messages, and user authentication. We also have integration tests that test the communication between the front-end and back-end.

## Getting Started

These instructions will help you set up the project and get it running on your local machine for development and testing purposes.

### Prerequisites

List any software or tools that must be installed in order to run the project. For example:

* Node.js (version 14.6 or later)
* npm (version 6.14.16 or later)
* MySQL / PostgresQL local server

### Installing

1. Clone the repository:
2. Install dependencies

   <pre class=""><div class="bg-black rounded-md mb-4"><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-sql">npm install</code></div></div></pre>
3. Set up the Database:
4. Start the development server:

<pre class=""><div class="bg-black rounded-md mb-4"><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-sql">npm run dev</code></div></div></pre>

### Running Tests

<pre class=""><div class="bg-black rounded-md mb-4"><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash">npm test
</code></div></div></pre>

## Collaboration

This section should explain how the team collaborated on the project. Include information about each team member's contributions and responsibilities, as well as the version control tool used (e.g., GitHub).

### Team Members

* Gabriel Weinbrenner (Project Manager / Frontend Developer)
* Peter Zhang (Backend Developer)
* Ramazan Azimov (Architect)

### Version Control

We used Git and GitHub to manage version control. Each team member worked on a separate branch and created pull requests to merge their changes into the main branch. The project manager reviewed and approved each pull request before merging it.

## Documentation

I found that using Styleguide was a great way to develop and test individual components in isolation. It allowed me to visualize each component's states and variations quickly without having to render them in the context of the full application. This made it much easier to develop and debug components without having to worry about other parts of the app. Additionally, it made it easier to share and communicate components with other members of my team. Overall, I found Storybook to be a valuable tool in my React development workflow.

## Acknowledgments

* BACKEND
* bcrypt: library for hashing passwords
* concurrently: library for running multiple commands concurrently
* cors: middleware for enabling CORS in Express.js
* dotenv: library for loading environment variables from a .env file
* express: web framework for Node.js
* pg: PostgreSQL database driver for Node.js
* socket.io: library for real-time communication between clients and server
* eslint: library for code linting
* eslint-config-prettier: library for integrating Prettier with ESLint
* jest: testing framework for JavaScript
* nodemon: tool for automatically restarting Node.js application on file changes
* prettier: code formatter
* supertest: library for testing HTTP servers
* @emotion/react: library for styling React components
* @emotion/styled: library for styling React components with Emotion
* @mui/material: React components library based on Material Design
* @mui/styled-engine-sc: Emotion styled-engine for MUI
* @reduxjs/toolkit: library for efficient Redux development
* @testing-library/react: library for testing React components
* @testing-library/user-event: library for simulating user events in React tests
* axios: library for making HTTP requests
* react: JavaScript library for building user interfaces
* react-dom: package for rendering React components to the DOM
* react-icons: library for popular icon sets like Font Awesome, Material Design Icons, etc.
* react-redux: library for connecting Redux with React components
* react-router-dom: library for routing in React applications
* react-scripts: configuration and scripts for Create React App
* redux-mock-store: library for testing Redux code with Jest
* socket.io-client: client-side library for Socket.IO
* styled-components: library for styling React components with CSS
* timeago.js: library for formatting time in a human-readable format
* web-vitals: library for measuring web performance
