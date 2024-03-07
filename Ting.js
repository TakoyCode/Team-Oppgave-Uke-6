// Modell

// Kule ting
let coolCat = {
    name: "Tom",
    image: "Images/coolcat.png",
    value: 50,
}

let loweringKit = {
    name: "Senkesett",
    image: "Images/senkesett.jpg",
    value: 30,
}

let stickers = {
    name: "Klistremerker",
    image: "Images/klistremerker.jpg",
    value: 10,
}

let sootyPanes = {
    name: "Sotede ruter",
    image: "Images/sotederuter.jpg",
    value: 20,
}

// Ikke kule ting
let trash = {
    name: "Søppel",
    image: "Images/søppel.jpg",
    value: -10,
}

let pilk = {
    name: "Pilk",
    image: "Images/pilk.jpg",
    value: -50,
}

let beadedRim = {
    name: "Kantkjørt felg",
    image: "Images/kantkjørtfelg.jpg",
    value: -20,
}

let things = [loweringKit, stickers, sootyPanes, trash, pilk, beadedRim, coolCat];
let randomThing = null;

// Controller
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
    meterValue = meterValue + randomThing.value;

    showThingsView();
    updateView();
}

function ignoreThings() {
    createRandomThing();

    showThingsView();
    updateView();
}

