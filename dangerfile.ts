import { danger, warn } from 'danger'

const modifiedConverterFilePaths = danger.git.modified_files.filter(
  (filePath) => {
    return /^libraries\/auto_generated\/data_converter\/.*\.ts$/.test(filePath)
  }
)

modifiedConverterFilePaths.forEach((modifiedConverterFilePath) => {
  warn(
    `\`${modifiedConverterFilePath}\` が変更されています。不要な変更が加えられないよう注意してください。`
  )
})
