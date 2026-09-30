\# Weather Dashboard



A full-stack weather dashboard where users can search for a city's current weather and view/manage their search history.



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



\## API Endpoints

\- `GET /api/weather/:city` — fetch current weather for a city

\- `GET /api/history` — fetch recent search history

\- `DELETE /api/history/:id` — delete a history entry



\## Status

🚧 In development — deployment coming soon.

