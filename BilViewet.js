//View
const app = document.getElementById('app');

updateView();
function updateView() {
    document.getElementById('app').innerHTML = /*HTML*/ `
    
    <div>${coolMeterHtml()}</div>
    <div class="lineupThings"> 
        <div>${showThingsView()}</div>
        <div class="obtainThings">${showObtainedThingsView()}</div>
        </div>
    <div>${buddyView()}</div>

    
    `;
    changeMeterColor();

}

//  <div>${getABuddy()}</div>


// KulhetsMeter View
function coolMeterHtml() {
    let html = ``;
    html += /*HTML*/ `
    
    ${createCoolMeterHtml()}
    <div>Kulhetsmeter verdi: ${meterValue}</div>   
   <!-- <button onclick="AddMeterValue()">Add to Meter</button> 
    <button onclick="RemoveMeterValue()">Remove to Meter</button> -->
    `;
    app.innerHTML = html;

    return html;
}

function createCoolMeterHtml() {
    let html = ``;
    html += /*HTML*/ `
    
    <div class="coolMeterBackround">
        <div id="coolMeter" class="coolMeterFull"></div>    
    </div>

    `;

    return html;
}

function changeMeterColor() {
    document.getElementById('coolMeter').style.width = ((getMeterValue() ?? 0) * 3) + "px";
}


//Ting View
function showThingsView() {
    createRandomThing();
    let html = ``;
    html = /*HTML*/ `
    <h2>Vil du plukke opp?</h2>
        <div>
            <div><strong>${randomThing.name}</strong></div>
            <img class="image" src="${randomThing.image}" alt="mangelende bildet">
        </div>
        <button onclick="addThings()">Gimme!</button> <button onclick="ignoreThings()">Næsj!</button> 
        `;

    return html;
}


// TingDuHarPlukketOpp View
function showObtainedThingsView() {
    let html = ``;
    html = /*HTML*/ `
    <h2>Ting du har plukket opp</h2>
    <div id="thingsContainer">
        <div id="thingsObtained"></div>
    </div>`;

    for (let i = 0; i < driver.thingsObtained.length; i++) {
        html += /*HTML*/ `
        <div>
            <div><strong>${driver.thingsObtained[i].name}</strong></div>
            <div>Kulhets verdi: ${driver.thingsObtained[i].value}</div>
            <img class ="image" src="${driver.thingsObtained[i].image}">
        </div>
        `;
    }
    html += /*HTML*/ `<div></div>`;
    return html;
}


// Kompis View
function buddyView() {

    let html = ``;
    html += /*HTML*/`
    <div>
        <h1 id="buddyName">${selectedBuddy.name}</h1>
        <img src="${selectedBuddy.imgSrc}"/>
            <h2 id="buddyResponse">${responseText}</h2>
            <button id="babeBtn"onclick="greetBuddy2()">Babe</button>
            <button id= "broBtn" onclick=" greetBuddy1()">Broder</button>
            <button id="buddyBtn" onclick="getRandomBuddy()">finn en random venn</button>  
    </div>`;
    return html;
}
