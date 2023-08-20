var treasure = Math.floor(Math.random() * 8)
var bomb = Math.floor(Math.random() * 8)
var gamestatus = true

while (treasure == bomb) {
    bomb = Math.floor(Math.random() * 8)
}
const changeToEmoji = (number) => {
    if (number == treasure && gamestatus) {
        document.getElementById(number).innerHTML = "🪙"
        alert ("You Win!")
        gamestatus = false
    } else if (number == bomb && gamestatus) {
        document.getElementById(number).innerHTML = "🏴‍☠️"
        alert("Game Over")
        gamestatus = false
    } else if (gamestatus) {
        document.getElementById(number).innerHTML = "☠️"
        
        
    }
}

