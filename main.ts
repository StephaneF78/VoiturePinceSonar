let VarPosServo1pince = 0
basic.forever(function () {
    magicbit.Servo(magicbit.Servos.S1, VarPosServo1pince)
    basic.showNumber(magicbit.Ultrasonic(DigitalPin.P0))
    basic.pause(200)
})
