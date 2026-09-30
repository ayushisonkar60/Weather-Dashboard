function WeatherCardSkeleton() {
  return (
    <div className="max-w-md mx-auto mt-8 bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-lg animate-pulse">
      <div className="flex justify-between items-start">
        <div className="space-y-2">
          <div className="h-6 w-32 bg-slate-700 rounded"></div>
          <div className="h-4 w-20 bg-slate-700 rounded"></div>
        </div>
        <div className="w-16 h-16 bg-slate-700 rounded-full"></div>
      </div>

      <div className="mt-4 space-y-2">
        <div className="h-10 w-24 bg-slate-700 rounded"></div>
        <div className="h-4 w-28 bg-slate-700 rounded"></div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="h-16 bg-slate-900 rounded-lg"></div>
        <div className="h-16 bg-slate-900 rounded-lg"></div>
        <div className="h-16 bg-slate-900 rounded-lg"></div>
        <div className="h-16 bg-slate-900 rounded-lg"></div>
      </div>
    </div>
  )
}

export default WeatherCardSkeleton