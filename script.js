document.querySelector("#buttonYes").addEventListener("click", clickHandler);
document.querySelector("#buttonNo").addEventListener("click",noJoke);


function mouseOverYes() {
    document.querySelector("#buttonYes").innerText = "Why Not?";
    document.querySelector("#buttonYes").style.fontStyle = "italic";
    document.querySelector("#buttonYes").style.color = randomColor();

}

function mouseOutYes() {
    document.querySelector("#buttonYes").innerText = "Next Joke";
    document.querySelector("#buttonYes").style.fontStyle = "normal";
    document.querySelector("#buttonYes").style.color = "black";


}

function mouseOverNo() {
    document.querySelector("#buttonNo").innerText = "Naah!";
    document.querySelector("#buttonNo").style.fontStyle = "italic";
    document.querySelector("#buttonNo").style.color = randomColor();


}

function mouseOutNo() {
    document.querySelector("#buttonNo").innerText = "No";
    document.querySelector("#buttonNo").style.fontStyle = "normal";
    document.querySelector("#buttonNo").style.color = "black";


}


function mouseOverbody() {
    document.querySelector("h1").style.color = randomColor();

}






var jokePara = document.querySelector("p");



function noJoke() {
    jokePara.innerText = "Thats Sad!!! 😶"

    document.querySelector("#container").style.backgroundColor = "black";
    document.querySelector("#body").style.backgroundColor = "black";
    document.querySelector("p").style.color = randomColor();
    document.querySelector("p").style.fontStyle = "italic";



}

function clickHandler() {
    
    let joke = "";

    //Fetch the joke from joek API
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.api-ninjas.com/v1/jokes?limit=1');
    xhr.setRequestHeader('X-Api-Key', 'vIyD/cfKd9S3G10SzjcvWA==EnpSRaNP4ZlZRP8S'); //Add headers
    xhr.send();

    jokePara.innerText = "Fetching a Joke 🫠"

    // add a loading animation here.

    xhr.onload = function() {
        if(xhr.status === 200) {
            const result = JSON.parse(xhr.responseText);
            joke = result[0].joke;            
            // console.log(joke);


            //Next Joke
            // jokePara.style.color = randomColor();
            jokePara.innerText = joke;
        }
    };

    document.querySelector("#container").style.backgroundColor = randomColor();
    document.querySelector("#body").style.backgroundColor = randomColor();
    document.querySelector("p").style.color = "black";
    document.querySelector("p").style.fontStyle = "italic";

    document.querySelector("#buttonYes").innerText = "Next Joke";




}


function randomColor() {
    let str = "0123456789abcdef";
    let colorStr = "#";

    for(let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * str.length);
        colorStr += str[randomIndex];
    }

    return colorStr;
}