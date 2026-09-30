// formatTime.js - Converts a Unix timestamp (seconds) to a readable local time

export function formatTime(unixSeconds) {
  const date = new Date(unixSeconds * 1000)
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}