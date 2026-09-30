import { formatTime } from '../utils/formatTime'

function WeatherCard({ weather }) {
  const {
    city,
    country,
    temperature,
    feelsLike,
    humidity,
    pressure,
    windSpeed,
    condition,
    icon,
    sunrise,
    sunset,
    visibility,
  } = weather

  return (
    <div className="max-w-md mx-auto mt-8 bg-slate-800 border border-slate-700 rounded-2xl p-6 text-white shadow-lg">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-semibold">{city}</h2>
          <p className="text-slate-400">{country}</p>
        </div>
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={condition}
          className="w-16 h-16"
        />
      </div>

      <div className="mt-4">
        <span className="text-5xl font-bold">{Math.round(temperature)}°C</span>
        <p className="text-slate-400 capitalize">{condition}</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
        <div className="bg-slate-900 rounded-lg p-3">
          <p className="text-slate-400">Feels like</p>
          <p className="font-medium text-lg">{Math.round(feelsLike)}°C</p>
        </div>
        <div className="bg-slate-900 rounded-lg p-3">
          <p className="text-slate-400">Humidity</p>
          <p className="font-medium text-lg">{humidity}%</p>
        </div>
        <div className="bg-slate-900 rounded-lg p-3">
          <p className="text-slate-400">Wind Speed</p>
          <p className="font-medium text-lg">{windSpeed} km/h</p>
        </div>
        <div className="bg-slate-900 rounded-lg p-3">
          <p className="text-slate-400">Pressure</p>
          <p className="font-medium text-lg">{pressure} hPa</p>
        </div>
        <div className="bg-slate-900 rounded-lg p-3">
          <p className="text-slate-400">Visibility</p>
          <p className="font-medium text-lg">{(visibility / 1000).toFixed(1)} km</p>
        </div>
        <div className="bg-slate-900 rounded-lg p-3">
          <p className="text-slate-400">Sunrise / Sunset</p>
          <p className="font-medium text-sm">
            {formatTime(sunrise)} / {formatTime(sunset)}
          </p>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard