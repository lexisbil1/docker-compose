# 🚀 Node.js + Redis Docker Compose Setup

## 📌 Overview
This project demonstrates how to containerize a Node.js application with Redis using Docker Compose.

## ⚙️ Features
- Redis cache with in-memory (`tmpfs`) storage
- Node.js app with bind-mounted source code
- Port mapping (3000)
- Service dependency handling

## 📁 Project Structure

project/

│── docker-compose.yml

│── src/

│ ├── app.js

│ ├── package.json


## ▶️ How to Run
``bash

docker compose up -d

Then open:
http://localhost:3000


##🧠 Key Concepts

Bind Mount vs Volume

tmpfs for caching

Docker service networking
