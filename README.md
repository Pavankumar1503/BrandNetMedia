Brand Net Media - Fullstack Project Scaffold
============================================
Contents:
 - frontend/   -> React single-page app
 - backend/    -> Spring Boot application (MySQL)

What I included:
 - Frontend pages: Home, Services, Prices, Contact (form), Portfolio, Admin login & dashboard.
 - Backend: REST API for public endpoints and admin CRUD.
 - Simple admin authentication (in-memory user 'admin'/'admin123') and instructions to change it.
 - SQL init script and README files.

How to run:
 1. Backend:
    - Ensure MySQL running and create database brandnetmedia.
    - Edit backend/src/main/resources/application.properties and set spring.datasource.username/password.
    - cd backend
    - mvn spring-boot:run
 2. Frontend:
    - cd frontend
    - npm install
    - npm start
 3. The frontend expects backend at http://localhost:8080 and will call /api/public/... endpoints.

Notes:
 - Portfolio file upload (multipart storing files) is not implemented fully; the scaffold stores portfolio items with URLs.
 - Admin endpoints are protected with basic auth for demonstration. For production, replace with JWT and secure file storage (S3 or file system).
