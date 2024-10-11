// Calculator Program

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
   display.value = "I miss you";
}

function calculate(){
    try{
        
        eval(display.value);
        display.value = "Lods T-T";
    }
    catch(error){
      display.value = "Miss u na po :<";
    } 
}
