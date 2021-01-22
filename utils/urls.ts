export function isExternal(path: string): boolean {
  return /^https?:\/\//.test(path)
}
