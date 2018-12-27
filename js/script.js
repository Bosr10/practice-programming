/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/


//Naam invullen
function verwerkFormulier(Event) {
    Event.preventDefault();
    console.log(document.querySelector("input").value);
    document.querySelector("h1").textContent = document.querySelector("input").value + " , welkom bij het ultieme bierspel. good luck...";
}

document.querySelector("form").addEventListener("submit",verwerkFormulier);


//Raad hoeveel vingers
document.getElementById("gok").onclick=function() {
    var x = Math.random();
    x = 6*x;
    x = Math.floor(x);

    if (document.getElementById("form").value == x) {
        document.getElementById("antwoord").innerHTML = "Goed geraden! Iedereen die mee doet met het ultieme bierspel drinkt 6 slokken, behalve jij natuurlijk!";
    }else {
        document.getElementById("antwoord").innerHTML = "Helaas, ik had " + x + " vingers opgestoken. Drink 3 slokken van je bier!";
    }
}

//Dobbelsteen
document.getElementById("steen").onclick=function() {

    var randomNum = Math.floor((Math.random() * 6) + 1);
    document.getElementById("dobbelsteen").textContent = "U heeft "  + randomNum + " gegooid. 4 of hoger? drinken!";

    console.log(randomNum);

    var imgArray;
    imgArray = ["dobbelstenen_Rick_Bos2.png",
                "dobbelstenen_Rick_Bos3.png",
                "dobbelstenen_Rick_Bos4.png",
                "dobbelstenen_Rick_Bos5.png",
                "dobbelstenen_Rick_Bos6.png",
                "dobbelstenen_Rick_Bos7.png"];

    var steenImg;
    steenImg = imgArray[randomNum -1];

    console.log(steenImg);

    //verwijzing naar afbeelding
    document.querySelectorAll("img")[0].src = "images/" + steenImg;

    //voor de loop
    var i;

    //aantal slokken loop
    for (i = 3; i > randomNum; i++) {
        document.getElementById("drinken").innerHTML = "Drinken! ";
    }
}

//Drinken of uitdelen

//variables
var emojiButton = document.getElementById("button1");
var uitslagEmoji = document.getElementsByClassName("img")[0];
var uitslag = "drink";

//50% om er boven of onder te zitten
//Als het getal lager is dan 0,5 mag je slokken uitdelen, als het hoger is moet je 6 slokken zelf nemen
function drinkOfUitdelen() {
    var randomGetal = Math.random();
    console.log(randomGetal);
    if (randomGetal < 0.5){
        uitslag = "uitdelen";
        uitslagEmoji.src = "images/Hugging_Face_Emoji_2028ce8b-c213-4d45-94aa-21e1a0842b4d_large.png";
        document.getElementById("geluk").innerHTML = "Je hebt geluk, je mag het aantal slokken wat je drinkt uitdelen x2!";
    }
    else{
        uitslag = "drink";
        uitslagEmoji.src = "images/Loudly_Crying_Face_Emoji.png";
        document.getElementById("geluk").innerHTML = "Helaas, drink 6 slokken...burp.";
    }
    console.log(uitslag);
}

//Als je klikt wordt de functie drinkOfUitdelen() uitgevoerd.
emojiButton.addEventListener("click", drinkOfUitdelen);


