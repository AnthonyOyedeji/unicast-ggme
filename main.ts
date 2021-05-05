let received = false
let opponent_hand = 0
let selected = false
let my_hand = 0
radio.onReceivedNumber(function (receivedNumber) {
    received = true
    opponent_hand = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    selected = true
    radio.sendNumber(my_hand)
})
basic.forever(function () {
    if (selected == (true && received == true)) {
        received = false
        selected = false
        if (opponent_hand == my_hand) {
            basic.showIcon(IconNames.Surprised)
        } else if (my_hand == 0 && opponent_hand == 1) {
            basic.showIcon(IconNames.Happy)
        } else if (my_hand == 0 && opponent_hand == 2) {
            basic.showIcon(IconNames.Sad)
        } else if (0 == 0) {
        	
        } else {
        	
        }
    }
})
