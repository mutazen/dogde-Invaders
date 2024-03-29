// ENEMY OBJECT
function Enemy (top, left, id, cssClass, path, distance) {
  this.width = 60
  this.height = 52
  this.top = top
  this.left = left
  this.id = id
  this.cssClass = cssClass
  this.elem = ''
  this.distance = distance
  this.count = 0
  this.innerCount = 0
  this.path = path
  this.html = ''
  this.shadow = ''

  this.create = function () {
    this.elem = document.createElement('div')
    this.elem.setAttribute('id', this.id)
    this.elem.classList.add('enemy')
    this.elem.classList.add(this.cssClass)
    this.elem.style.top = this.top + 'px'
    this.elem.style.left = this.left + 'px'
    const canvas = document.getElementById('canvas')
    canvas.appendChild(this.elem)
    this.elem = document.getElementById(this.id)
    this.shadow = new Shadow(this.top + this.height * 0.9, this.left, this.width, this.height * 0.4, this.id + 'Shadow', 'shadow')
    this.shadow.create()
  }
}

Enemy.prototype.move = function () {
  switch (this.path[this.count].direction) {
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

  if (this.innerCount >= this.path[this.count].times) {
    this.innerCount = 0
    this.count++
  } else {
    this.innerCount++
  }

  if (this.count >= this.path.length) {
    this.count = 0
  }

  this.elem.style.top = this.top + 'px'
  this.elem.style.left = this.left + 'px'
  this.elem.style.zIndex = this.top + this.height
  this.shadow.top = this.top + this.height * 0.9
  this.shadow.left = this.left
  this.shadow.updatePosition()
}

Enemy.prototype.getDirection = function () {
  return this.path[this.count]
}

Enemy.prototype.getNextPosition = function () {
  const position = {
    top: this.top,
    left: this.left,
    width: this.width,
    height: this.height
  }

  switch (this.path[this.count]) {
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

Enemy.prototype.destroyEnemy = function () {
  this.shadow.destroy()
  const canvas = document.getElementById('canvas')
  canvas.removeChild(this.elem)
}
