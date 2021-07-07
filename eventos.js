let qntClicks = 0;

function clicarNoBotão() {
    qntClicks++;
    console.log(qntClicks)
}

function textKey(event) {
    console.log(event)
    console.log(event.key)
}

function textChange(event) {
    console.log(event)
    console.log(event.target.value)
}