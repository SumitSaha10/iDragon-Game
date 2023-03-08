score = 0;
cross = true;

audio = new Audio("music.mp3")
audiogo = new Audio("gameOver.wav")
setTimeout(() => {
    audio.play()
}, 1000);
document.onkeydown = function(e) {
    dino = document.querySelector(".dino")
    dinoX = parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"))
    dinoX1 = parseInt(window.getComputedStyle(dino,null).getPropertyValue("right"))
    console.log(e.key)
    if(e.key==="ArrowUp"){
        dino.classList.add("animateDino");
        setTimeout(() => {
            dino.classList.remove("animateDino")
        }, 700);
    }
    if(e.key==="ArrowRight" && dinoX1>0){
        dino.style.left = dinoX + 112 + "px";
    }
    if(e.key==="ArrowLeft" && dinoX>=17){
        dino.style.left = dinoX - 112 + "px";
    }
}

setInterval(() => {
    dino = document.querySelector(".dino")
    obstacle = document.querySelector(".obstacle")
    gameOver = document.querySelector(".gameover")
    dx = parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"))
    dy = parseInt(window.getComputedStyle(dino,null).getPropertyValue("top"))

    ox = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue("left"))
    oy = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue("top"))
    offSetX = Math.abs(dx-ox)
    offSetY = Math.abs(dy-oy)
    if (offSetX<73 & offSetY<73) {
        gameOver.innerText = "Game Over";
        obstacle.classList.remove("obstacleAni")
        audiogo.play()
        setTimeout(() => {
            audiogo.pause()
            audio.pause()
        }, 1000);
       
        
    }
    else if(offSetX<145 & cross){
        score++;
        updateScore(score)
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue("animation-duration"))
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + "s";
        }, 500);
    }
}, 10);

function updateScore(score) {
    scoreGame = document.querySelector(".score")
    scoreGame.innerHTML = "Your Score " + score
}