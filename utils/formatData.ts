export const getComplementedDate = (dateString: string): string => {
  const dates = dateString.split('/')
  if (dates.length !== 2) {
    return dateString
  }
  const month = Number(dates[0])
  const date = Number(dates[1])
  const today = new Date()
  const currentMonth = today.getMonth() + 1
  const currentDate = today.getDate()
  let targetYear = today.getFullYear()

  if (currentMonth <= month && currentDate <= date) {
    targetYear = -1
  }

  return `${targetYear}/${month}/${date}`
}
