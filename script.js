const playButton = document.getElementById("play-button")
const backwardButton = document.getElementById("backward-button")
const forwardButton = document.getElementById("forward-button")
const chapterLabel = document.getElementById("chapter")
const track = document.getElementById("track")
const chapterAmount = 10
let playing = false
let chapter = 1

playButton.addEventListener("click", function(){
    if(playing){
        track.pause()
        playButton.classList.remove("bi-pause-circle-fill")
        playButton.classList.add("bi-play-circle-fill")

    } else {
        playButton.classList.remove("bi-play-circle-fill")
        playButton.classList.add("bi-pause-circle-fill")
        track.play()
        
    }
    playing = !playing
})

backwardButton.addEventListener("click", function(){
    if(chapter>1){
        chapter--
        chapterLabel.innerText = "Capítulo "+chapter
        track.src = "./books/dom-casmurro/"+chapter+".mp3"
        track.play()
    }
})

forwardButton.addEventListener("click", function(){
    if(chapter<10){
        chapter++
        chapterLabel.innerText = "Capítulo "+chapter
        track.src = "./books/dom-casmurro/"+chapter+".mp3"
        track.play()
    }
})