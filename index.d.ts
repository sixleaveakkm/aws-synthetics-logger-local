/**
 * @function setLogLevel
 * @description This function is not export by SyntheticsLogger, so don't use it in your code
 */
export function setLogLevel( l: 0 | 1 | 2 | 3 ): void

/**
 * @function getLogLevel
 * @description This function is not export by SyntheticsLogger, so don't use it in your code
 */
export function getLogLevel(): 0 | 1 | 2 | 3

export function warn(message: any, ex?: any)
export function log(message: any, ex?: any)
export function info(message: any, ex?: any)
export function error(message: any, ex?: any)
export function debug(message: any, ex?: any)
