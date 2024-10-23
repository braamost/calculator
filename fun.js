const mscreen = document.getElementById('screen');

function append(char) {
    if(mscreen.value != "Error"){mscreen.value += char;}
}

function clearScreen(){
    mscreen.value = "";
}

function calculate(){
    try{
        t = eval(mscreen.value);
        if(t === Infinity){
            throw new Error("division by zero is not allowed");
        }
        mscreen.value = t;
    }catch(error){
        mscreen.value = "Error";
    }
}

function del(){
    if(mscreen.value != "Error"){
        mscreen.value = mscreen.value.slice(0,-1);
    }
}