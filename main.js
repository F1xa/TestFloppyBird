const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d');

const map = {
  width: canvas.offsetWidth,
  height: canvas.offsetHeight
}


function render() {
  ctx.fillStyle = 'rgb(144, 238, 164)'
  ctx.strokeStyle = "rgb(144, 238, 164)"
  ctx.beginPath()
  ctx.arc(38, 37, 35, 0, Math.PI * 2)
  ctx.stroke()
  ctx.fill()
  
}



