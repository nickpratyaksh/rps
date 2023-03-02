function rpsGen(){
    randomGen = Math.random()*3
    let botVal
    if (randomGen < 1)
        botVal = 'rock'
    else if (randomGen >1 && randomGen < 2)
        botVal = 'paper'
    else
        botVal = 'scissors'
    return botVal
}

document.getElementById('rock').onclick = () => {
    let genVal = rpsGen()
    if (genVal == 'rock'){
        document.getElementById('output').innerText = "Same"
        console.log(genVal)
    }
    else if (genVal == 'paper'){
        document.getElementById('output').innerText = "You Lose :("
        console.log(genVal)
    }
    else if (genVal == 'scissors'){
        document.getElementById('output').innerText = "You Win!"
        console.log(genVal)
    }
}

document.getElementById('paper').onclick = () => {
    let genVal = rpsGen()
    if (genVal == 'rock'){
        document.getElementById('output').innerText = "You Win!"
        console.log(genVal)
    }
    else if (genVal == 'paper'){
        document.getElementById('output').innerText = "Same"
        console.log(genVal)
    }
    else if (genVal == 'scissors'){
        document.getElementById('output').innerText = "You Lose :("
        console.log(genVal)
    }
}

document.getElementById('scissors').onclick = () => {
    let genVal = rpsGen()
    if (genVal == 'rock'){
        document.getElementById('output').innerText = "You Lose :("
        console.log(genVal)
    }
    else if (genVal == 'paper'){
        document.getElementById('output').innerText = "You Win!"
        console.log(genVal)
    }
    else if (genVal == 'scissors'){
        document.getElementById('output').innerText = "Same"
        console.log(genVal)
    }
}
