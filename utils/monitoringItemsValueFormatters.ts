/**
 * 引数で受け取った桁数で小数部を桁揃えする関数を返却します。
 * 引数のデフォルト値は0です。
 * Number.prototype.toFixed() は引数に 0-20 の値しかとれないため、
 * 0を下回る場合は0に、20を超える場合は20にfixします。
 * https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
 *
 * @param digit - 桁揃えする桁数
 */
export function getNumberToFixedFunction(digit = 0) {
  if (digit < 0) {
    return (d: number): string | undefined => d?.toFixed(0)
  }
  if (digit > 20) {
    return (d: number): string | undefined => d?.toFixed(20)
  }
  return (d: number): string | undefined => d?.toFixed(digit)
}

export function getNumberToLocaleStringFunction() {
  return (d: number): string | undefined => d?.toLocaleString()
}
