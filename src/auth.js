// @ts-check

const { signJWT } = require('./jwt')

/**
 * @param {string} userId
 */
async function getAccessTokenForUserId(userId) {
  return signJWT(userId)
}

module.exports = {
  getAccessTokenForUserId,
}
