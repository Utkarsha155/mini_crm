# 🧩 MINI CRM BACKEND  
### Role-Based Customer & Task Management System

Mini CRM Backend is a **secure, role-based customer relationship management system**
built to manage **users, customers, and task workflows** efficiently.
It demonstrates **clean backend architecture, RBAC, and real-world API design**
using modern backend technologies.

This project is designed as a **backend-focused assignment** showcasing
authentication, authorization, database design, and API documentation.

---

## 🚀 Why Mini CRM?

In many organizations, managing customers and employee tasks requires:
- Controlled access
- Clear role separation
- Reliable data storage
- Structured workflows

**Mini CRM Backend solves this** by providing:
- Secure authentication
- Admin-controlled operations
- Employee task visibility
- Scalable REST APIs

---

## ✨ Core Features

### 🔐 Authentication & Authorization
- JWT-based authentication
- Secure password hashing using bcrypt
- Role-Based Access Control (RBAC)
- Protected routes for sensitive operations

---

### 👥 User Management (Admin Only)
- Create users with roles
- View all registered users
- Update user roles (ADMIN / EMPLOYEE)
- Secure access restricted to admins

---

### 🧾 Customer Management
- Create and manage customers
- Unique email & phone validation
- Pagination support for large datasets
- Admin-only create, update & delete
- Employees can view customer details

---

### ✅ Task Management
- Tasks linked to both **customers** and **employees**
- Admin assigns tasks to employees
- Employees can view only their assigned tasks
- Employees can update task status:
  - **PENDING**
  - **IN_PROGRESS**
  - **DONE**

---

### 📄 Swagger API Documentation
- Complete API documentation using Swagger
- JWT authentication enabled in Swagger UI
- Interactive API testing from browser
- Clean grouping of endpoints

---

## 🧠 Role-Based Access Control (RBAC)

| Role | Capabilities |
|-----|--------------|
| **ADMIN** | Manage users, customers, and tasks |
| **EMPLOYEE** | View assigned tasks, update task status |

---

## 🛠️ Tech Stack

### Backend
- **Node.js**
- **Express.js**
- **PostgreSQL**
- **Prisma ORM**

### Security & Auth
- **JWT Authentication**
- **bcrypt password hashing**

### Documentation & Tooling
- **Swagger (swagger-ui-express)**
- **Postman (API testing)**

---

## 📂 Project Structure

mini-crm-backend/
│
├── prisma/
│ └── schema.prisma
│
├── src/
│ ├── config/
│ │ ├── prisma.js
│ │ └── swagger.js
│ │
│ ├── constants/
│ │ ├── roles.js
│ │ └── taskStatus.js
│ │
│ ├── middlewares/
│ │ ├── auth.middleware.js
│ │ ├── role.middleware.js
│ │ └── error.middleware.js
│ │
│ ├── modules/
│ │ ├── auth/
│ │ ├── users/
│ │ ├── customers/
│ │ └── tasks/
│ │
│ ├── utils/
│ │ ├── bcrypt.js
│ │ ├── jwt.js
│ │ └── pagination.js
│ │
│ ├── app.js
│ └── server.js
│
├── .env
├── package.json
└── README.md


---

## ⚙️ Environment Variables

Create a `.env` file in the project root:

DATABASE_URL="postgresql://postgres:<password>@localhost:5432/mini_crm"
JWT_SECRET="mini_crm_secret_key"
PORT=3000


---

## 🚀 Installation & Setup

### 1️⃣ Clone the Repository
git clone <repository-url>
cd mini-crm-backend


### 2️⃣ Install Dependencies
npm install


### 3️⃣ Database Setup
- Create PostgreSQL database: `mini_crm`
- Update database credentials in `.env`

### 4️⃣ Prisma Setup
npx prisma generate
npx prisma migrate dev --name init


### 5️⃣ Start the Server
npm run dev


Server will run at:
http://localhost:3000


---

## 📄 API Documentation (Swagger)

Swagger UI is available at:

http://localhost:3000/api-docs


### Using JWT in Swagger
1. Login using `/auth/login`
2. Copy the `accessToken`
3. Click **Authorize** in Swagger
4. Paste token as:
Bearer <your_access_token>


---

## 🔁 Application Workflow

1. Admin registers and logs in
2. Admin creates employees
3. Admin adds customers
4. Admin assigns tasks to employees
5. Employees view assigned tasks
6. Employees update task status
7. Admin monitors overall system activity

---

## 🧪 Testing

- APIs tested using **Postman**
- Swagger UI used for interactive testing
- Proper error handling & status codes implemented

---

## 📌 Notes

- Passwords are securely hashed
- JWT is required for protected routes
- Prisma handles migrations and schema safety
- Clean modular backend architecture followed

---

## 👩‍💻 Developed By
**Utkarsha Fole**

---

## ✅ Submission Checklist

- Backend APIs implemented
- PostgreSQL connected
- Prisma ORM configured
- JWT authentication
- Role-based access control
- Swagger documentation
- Postman collection exported
- README documentation completed