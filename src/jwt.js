const jwt = require('jsonwebtoken')

const { SERVER_SECRET } = process.env

async function signJWT(value) {
  return new Promise((resolve, reject) => {
    // TODO: complete here
    jwt.sign(value, SERVER_SECRET, (err, encoded) => {
      if (err) {
        reject(err)
      } else {
        resolve(encoded)
      }
    })
  })
}

async function verifyJWT(token) {
  return new Promise((resolve, reject) => {
    // TODO: complete here
    jwt.verify(token, SERVER_SECRET, (err, value) => {
      if (err) {
        reject(err)
      } else {
        resolve(value)
      }
    })
  })
}

module.exports = {
  signJWT,
  verifyJWT,
}
