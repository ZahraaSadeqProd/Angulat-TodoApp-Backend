# Todo App Backend

Node.js/Express API for the Todo App with MongoDB, JWT auth, and demo mode.

## Tech Stack
- Node.js + Express
- MongoDB + Mongoose
- JWT auth
- Bcrypt password hashing

## Requirements
- Node.js 18+
- MongoDB connection string

## Setup
```bash
cd backend
npm install
```

Create a `.env` file:
```
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=7d
PORT=5000
NODE_ENV=development
```

## Run (Dev)
```bash
npm run dev
```

Server starts at `http://localhost:5000`.

## Health Check
- `GET /health`

## API Endpoints

### Auth
- `POST /auth/login`
- `POST /auth/register`
- `POST /auth/demo`

### Todos (protected to only respective users)
- `GET /todos`
- `POST /todos`
- `PUT /todos/:id`
- `DELETE /todos/:id`

## Project Structure
- [backend/src/app.js](backend/src/app.js) — Express app setup
- [backend/src/server.js](backend/src/server.js) — server entry
- [backend/src/routes/auth.routes.js](backend/src/routes/auth.routes.js) — auth routes
- [backend/src/routes/todo.routes.js](backend/src/routes/todo.routes.js) — todo routes
- [backend/src/controllers/auth.controller.js](backend/src/controllers/auth.controller.js) — auth handlers
- [backend/src/controllers/todo.controller.js](backend/src/controllers/todo.controller.js) — todo handlers
- [backend/src/middleware/auth.middleware.js](backend/src/middleware/auth.middleware.js) — JWT auth
- [backend/src/middleware/demoGuard.middleware.js](backend/src/middleware/demoGuard.middleware.js) — demo guard
- [backend/src/models/User.js](backend/src/models/User.js) — user schema
- [backend/src/models/Todo.js](backend/src/models/Todo.js) — todo schema
- [backend/src/config/db.js](backend/src/config/db.js) — DB connection
- [backend/src/utils/jwt.js](backend/src/utils/jwt.js) — JWT helper