import Vue from 'vue'
import { DisplayData } from '@/plugins/vue-chart'
import { getCommaSeparatedNumberToFixedFunction } from '@/utils/monitoringStatusValueFormatters'

interface DayBeforeRatioParameters {
  displayData: DisplayData
  dataIndex?: number
  digit?: number
}

/**
 * Get day before ratio values
 *
 * @param displayData - Chart displayData
 * @param dataIndex - Target data index in `displayData.datasets`
 * @param digit - The number of digits to appear after the decimal point
 * @returns [lastDay, lastDayData, datBeforeRatio]
 */
export const calcDayBeforeRatio = function({
  displayData,
  dataIndex = 0,
  digit = 0
}: DayBeforeRatioParameters): string[] {
  const lastDay = displayData.labels!.slice(-1)[0]
  const data = displayData.datasets[dataIndex].data
  const lastDayData = data.slice(-1)[0]
  const lastBeforeData = data.slice(-2)[0]
  const dayBeforeRatio = lastDayData - lastBeforeData
  const formatter = getCommaSeparatedNumberToFixedFunction(digit)

  return [
    Vue.prototype.$nuxt.$options.i18n.d(new Date(lastDay), 'dateWithoutYear'),
    formatter(lastDayData),
    formatDayBeforeRatio(dayBeforeRatio, formatter)
  ]
}

function formatDayBeforeRatio(
  dayBeforeRatio: number,
  formatter: Function
): string {
  const formattedDayBeforeRatio = formatter(dayBeforeRatio)
  switch (Math.sign(dayBeforeRatio)) {
    case 1:
      return `+${formattedDayBeforeRatio}`
    case -1:
      return `${formattedDayBeforeRatio}`
    default:
      return `${formattedDayBeforeRatio}`
  }
}
