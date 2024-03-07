var buddyGreeted;
var responseText = '';
var selectedBuddy = {};
var driver = {
    greeting: ["Halla Schnuppa! Kom inn Mujaffas BMW!", "Walla Bhaia"],
    thingsObtained: [],
}

var buddies = [{
    name: "Ola Halvorsen",
    imgSrc: "https://gfx.nrk.no/C9K_KeI2SQVTwPcG_vBSlQdu5W6JvDpopubH36DNCU3A.png",
    correctGreeting: driver.greeting[1],
    positiveResponse: "Walla bror! Fet BMW.",
    negativeResponse: "Walla jeg Gatter deg ass!"

},
{
    name: "Ahre-Ketil",
    imgSrc: "https://scontent.fosl3-2.fna.fbcdn.net/v/t1.6435-9/97360972_926720077771439_1439875064290869248_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=R7h6QlOo22sAX-nBv3q&_nc_ht=scontent.fosl3-2.fna&oh=00_AfCTeAbv3wmT3YVm5LPjyc42qlGLnYoPEpr5SvPXFs6Odw&oe=66111ACF",
    correctGreeting: driver.greeting[1],
    positiveResponse: "Yes Sir!",
    negativeResponse: "Hælvette"
},
{
    name: "Baben",
    imgSrc: "https://www.dagbladet.no/images/74583468.jpg?imageId=74583468&panow=100&panoh=21.450151057402&panox=0&panoy=9.6676737160121&heightw=41.284403669725&heighth=42.363112391931&heightx=31.651376146789&heighty=3.1700288184438&width=1200&height=1200",
    correctGreeting: driver.greeting[0],
    positiveResponse: "Okey, her kommer jeg!",
    negativeResponse: "Dropp det du hakke no gummi!"

},
{
    name: "Marius Aalto",
    imgSrc: "Team-Oppgave-Uke-6/Images/marius.png",
    correctGreeting: driver.greeting[1],
    positiveResponse: "Åherrejemini! Så snålt det var å hilse på deg'a",
    negativeResponse: "Marius pælmer Pilk på bilen din!"

}
];

function getRandomBuddy() {
    var randomBuddy = Math.floor(Math.random() * buddies.length);
    selectedBuddy = buddies[randomBuddy];
    updateView();
    // document.getElementById("buddyName").innerHTML = selectedBuddy.name
    // document.getElementById("buddyResponse").innerHTML = ""
    console.log(selectedBuddy);
}

function greetBuddy1() {
    buddyGreeted = driver.greeting[1];
    console.log(buddyGreeted);
    checkGreeting();
}

function greetBuddy2() {
    buddyGreeted = driver.greeting[0];
    console.log(buddyGreeted);
    checkGreeting();
}

function checkGreeting() {
    switch (selectedBuddy.correctGreeting) {
        case buddyGreeted:
            responseText = selectedBuddy.positiveResponse;
            meterValue++;
            break;
        default:
            responseText = selectedBuddy.negativeResponse;
            meterValue--;
    }
    updateView();
}

