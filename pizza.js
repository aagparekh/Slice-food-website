var d,p,sum;
function order1()
{
         d = "Spiced Paneer (Medium)";
         p = 439;
         document.getElementById('container').style.display = "none";
         var bil = document.getElementById('container1');
         bil.style.display = "block";
         document.getElementById('dish').innerHTML = d;
         document.getElementById('price').innerHTML = "Rs " + p; 
         document.getElementById('price1').innerHTML = "Rs " + p;
         sum = p + 40 + 28.5;
         document.getElementById('total').innerHTML = "Rs " + sum; 
}
function order2() {
        // var b= document.getElementsById('btn1');
         d = "Veggie Feast(Medium)";
         p = 475;
         document.getElementById('container').style.display = "none";
         var bil = document.getElementById('container1');
         bil.style.display = "block";
         document.getElementById('dish').innerHTML = d;
         document.getElementById('price').innerHTML = "Rs " + p; 
         document.getElementById('price1').innerHTML = "Rs " + p;
         sum = p + 40 + 28.5;
         document.getElementById('total').innerHTML = "Rs " + sum;
}
function order3() {
    d = "Farmer's Pick(Medium)";
    p = 569;
    document.getElementById('container').style.display = "none";
         var bil = document.getElementById('container1');
         bil.style.display = "block";
         document.getElementById('dish').innerHTML = d;
         document.getElementById('price').innerHTML = "Rs " + p; 
         document.getElementById('price1').innerHTML = "Rs " + p;
         sum = p + 40 + 28.5;
         document.getElementById('total').innerHTML = "Rs " + sum;
}
function cancel() {
    document.getElementById('container').style.display = "block";
     document.getElementById('container1').style.display = "none";
    
}
