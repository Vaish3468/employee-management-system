# Employee Management System | Full Stack Java Project
A **Full Stack Employee Management System** developed using **Java, Spring Boot, MySQL, HTML, CSS, and JavaScript**.  
This project demonstrates real-world **CRUD operations, RESTful APIs, frontend-backend integration, authentication, and Git version control**.

## 🔹 Project Summary
This application allows organizations to manage employee records efficiently.  
It follows a **layered architecture** with Controller, Service, Repository, and Model layers and integrates a responsive frontend with a REST-based backend.
This project is suitable for **BCA / MCA / Java Full Stack Developer roles**.

## 🔹 Key Features
- Role-based Login (Admin & User)
- Employee CRUD Operations
  - Add Employee
  - View Employees
  - Edit Employee
  - Delete Employee
- RESTful API development using Spring Boot
- Frontend consumes backend APIs using JavaScript (Fetch API)
- MySQL database integration using Spring Data JPA
- Clean project structure (Monorepo)
- Git & GitHub version control

## 🔹 Tech Stack (ATS Keywords)
### Backend
- Java
- Spring Boot
- Spring MVC
- Spring Data JPA
- REST API
- Maven
- MySQL

### Frontend
- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Bootstrap

### Tools & Platforms
- IntelliJ IDEA
- Visual Studio Code
- Postman
- Git
- GitHub
- MySQL Workbench

## 🔹 Backend Setup Instructions

1. Open the `backend` folder in **IntelliJ IDEA**
2. Configure database in `application.properties`
3. Create database in MySQL:
   ```sql
   CREATE DATABASE ems_db;
Run the application:
mvn spring-boot:run

Backend runs on:
http://localhost:8080

**Frontend Setup Instructions**
Open ems-frontend folder
Open login.html in browser
Frontend connects to backend APIs at localhost:8080

🔹 Demo Login Credentials
Role	Username	Password
Admin	admin	admin123
User	user	user123

🔹 REST API Endpoints
HTTP Method	Endpoint	Description
GET	/api/employees	Fetch all employees
POST	/api/employees	Add employee
PUT	/api/employees/{id}	Update employee
DELETE	/api/employees/{id}	Delete employee

🔹 Testing
APIs tested using Postman
JSON request/response validation
MySQL data verification

🔹 Learning & Outcomes
Built a real-world full stack Java application
Hands-on experience with Spring Boot REST APIs
Frontend-backend integration using HTTP & JSON
Database interaction using JPA & Hibernate
GitHub monorepo management (submodule issue resolved)
Industry-level project structure

🔹 Author
Vaishnavi Shivayogi Meti
BCA Graduate | Aspiring Java Full Stack Developer
GitHub: https://github.com/Vaish3468

🔹 Future Enhancements
JWT Authentication & Spring Security
React Frontend
Pagination & Search
Cloud Deployment (AWS / Render)
Global Exception Handling
