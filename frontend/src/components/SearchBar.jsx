import { useState } from 'react'

function SearchBar({ onSearch, loading }) {
  const [city, setCity] = useState('')
  const [validationError, setValidationError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const trimmed = city.trim()

    if (trimmed === '') {
      setValidationError('Please enter a city name.')
      return
    }

    if (trimmed.length < 2) {
      setValidationError('City name is too short.')
      return
    }

    setValidationError('')
    onSearch(trimmed)
  }

  return (
    <div className="max-w-md mx-auto mt-8 px-4">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={city}
          onChange={(e) => {
            setCity(e.target.value)
            if (validationError) setValidationError('')
          }}
          placeholder="Enter city name..."
          disabled={loading}
          className="flex-1 px-4 py-2 rounded-lg bg-slate-800 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-medium transition-colors"
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>
      {validationError && (
        <p className="text-red-400 text-sm mt-2">{validationError}</p>
      )}
    </div>
  )
}

export default SearchBar