Brand Net Media - Backend (Spring Boot)
---------------------------------------
Quick start:
1. Install Java 17+ and Maven.
2. Create a MySQL database named `brandnetmedia` and update src/main/resources/application.properties with your DB credentials.
3. cd backend
4. mvn spring-boot:run

Admin authentication (demo):
- In SecurityConfig an in-memory admin user is created:
  username: admin
  password: admin123
- You can use these credentials for basic auth when calling /api/admin/** endpoints.
