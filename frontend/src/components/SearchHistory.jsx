function SearchHistory({ history, onDelete }) {
  if (history.length === 0) {
    return (
      <div className="max-w-md mx-auto mt-8 bg-slate-800 border border-slate-700 rounded-2xl p-6 text-white shadow-lg mb-10">
        <h3 className="font-semibold mb-4">Recent Searches</h3>
        <p className="text-slate-400 text-sm">No searches yet. Try searching a city above!</p>
      </div>
    )
  }

  return (
    <div className="max-w-md mx-auto mt-8 bg-slate-800 border border-slate-700 rounded-2xl p-6 text-white shadow-lg mb-10">
      <h3 className="font-semibold mb-4">Recent Searches</h3>
      <ul className="space-y-2">
        {history.map((item) => (
          <li
            key={item._id}
            className="flex justify-between items-center bg-slate-900 rounded-lg px-4 py-2"
          >
            <div>
              <span>{item.city}</span>
              <span className="text-slate-400 text-sm ml-2">{Math.round(item.temperature)}°C</span>
            </div>
            <button
              onClick={() => onDelete(item._id)}
              className="text-red-400 hover:text-red-300 text-sm"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SearchHistory