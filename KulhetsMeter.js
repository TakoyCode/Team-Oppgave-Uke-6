//Modell
let meterValue = 0;



//View
function coolMeterHtml() {
    const app = document.getElementById('app');
    let html = ``;
    html += /*HTML*/ `
    
    ${createCoolMeterHtml()}    
    <button onclick="AddMeterValue()">Add to Meter</button>
    <button onclick="RemoveMeterValue()">Remove to Meter</button>
    `;

    app.innerHTML = html;
    changeMeterColor();
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


//Controller
function AddMeterValue() {
    if (meterValue == 100) return;
    meterValue = meterValue + 10;
    updateView();
}

function RemoveMeterValue() {
    if (meterValue == 0) return;
    meterValue = meterValue - 10;
    updateView();
}

function changeMeterColor() {
    document.getElementById('coolMeter').style.width = ((meterValue ?? 0) * 3) + "px";
}