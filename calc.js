let outputScreen =document.getElementById("output-screen");
function display(num){
    outputScreen.value +=num;
}
function calculate(){
    try{
        outputScreen.value = eval(outputScreen.value)
    }
    catch(err){
        alert("olunga input kudunga da")
    }
}

function clearDisplay(){
    outputScreen.value ="";

}

function deleteChar(){
    outputScreen.value = outputScreen.value.slice(0,-1)

}
