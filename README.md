# Node TypeScript Todo API

A simple REST API for managing todos built with Node.js, TypeScript, and Express.js. This project is part of the [Understanding TypeScript course by Maximilian Schwarzmüller](https://natera.udemy.com/course-dashboard-redirect/?course_id=947098) on Udemy.

## What This App Does

This application provides a RESTful API for managing a todo list with the following features:

- **Create todos**: Add new todo items with text content
- **Read todos**: Retrieve all todos or a specific todo by ID
- **Update todos**: Modify the text content of existing todos
- **Delete todos**: Remove todos from the list

The API stores todos in memory (no database), making it perfect for learning TypeScript concepts and Express.js fundamentals.

## API Endpoints

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| GET | `/todos` | Get all todos | - |
| GET | `/todos/:id` | Get a specific todo by ID | - |
| POST | `/todos` | Create a new todo | `{"text": "Todo content"}` |
| PATCH | `/todos/:id` | Update a todo's text | `{"text": "Updated content"}` |
| DELETE | `/todos/:id` | Delete a todo | - |

## Libraries and Tools Used

### Core Dependencies
- **Express.js** (`^5.1.0`) - Web framework for Node.js
- **TypeScript** (`^5.9.2`) - Type-safe JavaScript development

### Development Dependencies
- **@types/express** (`^5.0.3`) - TypeScript type definitions for Express
- **@types/node** (`^24.3.3`) - TypeScript type definitions for Node.js

### Development Tools
- **TypeScript Compiler** - Compiles TypeScript to JavaScript
- **Node.js** - JavaScript runtime environment
- **HTTP Client Files** - Pre-configured HTTP requests for testing (in `/test` directory)

## Project Structure

```
node-typescript/
├── app.ts              # Main application entry point
├── data.ts             # Todo data management and business logic
├── routes/
│   └── todo.ts         # Todo API routes
├── test/               # HTTP test files
│   ├── get-todos.http
│   ├── new-todo.http
│   ├── update-todo.http
│   └── delete-todo.http
├── package.json        # Project dependencies and scripts
└── tsconfig.json       # TypeScript configuration
```

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

Run the application directly with TypeScript without compilation:
```bash
npx tsx app.ts
```

The server will start on `http://localhost:3000`

### Testing the API
Use the provided HTTP test files in the `/test` directory or any HTTP client like Postman, curl, or VS Code REST Client extension.

Example requests:
```bash
# Get all todos
curl http://localhost:3000/todos

# Create a new todo
curl -X POST http://localhost:3000/todos \
  -H "Content-Type: application/json" \
  -d '{"text": "Learn TypeScript"}'
```

## TypeScript Features Demonstrated

This project showcases several TypeScript concepts:
- **Type annotations** for function parameters and return types
- **Interfaces** for defining data structures (Todo interface)
- **Type imports** using the `type` keyword
- **Strict type checking** enabled in tsconfig.json
- **ES modules** with TypeScript
- **Error handling** with typed error objects

## Learning Objectives

This project is designed to teach:
- TypeScript fundamentals and type safety
- Express.js routing and middleware
- RESTful API design principles
- Node.js with TypeScript development workflow
- HTTP request/response handling
- Error handling in TypeScript applications
