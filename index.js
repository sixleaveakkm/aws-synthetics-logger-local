const log = require('loglevel')

let logLevel = 1;


function setLogLevel(l) {
  if (typeof l === "number" && (l === 0 || l === 1 || l === 2 || l === 3)) {
    logLevel = l
    log.setLevel(l + 1)
    return
  }
  throw new Error("log level must be 0 | 1 | 2 | 3")
}

function getLogLevel() {
  return logLevel
}

exports.setLogLevel = setLogLevel
exports.getLogLevel = getLogLevel
exports.debug       = log.debug
exports.error       = log.error
exports.info        = log.info
exports.log         = log.log
exports.warn        = log.warn

