# Liired Backend

Node.js + Express API for product management system.

## 🚀 Quick Start

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
# Create .env file with:
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=product_management
JWT_SECRET=your_jwt_secret_here
CORS_ORIGIN=http://localhost:3000

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

## 🔌 API Endpoints

```
POST   /api/auth/login          # Login
GET    /api/products            # Get products
POST   /api/products            # Create product
PUT    /api/products/:id        # Update product
DELETE /api/products/:id        # Delete product
GET    /api/reports             # Get stats
```

## 🐛 Common Issues

**Port already in use:**
```bash
lsof -ti:5000 | xargs kill -9
```

**Database connection error:**
- Check MySQL is running: `mysql.server status`
- Verify credentials in `.env`
- Ensure database exists: `mysql -u root -p -e "SHOW DATABASES;"`

---

Built with Node.js + Express + MySQL
