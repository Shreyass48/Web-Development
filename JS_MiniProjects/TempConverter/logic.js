// get 2 textbox
let cel = document.getElementById("cel");
let far  = document.getElementById("far");

// add input event ie input
cel.addEventListener('input', function(){
    // c for celcius get value of celcius
    let c = this.value;
    let f = (c * 9/5) + 32;   // using formula we get f

    // if number is float then only display 3 number after decimal
    if(!Number.isInteger(f))
    {
        f = f.toFixed(3);
    }

    far.value = f;              // put that ans in far textbox
});
far.addEventListener('input', function(){
    let f = this.value;
    let c = (f - 32) * 5/9;

    if(!Number.isInteger(c))
    {
        c = c.toFixed(4);
    }

    cel.value = c;
});