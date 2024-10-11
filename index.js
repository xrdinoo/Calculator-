// Calculator Program

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
   display.value = "Lods T-T";
}

function calculate(){
    try{
        
        eval(display.value);
        display.value = "I miss you";
    }
    catch(error){
      display.value = "Miss u na po :<";
    } 
}
