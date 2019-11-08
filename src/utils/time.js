export function getFullHours (minutes) {
  return parseInt(minutes / 60) + 8
}

export function getMinutes (minutes) {
  return (minutes % 60)
}