import { promises as fs } from 'fs'
import { camelCase, upperFirst } from 'lodash'
// eslint-disable-next-line import/order
import * as path from 'path'
import * as quicktype from 'quicktype'
import { sync as rimrafSync } from 'rimraf'

const basePath = path.dirname(__dirname)

const inputPath = path.resolve(basePath, 'data')
const outputPath = path.resolve(
  basePath,
  'libraries',
  'auto_generated',
  'data_converter'
)

// ディレクトリ libraries/auto_generated/data_converter を削除する
rimrafSync(outputPath)
;(async () => {
  // ディレクトリ libraries/auto_generated/data_converter を作成する
  await fs.mkdir(outputPath, { recursive: true })
  // ディレクトリ data 内のファイル名の配列
  const dataFileNames = await fs.readdir(inputPath)

  for (let index = 0; index < dataFileNames.length; index++) {
    const dataFileName = dataFileNames[index]
    const dataFileBaseName = path.parse(dataFileName).name
    const pascalFileName = upperFirst(camelCase(dataFileBaseName))

    const converterFilePath = path.resolve(
      outputPath,
      `convert${pascalFileName}.ts`
    )
    const dataFilePath = path.resolve(inputPath, dataFileName)

    await quicktype.main({
      lang: 'ts',
      topLevel: pascalFileName,
      out: converterFilePath,
      src: [dataFilePath],
      rendererOptions: {
        'nice-property-names': 'true',
        'explicit-unions': 'true',
      },
    })
  }
})()
