# Real Estate Website with Admin Panel

This project is a full-stack real estate website that includes a frontend built with React and a backend powered by Node.js and Express. The application features an admin panel for managing website content dynamically.

## Project Structure

```
real-estate-app
├── client                # Frontend application
│   ├── src               # Source files for the frontend
│   │   ├── app.ts        # Entry point for the React application
│   │   ├── components     # React components
│   │   ├── pages          # Main page components
│   │   └── types          # TypeScript types and interfaces
│   ├── package.json      # Frontend dependencies and scripts
│   ├── tsconfig.json     # TypeScript configuration for frontend
│   └── README.md         # Frontend documentation
├── server                # Backend application
│   ├── src               # Source files for the backend
│   │   ├── app.ts        # Entry point for the Express server
│   │   ├── routes        # API route definitions
│   │   ├── controllers   # Logic for processing requests
│   │   ├── services      # Data layer interactions
│   │   ├── data         # Static or mock data
│   │   └── types         # TypeScript types and interfaces
│   ├── package.json      # Backend dependencies and scripts
│   ├── tsconfig.json     # TypeScript configuration for backend
│   └── README.md         # Backend documentation
└── README.md             # Overall project documentation
```

## Features

- **Frontend**: A responsive real estate website showcasing properties with sections for hero content, project overview, amenities, about us, construction updates, and FAQs.
- **Admin Panel**: A secure admin interface for managing text content across various sections of the website.
- **Dynamic Content Management**: Admins can log in with fixed credentials to edit text content without needing to modify the codebase.

## Setup Instructions

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd real-estate-app
   ```

2. Install dependencies for the client:
   ```
   cd client
   npm install
   ```

3. Install dependencies for the server:
   ```
   cd ../server
   npm install
   ```

### Running the Application

1. Start the backend server:
   ```
   cd server
   npm start
   ```

2. Start the frontend application:
   ```
   cd ../client
   npm start
   ```

The frontend will typically run on `http://localhost:3000` and the backend on `http://localhost:5000`.

## Admin Panel Login Credentials

- **Email**: admin@gmail.com
- **Password**: 1234

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.