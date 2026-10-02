const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const bird = document.getElementById('bird');
console.log(bird);
let position = 100;
isJumping = false;
async function tick(){

    document.addEventListener("keydown", function(event) {
        if (event.code === "ArrowUp" || event.code === "Space") {
            if (isJumping) return;
            console.log("Jump!");
            bird.style.top = `${position -= 100}px`;
            isJumping = true;
        }

    });
    
    bird.style.top = `${position += 20}px`;

    await delay(100);
    isJumping = false;
    console.log("tick");
    tick();
}

tick();