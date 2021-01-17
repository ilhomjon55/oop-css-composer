const { RGB } = require('./RGB')

class CSS {

	_box = null

	_x = 1000
	_y = null

	_defaultOptions = {
		unit: 'px'
	}

	constructor(options = this._defaultOptions) {

		this._box = new Box(options.unit)
	}

	set some(x, y, z) {
		this._y = x
	}

	get box () {

		return this._box
	}
}

class Box {

	_width = 0
	_color = new RGB()
	_unit = null

	constructor(unit) {
		this._unit = unit
	}

	set width (n) {
		this._width = n
	}

	get width () {
		return this._width + this._unit
	}

	set color (colors) {
		this._color.set(colors)
	}

	get color () {
		return this._color
	}
}

module.exports.CSS = CSS
