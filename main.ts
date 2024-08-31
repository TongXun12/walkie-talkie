input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    radio.sendString("go")
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("come")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("help bad")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("good")
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendString("prepare")
})
