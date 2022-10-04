control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_UP, function () {
    gamepad.send(
    gamepad._buttons(GameButton.A, false),
    0,
    0,
    gamepad._dpad(GameDirection.noDirection),
    0,
    0
    )
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    gamepad.send(
    gamepad._buttons(GameButton.A, true),
    0,
    0,
    gamepad._dpad(GameDirection.noDirection),
    0,
    0
    )
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B, EventBusValue.MICROBIT_BUTTON_EVT_UP, function () {
    gamepad.send(
    gamepad._buttons(GameButton.B, false),
    0,
    0,
    gamepad._dpad(GameDirection.noDirection),
    0,
    0
    )
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    gamepad.send(
    gamepad._buttons(GameButton.B, true),
    0,
    0,
    gamepad._dpad(GameDirection.noDirection),
    0,
    0
    )
})
gamepad.startGamepadService()
led.enable(false)
// UP
pins.setPull(DigitalPin.P3, PinPullMode.PullUp)
let p3Press = false
basic.forever(function () {
    serial.writeValue("x", pins.analogReadPin(AnalogPin.P3))
})
// Pin 3 Button Press
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P3) < 100) {
        if (!(p3Press)) {
            p3Press = true
            gamepad.send(
            gamepad._buttons(GameButton.A, true),
            0,
            0,
            gamepad._dpad(GameDirection.noDirection),
            0,
            0
            )
        }
    } else {
        if (p3Press) {
            p3Press = false
            gamepad.send(
            gamepad._buttons(GameButton.A, false),
            0,
            0,
            gamepad._dpad(GameDirection.noDirection),
            0,
            0
            )
        }
    }
})
