// Model
let app = document.getElementById('app');
/* let thingsObtained = []; */

// View
function showThingsView() {
    let thingsView = /*HTML*/ `
    <h2>Ting du har plukket opp</h2>
    <div id="thingsContainer">
        <div id="thingsObtained"></div>
    </div>`;

    for (let i = 0; i < driver.thingsObtained.length; i++) {
        thingsView += /*HTML*/ `
        <div>
            <div>${driver.thingsObtained[i].name}</div>
            <img src="${driver.thingsObtained[i].image}">
        </div>
        `;
    }
    thingsView += /*HTML*/ `<div></div>`;
    app.innerHTML = thingsView;
}

showThingsView();

// Controller
