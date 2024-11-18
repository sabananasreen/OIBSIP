function temperature(){
    // Get the input degree value
    var deg = document.getElementById("deg").value;
    // Get the selected option (type of conversion)
    var sel = document.getElementById("sel").value;
    // Get the result input field
    var res = document.getElementById("res");

    if(sel === "farenheit"){
        // Convert Fahrenheit to Celsius
        res.value = ((deg - 32) * 5/9).toFixed(2)+" °C"; //to round the result to two decimal places for better readability
    } else if(sel === "celcius"){
        // Convert Celsius to Fahrenheit
        res.value = ((deg * 9/5) + 32).toFixed(2)+" °F";
    } else {
        res.value = "select a valid temperature";
    }
}
