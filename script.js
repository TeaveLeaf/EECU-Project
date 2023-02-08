function myFunction() {
  var x = document.getElementById("gAnn").value;
  var y = x/12;
  var xy = Math.round(y * 100) / 100
  document.getElementById("gSam").innerHTML = xy;

  var b = xy*.12;
  var a = Math.round(b * 100) / 100
  document.getElementById("fSam").innerHTML = a;

    var w = xy*.07;
  var q = Math.round(w * 100) / 100
  document.getElementById("sSum").innerHTML = q;

    var t = xy*.062;
  var u = Math.round(t * 100) / 100
  document.getElementById("ssSum").innerHTML = u;

    var z = xy*.05;
  var c = Math.round(z * 100) / 100
  document.getElementById("rSum").innerHTML = c;

  var medIn = xy*.0145;
  var medRes = Math.round(medIn * 100) / 100
  document.getElementById("mSum").innerHTML = medRes;

  var stateDis = xy*.01;
  var stateRes = Math.round(stateDis * 100) / 100
  document.getElementById("sdSum").innerHTML = stateRes;

  var medIns = hosP + 180;
  var tot = 180;
  var medsRes = Math.round(medIns * 100) / 100
  document.getElementById("miSum").innerHTML = tot;

  var hp = xy + a + q + u + c + medRes + stateRes + tot;
  var hosP = Math.round(hp * 100) / 100
  document.getElementById("taxDec").innerHTML = hosP;

  var hsP = xy* .33;
  var husPa = Math.round(hsP * 100) / 100
  document.getElementById("hDec").innerHTML = husPa;

    checkFunc();

}

function checkFunc() {
for (let i = 0; i < Infinity; i++) {
    updateFunction();
}
}

function newRow() {
    // idk i tried my best
}

function updateFunction() {
  var x = document.getElementById("balGrid").value;
  var y = x/12;
  var xy = Math.round(y * 100) / 100
  document.getElementById("gSam").innerHTML = xy;
}




// var dup = document.getElementById("gridCont"), dup2;
//     var dup2 = dup.cloneNode(true);
//     dup2.id = "duplicater" + ++i;
//     original.parentNode.appendChild(dup2);


// let test = [1, 2, 3, 4, 5];
// let test = 0;

// function myFunction() {
//   var x = document.getElementById("myText").value;
//   document.getElementById("demo").innerHTML = x;
// }

// for (let i = 0; i < Infinity; i++) {
//     test = test + 1;
//     if(test == 5){
//         myFunction();
//         test = 0;
//         console.log("HELLO");
//     }
// }