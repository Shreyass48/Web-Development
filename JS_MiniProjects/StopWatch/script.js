let hr = 0;
let min = 0;
let sec = 0;
let count = 0;

var timer = false;


function start()
{
    timer = true;
    stopWatch();
}

function stop()
{
    timer = false;
}
 
function reset()
{
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;

    document.getElementById("hr").innerHTML = hr;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;
    document.getElementById("count").innerHTML = count;

}

// Main logic
function stopWatch()
{
    if(timer == true)
    {
        // logic for count
        count += 1;

        // counting sec
        if(count == 100)
        {
            sec += 1;
            count = 0;
        }

        //counting min
        if(sec == 60)
        {
            min += 1;
            sec = 0;
        }

        //counting hr
        if(min == 60)
        {
            hr += 1;
            min = 0;
            sec = 0;
        }

        document.getElementById("hr").innerHTML = hr;
        document.getElementById("min").innerHTML = min;
        document.getElementById("sec").innerHTML = sec;
        document.getElementById("count").innerHTML = count;

        
        setTimeout("stopWatch()",10);  // 2: wat for 10 sec, 1: then call same fun 
    }
}
