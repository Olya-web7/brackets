module.exports = function check(str, bracketsConfig) {
	let pairs = []
	let result = undefined
	for (let i = 0; i < bracketsConfig.length; i++) {
		pairs[i] = bracketsConfig[i].join('')
	}

	for (let pair of pairs) {
		if (result === undefined) {
			result = str.split(pair).join('')
		} else {
			result = result.split(pair).join('')
		}
	}
	if (str === '') return true
	if (str === result) return false
	if (str !== result) return check(result, bracketsConfig)
}