# 🚀 Full-Stack .NET 8 Web API & React Vite

## 🛠 Complete Setup & Run Guide

<div align="center">

![.NET](https://img.shields.io/badge/.NET-8.0-purple)
![ASP.NET Core](https://img.shields.io/badge/ASP.NET-Core-blue)
![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-8-orange)
![EF Core](https://img.shields.io/badge/EntityFramework-Core-green)

</div>

---

## 📚 Table of Contents

| Section | Topic                                                            |
| ------- | ---------------------------------------------------------------- |
| 1️⃣      | [Project Overview](#1️⃣-project-overview)                         |
| 2️⃣      | [Project Structure](#2️⃣-project-structure)                       |
| 3️⃣      | [Prerequisites](#3️⃣-prerequisites)                               |
| 4️⃣      | [Backend Setup (.NET API)](#4️⃣-backend-setup)                    |
| 5️⃣      | [Frontend Setup (React Vite)](#5️⃣-frontend-setup)                |
| 6️⃣      | [Running the Full Application](#6️⃣-running-the-full-application) |
| 7️⃣      | [Testing & Swagger](#7️⃣-testing--swagger)                        |
| 8️⃣      | [Architecture Overview](#8️⃣-architecture-overview)               |
| 9️⃣      | [CI/CD & Deployment](#9️⃣-cicd--deployment)                       |
| 🔟      | [Troubleshooting](#🔟-troubleshooting)                           |

---

# 1️⃣ Project Overview

This is a modern full-stack application featuring a high-performance **ASP.NET Core Web API** backend and a responsive **React** frontend powered by **Vite**.

- **Backend:** RESTful API using .NET 8, Entity Framework Core, and MySQL.
- **Frontend:** Fast React SPA with Vite, supporting dynamic data rendering and seamless interaction.
- **Database:** Structured MySQL database for persistent storage.

---

# 2️⃣ Project Structure

```text
.net api/
├── backend/            # ASP.NET Core Web API Source
│   ├── Controllers/    # API Endpoints
│   ├── Data/           # DbContext & Migrations
│   ├── Models/         # Data Entities
│   └── Program.cs      # App Entry Point
├── frontend/           # React + Vite Source
│   ├── src/            # Components & Application Logic
│   ├── public/         # Static Assets
│   └── index.html      # Main HTML
└── .net api.sln        # Solution File
```

---

# 3️⃣ Prerequisites

Ensure you have the following installed:

- **[.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)**
- **[Node.js (LTS)](https://nodejs.org/)** (for Frontend)
- **[MySQL Server 8](https://dev.mysql.com/downloads/mysql/)**

---

# 4️⃣ Backend Setup

### 🐬 4.1 Database Configuration

1. Login to MySQL: `mysql -u root -p`
2. Create Database: `CREATE DATABASE dotnetapi;`

### ⚙️ 4.2 Connection String

Update `backend/appsettings.json`:

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "server=127.0.0.1;port=3306;database=dotnetapi;user=root;password=YOUR_PASSWORD"
  }
}
```

### 🔨 4.3 Apply Migrations

Navigate to `backend/` and run:

```bash
dotnet restore
dotnet tool install --global dotnet-ef --version 8.0.8 (if needed)
dotnet ef database update
```

---

# 5️⃣ Frontend Setup

Navigate to the `frontend/` directory:

### 📦 5.1 Install Dependencies

```bash
npm install
```

### 🚀 5.2 Development Server

```bash
npm run dev
```

By default, the frontend will be available at `http://localhost:5173`.

---

# 6️⃣ Running the Full Application

To run the entire solution, you need to start both the backend and frontend.

1.  **Start Backend:**

    ```bash
    cd backend
    dotnet run
    ```

    _API listening on: `http://localhost:5282`_

2.  **Start Frontend:**
    ```bash
    cd frontend
    npm run dev
    ```

---

# 7️⃣ Testing & Swagger

### 📘 Swagger UI

Once the backend is running, explore the API at:
`http://localhost:5282/swagger`

### 🧪 Basic Test

- Use the **POST** method in Swagger to add an employee.
- Use the **GET** method to verify the data is retrieved from MySQL.

---

# 8️⃣ Architecture Overview

```text
User → React Frontend (Vite) → ASP.NET Core Controller → EF Core → MySQL
```

1.  **Frontend** sends fetch/axios requests to the API.
2.  **Controller** processes requests and interacts with the **DbContext**.
3.  **EF Core** translates C# queries to SQL for **MySQL**.
4.  **JSON Response** is sent back to the frontend for UI updates.

---

# 9️⃣ CI/CD & Deployment

### 🏗 Build

```bash
# Backend
dotnet publish -c Release -o publish

# Frontend
npm run build
```

### 🌐 Suggested Hosting

- **Backend:** Azure, Render, or AWS EC2.
- **Frontend:** Vercel, Netlify, or AWS S3/CloudFront.

---

# 🔟 Troubleshooting

- **CORS Issues:** Ensure the backend `Program.cs` allows requests from the frontend origin (typically `http://localhost:5173`).
- **MySQL Connection:** Check if the service is running and credentials in `appsettings.json` are correct.
- **Port Conflict:** If `5282` or `5173` are in use, update the configuration accordingly.

---

<div align="center">
Made with ❤️ by Antigravity
</div>
