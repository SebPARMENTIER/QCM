# QCM
Technical Test  

## Install project  

Frist, clone this project and run npm install command.  

## Install Postgresql  

Instal Postgresql on your computer. If you need help, you can follow instructions on their site: https://www.postgresql.org  

## Create role and database  

Once Postgresql installed, go into a terminal and run this command: psql -U posqtgres;

Then, once your are on postgres command: CREATE ROLE userName WITH LOGIN PASSWORD 'password';  

Then, create database: CREATE DATABASE databaseName OWNER userName;  

Once it's done, you have to create a .env file in the project and complete it in following .env.example file.  

After, run node .\index.js and test the app.
