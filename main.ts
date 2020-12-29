input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    if (RingbitCar.tracking(RingbitCar.TrackingStateType.Tracking_State_2)) {
        RingbitCar.freestyle(25, 0)
        basic.pause(100)
    }
    if (RingbitCar.tracking(RingbitCar.TrackingStateType.Tracking_State_1)) {
        RingbitCar.freestyle(0, 20)
        basic.pause(100)
    }
    RingbitCar.freestyle(1, 3)
    basic.pause(100)
    if (RingbitCar.tracking(RingbitCar.TrackingStateType.Tracking_State_3)) {
        RingbitCar.freestyle(-10, -10)
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # # # .
        # . . . #
        # # # # #
        # . . . #
        . # # # .
        `)
    RingbitCar.brake()
})
basic.showLeds(`
    # . . # .
    # . . # .
    # . . # .
    # # # # .
    . # # # .
    `)
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
RingbitCar.forward()
