export function isExternal(path: string): boolean {
  return /^https?:\/\//.test(path)
}

export function isSingleCard(path: string): boolean {
  return path.startsWith('/cards/')
}
