# JavaScript HandsOn - Assignments & Practice Repository

This repository contains weekly JavaScript and Backend assignments completed as part of MERN Stack learning and practice.

The assignments focus on improving programming logic, JavaScript concepts, backend development, REST APIs, and MongoDB integration.

---

# Repository Structure

```bash id="9rvj0x"
JavaScriptHandsOn/
│
├── Week1/
│   ├── Assignment Programs
│   ├── JavaScript Basics
│   └── Practice Questions
│
├── Week2/
│   ├── ES6 Assignments
│   ├── Array & Object Programs
│   └── Advanced JavaScript
│
└── Week3/
    ├── Backend/
    └── Backend-Demo-2/
```

---

# Objective of Assignments

The assignments are designed to:

* Improve coding skills
* Build strong JavaScript fundamentals
* Understand backend architecture
* Practice real-world API development
* Learn database connectivity
* Improve problem-solving ability

---

# Week 1 Assignments - JavaScript Basics

## Topics Covered

* Variables and Data Types
* Operators
* Conditional Statements
* Loops
* Functions
* Arrays
* String Operations

---

## Sample Assignments

### 1. Even or Odd Number

Program to check whether a number is even or odd.

### 2. Largest of Three Numbers

Find the largest number among three inputs.

### 3. Factorial Program

Calculate factorial using loops/functions.

### 4. Prime Number Check

Check whether a number is prime.

### 5. Array Operations

Perform:

* Sum of array elements
* Maximum element
* Minimum element

---

## Learning Outcomes

After completing Week 1 assignments, students can:

* Write basic JavaScript programs
* Use loops and conditions efficiently
* Understand function implementation
* Solve beginner-level coding problems

---

# Week 2 Assignments - Advanced JavaScript

## Topics Covered

* Objects
* Destructuring
* Spread Operator
* Rest Parameters
* Arrow Functions
* Higher Order Functions
* Callbacks
* Array Methods

---

## Sample Assignments

### 1. Student Object Management

Create and manipulate student objects.

### 2. Array Mapping

Use `map()` to transform array data.

### 3. Filtering Data

Use `filter()` to retrieve required values.

### 4. Reduce Method

Calculate totals using `reduce()`.

### 5. Callback Functions

Implement custom callback functions.

---

## Learning Outcomes

Students will learn:

* Modern ES6 syntax
* Functional programming basics
* Efficient array handling
* Object manipulation
* Reusable JavaScript logic

---

# Week 3 Assignments - Backend Development

Week 3 focuses on Express.js and MongoDB backend development.

---

# Backend Assignment 1

## Folder

`Week3/Backend`

---

## Features

* Express server setup
* Routing using Express Router
* Middleware implementation
* User APIs
* Product APIs
* JSON parsing

---

## Assignment Objectives

Students learn:

* How backend servers work
* REST API development
* Request and response handling
* API modularization

---

## Main Files

| File                  | Purpose           |
| --------------------- | ----------------- |
| `server.js`           | Main server setup |
| `APIs/UserAPI.js`     | User routes       |
| `APIs/ProductsAPI.js` | Product routes    |

---

## Installation

```bash id="8fc9np"
cd Week3/Backend
npm install
```

---

## Run Project

```bash id="zq2hsp"
node server.js
```

---

# Backend Assignment 2

## Folder

`Week3/Backend-Demo-2`

---

## Features

* MongoDB integration
* Mongoose connection
* Error handling middleware
* User & Product APIs
* Modular architecture

---

## Assignment Objectives

Students learn:

* MongoDB database connection
* CRUD operations
* Error handling
* Backend architecture design

---

## Main Files

| File                 | Purpose             |
| -------------------- | ------------------- |
| `server.js`          | Main backend server |
| `APIs/UserAPI.js`    | User APIs           |
| `APIs/ProductAPI.js` | Product APIs        |

---

# MongoDB Configuration

```js id="bnz8cv"
mongodb://127.0.0.1:27017/anuragdb2
```

Ensure MongoDB service is running before executing the project.

---

# Middleware Used

## JSON Middleware

```js id="s94r2z"
app.use(exp.json())
```

Used to parse incoming JSON requests.

---

## Error Handling Middleware

```js id="3f7g3p"
app.use((err,req,res,next)=>{
   res.send({message:"Error",payload:err.message})
})
```

Used for centralized application error handling.

---

# Sample API Request

```json id="vlfy6u"
{
  "username": "deepthi",
  "age": 21
}
```

---

# Skills Developed Through Assignments

* Problem Solving
* JavaScript Programming
* Backend Development
* API Design
* MongoDB Integration
* Debugging
* Middleware Usage
* Modular Coding

---

# Future Enhancements

* JWT Authentication
* Password Encryption
* Role-Based Access
* File Upload APIs
* Environment Variables
* Deployment on Cloud Platforms
* Frontend Integration

---

# Conclusion

These assignments provide practical exposure to JavaScript and MERN Stack development.
The repository helps students strengthen both frontend logic-building skills and backend development concepts through hands-on implementation.

