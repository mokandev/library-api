# Library API
Welcome to the Library API, a service for managing a book library with features including:

- Listing books
- Viewing book details
- Reading each book page by page
- Supporting multiple reading formats (plain text and HTML)

This README explains how to set up the project locally, run the server, and perform basic tests.

## Description
The Library API is built with Node.js and TypeScript, and uses Prisma for database access (PostgreSQL or any other supported provider, as defined in schema.prisma). It allows clients to make REST requests to:

1. List books
2. List book details
3. View the content of each page in plain text or HTML


## Setup

1. Clone the repository
2. Install dependencies with command `npm install`
3. Run the command `npm run setup`. It will:
   1. Create the .env file.
   2. Run docker compose up to setup postegres database.
4. Run the command `npm run setup:db` to run the migrations and populate the tables with seeders.
5. Then run the command `npm run dev` to start the server.

