# Project 2: Personal Finance Tracker Application

## Overview

This application helps users manage their finances by tracking income, expenses, and budgets. It provides visual insights through charts and graphs to simplify financial planning and budgeting.

## 🚀 Installation

1. Clone the Repository:

```sh
git clone https://github.com/A-MOHAMED14/Personal-Finance-Tracker.git
```

2. Navigate to the Project Directory:

```sh
cd Personal-Finance-Tracker
```

3. Install dependencies:

```sh
npm install
```

4. Set up enviroment variables:

- Create a .env file in the root directory and add your PostgreSQL database credentials:

```sh
DB_NAME=your_database_name
DB_USER=your_postgresql_username
DB_PASSWORD=your_postgresql_password
```

5. Create the database and seed data:

```sh
psql -U <your_postgresql_username> -d <your_database_name> -f db/schema.sql

npm run seed
```

## 🏗️ Usage

To start the application, run the following command:

```sh
npm run start
```

This will sync the Sequelize models to your PostgreSQL database, and will then start the server. The server will be running on http://localhost:3001
