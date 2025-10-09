function showText() {

    const unit = document.getElementById('Unit');
    const showText = document.getElementById('showText');

    if (unit.value === 'Length') {
        showText.textContent = 'Enter Length to convert:'
        let element = document.getElementsByClassName('Weight');
        for (i = 0; i < element.length; i++) {

            element[i].style.display = 'none'
        }
        element = document.getElementsByClassName('Temperature');
        for (i = 0; i < element.length; i++) {

            element[i].style.display = 'none'
        }
        element = document.getElementsByClassName('Length');
        for (i = 0; i < element.length; i++) {

            element[i].style.display = 'block'
        }

    } else if (unit.value === 'Weight') {
        showText.textContent = 'Enter Weight to Convert:'
        let element = document.getElementsByClassName('Length');
        for (i = 0; i < element.length; i++) {
            element[i].style.display = 'none'
        }
        element = document.getElementsByClassName('Temperature');
        for (i = 0; i < element.length; i++) {
            element[i].style.display = 'none'
        }
        element = document.getElementsByClassName('Weight');
        for (i = 0; i < element.length; i++) {
            element[i].style.display = 'block'
        }
    } else if (unit.value === 'Temperature') {
        showText.textContent = 'Enter Teperature to convert:'
        let element = document.getElementsByClassName('Weight');
        for (i = 0; i < element.length; i++) {
            element[i].style.display = 'none'
        }
        element = document.getElementsByClassName('Length');
        for (i = 0; i < element.length; i++) {
            element[i].style.display = 'none'
        }
        element = document.getElementsByClassName('Temperature');
        for (i = 0; i < element.length; i++) {
            element[i].style.display = 'block'

        }
    }
}
function process() {
    var unit = document.getElementById('Unit').value;
    console.log(unit);
    if (unit === 'Length') {
        lengthConv();
    } else if (unit === 'Weight') {
        weightConv();
    } else if (unit === 'Temperature') {
        tempConv();
    }
}

function lengthConv() {

    var from = document.getElementById('Unit-From-length').value;
    var to = document.getElementById('Unit-To-length').value;

    var inputValue = document.getElementById('input-Value').value;

    switch (from) {
        case 'Meter':
            if (to === 'Kilometer') {
                console.log("here");
                document.getElementById('result-value').value = inputValue / 1000;
            } else if (to === 'Centimeter') {
                document.getElementById('result-value').value = inputValue * 100;
            } else if (to === 'Millimeter') {
                document.getElementById('result-value').value = inputValue * 1000;
            } else if (to === 'Mile') {
                document.getElementById('result-value').value = inputValue / 1609.34;
            } else if (to === 'Yard') {
                document.getElementById('result-value').value = inputValue * 1.09361;
            } else if (to === 'Foot') {
                document.getElementById('result-value').value = inputValue * 3.28084;
            } else if (to === 'Inch') {
                document.getElementById('result-value').value = inputValue * 39.3701;
            }
        case 'Kilometer':
            if (to === 'Meter') {
                document.getElementById('result-value').value = inputValue * 1000;
            } else if (to === 'Centimeter') {
                document.getElementById('result-value').value = inputValue * 100000;
            } else if (to === 'Millimeter') {
                document.getElementById('result-value').value = inputValue * 1000000;
            } else if (to === 'Mile') {
                document.getElementById('result-value').value = inputValue / 1.60934;
            } else if (to === 'Yard') {
                document.getElementById('result-value').value = inputValue * 1093.61;
            } else if (to === 'Foot') {
                document.getElementById('result-value').value = inputValue * 3280.84;
            } else if (to === 'Inch') {
                document.getElementById('result-value').value = inputValue * 39370.1;
            }
            break;
        case 'Centimeter':
            if (to === 'Meter') {
                document.getElementById('result-value').value = inputValue / 100;
            } else if (to === 'Kilometer') {
                document.getElementById('result-value').value = inputValue / 100000;
            } else if (to === 'Millimeter') {
                document.getElementById('result-value').value = inputValue * 10;
            } else if (to === 'Mile') {
                document.getElementById('result-value').value = inputValue / 160934;
            } else if (to === 'Yard') {
                document.getElementById('result-value').value = inputValue / 91.44;
            } else if (to === 'Foot') {
                document.getElementById('result-value').value = inputValue / 30.48;
            } else if (to === 'Inch') {
                document.getElementById('result-value').value = inputValue / 2.54;
            }
            break;
        case 'Millimeter':
            if (to === 'Meter') {
                document.getElementById('result-value').value = inputValue / 1000;
            } else if (to === 'Kilometer') {
                document.getElementById('result-value').value = inputValue / 1000000;
            }
            else if (to === 'Centimeter') {
                document.getElementById('result-value').value = inputValue / 10;
            } else if (to === 'Mile') {
                document.getElementById('result-value').value = inputValue / 1.609e+6;
            } else if (to === 'Yard') {
                document.getElementById('result-value').value = inputValue / 914.4;
            } else if (to === 'Foot') {
                document.getElementById('result-value').value = inputValue / 304.8;
            } else if (to === 'Inch') {
                document.getElementById('result-value').value = inputValue / 25.4;
            }
            break;
        case 'Mile':
            if (to === 'Meter') {
                document.getElementById('result-value').value = inputValue * 1609.34;
            } else if (to === 'Kilometer') {
                document.getElementById('result-value').value = inputValue * 1.60934;
            } else if (to === 'Centimeter') {
                document.getElementById('result-value').value = inputValue * 160934;
            } else if (to === 'Millimeter') {
                document.getElementById('result-value').value = inputValue * 1.609e+6;
            } else if (to === 'Yard') {
                document.getElementById('result-value').value = inputValue * 1760;
            } else if (to === 'Foot') {
                document.getElementById('result-value').value = inputValue * 5280;
            } else if (to === 'Inch') {
                document.getElementById('result-value').value = inputValue * 63360;
            }
            break;
        case 'Yard':
            if (to === 'Meter') {
                document.getElementById('result-value').value = inputValue / 1.09361;
            } else if (to === 'Kilometer') {
                document.getElementById('result-value').value = inputValue / 1093.61;
            } else if (to === 'Centimeter') {
                document.getElementById('result-value').value = inputValue * 91.44;
            } else if (to === 'Millimeter') {
                document.getElementById('result-value').value = inputValue * 914.4;
            } else if (to === 'Mile') {
                document.getElementById('result-value').value = inputValue / 1760;
            } else if (to === 'Foot') {
                document.getElementById('result-value').value = inputValue * 3;
            } else if (to === 'Inch') {
                document.getElementById('result-value').value = inputValue * 36;
            }
            break;
        case 'Foot':
            if (to === 'Meter') {
                document.getElementById('result-value').value = inputValue / 3.28084;
            } else if (to === 'Kilometer') {
                document.getElementById('result-value').value = inputValue / 3280.84;
            } else if (to === 'Centimeter') {
                document.getElementById('result-value').value = inputValue * 30.48;
            } else if (to === 'Millimeter') {
                document.getElementById('result-value').value = inputValue * 304.8;
            } else if (to === 'Mile') {
                document.getElementById('result-value').value = inputValue / 5280;
            } else if (to === 'Yard') {
                document.getElementById('result-value').value = inputValue / 3;
            } else if (to === 'Inch') {
                document.getElementById('result-value').value = inputValue * 12;
            }
            break;
        case 'Inch':
            if (to === 'Meter') {
                document.getElementById('result-value').value = inputValue / 39.3701;
            } else if (to === 'Kilometer') {
                document.getElementById('result-value').value = inputValue / 39370.1;
            } else if (to === 'Centimeter') {
                document.getElementById('result-value').value = inputValue * 2.54;
            } else if (to === 'Millimeter') {
                document.getElementById('result-value').value = inputValue * 25.4;
            } else if (to === 'Mile') {
                document.getElementById('result-value').value = inputValue / 63360;
            } else if (to === 'Yard') {
                document.getElementById('result-value').value = inputValue / 36;
            } else if (to === 'Foot') {
                document.getElementById('result-value').value = inputValue / 12;
            }
            break;
        default:
            break;
    }

}

function weightConv() {
    var from = document.getElementById('Unit-From-weight').value;
    var to = document.getElementById('Unit-To-weight').value;
    var inputValue = document.getElementById('input-Value').value;
    console.log(from, to, inputValue);
    switch (from) {
        case 'Kilogram':
            if (to === 'Gram') {
                document.getElementById('result-value').value = inputValue * 1000;
            } else if (to === 'Milligram') {
                document.getElementById('result-value').value = inputValue * 1e+6;
            } else if (to === 'Pound') {
                document.getElementById('result-value').value = inputValue * 2.20462;
            } else if (to === 'Ounce') {
                document.getElementById('result-value').value = inputValue * 35.274;
            }
        case 'Gram':
            if (to === 'Kilogram') {
                document.getElementById('result-value').value = inputValue / 1000;
            } else if (to === 'Milligram') {
                document.getElementById('result-value').value = inputValue * 1000;
            } else if (to === 'Pound') {
                document.getElementById('result-value').value = inputValue / 453.592;
            } else if (to === 'Ounce') {
                document.getElementById('result-value').value = inputValue / 28.3495;
            }
        case 'Milligram':
            if (to === 'Kilogram') {
                document.getElementById('result-value').value = inputValue / 1e+6;
            } else if (to === 'Gram') {
                document.getElementById('result-value').value = inputValue / 1000;
            } else if (to === 'Pound') {
                document.getElementById('result-value').value = inputValue / 453592;
            } else if (to === 'Ounce') {
                document.getElementById('result-value').value = inputValue / 28349.5;
            }
        case 'Pound':
            if (to === 'Kilogram') {
                document.getElementById('result-value').value = inputValue / 2.20462;
            } else if (to === 'Gram') {
                document.getElementById('result-value').value = inputValue * 453.592;
            } else if (to === 'Milligram') {
                document.getElementById('result-value').value = inputValue * 453592;
            } else if (to === 'Ounce') {
                document.getElementById('result-value').value = inputValue * 16;
            }
        case 'Ounce':
            if (to === 'Kilogram') {
                document.getElementById('result-value').value = inputValue / 35.274;
            } else if (to === 'Gram') {
                document.getElementById('result-value').value = inputValue * 28.3495;
            } else if (to === 'Milligram') {
                document.getElementById('result-value').value = inputValue * 28349.5;
            } else if (to === 'Pound') {
                document.getElementById('result-value').value = inputValue / 16;
            }
            break;
        default:
            break;
    }
}

function tempConv() {
    var from = document.getElementById('Unit-From-temperature').value;
    var to = document.getElementById('Unit-To-temperature').value;
    var inputValue = document.getElementById('input-Value').value;

    switch (from) {
        case 'Celsius':
            if (to === 'Fahrenheit') {
                document.getElementById('result-value').value = (inputValue * 9 / 5) + 32;
            } else if (to === 'Kelvin') {
                document.getElementById('result-value').value = parseFloat(inputValue) + 273.15;
            }
            break;
        case 'Fahrenheit':
            if (to === 'Celsius') {
                document.getElementById('result-value').value = (inputValue - 32) * 5 / 9;
            } else if (to === 'Kelvin') {
                document.getElementById('result-value').value = (inputValue - 32) * 5 / 9 + 273.15;
            }
            break;
        case 'Kelvin':
            if (to === 'Celsius') {
                document.getElementById('result-value').value = inputValue - 273.15;
            } else if (to === 'Fahrenheit') {
                document.getElementById('result-value').value = (inputValue - 273.15) * 9 / 5 + 32;
            }
            break;
        default:
            break;
    }

}

function checkfromto() {
    var unit = document.getElementById('Unit').value;
    if (unit === 'Length') {
        checkLength();
    } else if (unit === 'Weight') {
        checkWeight();
    } else if (unit === 'Temperature') {
        checkTemperature();
    }
}

function checkTemperature() {
    var from = document.getElementById('Unit-From-temperature').value;
    var to = document.getElementById('Unit-To-temperature').value;
    console.log(from, to);
    if (from === to) {
        alert("From and To cannot be same. Please try other Combo!");
    }
}
function checkWeight() {
    var from = document.getElementById('Unit-From-weight').value;
    var to = document.getElementById('Unit-To-weight').value;
    console.log(from, to);
    if (from === to) {
        alert("From and To cannot be same. Please try other Combo!");
    }
}
function checkLength() {
    var from = document.getElementById('Unit-From-length').value;
    var to = document.getElementById('Unit-To-length').value;
    console.log(from, to);
    if (from === to) {
        alert("From and To cannot be same. Please try other Combo!");
    }
}