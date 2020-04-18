export type SurfaceStyle = {
  strokeColor: string
  fillColor: string
}

const surfaceStyleA: SurfaceStyle = {
  strokeColor: '#24448c',
  fillColor: '#3461cb'
}

const surfaceStyleB: SurfaceStyle = {
  strokeColor: '#24448c',
  fillColor: '#3461cb'
}

const surfaceStyleC: SurfaceStyle = {
  strokeColor: '#24448c',
  fillColor: '#3461cb'
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
