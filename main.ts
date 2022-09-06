input.onButtonPressed(Button.A, function () {
    basic.showNumber(Vanilla)
    basic.pause(100)
    Vanilla += 1
    basic.showString("" + (Vanilla))
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Chocolate)
    basic.pause(1000)
    Chocolate += 1
    basic.showNumber(Chocolate)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("" + (Vanilla))
    basic.showNumber(Vanilla)
    basic.showString("" + (Chocolate))
    basic.showNumber(Chocolate)
})
let Chocolate = 0
let Vanilla = 0
Vanilla = 0
Chocolate = 0
