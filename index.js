const { CSS } = require('./css')

const css = new CSS()

css.some =

console.log(css)

css.box.width = 200
css.box.color = [200, 0, 100]
css.box.width = 200

console.log(css.box)
// console.log(css.box.width) // 200rem
// console.log(css.box.color) // RGB { R: 200, G: 120, B: 0 }
