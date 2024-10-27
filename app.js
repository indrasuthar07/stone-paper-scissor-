let userscore =0;
let compscore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user");
const compscorepara = document.querySelector("#comp");

const randcompchoice =() => {
const options =["rock","paper","scissors"];
const random = Math.floor(Math.random()*3);
return options[random];
};

const drawGame = ()=>{
    msg.innerText ="Draw ho gya, Fir se khel Ch*tiye";
    msg.style.backgroundColor = "#081b31";
};
const showwinner = (userwin, userchoice, compchoice) =>{
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
       msg.innerText ="Jeet gya Bh*sdivala";
       msg.style.backgroundColor = "green";
    }else{
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText ="Hug diya Madarch*d";
        msg.style.backgroundColor = "red";
    }
};
 const playGame = (userchoice)=> {
    console.log("user choice =", userchoice);
    const compchoice = randcompchoice();
    console.log("comp choice =", compchoice);

    if (userchoice === compchoice) {
        drawGame();
    }
    else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userwin = compchoice === "scissors" ? false : true;
        } else {
            userwin = compchoice === "rock" ? false : true;
        }
        showwinner(userwin, userchoice, compchoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
    playGame(userchoice);
});
});