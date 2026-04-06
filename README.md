# Resume Website

Personal portfolio and resume site built with React and Spring Boot.

## Project Structure

```
resume-website/
├── frontend/   # React + Vite + Tailwind CSS
└── backend/    # Java 21 + Spring Boot
```

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
