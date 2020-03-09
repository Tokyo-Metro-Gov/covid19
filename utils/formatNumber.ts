export function formatNumber(n: number, locales: string, options = {}): string {
  const formatter = new Intl.NumberFormat(locales, options)

  return formatter.format(n)
}
