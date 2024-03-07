//Modell
let meterValue = 0;


//Controller

function getMeterValue() {
    if (meterValue < 0) meterValue = 0;
    if (meterValue > 100) meterValue = 100;
    return meterValue;
}

/* function AddMeterValue() {
    if (meterValue == 100) return;
    meterValue = meterValue + 10;
    updateView();
}

function RemoveMeterValue() {
    if (meterValue == 0) return;
    meterValue = meterValue - 10;
    updateView();
} */