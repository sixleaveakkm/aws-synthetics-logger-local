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
exports.debug       = function () { log.debug.apply(log, arguments) }
exports.error       = function () { log.error.apply(log, arguments) }
exports.info        = function () { log.info.apply(log, arguments)  }
exports.log         = function () { log.log.apply(log, arguments)   }
exports.warn        = function () { log.warn.apply(log, arguments)  }
