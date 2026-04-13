# TravelEase — Transport Booking System

A full-stack transport booking web app built with Node.js, Express, MongoDB, and vanilla HTML/CSS/JS.

## 🚀 Live Demo
Deploy link here after deployment.

## 🏗️ Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Atlas for production)
- **Auth:** JWT
- **Payment:** Razorpay
- **Frontend:** HTML, CSS, Vanilla JS (served by Express)

## 📁 Project Structure
```
TravelEase/
├── backend/
│   ├── server.js          # Main Express server
│   ├── models/            # Mongoose models
│   ├── routes/            # API routes
│   ├── middleware/        # Auth middleware
│   └── package.json
└── frontend/
    ├── pages/             # HTML pages
    ├── styles/            # CSS
    └── js/utils.js        # Shared JS utilities
```

## ⚙️ Setup & Run Locally

### 1. Clone the repo
```bash
git clone https://github.com/yourusername/travelease.git
cd travelease/backend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment
```bash
cp .env.example .env
# Edit .env with your MongoDB Atlas URI, JWT secret, Razorpay keys
```

### 4. Run
```bash
npm start
# Open http://localhost:5000
```

## 🔑 Default Credentials (auto-seeded)
| Role  | Email                | Password  |
|-------|----------------------|-----------|
| Admin | admin@transport.com  | admin123  |
| User  | user@test.com        | user123   |

## ☁️ Deploying to Render (Free)

1. Push this repo to GitHub
2. Go to [render.com](https://render.com) → New Web Service
3. Connect your GitHub repo
4. Settings:
   - **Root Directory:** `backend`
   - **Build Command:** `npm install`
   - **Start Command:** `node server.js`
5. Add Environment Variables:
   - `MONGO_URI` → your MongoDB Atlas connection string
   - `JWT_SECRET` → any long random string
   - `RAZORPAY_KEY_ID` → your Razorpay key
   - `RAZORPAY_KEY_SECRET` → your Razorpay secret
   - `NODE_ENV` → `production`
6. Deploy → your app will be live at `https://travelease-xxxx.onrender.com`

## 🍃 MongoDB Atlas Setup (Free)
1. Go to [mongodb.com/atlas](https://mongodb.com/atlas) → Free tier
2. Create cluster → Get connection string
3. Format: `mongodb+srv://user:password@cluster0.xxxxx.mongodb.net/transportbooking`
4. Add to `MONGO_URI` in Render environment variables

## 💳 Razorpay Setup
1. Sign up at [razorpay.com](https://razorpay.com)
2. Dashboard → Settings → API Keys → Generate Test Keys
3. Add `RAZORPAY_KEY_ID` and `RAZORPAY_KEY_SECRET` to environment variables

