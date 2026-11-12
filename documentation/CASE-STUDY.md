# Task 2: Case Study – Designing a Personal Portfolio Website

## Introduction
As an IT student, I propose to create a personal portfolio website that presents my background, education, technical skills, school projects, certificates, résumé, and contact information. The website can help me introduce myself when applying for an internship or future employment.

## Part A: System Architecture

### 1. Architecture type
I will use a three-tier architecture consisting of the presentation layer, application layer, and data layer. This separates the user interface, application logic, and stored information.

### 2. Major components
- Presentation layer: React.js website shown in the browser.
- Application layer: Node.js and Express.js API that receives and processes requests.
- Data layer: MySQL database managed through Prisma ORM.
- Development tools: Git and GitHub for source-code version control and online repository hosting.

### 3. Communication
The visitor uses the React website. React sends HTTP requests to the Express API. The API uses Prisma ORM to read or save information in MySQL. The API then sends a response to React, which displays the result.

### 4. Maintainability
Each layer has a separate responsibility. The front-end design can be updated without rewriting database logic. The API can be extended with new endpoints, and database models can be changed through Prisma migrations.

### Architecture Traceability Matrix

| Requirement | Component | Layer |
|---|---|---|
| Show introduction and profile | React | Presentation |
| Show education and skills | React | Presentation |
| Display projects and certificates | React + API | Presentation / Application |
| View résumé | PDF file in frontend public folder | Presentation |
| Submit contact form | Express API | Application |
| Save visitor messages | Prisma + MySQL | Application / Data |
| Store portfolio records | Prisma + MySQL | Application / Data |

## Part B: Front-End Design

The interface will use a simple, responsive dark-blue design. It will include Home, About Me, Skills, Projects, Education, Certificates, Résumé, and Contact sections.

### Front-end technologies
- React.js: creates reusable interface components.
- HTML: structures page content.
- CSS: styles the website and makes it responsive.
- JavaScript: handles interactions and API requests.

I selected React because its component-based structure makes the website easier to organize and update.

## Part C: Back-End Design

### 1. Does the website need a back-end?
Yes. I will use a back-end to process contact form submissions and retrieve portfolio records from the database. A simple portfolio could be static, but a back-end demonstrates database and API integration.

### 2. Back-end responsibilities
- Receive and validate contact form messages.
- Save messages in MySQL.
- Retrieve project, skill, and certificate records.
- Provide API responses to the React front-end.

### 3. Selected technology
I selected Node.js with Express.js because it uses JavaScript, works well with React, and provides a straightforward way to create REST APIs.

### Technology Evaluation Matrix

Scale: 1 = Poor, 2 = Fair, 3 = Good, 4 = Very Good, 5 = Excellent.

| Criteria | Node.js + Express | Django | Laravel |
|---|---:|---:|---:|
| Ease of learning for this project | 4 | 3 | 3 |
| Performance for a small portfolio | 4 | 4 | 4 |
| Flexibility | 5 | 4 | 4 |
| JavaScript / React compatibility | 5 | 4 | 4 |
| Development speed | 4 | 4 | 4 |
| **Total** | **22** | **19** | **19** |

These are my estimated scores for this student project, not benchmark test results.

### Trade-off analysis
Node.js and Express allow me to use JavaScript on both the front-end and back-end, and they are flexible for creating APIs. However, I need to install and configure additional packages and handle security and validation carefully. I still selected this technology because it fits the React front-end and the small requirements of my portfolio.

## Prisma ORM, MySQL, Git, and GitHub
I will use Prisma ORM to define database models and communicate with MySQL. MySQL will store projects, skills, certificates, and contact messages. Git will track changes to my source code, while GitHub will host the project repository so I can share it with my instructor.

## Conclusion
This proposed portfolio will help me practice front-end development, back-end development, database management, and version control. It will also give me a place to present my work and prepare for future internship opportunities.
