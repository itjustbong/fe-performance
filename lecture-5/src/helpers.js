export function zeroPad(value, len) {
	const str = '0000000000' + value.toString()
	return str.substring(str.length - len)
}