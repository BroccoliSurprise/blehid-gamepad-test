/**
 * Konklusjon:
 * 
 * DPAD-funksjon er ikke innafor
 */
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_UP, function () {
    aPress = false
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    aPress = true
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B, EventBusValue.MICROBIT_BUTTON_EVT_UP, function () {
    bPress = false
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    bPress = true
})
let bPress = false
let aPress = false
gamepad.startGamepadService()
led.enable(false)
aPress = false
bPress = false
let p3UPPress = false
let p4RIGHTPress = false
let p6DOWNPress = false
let p7LEFTPress = false
// Sjekk D-Pad
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P3) == 1) {
        p3UPPress = true
    } else {
        p3UPPress = false
    }
    if (pins.digitalReadPin(DigitalPin.P4) == 1) {
        p4RIGHTPress = true
    } else {
        p4RIGHTPress = false
    }
    if (pins.digitalReadPin(DigitalPin.P6) == 1) {
        p6DOWNPress = true
    } else {
        p6DOWNPress = false
    }
    if (pins.digitalReadPin(DigitalPin.P7) == 1) {
        p7LEFTPress = true
    } else {
        p7LEFTPress = false
    }
})
basic.forever(function () {
    serial.writeValue("3", pins.digitalReadPin(DigitalPin.P3))
    serial.writeValue("4", pins.digitalReadPin(DigitalPin.P4))
    serial.writeValue("6", pins.digitalReadPin(DigitalPin.P6))
    serial.writeValue("7", pins.digitalReadPin(DigitalPin.P7))
    serial.writeValue("8", pins.digitalReadPin(DigitalPin.P8))
})
