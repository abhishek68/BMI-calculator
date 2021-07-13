function bmi(){
    var h=document.getElementById("height").value;
    var w=document.getElementById("weight").value;
    var bmi=w/(h/100*h/100);
    var bmio=(bmi.toFixed(2));
    document.getElementById("result1").innerHTML="Your BMI is "+ bmio;
    if(bmio<15){
        document.getElementById("result").innerHTML=" Under weight";
    }
    else if(bmio>15 && bmio<25)
    {
        document.getElementById("result").innerHTML=" Healthy";
    }
    else if(bmio>=25.0 && bmio<30)
    {
        document.getElementById("result").innerHTML=" Over weight";
    }
    else if(bmio>=30.0)
    {
        document.getElementById("result").innerHTML=" Obesity";
    }
    else if(bmio === NaN){
        document.getElementById("result").innerHTML=" Undefined";

    }
    
}