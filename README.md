# Resume Website

Personal portfolio and resume site built with React and Spring Boot.

---

## Overview

This project started as a way to get hands-on experience building and deploying a full stack application end-to-end, and as an opportunity to learn Java and Spring Boot. Rather than a static site, I wanted something with a real backend so I could practice designing a REST API, connecting it to a frontend, and shipping the whole thing with Docker.

The frontend is built with React and Vite, styled with Tailwind CSS, and communicates with the backend via a REST API. The backend is a Spring Boot application that serves resume and project data as JSON. Both services have their own Dockerfile and are orchestrated together with Docker Compose, keeping deployment straightforward and consistent across environments.

Design decisions were kept intentionally simple — the goal was to understand the full deployment pipeline rather than over-engineer the application itself. That said, the separation of frontend and backend keeps the architecture clean and makes it easy to extend.

---

## Project Structure

```
resume-website/
├── frontend/   # React + Vite + Tailwind CSS
└── backend/    # Java 21 + Spring Boot
```

---

## Docker

Both services can be built and run together with Docker Compose:

```bash
VITE_API_URL=http://localhost:8080 docker-compose up --build
```

- Frontend: `http://localhost:80`
- Backend: `http://localhost:8080`

The `VITE_API_URL` build arg tells the frontend where to send API requests. Set it to your backend's public URL for production builds.

---

## Prerequisites

- Node.js (v18+)
- Java 21

---

## Running Locally

### Backend

```bash
cd backend
./mvnw spring-boot:run
```

Runs on `http://localhost:8080`.

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Runs on `http://localhost:5173`. The frontend proxies `/api` requests to the backend automatically in development.

---

## Testing

### Backend

```bash
cd backend
./mvnw test
```

Tests cover:
- `ProjectTest` — unit tests for the Project model
- `ProjectControllerTest` — integration tests for the `GET /api/projects` endpoint using MockMvc
- `ResumeApiApplicationTests` — verifies the Spring context loads correctly

### Frontend

No tests yet.

---

## API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/projects` | Returns list of portfolio projects |
| GET | `/api/resume` | Returns full resume data including experience, education, skills, awards, and activities |
