function setup() {
    createCanvas(400, 400)
    noFill()
    stroke(0)
  }
  
  function draw() {
    background(0, 180, 255)
    for (let i = 0; i < 10; i += 1) {
        for (let j = 0; j < 10; j += 1) {
            push()
            translate(j * 40, i * 40)
            ellipse(0, 0, 40, 40)
            pop()
        }
    }
  }