# Donna - An AI assistant agent.

## Overview
This project consists of a **Next.js frontend** and a **FastAPI backend**. It is designed to be open-source and easy to set up for development or deployment.

## Prerequisites
Make sure you have the following installed:

- **Node.js** (Recommended: v18+)
- **Python** (Recommended: 3.9+)
- **pip** and **venv** for Python dependencies

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 2. Setting Up the Backend (FastAPI)
```bash
cd backend
python -m venv venv  # Create a virtual environment
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt  # Install dependencies
```
#### Running the Backend
```bash
fastapi dev main.py
```
By default, the FastAPI backend runs at **http://localhost:8000**.

### 3. Setting Up the Frontend (Next.js)
```bash
cd ../frontend
npm install  # Install dependencies
```
#### Running the Frontend
```bash
npm run dev
```
By default, the Next.js frontend runs at **http://localhost:3000**.

## Environment Variables
Both the frontend and backend may require environment variables. Run the following commands to setup your `.env` files

```bash
cp ./frontend/.env.example ./frontend/.env.local
cp ./backend/.env.example ./backend/.env
```

## License
This project is licensed under the **Apache License 2.0**. See the `LICENSE` file for details.
