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

/**
 * 引数で受け取った桁数で小数部を桁揃えし、整数部を3桁ごとにカンマ区切りにする関数を返します。
 * 小数部桁揃えには getNumberToFixedFunction を使用しているため、
 * 詳しい仕様は getNumberToFixedFunction の JSDoc を参照してください
 * @param digit - 桁揃えする桁数
 * @see getNumberToFixedFunction
 * @see {@link https://stackoverflow.com/a/38462832}
 */
export function getCommaSeparatedNumberToFixedFunction(digit = 0) {
  return (d: number): string =>
    Number(getNumberToFixedFunction(digit)(d)).toLocaleString('en', {
      minimumFractionDigits: digit,
    })
}
