var num1 = 20;
var num2 = 10;
var num3 = 8;
var num4 = 22;
var num5 = 18;

console.log((num1+ num2+ num3+ num4+ num5) /5)

function colormode(){
    var BODY = document.body;
    BODY.classList.toggle("light_mode")
}
function hide() {
    var div=document.getElementById("action1");
        if(div.style.display==="none"){
            div.style.display ="block";
        } 
        else{
            div.style.display ="none";
        }
}
function openbut(){
    document.getElementById("navdiv1").style.width = "250px"
    document.body.style.marginLeft = "250px"
}
function closebut(){
    document.getElementById("navdiv1").style.width = "0px"
    document.body.style.marginLeft = "0px"
}
function average(){
    let num1 =parseInt(document.getElementById("num1").value);
    let num2 =parseInt(document.getElementById("num2").value);
    let num3 =parseInt(document.getElementById("num3").value);
    let num4 =parseInt(document.getElementById("num4").value);
    let num5 =parseInt(document.getElementById("num5").value);
    let num6 =parseInt(document.getElementById("num6").value);
    let num7 =parseInt(document.getElementById("num7").value);
    let num8 =parseInt(document.getElementById("num8").value);
    let num9 =parseInt(document.getElementById("num9").value);
    let num10 =parseInt(document.getElementById("num10").value);
    let result =(num1 +num2 +num3 +num4 +num5 +num6 +num7 +num8 +num9 +num10)/10
    console.log(result)
    document.getElementById("n").innerHTML = result;
}