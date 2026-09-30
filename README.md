\# Weather Dashboard



A full-stack weather dashboard where users can search for a city's current weather and view/manage their search history.
## 🔗 Live Demo
- **Frontend:** https://weather-dashboard-f1zv.vercel.app
- **Backend API:** https://weather-dashboard-smsm.onrender.com

\## Features

\- Search current weather by city name

\- View temperature, feels-like, humidity, wind speed, pressure, visibility, and sunrise/sunset

\- Every successful search is saved to a search history

\- Delete individual history entries

\- Responsive, modern UI



\## Tech Stack

\*\*Frontend:\*\* React, Vite, Tailwind CSS

\*\*Backend:\*\* Node.js, Express.js, Axios

\*\*Database:\*\* MongoDB Atlas, Mongoose

\*\*Weather Data:\*\* OpenWeatherMap API



\## Getting Started



\### Backend

cd backend

npm install

npm run dev

Requires a `.env` file with `PORT`, `WEATHER\_API\_KEY`, and `MONGO\_URI`.



\### Frontend

cd frontend

npm install

npm run dev

Requires a `.env` file with `VITE_API_URL`. See `.env.example`.

## API Endpoints
- `GET /api/weather/:city` — fetch current weather for a city
- `GET /api/history` — fetch recent search history
- `DELETE /api/history/:id` — delete a history entry

## Note on Free-Tier Hosting
The backend is hosted on Render's free tier, which spins down after 15 minutes of inactivity. The first request after idle time may take 30-60 seconds to respond.

