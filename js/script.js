

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


var myPricelist = [4545 , 3434 , 23 , 34 ,45 , 324 , 5725, 727, 817 , 82 , 2 , 1 ]
var max = myPricelist [0];
var min = myPricelist [0];

for( var i = 1; i < myPricelist.length; i++)
{
      if(max < myPricelist[i]){
            max = myPricelist[i];
      }
      if(min > myPricelist[i]){
            min = myPricelist[i];
      }
}

document.write("Max = " + max);
document.write("</br>");
document.write("Min = " + min);
//write a function to check given number is prime or not 
//display the prime number

