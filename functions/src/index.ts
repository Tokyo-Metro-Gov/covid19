import * as functions from 'firebase-functions'
import { imageData, dummyData } from './images'

const allowedHosts = [
  /^https:\/\/stopcovid19\.metro\.tokyo\.lg\.jp/, // production
  /^https:\/\/stg-covid19-tokyo\.netlify\.app/, // staging
  /^https:\/\/dev-covid19-tokyo\.netlify\.app/, // development
  /^https:\/\/deploy-preview-\d+--stopcovid19\.metro\.tokyo\.lg\.jp/, // production preview
  /^https:\/\/deploy-preview-\d+--stg-covid19-tokyo\.netlify\.app/, // staging preview
  /^https:\/\/deploy-preview-\d+--dev-covid19-tokyo\.netlify\.app/, // development preview
]

export const gMark = functions.https.onRequest((req, res) => {
  const referer = req.headers.referer
  
  let statusCode, data
  if (referer && allowedHosts.some((host) => referer.match(host))) {
    statusCode = 200
    data = imageData
  } else {
    statusCode = 403
    data = dummyData
  }
  
  const contentType = data.slice(data.indexOf(':') + 1, data.indexOf(';'))
  const body = data.replace(/^data:\w+\/\w+;base64,/, '')

  res.set('Content-Type', contentType)
  res.status(statusCode).send(Buffer.from(body, 'base64'))
})
