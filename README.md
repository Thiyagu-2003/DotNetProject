---

# 🚀 .NET 8 Web API with MySQL  
## 🛠 Setup & Run Guide

<div align="center">

![.NET](https://img.shields.io/badge/.NET-8.0-purple)
![ASP.NET Core](https://img.shields.io/badge/ASP.NET-Core-blue)
![MySQL](https://img.shields.io/badge/MySQL-8-orange)
![EF Core](https://img.shields.io/badge/EntityFramework-Core-green)
![Swagger](https://img.shields.io/badge/Swagger-OpenAPI-brightgreen)

</div>

---

## 📚 Table of Contents

| Section | Topic                                                                   |
| ------- | ----------------------------------------------------------------------- |
| 1️⃣     | [Project Overview](#1️⃣-project-overview)                               |
| 2️⃣     | [Prerequisites](#2️⃣-prerequisites)                                     |
| 3️⃣     | [Database Setup](#3️⃣-database-setup)                                   |
| 4️⃣     | [Project Configuration](#4️⃣-project-configuration)                     |
| 5️⃣     | [Install Required NuGet Packages](#5️⃣-install-required-nuget-packages) |
| 6️⃣     | [Apply Database Migrations](#6️⃣-apply-database-migrations)             |
| 7️⃣     | [Running the Application](#7️⃣-running-the-application)                 |
| 8️⃣     | [Testing the API Using Swagger](#8️⃣-testing-the-api-using-swagger)     |
| 9️⃣     | [Project Architecture Overview](#9️⃣-project-architecture-overview)     |
| 🔟      | [Build Commands (CI/CD)](#🔟-build-commands-for-cicd)                   |
| 1️⃣1️⃣  | [Troubleshooting](#1️⃣1️⃣-troubleshooting)                              |
| 1️⃣2️⃣  | [Stopping the Application](#1️⃣2️⃣-stopping-the-application)            |
| ✅       | [Final Status Checklist](#-final-status-checklist)                      |

---

# 1️⃣ Project Overview

### 🧩 Stack Used

* 🟣 **.NET 8 (ASP.NET Core Web API)**
* 🟢 **Entity Framework Core**
* 🐬 **MySQL 8**
* 📘 **Swagger (OpenAPI)**

> This project is a RESTful Web API that performs basic CRUD operations and stores data in a MySQL database.

---

# 2️⃣ Prerequisites

Before running the project, install the following:

---

## 🟣 2.1 Install .NET 8 SDK

🔗 Download:
[https://dotnet.microsoft.com/download/dotnet/8.0](https://dotnet.microsoft.com/download/dotnet/8.0)

Verify installation:

```bash
dotnet --version
```

Expected output:

```
8.0.xxx
```

---

## 🐬 2.2 Install MySQL Server 8

🔗 Download:
[https://dev.mysql.com/downloads/mysql/](https://dev.mysql.com/downloads/mysql/)

During installation:

* Set root password
* Default port: `3306`

Verify installation:

```bash
mysql --version
```

---

# 3️⃣ Database Setup

---

## 🔐 3.1 Login to MySQL

```bash
mysql -u root -p
```

Enter your root password.

---

## 🗄 3.2 Create Database

```sql
CREATE DATABASE dotnetapi;
SHOW DATABASES;
```

Exit MySQL:

```sql
exit;
```

---

# 4️⃣ Project Configuration

---

## ⚙️ 4.1 Configure Connection String

Open `appsettings.json` and update:

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "server=127.0.0.1;port=3306;database=dotnetapi;user=root;password=YOUR_PASSWORD"
  },
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*"
}
```

Replace `YOUR_PASSWORD` with your MySQL root password.

---

# 5️⃣ Install Required NuGet Packages

Inside project folder run:

```bash
dotnet restore
```

If setting up manually:

```bash
dotnet add package Microsoft.EntityFrameworkCore.Design --version 8.0.8
dotnet add package Pomelo.EntityFrameworkCore.MySql --version 8.0.2
```

Verify:

```bash
dotnet list package
```

> All EF-related packages must be version **8.x**

---

# 6️⃣ Apply Database Migrations

---

## 🧰 6.1 Install EF CLI Tool (if not installed)

```bash
dotnet tool install --global dotnet-ef --version 8.0.8
```

Verify:

```bash
dotnet ef --version
```

---

## 🏗 6.2 Create Migration

```bash
dotnet ef migrations add InitialCreate
```

---

## 🔄 6.3 Update Database

```bash
dotnet ef database update
```

This creates required tables inside `dotnetapi`.

Verify:

```sql
USE dotnetapi;
SHOW TABLES;
```

Expected tables:

* `Employees`
* `__EFMigrationsHistory`

---

# 7️⃣ Running the Application

Start the API:

```bash
dotnet run
```

Expected output:

```
Now listening on: http://localhost:5282
Application started.
```

---

# 8️⃣ Testing the API Using Swagger

Open browser:

```
http://localhost:5282/swagger
```

Swagger UI will load.

---

## 📨 8.1 Test POST Method

```json
{
  "name": "John",
  "role": "DevOps Intern"
}
```

Click **Execute**

---

## 📥 8.2 Test GET Method

Click **GET → Execute**

Stored records should be returned from MySQL.

---

# 9️⃣ Project Architecture Overview

### 🔄 Execution Flow

```text
Client → Controller → DbContext → Entity Framework → MySQL → Response
```

Detailed Flow:

1. Client sends HTTP request
2. Controller receives request
3. Data passed to DbContext
4. EF generates SQL query
5. SQL executed in MySQL
6. Response returned

---

# 🔟 Build Commands (For CI/CD)

### 🏗 Build Project

```bash
dotnet restore
dotnet build
```

### 📦 Publish Artifacts

```bash
dotnet publish -c Release -o publish
```

Output will be generated inside:

```
publish/
```

---

# 1️⃣1️⃣ Troubleshooting

---

## ❌ Access Denied for MySQL

* Verify password in `appsettings.json`
* Ensure MySQL service is running
* Use `127.0.0.1` instead of `localhost`

---

## ⚠️ Version Mismatch Errors

Ensure:

* `TargetFramework = net8.0`
* EF Core packages = `8.x`
* `dotnet-ef` tool = `8.x`

> Major versions must match.

---

# 1️⃣2️⃣ Stopping the Application

Press:

```
Ctrl + C
```

---

# ✅ Final Status Checklist

| ✔ | Item                         |
| - | ---------------------------- |
| ✔ | .NET 8 installed             |
| ✔ | MySQL installed              |
| ✔ | Database created             |
| ✔ | Connection string configured |
| ✔ | Migration applied            |
| ✔ | API running                  |
| ✔ | Swagger tested               |
| ✔ | Data persisted successfully  |

---