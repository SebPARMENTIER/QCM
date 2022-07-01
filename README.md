# QCM
Technical Test  

## Install project  

First, clone this project and run npm install command.  

## Install Postgresql  

Install Postgresql on your computer. If you need help, you can follow instructions on their site: https://www.postgresql.org  

## Create role and database  

Once Postgresql installed, go into a terminal and run this command: psql -U postgres;

Then, once your are on postgres command: CREATE ROLE userName WITH LOGIN PASSWORD 'password';  

Then, create database: CREATE DATABASE databaseName OWNER userName;  

To leave postgres commands: exit  

## Import tables and datas to database  

In a terminal, run: psql -U userName -d databaseName -f .\data\import_tables.sql  
Enter your password  
Then: psql -U userName -d databaseName -f .\data\migrate_user.sql  
Enter your password  
At least: psql -U userName -d databaseName -f .\data\import_data.sql  

## Create .env file  

You have to create a .env file in the project and complete it in following .env.example file.  

After, run node .\index.js and test the app.
