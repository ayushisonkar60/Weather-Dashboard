import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import WeatherCardSkeleton from './components/WeatherCardSkeleton'
import SearchHistory from './components/SearchHistory'
import { fetchWeather, fetchHistory, deleteHistoryItem } from './services/weatherAPI'

function App() {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [history, setHistory] = useState([])
  const [historyLoading, setHistoryLoading] = useState(true)

  async function loadHistory() {
    try {
      const data = await fetchHistory()
      setHistory(data)
    } catch (err) {
      console.error('Failed to load history:', err.message)
    } finally {
      setHistoryLoading(false)
    }
  }

  useEffect(() => {
    loadHistory()
  }, [])

  async function handleSearch(city) {
    setLoading(true)
    setError(null)

    try {
      const data = await fetchWeather(city)
      setWeather(data)
      await loadHistory()
    } catch (err) {
      setWeather(null)
      if (err.response && err.response.status === 404) {
        setError('City not found. Please check the spelling.')
      } else if (err.response) {
        setError('Something went wrong. Please try again.')
      } else {
        setError('Cannot reach the server. Check your connection.')
      }
    } finally {
      setLoading(false)
    }
  }

  async function handleDelete(id) {
    try {
      await deleteHistoryItem(id)
      setHistory((prev) => prev.filter((item) => item._id !== id))
    } catch (err) {
      console.error('Failed to delete history item:', err.message)
    }
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <SearchBar onSearch={handleSearch} loading={loading} />

      {loading && <WeatherCardSkeleton />}

      {error && !loading && (
        <p className="text-center text-red-400 mt-8 px-4">{error}</p>
      )}

      {weather && !loading && !error && <WeatherCard weather={weather} />}

      {historyLoading ? (
        <p className="text-center text-slate-400 mt-8">Loading history...</p>
      ) : (
        <SearchHistory history={history} onDelete={handleDelete} />
      )}
    </div>
  )
}

export default App