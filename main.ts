let Hand = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    Hand = randint(1, 3)
    basic.clearScreen()
    basic.pause(500)
    if (Hand == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . # # #
            # . # # .
            # # # . .
            `)
    } else if (Hand == 2) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . # . # .
            . . # . .
            . # . # .
            `)
        music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.InBackground)
    } else {
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
        music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.InBackground)
    }
})
