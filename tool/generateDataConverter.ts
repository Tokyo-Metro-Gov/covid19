import { promises as fs } from 'fs'
import * as path from 'path'
import * as _ from 'lodash'
import * as quicktype from 'quicktype'
import { sync as rimrafSync } from 'rimraf'

const basePath = path.dirname(__dirname)
const inputPath = path.resolve(basePath, 'data')
const outputPath = path.resolve(basePath, 'utils', 'data_converter')
rimrafSync(outputPath)
;(async () => {
  await fs.mkdir(outputPath, { recursive: true })
  const fileNames = await fs.readdir(inputPath)
  for (let index = 0; index < fileNames.length; index++) {
    const sourceFileName = fileNames[index]
    const fileName = path.parse(sourceFileName).name
    const pascalFileName = _.upperFirst(_.camelCase(fileName))
    await quicktype.main({
      lang: 'ts',
      out: path.resolve(outputPath, `convert${pascalFileName}.ts`),
      topLevel: pascalFileName,
      src: [path.resolve(inputPath, sourceFileName)]
    })
  }
})()
