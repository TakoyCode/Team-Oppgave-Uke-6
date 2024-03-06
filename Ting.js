//Modell

// Kule ting
/*
    item4: "wonderbaum",
    item5: "lakk",
    item6: "terninger",
    item7: "stereoanlegg",
    item8: "hvite blinklys",
    item9: "brede felger", */

let coolCat = {
    name: "Tom",
    image: "coolcat",
    value: 50,
}

let loweringKit = {
    name: "Senkesett",
    image: "senkesett.jpg",
    value: 30,
}

let stickers = {
    name: "Klistremerker",
    image: "klistremerker.jpg",
    value: 10,
}

let sootyPanes = {
    name: "Sotede ruter",
    image: "sotederuter.jpg",
    value: 20,
}

// Ikke kule ting
let trash = {
    name: "Søppel",
    image: "søppel.jpg",
    value: -10,
}

let pilk = {
    name: "Pilk",
    image: "pilk.jpg",
    value: -50,
}

let beadedRim = {
    name: "Kantkjørt felg",
    image: "kantkjørtfelg.jpg",
    value: -20,
}

let things = [loweringKit, stickers, sootyPanes, trash, pilk, beadedRim, coolCat];
let randomThing = null;

//View
function showThingsView() {
    let thingHtml = ``;
    thingHtml = /*HTML*/ `
    <h2>Ting du har plukket opp</h2>
        <div>
            <div>${randomThing.name}</div>
            <img src="${randomThing.image}" alt="mangelende bildet">
        </div>
        <button onclick="addThings()">Gimme!</button> <button onclick="ignoreThings()">Næsj!</button> 
        `;

    app.innerHTML = thingHtml;
}

//Controller

function createRandomThing() {
    // lag ett random number
    /* 0 - 5 i dette tilfelle */
    let randomIndex = Math.floor(Math.random() * things.length);

    // ta numberet og bruk det til å ta en "thing" ut av things arrayet
    // sett randomThing til den "thing" en
    randomThing = things[randomIndex];

}

function addThings() {
    driver.thingsObtained.push(randomThing);
    showThingsView();
}

function ignoreThings() {
    createRandomThing();
    showThingsView();
}

