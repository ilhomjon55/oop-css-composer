class RGB {

	R = 0
	G = 0
	B = 0

	constructor (r = 0, g = 0, b = 0) {

		this.red = r
		this.green = g
		this.blue = b
	}

	setValue(channel, value) {

		this[channel] = this.isValid(value) ?? this[channel]
	}

	set red (value) {
		this.setValue('R', value)
	}

	set green (value) {
		this.setValue('G', value)
	}

	set blue (value) {
		this.setValue('B', value)
	}

	get red () {
		return this.R
	}

	get green () {
		return this.G
	}

	get blue () {
		return this.B
	}

	isValid (value) {

		return Number.isInteger(value) && value >= 0 && value <= 255 ? value : undefined
	}

	toString() {
		return `rgb(${ this.R }, ${ this.G }, ${ this.B })`
	}

	set([R, G, B]) {
		this.red = R
		this.green = G
		this.blue = B
	}
}

module.exports.RGB = RGB