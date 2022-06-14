document.getElementById("btn").addEventListener("click", check);
var getInput = document.querySelectorAll("input")[0]
var getInput1 = document.querySelectorAll("input")[1]
var getInput2 = document.querySelectorAll("input")[2]
var getInput3 = document.querySelectorAll("input")[3]

function show() {
    document.querySelectorAll("span")[0].style.visibility="hidden"
    document.querySelectorAll("em")[0].style.visibility="hidden"
}
function show1() {
document.querySelectorAll("span")[1].style.visibility="hidden"
document.querySelectorAll("em")[1].style.visibility="hidden"
}
function show2() {
document.querySelectorAll("span")[2].style.visibility="hidden"
document.querySelectorAll("em")[2].style.visibility="hidden"
document.querySelectorAll("input")[2].removeAttribute("value");
getInput2.style.color="lightgrey"
}
function show3() {
document.querySelectorAll("span")[3].style.visibility="hidden"
document.querySelectorAll("em")[3].style.visibility="hidden"
}

function check () {
    if ( getInput.checkValidity() === false){
    document.querySelectorAll("span")[0].style.visibility="visible";
    document.querySelectorAll("em")[0].style.visibility="visible"
    }
    else{
    document.querySelectorAll("span")[0].style.visibility="hidden";
    document.querySelectorAll("em")[0].style.visibility="hidden"
    }
    if ( getInput1.checkValidity() === false){
        document.querySelectorAll("span")[1].style.visibility="visible"
        document.querySelectorAll("em")[1].style.visibility="visible"
        }
    else{
        document.querySelectorAll("span")[1].style.visibility="hidden";
        document.querySelectorAll("em")[1].style.visibility="hidden"
        }
    if ( getInput2.checkValidity() === false){
        document.querySelectorAll("span")[2].style.visibility="visible"
        document.querySelectorAll("em")[2].style.visibility="visible"
        getInput2.style.color="red"
    }
    else{
        document.querySelectorAll("span")[2].style.visibility="hidden";
        document.querySelectorAll("em")[2].style.visibility="hidden"
    }
    if ( getInput3.checkValidity() === false){
            document.querySelectorAll("span")[3].style.visibility="visible"
            document.querySelectorAll("em")[3].style.visibility="visible"
    }
    else{
        document.querySelectorAll("span")[3].style.visibility="hidden";
        document.querySelectorAll("em")[3].style.visibility="hidden"
    }
}
