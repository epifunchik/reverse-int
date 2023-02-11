module.exports = function reverse (n) {
    nArray = Array.from(Math.abs(n).toString()).reverse().join('')
    return nArray
}
