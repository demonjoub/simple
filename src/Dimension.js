function Dimension() {
  // default value
  this._width = 500
  this._height = 500
}

Dimension.prototype.setWidth = function (width = this._width) {
  this._width = width
}

Dimension.prototype.getWidth = function () {
  return this._width
}

Dimension.prototype.setHeight = function (height = this._height) {
  this._height = height
}

Dimension.prototype.getHeight = function () {
  return this._height
}

export default Dimension
