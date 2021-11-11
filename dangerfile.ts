// eslint-disable-next-line import/named
import { danger, warn } from 'danger'

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
