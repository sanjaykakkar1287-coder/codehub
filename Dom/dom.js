let newgame1 = document.querySelector(".newg");
let dice1 = document.querySelector(".diceimg");
let roll = document.querySelector(".newg1");
let hold = document.querySelector(".newg2");
let leftpart = document.querySelector(".box1");
let rightpart = document.querySelector(".box2");
let sp1 = document.querySelector(".ps1");
let sp2 = document.querySelector(".ps2");
let mainscr = document.querySelector(".msr1");
let mainscr1 = document.querySelector(".msr2");
let win = document.querySelector(".mai");
let tex=document.querySelector(".hide");
let he=document.querySelector(".hh");
let star=document.querySelector(".start")
let activeplayer = 1;
let sp11 = 0, sp12 = 0 , scrp1=0 , scrp2=0;
let player1 = false, player2 = false;

const texts = ["Welcome to our game", "Play and Enjoy", "Give us Feedback", "Thanks CodeHubNexus"];
let index=0;
setInterval(() => {
  index = (index + 1) % texts.length;
 //ex.style.opacity = 0;
  tex.classList.remove("slide-in");
  tex.classList.add("slide-out");

  setTimeout(() => {
    tex.textContent = texts[index];
   
    tex.classList.remove("slide-out");
    tex.classList.add("slide-in");
  }, 500);
}, 2500);





// 🎮 Player 2 select button
function res() {
  sp1.textContent = 0;
  sp2.textContent = 0;
  mainscr.textContent = 0;
  mainscr1.textContent = 0;
  leftpart.classList.remove("active");
  rightpart.classList.add("active");
  activeplayer = 2;
  dice1.classList.add("hid");
  win.classList.remove("mai");
  he.classList.add("hh");
  star.classList.add("start");
  player2 = true;
  player1 = false;
  
}

// 🆕 New game button
function newfun() {
  sp1.textContent = 0;
  sp2.textContent = 0;
  mainscr.textContent = 0;
  mainscr1.textContent = 0;
  leftpart.classList.add("active");
  rightpart.classList.remove("active");
  activeplayer = 1;
  dice1.classList.add("hid");
  win.classList.remove("mai");
  player1 = true;
  player2 = false;
  he.classList.add("hh");
  star.classList.add("start");
  

}

newfun();

let rolldice = () => {
  dice1.classList.remove("hid");
  const dice = Math.trunc(Math.random() * 6) + 1;
  dice1.src = `./dice/dice-${dice}.png`;

  if (activeplayer == 1) {
    let current1 = Number(mainscr.textContent);
    current1 += dice;
    mainscr.textContent = current1;

    if (dice == 1) {
      sp11 = Number(sp1.textContent);
      sp11 += current1;
      sp1.textContent = sp11;
      scrp1=Number(mainscr.textContent);
      
      
      leftpart.classList.toggle("active");
      rightpart.classList.toggle("active");
      activeplayer = 2;
      player1 = true;
      console.log("total score player1"+current1);
     
    
      
     
    }
  } 
  else if (activeplayer == 2) {
   
    let current2 = Number(mainscr1.textContent);
    current2 += dice;
    mainscr1.textContent = current2;

    if (dice == 1) {
      sp12 = Number(sp2.textContent);
      sp12 += current2;
      sp2.textContent = sp12;
      scrp2=Number(mainscr1.textContent);
      
      leftpart.classList.toggle("active");
      rightpart.classList.toggle("active");
      activeplayer = 1;
      player2 = true;
      console.log("total score player1"+current2);
    

}

    }
  // ✅ winner check hamesha har turn ke baad
   if (player1 && player2)
     {
      
    if (scrp1>scrp2){
      
      win.classList.add("mai");
       he.classList.remove("hh");
      he.textContent=(`Player 1 is winner`);
      star.classList.remove("start");
      
    } 
     if (scrp1 <scrp2 )
      {
      console.log("Player 2 is winner");
      
       he.classList.remove("hh");
      
     he.textContent=(`Player 2 is winner`);
      win.classList.add("mai");
       star.classList.remove("start");
 
      
    }
    if (scrp1 == scrp2 )
 {
 console.log("Player 2 is winner");
 
  he.classList.remove("hh");
 
he.textContent=(`Its Tie`);
 win.classList.add("mai");
  star.classList.remove("start");
 
 
    }
  }
};
let ref=()=>{
location.reload(true);
}
 
   
// 🧭 Buttons
newgame1.addEventListener("click", newfun);
roll.addEventListener("click", rolldice);
hold.addEventListener("click", res);
star.addEventListener("click" , ref)
