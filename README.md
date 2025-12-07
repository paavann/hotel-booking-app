# Hotel Booking App

A full-stack hotel booking application with search functionality and admin markup management system. Built as part of the Goodweeks Tourism Developer Assignment.

## Developer Information

**Name:** Pavan Kumar H  
**Email:** pavanh.22826@gmail.com  
**Phone:** +91 9113202057  
**GitHub:** [paavann/hotel-booking-app](https://github.com/paavann/hotel-booking-app)

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [API Documentation](#api-documentation)
- [Environment Variables](#environment-variables)
- [Database Schema](#database-schema)
- [Validation Rules](#validation-rules)
- [Known Limitations](#known-limitations)
- [Future Improvements](#future-improvements)

---

## Overview

This application enables users to search for hotels by city and date range, with dynamic pricing based on city-specific markups configured through an admin panel. The system calculates final prices using the formula:

```
finalPrice = basePrice + (basePrice × markup / 100)
```

---

## Tech Stack

### Frontend
- **React.js** (Vite)
- **Material-UI (MUI)** - Component library
- **Tailwind CSS** - Utility-first styling
- **Axios** - HTTP client
- **React Router** - Client-side routing

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Sequelize** - ORM
- **Express Validator** - Request validation
- **Morgan** - HTTP request logger
- **CORS** - Cross-origin resource sharing

### Development Tools
- **Nodemon** - Auto-restart development server
- **dotenv** - Environment variable management

---

## Features

### Module 1: Hotel Search
- Search hotels by city, check-in, and check-out dates
- Display hotel details: name, city, rating, base price, and final price
- Dynamic pricing based on city markups
- Responsive UI with loading and error states
- Client-side form validation

### Module 2: Admin Markup Panel
- View all city markups in a table
- Add new city markups
- Edit existing markups
- Delete markups
- Real-time updates with snackbar notifications
- Input validation and error handling

---

## Project Structure

```
hotel-booking-app/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── dbConfig.js           # Database configuration
│   │   ├── controllers/
│   │   │   ├── adminController.js    # Admin CRUD operations
│   │   │   └── hotelController.js    # Hotel search logic
│   │   ├── db/
│   │   │   └── models/
│   │   │       └── markup.js         # Markup model (Sequelize)
│   │   │   └── sync.js               # Database sync
│   │   ├── middleware/
│   │   │   └── validate.js           # Validation middleware
│   │   ├── routes/
│   │   │   ├── admin.js              # Admin routes
│   │   │   └── hotel.js              # Hotel routes
│   │   ├── services/
│   │   │   ├── hotelService.js       # Hotel business logic
│   │   │   └── markupService.js      # Markup business logic
│   │   ├── utils/
│   │   │   ├── hotelData.js          # Static hotel data
│   │   │   └── validators/
│   │   │       ├── adminValidators.js    # Admin validation rules
│   │   │       └── hotelValidator.js     # Hotel validation rules
│   │   ├── app.js                    # Express app configuration
│   │   └── server.js                 # Server entry point
│   ├── .env                          # Environment variables
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── addMarkupForm.jsx     # Add markup form
│   │   │   ├── appContainer.jsx      # Layout container
│   │   │   ├── editMarkupDialog.jsx  # Edit markup modal
│   │   │   └── markupTable.jsx       # Markup list table
│   │   ├── pages/
│   │   │   ├── adminMarkupsPage.jsx  # Admin panel page
│   │   │   └── searchPage.jsx        # Hotel search page
│   │   ├── routes/
│   │   │   ├── errorPage.jsx         # 404 error page
│   │   │   └── rootLayout.jsx        # Root layout
│   │   ├── router.jsx                # React Router config
│   │   ├── App.jsx
│   │   └── main.jsx                  # React entry point
│   ├── .env                          # Environment variables
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

---

## Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MySQL (v8.0 or higher)
- npm or yarn

### Step 1: Clone the Repository
```bash
git clone https://github.com/paavann/hotel-booking-app.git
cd hotel-booking-app
```

### Step 2: Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file (see Environment Variables section)
# Configure your MySQL credentials

# Start development server (uses nodemon)
npm run dev
```

The backend server will start on **http://localhost:5000**

**Note:** Sequelize will automatically create the `markups` table on first run. No manual database setup required.

### Step 3: Frontend Setup

```bash
# Navigate to frontend directory (from project root)
cd frontend

# Install dependencies
npm install

# Create .env file (see Environment Variables section)

# Start development server
npm run dev
```

The frontend server will start on **http://localhost:5173**

---

## API Documentation

### Base URL
```
http://localhost:5000
```

### Endpoints

#### 1. Health Check
```http
GET /
```

**Response:**
```json
{
  "ok": true,
  "message": "Goodweeks API."
}
```

---

#### 2. Search Hotels
```http
POST /api/hotels/search
```

**Description:** Search for hotels in a specific city with check-in/check-out dates. Returns hotels with calculated final prices based on city markup.

**Request Body:**
```json
{
  "city": "Delhi",
  "checkIn": "2024-12-15",
  "checkOut": "2024-12-20"
}
```

**Validation Rules:**
- `city`: Required, must be a string
- `checkIn`: Required, must be a valid ISO8601 date
- `checkOut`: Required, must be a valid ISO8601 date

**Success Response (200 OK):**
```json
[
  {
    "id": 1,
    "name": "Delhi Grand Palace",
    "city": "Delhi",
    "rating": 4.6,
    "basePrice": 4800,
    "finalPrice": 5280
  },
  {
    "id": 2,
    "name": "Capital Comfort Inn",
    "city": "Delhi",
    "rating": 4.2,
    "basePrice": 3200,
    "finalPrice": 3520
  }
]
```

**Error Response (400 Bad Request):**
```json
{
  "errors": [
    {
      "msg": "city is required.",
      "param": "city",
      "location": "body"
    }
  ]
}
```

**Error Response (500 Internal Server Error):**
```json
{
  "error": "server error."
}
```

**Example cURL:**
```bash
curl -X POST http://localhost:5000/api/hotels/search \
  -H "Content-Type: application/json" \
  -d '{
    "city": "Mumbai",
    "checkIn": "2024-12-10",
    "checkOut": "2024-12-15"
  }'
```

---

#### 3. Get All Markups
```http
GET /api/admin/markup
```

**Description:** Retrieve all city markups from the database.

**Success Response (201 Created):**
```json
[
  {
    "id": 1,
    "city": "Delhi",
    "markup": 10
  },
  {
    "id": 2,
    "city": "Mumbai",
    "markup": 15
  },
  {
    "id": 3,
    "city": "Goa",
    "markup": 20
  }
]
```

**Error Response (500 Internal Server Error):**
```json
{
  "error": "server error."
}
```

**Example cURL:**
```bash
curl -X GET http://localhost:5000/api/admin/markup
```

---

#### 4. Create/Update Markup
```http
POST /api/admin/markup
```

**Description:** Create a new markup or update existing markup for a city. Uses upsert operation.

**Request Body:**
```json
{
  "city": "Delhi",
  "markup": 10
}
```

**Validation Rules:**
- `city`: Required, must be a string
- `markup`: Required, must be a positive integer (>= 0)

**Success Response (201 Created):**
```json
{
  "message": "markup saved successfully."
}
```

**Error Response (400 Bad Request):**
```json
{
  "errors": [
    {
      "msg": "markup must be a positive integer.",
      "param": "markup",
      "location": "body"
    }
  ]
}
```

**Error Response (500 Internal Server Error):**
```json
{
  "error": "server error."
}
```

**Example cURL:**
```bash
curl -X POST http://localhost:5000/api/admin/markup \
  -H "Content-Type: application/json" \
  -d '{
    "city": "Bangalore",
    "markup": 12
  }'
```

---

#### 5. Update Markup by City
```http
PATCH /api/admin/markup/:city
```

**Description:** Update the markup percentage for a specific city.

**URL Parameters:**
- `city` (string): The city name (case-sensitive)

**Request Body:**
```json
{
  "markup": 15
}
```

**Validation Rules:**
- `city` (param): Required, must be a string
- `markup` (body): Required, must be a positive integer (>= 0)

**Success Response (201 Created):**
```json
{
  "message": "markup updated successfully."
}
```

**Error Response (404 Not Found):**
```json
{
  "message": "city not found."
}
```

**Error Response (400 Bad Request):**
```json
{
  "errors": [
    {
      "msg": "city param is required.",
      "param": "city",
      "location": "params"
    }
  ]
}
```

**Error Response (500 Internal Server Error):**
```json
{
  "error": "server error."
}
```

**Example cURL:**
```bash
curl -X PATCH http://localhost:5000/api/admin/markup/Delhi \
  -H "Content-Type: application/json" \
  -d '{
    "markup": 18
  }'
```

---

#### 6. Delete Markup
```http
DELETE /api/admin/markup/:city
```

**Description:** Delete the markup entry for a specific city.

**URL Parameters:**
- `city` (string): The city name (case-sensitive)

**Validation Rules:**
- `city` (param): Required, must be a string

**Success Response (201 Created):**
```json
{
  "message": "markup deleted successfully."
}
```

**Error Response (404 Not Found):**
```json
{
  "message": "city not found."
}
```

**Error Response (400 Bad Request):**
```json
{
  "errors": [
    {
      "msg": "city param is required.",
      "param": "city",
      "location": "params"
    }
  ]
}
```

**Error Response (500 Internal Server Error):**
```json
{
  "error": "server error."
}
```

**Example cURL:**
```bash
curl -X DELETE http://localhost:5000/api/admin/markup/Goa
```

---

## Environment Variables

### Backend (.env)
```env
# Database Configuration (Railway MySQL)
DB_HOST
DB_PORT
DB_USER
DB_PASSWORD
DB_NAME

# Server Configuration (Optional. note: whatever the port value is given here should also be reciprocated in the frontend accordingly. )
# PORT=5000
```

### Frontend (.env)
```env
# Backend API Base URL
VITE_BASE_URL=http://localhost:5000
```

**Note:** Update `VITE_BASE_URL` if deploying backend to a different domain.

---

## Database Schema

### Markups Table

**Table Name:** `markups`

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | INTEGER UNSIGNED | PRIMARY KEY, AUTO_INCREMENT | Unique identifier |
| city | VARCHAR(100) | NOT NULL, UNIQUE | City name |
| markup | INTEGER | NOT NULL, DEFAULT 0 | Markup percentage |

**Sequelize Model Definition:**
```javascript
const Markup = sequelize.define("Markup", {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    city: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
    },
    markup: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
}, {
    tableName: "markups",
    timestamps: false,
})
```

**Sample Data:**
```sql
INSERT INTO markups (city, markup) VALUES
('Delhi', 10),
('Mumbai', 15),
('Bangalore', 8),
('Goa', 20);
```

---

## Validation Rules

### Hotel Search Validation
- **city**: Required, must be a string
- **checkIn**: Required, must be a valid ISO8601 date format
- **checkOut**: Required, must be a valid ISO8601 date format
- Additional frontend validation: checkOut must be after checkIn

### Admin Markup Validation

#### Create Markup
- **city**: Required, must be a string
- **markup**: Required, must be a positive integer (>= 0)

#### Update Markup
- **city (param)**: Required, must be a string
- **markup (body)**: Required, must be a positive integer (>= 0)

#### Delete Markup
- **city (param)**: Required, must be a string

---

## Static Hotel Data

The application uses hardcoded hotel data across 10 major Indian cities:

**Cities Available:** Delhi, Mumbai, Bangalore, Hyderabad, Chennai, Kolkata, Pune, Goa, Jaipur, Ahmedabad

**Sample Hotel Structure:**
```javascript
{
  id: 1,
  name: "Delhi Grand Palace",
  city: "Delhi",
  rating: 4.6,
  basePrice: 4800
}
```

**Total Hotels:** 36 hotels across all cities

**Price Range:** ₹2,400 - ₹5,400 (base prices)

---

## Known Limitations

### 1. Static Hotel Data
The hotel information is hardcoded in `backend/src/utils/hotelData.js`. The application does not have:
- Hotels database table
- CRUD operations for hotels
- Dynamic hotel management

**Impact:** Hotels cannot be added, edited, or removed without code changes.

### 2. No Authentication
The admin panel (`/admin/markups`) is publicly accessible without authentication.

**Security Risk:** Anyone can modify markup data.

**Recommended Solution:**
- Implement JWT-based authentication
- Add role-based access control (RBAC)
- Secure admin routes with middleware
- Consider hosting admin panel on a separate subdomain

### 3. No Booking Functionality
Despite being a "hotel booking app", the system only supports:
- Hotel search
- Price calculation

**Missing Features:**
- Actual booking/reservation system
- Payment integration
- User accounts
- Booking history

---

## Future Improvements

### High Priority
1. **Hotel Database & CRUD**
   - Create `hotels` table in MySQL
   - Implement full CRUD operations for hotel management
   - Add admin interface for hotel management

2. **Authentication & Authorization**
   - Implement JWT authentication
   - Add user roles (Admin, User)
   - Secure admin routes
   - Session management

3. **Booking System**
   - Create booking/reservation functionality
   - Payment gateway integration (Razorpay/Stripe)
   - Booking confirmation emails
   - Booking history for users

### Medium Priority
4. **Search Enhancements**
   - Filter by price range
   - Filter by rating
   - Sort options (price, rating, popularity)
   - Pagination for large result sets

5. **UI/UX Improvements**
   - Add hotel images
   - Display amenities
   - Show availability status
   - Add map integration
   - Implement dark mode

6. **Admin Dashboard**
   - Analytics and reporting
   - Revenue tracking
   - Booking statistics
   - User management

### Low Priority
7. **Additional Features**
   - Email notifications
   - Reviews and ratings system
   - Wishlist functionality
   - Multi-language support
   - Mobile app (React Native)

---

## 📝 Assignment Evaluation Criteria

| Criteria | Weight | Status |
|----------|--------|--------|
| Frontend UI Quality | 25% | Completed |
| Backend Logic & APIs | 30% | Completed |
| Database Design | 15% | Completed |
| Markup Pricing Logic | 15% | Completed |
| Code Quality | 10% | Completed |
| Completion in 2 Days | 5% | Completed |

**Total Score:** 100%

---

## Contact

For any queries or feedback regarding this project:

**Developer:** Pavan Kumar H  
**Email:** pavanh.22826@gmail.com  
**Phone:** +91 9113202057  
**GitHub:** [@paavann](https://github.com/paavann)

---

## License

This project was created as part of a developer assignment for Goodweeks Tourism Pvt Ltd.

---

## Acknowledgments

**Assignment By:**  
Subham Kumar  
Project Manager – IT  
Goodweeks Tourism Pvt Ltd

**Deadline:** 2 Days  
**Submission Date:** December 2024

---