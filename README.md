# Product Showcase Explorer – Backend

This is the backend proxy server for the Product Showcase Explorer application. It is built using Node.js and Express. The backend acts as a proxy to the [DummyJSON Products API](https://dummyjson.com/products) and includes in-memory caching to improve performance and reduce redundant API requests.

## Features

- Acts as a proxy API server for the frontend.
- In-memory caching for:
  - Product lists with pagination (`limit` and `skip`).
  - Product details by ID.
  - Product categories.
  - Filtered products by category.
- Handles CORS to allow frontend communication.
- Graceful error handling with appropriate HTTP status codes.

## Tech Stack

- Node.js
- Express.js
- Axios – for making requests to the DummyJSON API.
- CORS – to enable cross-origin requests.
- dotenv – to manage environment variables.
- nodemon – for development hot-reloading.

## Getting Started

### Install Dependencies using - npm install
