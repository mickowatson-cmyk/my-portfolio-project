# Personal Portfolio Website

A beginner-friendly student portfolio built with React + Vite, Node.js + Express, Prisma ORM, and MySQL.

## Project structure

- `frontend/` - React portfolio website
- `backend/` - Express API and Prisma database schema
- `documentation/` - Case study write-up and architecture notes

## Requirements

- Node.js (LTS)
- MySQL Server and MySQL Workbench (optional, for viewing tables)
- Git
- A GitHub account

## 1. Create the MySQL database

Open MySQL Workbench and run:

```sql
CREATE DATABASE personal_portfolio;
```

## 2. Configure and run the back-end

Open a terminal in the project folder:

```bash
cd backend
npm install
```

Copy `.env.example` to `.env`, then edit `DATABASE_URL` with your own MySQL username, password, and port.

Example for a local MySQL server on port 3306:

```env
DATABASE_URL="mysql://root:YOUR_PASSWORD@localhost:3306/personal_portfolio"
PORT=5000
FRONTEND_URL="http://localhost:5173"
```

If your MySQL server uses port 3307, replace `3306` with `3307`.
Do not upload `.env` to GitHub.

Create the tables:

```bash
npx prisma migrate dev --name init
```

Start the API:

```bash
npm run dev
```

The API should run at `http://localhost:5000`.

Optional: open Prisma Studio to view database records:

```bash
npx prisma studio
```

## 3. Run the React front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Open the local URL shown by Vite, usually `http://localhost:5173`.

## 4. Personalize the portfolio

Edit `frontend/src/App.jsx`:
- Replace the sample name and introduction.
- Update education, skills, and project examples.
- Add your own résumé PDF to `frontend/public/` and name it `resume.pdf`.
- Replace the sample email address in the Contact section.

The sample projects, skills, and certificates are stored in `frontend/src/data.js` so the website can display sample content even before the database has records.

## 5. Upload to GitHub

From the main `personal-portfolio-starter` folder:

```bash
git init
git add .
git commit -m "Create personal portfolio starter"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/personal-portfolio.git
git push -u origin main
```

Replace the URL with your own GitHub repository URL.

If Git says `remote origin already exists`, use:

```bash
git remote set-url origin https://github.com/YOUR-USERNAME/personal-portfolio.git
git push -u origin main
```

## Important

- Never upload passwords, API keys, or your `.env` file.
- The contact form stores messages in MySQL. Protect the API before publishing it publicly (validation, spam protection, rate limiting, and HTTPS).
- This is a learning starter project. It does not include an admin login or a production deployment setup.
