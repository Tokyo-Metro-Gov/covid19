export default (aoa: (string | number)[][]) =>
  aoa.map(row => row.join(',')).join('\n')
