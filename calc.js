let resultCalc = 0; //actual result
let operatorCalc =""; //actual operator
let underCalc = false;  //it is under calculation?   or    exists any active operator?

function clearCalc () {
    resultCalc = 0;
    document.getElementById("result").innerHTML = "";
    operatorCalc="";
    document.getElementById("newNum").value="";
    underCalc = false;
};
function doCalc(theElem){
    switch(operatorCalc) {
        case "+":
            resultCalc+=parseFloat(theElem);
            document.getElementById("result").innerHTML = "= " + resultCalc;
            break;
        case "-":
            resultCalc-=theElem;
            document.getElementById("result").innerHTML = "= " + resultCalc;
            break;
        case "*":
            resultCalc*=theElem;
            document.getElementById("result").innerHTML = "= " + resultCalc;
            break;
        case "/":
            resultCalc/=theElem;
            document.getElementById("result").innerHTML = "= " + resultCalc;
            break;
        default:
            document.getElementById("result").innerHTML = "HIBA!!";
      }

};

function inputNewNum(){
    let theElem = document.getElementById("newNum").value;
    if (operatorCalc ===""){
        resultCalc=parseFloat(theElem);
        document.getElementById("result").innerHTML = "= " + resultCalc;
    }
    else{
        doCalc(theElem);
    }
    document.getElementById("newNum").value="";
    operatorCalc="";
    underCalc = false;
};

function newOpPlus () {
    if (document.getElementById("newNum").value != "" && underCalc === true) {
        doCalc(document.getElementById("newNum").value);
        document.getElementById("newNum").value="";
    } else if (document.getElementById("newNum").value != ""){
        resultCalc = document.getElementById("newNum").value;
        resultCalc = parseFloat(resultCalc);
        document.getElementById("newNum").value="";
    }
    document.getElementById("result").innerHTML = "= " + resultCalc + " + ";
    operatorCalc = "+";
    underCalc = true;
}
function newOpMinus () {
    if (document.getElementById("newNum").value != "" && underCalc === true) {
        doCalc(document.getElementById("newNum").value);
        document.getElementById("newNum").value="";
    } else if (document.getElementById("newNum").value != ""){
        resultCalc=document.getElementById("newNum").value;
        document.getElementById("newNum").value="";
    }
    document.getElementById("result").innerHTML = "= " + resultCalc + " - ";
    operatorCalc = "-";
    underCalc = true;
}
function newOpMultip () {
    if (document.getElementById("newNum").value != "" && underCalc === true) {
        doCalc(document.getElementById("newNum").value);
        document.getElementById("newNum").value="";
    } else if (document.getElementById("newNum").value != ""){
        resultCalc=document.getElementById("newNum").value;
        document.getElementById("newNum").value="";
    }
    document.getElementById("result").innerHTML = "= " + resultCalc + " * ";
    operatorCalc = "*";
    underCalc = true;
}
function newOpDivi () {
    if (document.getElementById("newNum").value != "" && underCalc === true) {
        doCalc(document.getElementById("newNum").value);
        document.getElementById("newNum").value="";
    } else if (document.getElementById("newNum").value != ""){
        resultCalc=document.getElementById("newNum").value;
        document.getElementById("newNum").value="";
    }
    document.getElementById("result").innerHTML = "= " + resultCalc + " / ";
    operatorCalc = "/";
    underCalc = true;
}
