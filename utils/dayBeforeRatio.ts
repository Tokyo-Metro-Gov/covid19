import { DisplayData } from '@/plugins/vue-chart'

/**
 * Get day before ratio values
 *
 * @param displayData - Chart displayData
 * @param dataIndex - Target data index in `displayData.datasets`
 * @returns [lastDay, lastDayData, datBeforeRatio]
 */
export const calcDayBeforeRatio = function(
  this: Vue,
  displayData: DisplayData,
  dataIndex = 0
): [string, number, string] {
  const lastDay = displayData.labels!.slice(-1)[0]
  const data = displayData.datasets[dataIndex].data
  const lastDayData = data.slice(-1)[0]
  const lastBeforeData = data.slice(-2)[0]
  const diff = lastDayData - lastBeforeData
  const dayBeforeRatio = formatDayBeforeRatio(diff)

  return [
    this.$d(new Date(lastDay), 'dateWithoutYear'),
    lastDayData,
    dayBeforeRatio
  ]
}

function formatDayBeforeRatio(dayBeforeRatio: number): string {
  const dayBeforeRatioLocaleString = dayBeforeRatio.toLocaleString()
  switch (Math.sign(dayBeforeRatio)) {
    case 1:
      return `+${dayBeforeRatioLocaleString}`
    case -1:
      return `${dayBeforeRatioLocaleString}`
    default:
      return `${dayBeforeRatioLocaleString}`
  }
}
