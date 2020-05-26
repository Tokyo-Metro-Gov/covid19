export type SurfaceStyle = {
  strokeColor: string
  fillColor: string
}

const surfaceStyleA: SurfaceStyle = {
  strokeColor: '#5a8055',
  fillColor: '#1b4d30'
}

const surfaceStyleB: SurfaceStyle = {
  strokeColor: '#5a8055',
  fillColor: '#00a040'
}

const surfaceStyleC: SurfaceStyle = {
  strokeColor: '#5a8055',
  fillColor: '#c5e2c6'
}

const surfaceStyleD: SurfaceStyle = {
  strokeColor: '#1b4d30',
  fillColor: '#cbe1c8'
}

const surfaceStyleE: SurfaceStyle = {
  strokeColor: '#cc7004',
  fillColor: '#cc7004'
}

const surfaceStyleF: SurfaceStyle = {
  strokeColor: '#1b4d30',
  fillColor: '#1b4d30'
}

export function getGraphSeriesStyle(seriesLength: number) {
  switch (seriesLength) {
    case 1:
      return [surfaceStyleB]
    case 2:
      return [surfaceStyleA, surfaceStyleC]
    default:
      return [surfaceStyleA, surfaceStyleB, surfaceStyleC]
  }
}

export function getGraphSeriesColor(series: string) {
  switch (series) {
    case 'A':
    default:
      return surfaceStyleA
    case 'B':
      return surfaceStyleB
    case 'C':
      return surfaceStyleC
    case 'D':
      return surfaceStyleD
    case 'E':
      return surfaceStyleE
    case 'F':
      return surfaceStyleF
  }
}
