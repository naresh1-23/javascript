

function temperature(fehrenheit){
    var celcius=(fehrenheit-32)*5/9;

    return celcius;
}
document.write(temperature(95));
document.write("<br>");
document.write(temperature(100));

function factorial(number){
    var fact;
    fact=1;
    while(number>0){
        fact=number*fact;
        number=number-1;
    }
    return fact;   
}
document.write("<br>")

// write javascript function to check given number is strong number or not eg 145=1!+4!+5!=145

function strong(num){
    var sum, facto, originalnum;
    sum=0;
    originalnum=num;
    while(originalnum>0){
        remainder=originalnum%10;
        facto=1;
        while(remainder>0){
            facto=facto*remainder;
            remainder=remainder-1;
        }
        sum=sum+facto;
        originalnum=originalnum / 10  | 0;
            
    }
    if(sum==num){
        document.write("the number is strong");
    }
    else{
        document.write("the number is not strong");
    }
    return sum;
    
}

document.write(strong(145));
document.write("<br>");
document.write(strong(12));


var a=[12, 35, 45, 65, 7598, 2250, 100000, 2500 ];
var max=a[0];
for(i=0, i<6,i++ ) {
    if(max>a[i]){
        max=a[i];
    }
    document.write("the max num is"+max);
}




