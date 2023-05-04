// if we dont know how much parameters pass by user then use there concept
// e.g :

function Add()
{
    let sum = 0;
    if(arguments.length == 0)
        console.log("No arg pass");
    else 
    {
        for(let i = 0; i < arguments.length; i++)
            sum += arguments[i];
    }

    console.log(sum);

}

Add(1,2);
Add(1,2,3);