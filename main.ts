let itération_avant_prochaine_comète = 0
let ligne_inversée = 0
basic.forever(function () {
    if (true) {
        led.plot(randint(0, 4), 0)
        itération_avant_prochaine_comète = 2
    }
    itération_avant_prochaine_comète += -1
    basic.pause(500)
    for (let colonne = 0; colonne <= 4; colonne++) {
        for (let ligne = 0; ligne <= 4; ligne++) {
            ligne_inversée = 0 - ligne
            if (led.point(colonne, ligne_inversée) && led.pointBrightness(colonne, ligne_inversée) == 0) {
                led.plotBrightness(colonne, ligne_inversée, 170)
                led.plotBrightness(colonne, ligne_inversée, 255)
            } else if (led.pointBrightness(0, 0) == 0) {
            	
            } else {
            	
            }
        }
    }
})
