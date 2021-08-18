const slideAnimateType = [
  "slide-up",
  "slide-down",
  "flip-up",
  "flip-down",
  "flip-left",
  "flip-right",
]
const flipAnimateType = ["slide-up", "slide-down"]

const slideAnimate = () => slideAnimateType[Math.floor(Math.random() * 7)]
const flipAnimate = () => flipAnimateType[Math.floor(Math.random() * 3)]

export { slideAnimate, flipAnimate }
