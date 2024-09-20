# User Directory App

A React application for managing and displaying user information with search functionality. The app uses Redux for state management and Chakra UI for responsive design.

## Features

- User list display
- Search functionality to filter users by username
- User detail modal
- Responsive design using Chakra UI

## Technologies Used

- React
- TypeScript
- Redux Toolkit
- Chakra UI
- JWT for authentication (if applicable)

## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd user-directory-app
   ```

2. **Install dependencies:**
   Make sure you have Node.js installed, then run:
   npm install

3. **Install dependencies:**
   Start the development server:
   npm start

## Usage

**Viewing Users**: The main page displays a list of users with their ID, email, and username.
**Searching Users**: Use the search input at the top to filter users by username. The list updates dynamically as you type.
**Viewing User Details**: Click the "View" button next to a user to open a modal displaying their details.

## Redux State Management

The application uses Redux to manage the global state:

User Slice: Contains user data and search term state.
Auth Slice: Handles user authentication.

## TypeScript Integration

TypeScript is used throughout the project for type safety. Types are defined in the types.ts file and used across components and Redux slices.

## Acknowledgments

- React
- Redux Toolkit
- Chakra UI
- TypeScript
