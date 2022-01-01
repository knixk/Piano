let blackKeys = document.querySelectorAll(".black-key");
let whiteKeys = document.querySelectorAll(".white-key-gap");


let blackKeysArray = Array.from(blackKeys);
let whiteKeysArray = Array.from(whiteKeys);

let allKeys = blackKeysArray.concat(whiteKeysArray);

let sounds = document.querySelectorAll("#sound")

allKeys.forEach(i => {
    addEventListener("click", (e) => {
        let s = e.target.firstElementChild

        if (s.classList.contains("sound")) {
            s.currentTime = 0;
            s.play();
        }
    })
})
