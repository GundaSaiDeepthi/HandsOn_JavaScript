# JavaScript HandsOn - Week 3 Backend Practice Projects

This repository contains backend practice projects built using:

* Node.js
* Express.js
* MongoDB
* Mongoose

These projects help in understanding:

* REST APIs
* Routing
* Middleware
* CRUD operations
* MongoDB integration
* Error handling

---

# Folder Structure

```text
Week3/
│
├── Backend/
│   ├── APIs/
│   │   ├── ProductsAPI.js
│   │   └── UserAPI.js
│   ├── package.json
│   ├── server.js
│   └── req.http
│
├── Backend-Demo-2/
│   ├── APIs/
│   │   ├── ProductAPI.js
│   │   └── UserAPI.js
│   ├── models/
│   │   ├── ProductModel.js
│   │   └── UserModel.js
│   ├── package.json
│   ├── server.js
│   └── req.http
│
└── README.md
```

---

# Project 1 - Backend

## Description

This is a basic Express.js backend project.

It uses:

* Express routing
* Middleware
* CRUD APIs

Data is stored temporarily using arrays.

No database is connected in this project.

---

# Technologies Used

* Node.js
* Express.js

---

# Installation Steps

## Step 1: Open Terminal

Move to project folder:

```bash
cd Backend
```

---

## Step 2: Install Dependencies

```bash
npm install
```

---

## Step 3: Start Server

```bash
node server.js
```

Server runs on:

```text
http://localhost:3000
```

---

# Features

* User APIs
* Product APIs
* CRUD Operations
* Express Router
* Middleware Usage

---

# API Endpoints

# User APIs

## Get All Users

```http
GET /user-api/users
```

---

## Add User

```http
POST /user-api/users
```

---

## Update User

```http
PUT /user-api/users
```

---

## Delete User

```http
DELETE /user-api/users/:id
```

---

# Product APIs

## Get All Products

```http
GET /product-api/products
```

---

## Add Product

```http
POST /product-api/products
```

---

## Update Product

```http
PUT /product-api/products
```

---

## Delete Product

```http
DELETE /product-api/products/:productId
```

---

# Middleware Used

## JSON Middleware

```javascript
app.use(exp.json())
```

Used for converting incoming JSON data into JavaScript objects.

---

# Express Router

Routers are created using:

```javascript
exp.Router()
```

Advantages:

* Clean code
* Modular structure
* Easy maintenance

---

# Project 2 - Backend-Demo-2

## Description

This project extends the previous backend by integrating MongoDB.

Data is permanently stored using MongoDB and Mongoose.

---

# Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose

---

# Database Connection

```javascript
await connect("mongodb://127.0.0.1:27017/anuragdb2")
```

---

# Installation Steps

## Step 1: Move to Folder

```bash
cd Backend-Demo-2
```

---

## Step 2: Install Dependencies

```bash
npm install
```

---

## Step 3: Start MongoDB

Ensure MongoDB server is running.

---

## Step 4: Start Backend Server

```bash
node server.js
```

Server runs on:

```text
http://localhost:4000
```

---

# Features

* MongoDB Integration
* Mongoose Models
* Persistent Database Storage
* Error Handling Middleware
* REST APIs

---

# Models

## UserModel.js

Defines:

* User schema
* User collection

Example fields:

```javascript
{
   name:String,
   age:Number,
   city:String
}
```

---

## ProductModel.js

Defines:

* Product schema
* Product collection

---

# Error Handling Middleware

```javascript
app.use((err,req,res,next)=>{
   res.status(500).json({
      message:"Error",
      reason:err.message
   })
})
```

Used to handle all application errors centrally.

---

# Request Testing

Project contains:

```text
req.http
```

Used for API testing with:

* VS Code REST Client
* Thunder Client
* Postman

---

# Common Commands

## Install Packages

```bash
npm install
```

---

## Start Server

```bash
node server.js
```

---

# Learning Outcomes

By completing these projects, you learn:

* Backend development basics
* Express.js routing
* Middleware
* REST API development
* CRUD operations
* MongoDB connection
* Mongoose schemas/models
* Error handling
* API testing

---

# Future Improvements

* JWT Authentication
* Password Encryption
* File Upload
* Environment Variables
* Role-Based Authorization
* Deployment

---

# Author

JavaScript HandsOn - Week 3 Backend Practice Projects.
