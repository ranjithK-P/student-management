# Deployment Guide for Student Management Application

This document provides step-by-step instructions for deploying the Student Management Application, which includes the React frontend and the backend API.

## Prerequisites

1. **Server Requirements:**
   - Node.js v18
   - NPM v8 or above
   - A web server (e.g., Nginx or Apache)

2. **Environment Setup:**
   - SSH access to the deployment server.
   - A GitHub account and access to the repository [https://github.com/ranjithK-P/student-management](https://github.com/ranjithK-P/student-management).

---

## 1. Clone the Repository

SSH into the deployment server and navigate to the directory where you want to deploy the application.

```bash
ssh your_user@your_server_ip
cd /path/to/deployment/directory
git clone https://github.com/ranjithK-P/student-management.git
cd student-management
```

---

## 2. Install Dependencies

Navigate to the React frontend to install dependencies.

### For the Frontend:

```bash
cd frontend
npm install
```

---

## 3. Run the React Application

The React app needs to be built for production.

```bash
cd frontend
npm run
```
---

## 4. Test the Deployment

1. Open your browser and navigate to your domain or server IP.
2. Ensure that:
   - The React application loads correctly.
   - The backend API is accessible via `https://educhain.free.beeceptor.com/applications`.
   - Search, pagination, and sorting work as expected.
3. Verify that the application listing is accessible at:
   
   http://localhost:3000/applications   

---

## 5. Update the Application

When changes are pushed to the repository, follow these steps to update:

1. Pull the latest changes:
   ```bash
   git pull origin master
   ```

2. For the React app:
   ```bash
   cd frontend
   npm install
   npm run build
   sudo cp -r build/ /var/www/student-management
   ```

Your application is now deployed and ready to use!
