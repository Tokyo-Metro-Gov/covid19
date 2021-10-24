import { danger, warn } from 'danger' /* eslint-disable-line import/named */

const modifiedConverterFilePaths = danger.git.modified_files.filter(
  (filePath) => {
    return /^libraries\/auto_generated\/data_converter\/.*\.ts$/.test(filePath)
  }
)

modifiedConverterFilePaths.forEach((modifiedConverterFilePath) => {
  warn(
    `\`${modifiedConverterFilePath}\` が変更されています。追加したコメントなどが削除されないよう注意してください。`
  )
})
