const Q = document.querySelector(".Q");
const W = document.querySelector(".W");
const E = document.querySelector(".E");
const A = document.querySelector(".A");
const S = document.querySelector(".S");
const D = document.querySelector(".D");
const Z = document.querySelector(".Z");
const X = document.querySelector(".X");
const C = document.querySelector(".C");

const Author = document.querySelector(".Author");
const Screan = document.querySelector(".Screan");
let isQKeyPressed = false;

// Keypress events

document.addEventListener("keydown", event => {
    if (event.keyCode === 81) { // "Q" key
      Q.style.boxShadow = "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset";
    var audio = new Audio("Music/Cev_H2.mp3");
    audio.play();
    Screan.innerText = "Heater1";
  }
});
document.addEventListener("keydown", event => {
    if (event.keyCode === 87) { // "W" key
      W.style.boxShadow = "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset";
    var audio = new Audio("Music/Dsc_Oh.mp3");
    audio.play();
    Screan.innerText = "Heater2";
  }
});
document.addEventListener("keydown", event => {
    if (event.keyCode === 69) { // "E" key
      E.style.boxShadow = "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset";
    var audio = new Audio("Music/Heater-1.mp3");
    audio.play();
    Screan.innerText = "Heater3";
  }
});
document.addEventListener("keydown", event => {
    if (event.keyCode === 65) { // "A" key
      A.style.boxShadow = "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset";
    var audio = new Audio("Music/Heater-2.mp3");
    audio.play();
    Screan.innerText = "Heater4";
  }
});
document.addEventListener("keydown", event => {
    if (event.keyCode === 83) { // "S" key
      S.style.boxShadow = "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset";
    var audio = new Audio("Music/Heater-3.mp3");
    audio.play();
    Screan.innerText = "Clap";
  }
});
document.addEventListener("keydown", event => {
    if (event.keyCode === 68) { // "D" key
      D.style.boxShadow = "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset";
    var audio = new Audio("Music/Heater-4_1.mp3");
    audio.play();
    Screan.innerText = "Open HH";
  }
});
document.addEventListener("keydown", event => {
    if (event.keyCode === 90) { // "Z" key
      Z.style.boxShadow = "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset";
    var audio = new Audio("Music/Heater-6.mp3");
    audio.play();
    Screan.innerText = "Kick n' Hat";
  }
});
document.addEventListener("keydown", event => {
    if (event.keyCode === 88) { // "X" key
      X.style.boxShadow = "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset";
    var audio = new Audio("Music/Kick_n_Hat.mp3");
    audio.play();
    Screan.innerText = "Kick";
  }
});
document.addEventListener("keydown", event => {
    if (event.keyCode === 67) { // "C" key
      C.style.boxShadow = "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset";
      Screan.innerText = "Closed HH";
    var audio = new Audio("Music/RP4_KICK_1.mp3");
    audio.play();
    }
});

// Keyup events

document.addEventListener("keyup", event => {
    if (event.keyCode === 81) { // "Q" key
      isQKeyPressed = false;
      Q.style.boxShadow = "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px";
    }
});
document.addEventListener("keyup", event => {
    if (event.keyCode === 87) { // "W" key
      isQKeyPressed = false;
      W.style.boxShadow = "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px";
    }
});
document.addEventListener("keyup", event => {
    if (event.keyCode === 69) { // "E" key
      isQKeyPressed = false;
      E.style.boxShadow = "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px";
    }
});
document.addEventListener("keyup", event => {
    if (event.keyCode === 65) { // "A" key
      isQKeyPressed = false;
      A.style.boxShadow = "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px";
    }
});
document.addEventListener("keyup", event => {
    if (event.keyCode === 83) { // "S" key
      isQKeyPressed = false;
      S.style.boxShadow = "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px";
    }
});
document.addEventListener("keyup", event => {
    if (event.keyCode === 68) { // "D" key
      isQKeyPressed = false;
      D.style.boxShadow = "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px";
    }
});
document.addEventListener("keyup", event => {
    if (event.keyCode === 90) { // "Z" key
      isQKeyPressed = false;
      Z.style.boxShadow = "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px";
    }
});
document.addEventListener("keyup", event => {
    if (event.keyCode === 88) { // "X" key
      isQKeyPressed = false;
      X.style.boxShadow = "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px";
    }
});
document.addEventListener("keyup", event => {
    if (event.keyCode === 67) { // "C" key
      isQKeyPressed = false;
      C.style.boxShadow = "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px";
    }
});


Q.addEventListener("click", () => {
  Q.style.boxShadow = "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset";
  var audio = new Audio("Music/Cev_H2.mp3");
  audio.play();
  Screan.innerText = "Heater1";
  setTimeout(() => {
    Q.style.boxShadow = "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px";
  }, 150); 
});
W.addEventListener("click", () => {
  W.style.boxShadow = "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset";
  var audio = new Audio("Music/Dsc_Oh.mp3");
  audio.play();
  Screan.innerText = "Heater2";
  setTimeout(() => {
    W.style.boxShadow = "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px";
  }, 150); 
});
E.addEventListener("click", () => {
  E.style.boxShadow = "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset";
  var audio = new Audio("Music/Heater-1.mp3");
  audio.play();
  Screan.innerText = "Heater3";
  setTimeout(() => {
    E.style.boxShadow = "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px";
  }, 150); 
});
A.addEventListener("click", () => {
  A.style.boxShadow = "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset";
  var audio = new Audio("Music/Heater-2.mp3");
  audio.play();
  Screan.innerText = "Heater4";
  setTimeout(() => {
    A.style.boxShadow = "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px";
  }, 150); 
});
S.addEventListener("click", () => {
  S.style.boxShadow = "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset";
  var audio = new Audio("Music/Heater-3.mp3");
  audio.play();
  Screan.innerText = "Clap";
  setTimeout(() => {
    S.style.boxShadow = "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px";
  }, 150); 
});
D.addEventListener("click", () => {
  D.style.boxShadow = "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset";
  var audio = new Audio("Music/Heater-4_1.mp3");
  audio.play();
  Screan.innerText = "Open HH";
  setTimeout(() => {
    D.style.boxShadow = "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px";
  }, 150); 
});
Z.addEventListener("click", () => {
  Z.style.boxShadow = "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset";
  var audio = new Audio("Music/Heater-6.mp3");
  audio.play();
  Screan.innerText = "Kick n' Hat";
  setTimeout(() => {
    Z.style.boxShadow = "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px";
  }, 150); 
});
X.addEventListener("click", () => {
  X.style.boxShadow = "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset";
  var audio = new Audio("Music/King_n_Hat.mp3");
  audio.play();
  Screan.innerText = "Kick";
  setTimeout(() => {
    X.style.boxShadow = "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px";
  }, 150); 
});
C.addEventListener("click", () => {
  C.style.boxShadow = "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset";
  var audio = new Audio("Music/RP4_KICK_1.mp3");
  audio.play();
  Screan.innerText = "Closed HH";
  setTimeout(() => {
    C.style.boxShadow = "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px";
  }, 150); 
});

var Music = [
  {
    song : "Music/Cev_H2.mp3",
    name : "Heater1"
  },
  {
    song : "Music/Dsc_Oh.mp3",
    name : "Heater2"
  },
  {
    song : "Music/Heater-1.mp3",
    name : "Heater3"
  },
  {
    song : "Music/Heater-2.mp3",
    name : "Heater4"
  },
  {
    song : "Music/Heater-3.mp3",
    name : "Clap"
  },
  {
    song : "Music/Heater-4_1.mp3",
    name : "Open HH"
  },
  {
    song : "Music/Heater-6.mp3",
    name : "Kick n' Hat"
  },
  {
    song : "Music/King_n_Hat.mp3",
    name : "Kick"
  },
  {
    song : "Music/RP4_KICK_1.mp3",
    name : "Closed HH"
  }
]
