// function html() {
//     console.log('pllop')
//     var html = `<button id="r1-1" class="clearAll" valu="C" onclick="clearAll() ">C</button>
//     <button id="r1-3" class="button" valu="²" onclick="fordisplay('²') ">exp</button>
//     <button id="r1-4" class="button" valu="/" onclick="fordisplay('/') ">/</button>`
//     for (i = 16 ; i >= 0 ; i--) {
//         if (i==1) {
//             html += `<button id="r5-1" class="button" valu=" `+ i +` " onclick="fordisplay(' `+ i +` ') ">`+ i +`</button><button id="r4-4" class="button" valu="+" onclick="fordisplay('+') ">+</button>`
//         } else {
//             html += `<button id="r5-1" class="button" valu=" `+ i +` " onclick="fordisplay(' `+ i +` ') ">`+ i +`</button>`
//         }
//         console.log(i)
//     }   
//     html += '<button id="r5-2" class="button" valu="." onclick="fordisplay(\'.\') ">.</button><button id="r5-3" class="button" valu="=" onclick="egal() ">=</button>'
//     document.getElementById("touche").innerHTML = html
// }

let π = Math.PI;
let historique = document.getElementById("outputHistorique").innerHTML;
let valu = document.getElementById("output").innerHTML
historique;
let x = Math.pow(valu*valu);
let button = document.getElementsByClassName('button');

// Clear function
let output = document.getElementById("output")
const clearAll = () => {
    document.getElementById("output").innerHTML = "0";
    document.getElementById("finalOutput").innerHTML = "0";
}

//Clear History
let outputHistorique = document.getElementById("outputHistorique")
const clearHistory = () => {
    document.getElementById("outputHistorique").innerHTML = "";
}

// J'enlève le "0" initial
const removeZero = () => {
    var valu = document.getElementById("output").innerHTML;
    valu.toString();
    if (valu == "0") {
        valu = " ";
        document.getElementById("output").innerHTML = valu;
    }
}

// Mes touches
const fordisplay = (valu) => {
    removeZero()
    document.getElementById("output").innerHTML += valu;
}

// Mon égalité
const egal = () => {
    removeZero()
    let operation = document.getElementById("output").innerHTML;
    let result = eval(operation);
    document.getElementById('finalOutput').innerHTML = result;
    document.getElementById("outputHistorique").innerHTML += result + '<hr>' ;
}

function square(valu){
    valu = document.getElementById("output").innerHTML;
    removeZero()
    console.log(valu)
    // stock le résultat
    var resultat = parseFloat(valu) * parseFloat(valu);

    document.getElementById('finalOutput').innerHTML = resultat;
    document.getElementById("outputHistorique").innerHTML += resultat + '<hr>' ;
  }