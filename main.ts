input.onButtonPressed(Button.A, function () {
    basic.showNumber(Vanilla)
    basic.pause(200)
    Vanilla += 1
    basic.showString("V")
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(Tie)
    Tie += 1
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Chocolate)
    basic.pause(200)
    Chocolate += 1
    basic.showString("C")
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("V")
    basic.showNumber(Vanilla)
    basic.pause(500)
    basic.showString("C")
    basic.showNumber(Chocolate)
    basic.clearScreen()
})
let Tie = 0
let Chocolate = 0
let Vanilla = 0
Vanilla = 0
Chocolate = 0
