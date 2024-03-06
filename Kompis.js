//Modell

let buddyResponds = '';
let viewResponse = '';
let greetings = ["Plystre", "hey på dey", "Vinker", " Walla Bhaia!", " Sup Bro?", "Hei Kattepuz", "hund er best"];
let responses = ["Walla bror, fet BMW!", "Dropp det, du hakke no gummi!", "Morra di", "du trenger en dusj", "Ta deg en bolle"];

let bob = {
    name: "Bob Kåre",
    image: "bobkare.png",
    correctGreeting: greetings[1],
    wrongGreeting: greetings[0],
}

let kent = {
    name: "Kent Roger",
    image: "kent-roger.png",
    correctGreeting: greetings[1],
    wrongGreeting: greetings[0],
}

let bjarne = {
    name: "Bjarne",
    image: "bjarne.png",
    correctGreeting: greetings[1],
    wrongGreeting: greetings[0],
}

let ola = {
    name: "Ola Halvorsen",
    image: "olahalvorsen.png",
    correctGreeting: greetings[1],
    wrongGreeting: greetings[0],
}

let mæhmed = {
    name: "Mæhmed som pakka baggen",
    image: "mhmed.png",
    correctGreeting: greetings[1],
    wrongGreeting: greetings[0],
}

let marius = {
    name: "Marius Aalto",
    image: "marius.png",
    correctGreeting: greetings[5],
    wrongGreeting: greetings[6],
}

let babe = {
    name: "Tanja Laila",
    image: "tanjalaila.png",
    correctGreeting: greetings[1],
    wrongGreeting: greetings[0],
}

let driver = {
    name: 'team 4',
    thingsObtained: [],
}

let buddies = [bob, kent, bjarne, ola, mæhmed, marius, babe];


//View
function buddyView() {
    document.getElementById("app").innerHTML = /*HTML*/`
    
    <img>
    <div id="buddyDiv">${randomBuddy.name}</div>
    <div id="buddyResponseDiv">${buddyResponses()}</div>

    <button onclick="buddyResponses('greeting1')" id ="greeting1">${greetings[0]}</button>
    <button onclick="buddyResponses('greeting2')" id ="greeting2">${greetings[1]}</button>
    <button onclick="buddyResponses('greeting3')" id ="greeting3">${greetings[2]}</button>
    `;
}

//Controller
function getABuddy() {
    randomNum = Math.floor(Math.random() * buddies.length);
    randomBuddy = buddies[randomNum]
    buddyView()
}

function testName() {
    switch (greeting) {
        case 'greeting1':
            responses[0];
            break;
        case 'greeting2':
            responses[1];
            break;
        case 'greeting3':
            responses[2];
        default:
            'hilsa ikke på engang...';
            break;
    }
}