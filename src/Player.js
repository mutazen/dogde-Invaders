// PLAYER OBJECT
function Player (top, left, elem) {
  this.width = 31
  this.height = 61
  this.top = top
  this.left = left
  this.elem = elem
  this.distance = 6
  this.direction = 0
  this.orientation = 0
  this.startMoving = 0
  this.lifes = 3
  this.widthOfSpriteSheet = 150
  this.widthOfEachSprite = 48
  this.spriteHeight = 7
  this.position = 7
  this.startedPositionSheetWidth = 7
  this.startedPositionSheetHeight = 7
  this.shadow = new Shadow(this.top + this.height * 0.9, this.left - 2, this.width + 8, this.height * 0.2, 'playerShadow', 'shadow')
  this.shadow.create()
  this.updatePosition()
}

Player.prototype.updatePosition = function () {
  this.elem.style.top = this.top + 'px'
  this.elem.style.left = this.left + 'px'
  this.shadow.top = this.top + this.height * 0.9
  this.shadow.left = this.left - 2
  this.shadow.updatePosition()
}

Player.prototype.setDirection = function (value) {
  switch (value) {
    case 'ArrowUp':
      this.direction = 1
      break
    case 'ArrowRight':
      this.direction = 2
      break
    case 'ArrowDown':
      this.direction = 3
      break
    case 'ArrowLeft':
      this.direction = 4
      break
  }
}

Player.prototype.changeOrientation = function () {
  switch (this.orientation) {
    case 1:
      this.spriteHeight = this.startedPositionSheetHeight + ((10 + 62) * 3)
      break
    case 2:
      this.spriteHeight = this.startedPositionSheetHeight + ((10 + 62) * 2)
      break
    case 3:
      this.spriteHeight = this.startedPositionSheetHeight
      break
    case 4:
      this.spriteHeight = this.startedPositionSheetHeight + (10 + 62)
      break
  }
}

// Player move
Player.prototype.move = function () {

  switch (this.direction) {
    case 1:
      this.top -= this.distance
      break
    case 2:
      this.left += this.distance
      break
    case 3:
      this.top += this.distance
      break
    case 4:
      this.left -= this.distance
      break
  }

  this.orientation = this.direction
  this.updatePosition()
  this.changeOrientation()
  this.changeAnimation()
  this.direction = 0
}

Player.prototype.changeAnimation = function () {
  if (this.position < this.widthOfSpriteSheet) {
    this.position += this.widthOfEachSprite
  } else {
    this.position = this.startedPositionSheetWidth
  }
  this.elem.style.backgroundPosition = `-${this.position}px -${this.spriteHeight}px`

  this.elem.style.zIndex = this.top + this.height
}

Player.prototype.getNextPosition = function () {
  const position = {
    top: this.top,
    left: this.left,
    width: this.width,
    height: this.height
  }

  switch (this.direction) {
    case 1:
      position.top -= this.distance
      break
    case 2:
      position.left += this.distance
      break
    case 3:
      position.top += this.distance
      break
    case 4:
      position.left -= this.distance
      break
  }
  return position
}

Player.prototype.destroyPlayer = function () {
  const canvas = document.getElementById('canvas')
  canvas.removeChild(this.elem)
}
