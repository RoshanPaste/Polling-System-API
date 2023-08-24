# Polling-System-API

A Polling system, only API based

# Web App Link

      https://polling-system-api-gh3q.onrender.com/


# Requirements

      Install Node.js
      Install MongoDB
      Install Postman or use any other api testing tool


# Getting Started

      Clone the repository
      git clone https://github.com/yash0102/Polling-System-API.git

      Install dependencies
      npm install
      Open "config/mongoose.js" and add MongoDB URI, local or Atlas

      Build and run the project

      npm start
      Navigate to http://localhost:8000/


# Task

      You need to create an API where anyone can create questions with options and also add votes to it
      Authentication/User identity is not needed, this is going to be a completely open application, however if you want to and think there’s extra time, you can create authentication

# Features:

      Create a question (you can add as many questions as you want)
      Add options to a question
      Add a vote to an option of question
      Delete a question → (optional: A question can’t be deleted if one of it’s options has votes)
      Delete an option → (optional: An option can’t be deleted if it has even one vote given to it)
      View a question with it’s options and all the votes given to it


# Required Routes:

      /questions/create  (To create a question)
      /questions/:id/options/create  (To add options to a specific question)
      /questions/:id/delete (To delete a question)
      /options/:id/delete (To delete an option)
      /options/:id/add_vote (To increment the count of votes)
      /questions/:id (To view a question and it’s options)

# Folder structure

Polling System Api
|
|-config |->mongoose.js
|
|-controller |-> optionsController
|            |-> questionsController
|
|-model |-> option.js
|       |-> question.js
|
|-routes |-> index.js
|        |-> api 
|              |-> index.js   
|              |-> v1
|                   |-> index.js 
|                   |-> option.js
|                   |-> questions.js
|
|- index.js
|
|-package-lock.json
|
|-package.json