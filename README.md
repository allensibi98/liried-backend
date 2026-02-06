# Liired Backend

Node.js + Express API for product management system.

## Quick Start

### Prerequisites
- Node.js 18+
- MySQL 8.0+

### Setup & Run

```bash
# 1. Navigate to backend directory
cd lired-backend

# 2. Install dependencies
npm install

# 3. Configure environment
env file added in repo already

# 4. Setup database
mysql -u root -p < database.sql

# 5. Start server
npm start

Server runs on **http://localhost:5000**

### Default Login
- Username: `admin`
- Password: `admin123`


```bash
npm start 
npm run dev 
```

## API Endpoints

POST   /api/auth/login          # Login
GET    /api/products            # Get products
POST   /api/products            # Create product
PUT    /api/products/:id        # Update product
DELETE /api/products/:id        # Delete product
GET    /api/reports             # Get stats

**Database connection error:**
- Check MySQL is running: `mysql.server status`
- Verify credentials in `.env`
- Ensure database exists: `mysql -u root -p -e "SHOW DATABASES;"`


Built with Node.js + Express + MySQL
