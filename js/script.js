

/*function temperature(fehrenheit){
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
function prime(no){
    var new_no;
    var i;
    for(i=2; i<=no; i=i+1){
        new_no=no%i;
        if(new_no==0){
            return false;
        }
        return true;
        
        
    }
    
}
document.write(prime(25));
document.write("<br>");
document.write(prime(2));
document.write("<br>");
document.write(Math.sqrt(25));
document.write("<br>");
document.write(Math.abs(-123));
document.write("<br>");
document.write(Math.cos(60*(Math.PI/180)));
document.write("<br>");
document.write(Math.log10(10));
document.write("<br>");
document.write(Math.pow(5,3));
document.write("<br>");
document.write(Math.max(23,1,2,3,4,5,6,7));
document.write("<br>");
document.write(Math.min(1,2,3,4,5,6,7));*/
//document.getElementById("myPara").innerText = "helllo this is text from javascript"
//document.write("<br>");
//document.getElementById("myPara").innerHTML = "<img src='download.jpg'></img>"
function changemycolor(color){
    //alert = color;
    var myn=document.getElementById("myPara")
    myn.style.backgroundColor= color;
}
function onoff(btn){
    var bulb=document.getElementById("bulb");
    var status=bulb.getAttribute('src');
    if(status=='images/off.png'){
        bulb.setAttribute('src','images/on.png');
        btn.innerText = "off";
    }
    else{
        bulb.setAttribute('src','images/off.png');
        btn.innerText="on";
    }
}

$('#btn').click(function(){
    $('#myimg').fadeIn(3000);
});
$('#btn2').click(function(){
    $('#myimg').fadeOut(3000);
});

$('#source').click(function(){
    $('#xyz').slideDown("fast");
    $('xyz').slideTogle("fast");
});
$('#close').click(function(){
    $('#xyz').slideUp("fast");
});
$('#anim').click(function(){
    $('#mybox').animate({
        'left': '100px',
        'height': '+=650px',
        'width': '+=150px',
        'opacity' : '0.5',
    }, 5000);
});

$('#switch').click(function(){
    var status = $('#samebulb').attr('src');
    if(status =='images/on.png'){
        $('#samebulb').attr('src', 'images/off.png');
        $(this).text("on");
    }
    else{
        $('#samebulb').attr('src', 'images/on.png');
        $(this).text("off");
    }
});