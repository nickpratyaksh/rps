function ai(){
    randomGen = Math.random()*3
    let aiVal
    if (randomGen < 1)
        aiVal = 0
    else if (randomGen >1 && randomGen < 2)
        aiVal = 1
    else
        aiVal = 2
    return aiVal
}

document.getElementById('rock').onclick = () => {
    let genVal = ai()
    if (genVal == 0){
        document.getElementById('output').innerText = "Same"
        console.log(genVal)
    }
    else if (genVal == 1){
        document.getElementById('output').innerText = "You Lose :("
        console.log(genVal)
    }
    else if (genVal == 2){
        document.getElementById('output').innerText = "You Win!"
        console.log(genVal)
    }
}

document.getElementById('paper').onclick = () => {
    let genVal = ai()
    if (genVal == 0){
        document.getElementById('output').innerText = "You Win!"
        console.log(genVal)
    }
    else if (genVal == 1){
        document.getElementById('output').innerText = "Same"
        console.log(genVal)
    }
    else if (genVal == 2){
        document.getElementById('output').innerText = "You Lose :("
        console.log(genVal)
    }
}

document.getElementById('scissors').onclick = () => {
    let genVal = ai()
    if (genVal == 0){
        document.getElementById('output').innerText = "You Lose :("
        console.log(genVal)
    }
    else if (genVal == 1){
        document.getElementById('output').innerText = "You Win!"
        console.log(genVal)
    }
    else if (genVal == 2){
        document.getElementById('output').innerText = "Same"
        console.log(genVal)
    }
}
