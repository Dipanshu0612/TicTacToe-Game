let turn="X";
let player=1;
let counter=0;
let gameover=false;
let boxsq=document.getElementsByClassName("gamesq")
let gridbut=document.getElementsByClassName("btngrid");
let gamebut=document.getElementsByClassName("btngame");
let player1=document.getElementsByClassName("Score1");
let player2=document.getElementsByClassName("Score2");
let wc1=0;
let wc2=0;
let gamemusic=new Audio("gamemusic.mp3");
let clickmusic=new Audio("click.wav");
let winmusic=new Audio("win.mp3");
let cmon=true;

gamemusic.play();
gamemusic.loop=true;

const remcol=()=>{
    Array.from(boxsq).forEach(e=>{
        e.classList.remove("won");
    })
}

const changePlayer=()=>{
    return player===1?2:1;
}

const turnChange=()=>{
    return turn==="X"?"O":"X";
}

const checkWin=()=>{
    let text=document.getElementsByClassName('gamesqtext')
    let win=[
        [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
    ];
    win.forEach(e=>{
        if((text[e[0]].innerHTML===text[e[1]].innerHTML) && (text[e[1]].innerHTML===text[e[2]].innerHTML) && (text[e[0]].innerHTML!=="")){
            document.getElementsByClassName("info")[0].innerHTML="Player "+player+" has won!!";
            boxsq[e[0]].classList.add("won");
            boxsq[e[1]].classList.add("won");
            boxsq[e[2]].classList.add("won");
            if (cmon){
                winmusic.play();
            }
            if(player==1){
                wc1+=1;
                player1[0].innerHTML=wc1;
            }
            if(player==2){
                wc2+=1;
                player2[0].innerHTML=wc2;
            }
            gameover=true;
        }
    })

}

Array.from(boxsq).forEach(box =>{
    let text=box.querySelector(".gamesqtext");
    box.addEventListener('click',()=>{
        if(cmon){
            clickmusic.play();
        }
        if (text.innerHTML==""){
            counter+=1;
            text.innerHTML=turn;
            turn=turnChange();
            checkWin();
            if(!gameover){
                player=changePlayer();
                document.getElementsByClassName("info")[0].innerHTML="Turn for Player "+player;
            }
            if(counter===9){
                document.getElementsByClassName("info")[0].innerHTML="Game TIED!!";
                
            }
        }
        
    })
})

gridbut[0].addEventListener('click',()=>{
    let texts=document.querySelectorAll(".gamesqtext");
    Array.from(texts).forEach(e =>{
        e.innerHTML="";
    })
    document.getElementsByClassName("info")[0].innerHTML="Turn for Player 1";
    turn="X"
    counter=0;
    player=1;
    gameover=false;
    remcol();
    
})

gamebut[0].addEventListener('click',()=>{
    let texts=document.querySelectorAll(".gamesqtext");
    Array.from(texts).forEach(e =>{
        e.innerHTML="";
    })
    document.getElementsByClassName("info")[0].innerHTML="Turn for Player 1";
    player1[0].innerHTML=0;
    player2[0].innerHTML=0;
    turn="X"
    gameover=false;
    counter=0;
    wc1,wc2=0,0;
    remcol();
    
})


let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('navbar a');
window.onscroll = () =>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop -90;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>=offset && top<offset+height){
            navLinks.forEach(link=>{
                link.classList.remove('active');
                document.querySelector('navbar a[href*=' + id + ']').classList.add('active');

            });
        };
    });
};


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
function myfun(){
    alert("Thank you for the message.")
}

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

let gamemusicbtn=document.getElementsByClassName('gamemusic');
let clickmusicbtn=document.getElementsByClassName('clickmusic');
let cnt1=1;
let cnt2=0;

gamemusicbtn[0].addEventListener("click",()=>{
    cnt1+=1;
    if(cnt1%2===0){
        gamemusicbtn[0].innerHTML="ON"
        gamemusic.play();
        gamemusicbtn[0].classList.remove('red');
    }
    else{
        gamemusic.pause();
        gamemusicbtn[0].innerHTML="OFF"
        gamemusicbtn[0].classList.add('red');

    }
})
clickmusicbtn[0].addEventListener("click",()=>{
    cnt2+=1;
    if(cnt2%2===0){
        cmon=true;
        clickmusicbtn[0].innerHTML="ON"
        clickmusicbtn[0].classList.remove('red');
    }
    else{
        cmon=false;
        clickmusicbtn[0].innerHTML="OFF"
        clickmusicbtn[0].classList.add('red');

    }
})

function myfun(){
    console.log("Thank you for your message.")
}


ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.line1, .mainline, .line3',{origin:'top',interval:100});
ScrollReveal().reveal('.btn',{origin:'bottom',delay:200,interval:100});
ScrollReveal().reveal('.gameCont,.contact form',{origin:'left'});
ScrollReveal().reveal('.gameinfo,.contact .heading',{origin:'right'});
ScrollReveal().reveal('.social a',{origin:'left' ,interval: 100});
