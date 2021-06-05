import dayjs from 'dayjs'

import { getComplementedDate } from '@/utils/formatDate'
import { getCommaSeparatedNumberToFixedFunction } from '@/utils/monitoringStatusValueFormatters'

interface DayBeforeRatioParameters {
  displayData: any
  dataIndex?: number
  digit?: number
}
interface DayBeforeRatioData {
  lastDay: Date
  lastDayData: string
  dayBeforeRatio: string
}
/**
 * Get day before ratio values
 *
 * @param displayData - Chart displayData
 * @param dataIndex - Target data index in `displayData.datasets`
 * @param digit - The number of digits to appear after the decimal point
 */
export default function ({
  displayData,
  dataIndex = 0,
  digit = 0,
}: DayBeforeRatioParameters): DayBeforeRatioData {
  const data = displayData.data ?? displayData
  const lastDay = data.labels!.slice(-1)[0]
  const datasetData = data.datasets[dataIndex].data.toString()
  const lastDayData = parseInt(datasetData.slice(-1)[0])
  const lastBeforeData = parseInt(datasetData.slice(-2)[0])
  const dayBeforeRatio = lastDayData - lastBeforeData
  const formatter = getCommaSeparatedNumberToFixedFunction(digit)

  return {
    lastDay: dayjs(getComplementedDate(lastDay)).toDate(),
    lastDayData: formatter(lastDayData),
    dayBeforeRatio: formatDayBeforeRatio(dayBeforeRatio, formatter),
  }
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
