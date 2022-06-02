input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    music.playMelody("- - - - - - - - ", 120)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.TShirt)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # # # .
        # . . . #
        . # # # .
        # . . . #
        . # # # .
        `)
    basic.showIcon(IconNames.Duck)
})
basic.forever(function () {
	
})
