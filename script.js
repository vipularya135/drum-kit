window.addEventListener("keydown", (e) => {
    console.log(e);
    let selector = ".key[data-ascii='" + e.keyCode + "']";
    let A = document.querySelector(selector);
    console.log(A);
    let soundname = A.querySelector("span").innerText;
    console.log(soundname);
    let sound = document.createElement("audio");
    sound.setAttribute("src", "./sounds/" + soundname + ".wav");
    sound.play();
});
