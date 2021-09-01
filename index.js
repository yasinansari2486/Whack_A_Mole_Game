window.addEventListener("load", () => {
    document.querySelector(".start").addEventListener("click", () => {
      Start();
    });
});

document.querySelector(".playagain").addEventListener("click", () => {
    location.reload();
  });



const Start = ()=>{
   
    
    const grounds = document.querySelectorAll(".ground");
    const length = grounds.length; 

    const score = document.querySelector("#score > span");
    let count = 0;

    const life = document.querySelector("#life > span");
    let countdown = 5;

    const gameover = document.querySelector("#game-over");


    grounds.forEach((ground)=>{
        ground.addEventListener("click",()=>{
            if(ground.classList.contains("rise")){
                count++;
                score.innerHTML = count;
            }
            else{
                countdown--;
                life.innerHTML = countdown;
            }


            if(countdown == 0){
                clearInterval(interval);
                gameover.classList.remove("invisible");
                document.body.style.backgroundColor = "rgba(182, 174, 174, 0.548)";
            }
        });
    });



    var interval = setInterval(() => {
        var random = Math.floor(Math.random() * length)
        grounds.forEach((ground)=>{
            ground.classList.remove("rise");
        })

        grounds[random].classList.add("rise");
    }, 1150);

    
}

