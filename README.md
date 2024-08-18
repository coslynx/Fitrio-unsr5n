<h1 align="center">
  <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
  <br>Fitrio-unsr5n
</h1>
<h4 align="center">A web-based application for setting, tracking, and achieving fitness goals with a supportive community.</h4>
<h4 align="center">Developed with the software and tools below.</h4>
<p align="center">
  <img src="https://img.shields.io/badge/Framework-Next.js-blue" alt="Framework: Next.js">
  <img src="https://img.shields.io/badge/Frontend-TypeScript,_HTML,_CSS-red" alt="Frontend: TypeScript, HTML, CSS">
  <img src="https://img.shields.io/badge/Backend-Node.js-blue" alt="Backend: Node.js">
  <img src="https://img.shields.io/badge/Database-PostgreSQL-blue" alt="Database: PostgreSQL">
  <img src="https://img.shields.io/badge/LLMs-Custom,_Gemini,_OpenAI-black" alt="LLMs: Custom, Gemini, OpenAI">
</p>
<p align="center">
  <img src="https://img.shields.io/github/last-commit/spectra-ai-codegen/Fitrio-unsr5n?style=flat-square&color=5D6D7E" alt="git-last-commit" />
  <img src="https://img.shields.io/github/commit-activity/m/spectra-ai-codegen/Fitrio-unsr5n?style=flat-square&color=5D6D7E" alt="GitHub commit activity" />
  <img src="https://img.shields.io/github/languages/top/spectra-ai-codegen/Fitrio-unsr5n?style=flat-square&color=5D6D7E" alt="GitHub top language" />
</p>

## 📑 Table of Contents
- 📍 Overview
- 📦 Features
- 📂 Structure
- 💻 Installation
- 🏗️ Usage
- 🌐 Hosting
- 📄 License
- 👏 Authors

## 📍 Overview
The repository contains a Minimum Viable Product (MVP) called "Fitrio-unsr5n" that provides a comprehensive solution for users to set, track, and achieve their fitness goals. The platform fosters a sense of community and motivation by enabling users to share their progress with friends and fellow fitness enthusiasts.

## 📦 Features
|    | Feature            | Description                                                                                                        |
|----|--------------------|--------------------------------------------------------------------------------------------------------------------|
| ⚙️ | **Architecture**   | The codebase follows a modular architectural pattern with separate directories for different functionalities, ensuring easier maintenance and scalability.             |
| 📄 | **Documentation**  | The repository includes a README file that provides a detailed overview of the Minimum Viable Product (MVP), its dependencies, and usage instructions.|
| 🔗 | **Dependencies**   | The codebase relies on various external libraries and packages such as Next.js, React, Zustand, Tailwind CSS, Prisma, and Sentry, which are essential for building and styling the UI components, managing state, and handling external services.|
| 🧩 | **Modularity**     | The modular structure allows for easier maintenance and reusability of the code, with separate directories and files for different functionalities such as components, pages, hooks, and utilities.|
| 🧪 | **Testing**        | Implement unit tests using frameworks like Jest or React Testing Library to ensure the reliability and robustness of the codebase.       |
| ⚡️  | **Performance**    | The performance of the system can be optimized based on factors such as the browser and hardware being used. Consider implementing performance optimizations for better efficiency.|
| 🔐 | **Security**       | Enhance security by implementing measures such as input validation, data encryption, and secure communication protocols.|
| 🔀 | **Version Control**| Utilizes Git for version control with GitHub Actions workflow files for automated build and release processes.|
| 🔌 | **Integrations**   | Interacts with browser APIs, external services through HTTP requests, and includes integrations with fitness tracker APIs for automatic data synchronization.|
| 📶 | **Scalability**    | Design the system to handle increased user load and data volume, utilizing caching strategies and cloud-based solutions for better scalability.           |

## 📂 Structure

```
Fitrio-unsr5n/
├── app/
│   ├── components/
│   │   ├── Dashboard/
│   │   │   ├── GoalCard.js
│   │   │   └── ActivityLog.js
│   │   ├── GoalSetting/
│   │   │   ├── GoalForm.js
│   │   │   └── GoalTypeDropdown.js
│   │   ├── SocialFeed/
│   │   │   ├── PostItem.js
│   │   │   └── PostForm.js
│   │   ├── Navigation/
│   │   │   └── NavBar.js
│   │   └── Auth/
│   │       └── Login.js
│   ├── pages/
│   │   ├── index.js
│   │   ├── goals.js
│   │   └── profile.js
│   ├── hooks/
│   │   ├── useGoal.js
│   │   ├── useActivity.js
│   │   ├── useUser.js
│   │   └── useAuth.js
│   ├── layouts/
│   │   └── MainLayout.js
│   ├── utils/
│   │   ├── constants.js
│   │   ├── api.js
│   │   ├── helpers.js
│   │   └── validations.js
│   └── styles/
│       └── globals.css
├── prisma/
│   └── schema.prisma
├── .eslintrc.js
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
├── jest.config.js
└── README.md
```

## 💻 Installation
### 🔧 Prerequisites
- Node.js
- npm
- Docker

### 🚀 Setup Instructions
1. Clone the repository:
   - `git clone https://github.com/spectra-ai-codegen/Fitrio-unsr5n.git`
2. Navigate to the project directory:
   - `cd Fitrio-unsr5n`
3. Install dependencies:
   - `npm install`
4. Set up the database:
   - Create a PostgreSQL database instance (using Docker or your preferred method).
   - Create a `.env` file in the root directory and configure the following environment variables:
     - `DATABASE_URL`: The connection string for your PostgreSQL database.
5. Initialize Prisma:
   - `npx prisma init`
   - `npx prisma generate`
6. Run the development server:
   - `npm run dev`

## 🏗️ Usage
### 🏃‍♂️ Running the Minimum Viable Product (MVP)
1. Start the development server (if not already running):
   - `npm run dev`
2. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

### ⚙️ Configuration
Adjust configuration settings in `next.config.js`, `tailwind.config.js`, or `.env` file.

### 📚 Examples
- 📝 **Example 1**: Setting a Weight Loss Goal
  - Users can create a new goal by selecting "Weight Loss" from the goal type dropdown, entering their target weight, and choosing a start and end date.
- 📝 **Example 2**: Tracking Running Progress
  - Users can connect their fitness trackers (e.g., Fitbit, Apple Watch) to automatically log their running activities and visualize their progress in charts and graphs.
- 📝 **Example 3**: Sharing Achievements with Friends
  - Users can share their workout updates, achievements, and progress with friends and fellow fitness enthusiasts on the social feed, fostering a supportive community.

## 🌐 Hosting
### 🚀 Deployment Instructions
If applicable, provide details on how to host the Minimum Viable Product (MVP) using various services, such as:

Vercel
Netlify
GitHub Pages
AWS
Google Cloud

#### Vercel
1. Deploy the code:
   - `vercel`
2. Follow the prompts to configure the Vercel deployment.

#### Netlify
1. Deploy the code:
   - `netlify deploy`
2. Follow the prompts to configure the Netlify deployment.

#### GitHub Pages
1. Create a new GitHub repository with the project code.
2. Go to the repository's settings.
3. Select "Pages" from the left-hand menu.
4. Choose the "Branch" and "Folder" to deploy from (typically "gh-pages" and "docs", respectively).
5. Click "Save" to deploy the project.

#### AWS
1. Create a new AWS account (if you don't have one).
2. Create a new S3 bucket to store the static assets of the project.
3. Create a new CloudFront distribution to serve the content from the S3 bucket.
4. Configure the CloudFront distribution to use the appropriate origin (S3 bucket).
5. Deploy the code to the S3 bucket.

#### Google Cloud
1. Create a new Google Cloud project.
2. Create a new Cloud Storage bucket to store the static assets of the project.
3. Create a new Cloud CDN service to serve the content from the Cloud Storage bucket.
4. Configure the Cloud CDN service to use the appropriate origin (Cloud Storage bucket).
5. Deploy the code to the Cloud Storage bucket.

### 🔑 Environment Variables
- `NEXT_PUBLIC_SENTRY_DSN`: The DSN for your Sentry project (optional, for error tracking).
- `DATABASE_URL`: The connection string for your PostgreSQL database.

## 📜 API Documentation
### 🔍 Endpoints
- **GET /api/goals**: Retrieves a list of user's goals.
- **POST /api/goals**: Creates a new goal for the user.
- **GET /api/goals/:id**: Retrieves a specific goal by its ID.
- **PUT /api/goals/:id**: Updates an existing goal by its ID.
- **DELETE /api/goals/:id**: Deletes a goal by its ID.
- **GET /api/activities**: Retrieves a list of user's activities.
- **POST /api/activities**: Creates a new activity log for the user.
- **GET /api/activities/:id**: Retrieves a specific activity by its ID.
- **PUT /api/activities/:id**: Updates an existing activity by its ID.
- **DELETE /api/activities/:id**: Deletes an activity by its ID.

### 🔒 Authentication
The API uses JWT tokens for authentication.

### 📝 Examples
- `curl -X GET http://localhost:3000/api/goals`

## 📜 License
This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).

## 👥 Authors
- **Author Name** - [Spectra.codes](https://spectra.codes)
- **Creator Name** - [DRIX10](https://github.com/Drix10)

<p align="center">
  <h1 align="center">🌐 Spectra.Codes</h1>
</p>
<p align="center">
  <em>Why only generate Code? When you can generate the whole Repository!</em>
</p>
<p align="center">
  <img src="https://img.shields.io/badge/Developer-Drix10-red" alt="Developer: Drix10">
  <img src="https://img.shields.io/badge/Website-Spectra.codes-blue" alt="Website: Spectra.codes">
  <img src="https://img.shields.io/badge/Backed_by-Google,_Microsoft_&_Amazon_for_Startups-red" alt="Backed by: Google, Microsoft & Amazon for Startups">
  <img src="https://img.shields.io/badge/Finalist-Backdrop_Build_v4-black" alt="Finalist: Backdrop Build v4">
</p>