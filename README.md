# NestJS CRUD with PostgreSQL

This is a NestJS application that demonstrates how to build a simple CRUD API with PostgreSQL using TypeORM. This example provides the foundation for setting up a PostgreSQL database, performing CRUD operations, and configuring your NestJS application with the `.env` file.

## Features

- **NestJS Framework**: A progressive Node.js framework for building efficient and scalable server-side applications.
- **PostgreSQL Database**: Connecting to PostgreSQL using TypeORM.
- **CRUD Operations**: Create, Read, Update, and Delete operations for user management.
- **Environment Variables**: Database configuration is handled using environment variables in a `.env` file.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
  - [Create User](#create-user)
  - [Get Users](#get-users)
- [Testing](#testing)
- [License](#license)

## Installation

To get started, clone this repository and install the dependencies:

```bash
git clone https://github.com/kodirov/nestjs-crud-code.git
cd nestjs-crud-code
npm install


Ensure you have a running PostgreSQL database and configure the connection settings by creating a .env file at the root of the project:

DATABASE_HOST=localhost
DATABASE_PORT=5433
DATABASE_USER=postgres
DATABASE_PASSWORD=your_database_password
DATABASE_NAME=postgres
