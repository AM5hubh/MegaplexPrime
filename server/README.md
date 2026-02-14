# Real Estate Admin Panel Backend

Backend API for managing real estate website content through an admin panel.

## Features

- **Admin Authentication** with JWT
- **Content Management** for all website sections
- **MongoDB** database
- **TypeScript** for type safety

## Setup Instructions

### 1. Install Dependencies

```bash
cd server
npm install
```

### 2. Configure Environment

Create a `.env` file in the server directory:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/real-estate-admin
JWT_SECRET=your-secret-key-change-in-production
NODE_ENV=development
```

### 3. Start MongoDB

Make sure MongoDB is running on your system:

```bash
# Windows
mongod

# macOS/Linux
sudo systemctl start mongod
```

### 4. Seed the Database

Initialize the admin user and default content:

```bash
npm run seed
```

This creates:

- Admin user: `admin@gmail.com` / `1234`
- Default content for all sections

### 5. Start the Server

**Development mode:**

```bash
npm run dev
```

**Production mode:**

```bash
npm run build
npm start
```

The server will run on `http://localhost:5000`

## API Endpoints

### Authentication

#### Login

```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "admin@gmail.com",
  "password": "1234"
}
```

**Response:**

```json
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "admin": {
    "id": "...",
    "email": "admin@gmail.com"
  }
}
```

#### Verify Token

```http
GET /api/auth/verify
Authorization: Bearer <token>
```

### Content Management

#### Get Content (Public)

```http
GET /api/content
```

**Response:**

```json
{
  "_id": "...",
  "heroSection": {
    "title": "Thinking of a Fantastic Vicinity?",
    "subtitle": "Discover your dream home...",
    "pricingTitle": "Vighnaharta Infinity",
    "location": "Boisar East, Palghar"
  },
  "projectSection": { ... },
  "amenitiesSection": { ... },
  ...
}
```

#### Update All Content (Protected)

```http
PUT /api/content
Authorization: Bearer <token>
Content-Type: application/json

{
  "heroSection": {
    "title": "New Title",
    ...
  },
  ...
}
```

#### Update Specific Section (Protected)

```http
PUT /api/content/:section
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "Updated Title",
  "subtitle": "Updated Subtitle"
}
```

**Available sections:**

- `heroSection`
- `projectSection`
- `amenitiesSection`
- `nearbySection`
- `aboutSection`
- `constructionSection`
- `faqSection`

## Content Structure

### Hero Section

```typescript
{
  title: string;
  subtitle: string;
  pricingTitle: string;
  location: string;
}
```

### Project Section

```typescript
{
  title: string;
  description: string;
  brochureText: string;
}
```

### Amenities Section

```typescript
{
  title: string;
  subtitle: string;
  viewMoreText: string;
}
```

### Nearby Section

```typescript
{
  title: string;
}
```

### About Section

```typescript
{
  title: string;
  content: string;
}
```

### Construction Section

```typescript
{
  title: string;
  updateLabel: string;
}
```

### FAQ Section

```typescript
{
  title: string;
  questions: Array<{
    question: string;
    answer: string;
  }>;
}
```

## Admin Credentials

**Email:** admin@gmail.com  
**Password:** 1234

⚠️ **Important:** Change the JWT_SECRET in production and consider implementing password reset functionality.

## Error Handling

All endpoints return appropriate HTTP status codes:

- `200` - Success
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Internal Server Error

## Security

- Passwords are hashed using bcrypt
- JWT tokens expire after 24 hours
- Protected routes require valid authentication token
- CORS enabled for frontend integration
