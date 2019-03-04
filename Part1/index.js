let arr = [];

function play(value) {
    const player = document.getElementById('player');
    const element = document.getElementById(value);
    if(player.innerText === "X") {
        player.innerText = "O";
        element.innerText = "X";
        arr[value] = "X";
    } else {
        player.innerText = "X";
        element.innerText = "O";
        arr[value] = "O";
    }
    console.log(arr)
    
    let sq1 = arr[0]
    let sq2 = arr[1]
    let sq3 = arr[2]
    let sq4 = arr[3]
    let sq5 = arr[4]
    let sq6 = arr[5]
    let sq7 = arr[6]
    let sq8 = arr[7]
    let sq9 = arr[8]

    if(sq1 === sq2 && sq2 === sq3 && sq1) {
        window.alert(`${sq1} is the winner`)
        return
    } else if(sq1 === sq4 && sq4 === sq7 && sq1) {
        window.alert(`${sq1} is the winner`)
        return
    } else if(sq1 === sq5 && sq5 === sq9 && sq1) {
        window.alert(`${sq1} is the winner`)
        return
    } else if(sq2 === sq5 && sq5 === sq8 && sq2) {
        window.alert(`${sq2} is the winner`)
        return
    } else if(sq3 === sq6 && sq6 === sq9 && sq3) {
        window.alert(`${sq3} is the winner`)
        return
    } else if(sq4 === sq5 && sq5 === sq6 && sq4) {
        window.alert(`${sq4} is the winner`)
        return
    } else if(sq7 === sq8 && sq8 === sq9 && sq7) {
        window.alert(`${sq7} is the winner`)
        return
    } else if(sq3 === sq5 && sq5 === sq7 && sq3) {
        window.alert(`${sq3} is the winner`)
        return
    }

    let arrFull = true;
    for(let i = 0; i < 8; i++) {
        if(arr[i] === undefined) {
            arrFull = false;
        }
    }
    if(arrFull === true) {
        window.alert("cats game")
    }
}



