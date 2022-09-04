var d,p,sum;
function order1()
{
         d = "6 Inch Cheesy Aloo Patty";
         p = 245;
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
         d = "Tandoori Tofu Sub";
         p = 190;
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
    d = "Paneer Tikka Sub";
    p = 210;
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
