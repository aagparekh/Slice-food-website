function thank()
{
    
    document.getElementById('box1').innerHTML = "Thank You for contacting us!!<br>We will get back to you as soon as possible<br><br>";
    document.getElementById('box1').style.color = "rgb(255,153,0)";
    document.getElementById('box1').style.fontSize = "30px";
    document.getElementById('box1').style.fontFamily = "'Carter One', cursive";
    var a = document.createElement("a");
    a.style.border = "2px solid rgb(255,153,0)";
    a.style.margin = "5px";
    a.style.borderRadius = "8px";
    a.style.padding = "5px 5px";
    a.style.color = "white";
    a.style.fontSize = "24px";
    a.style.background = "rgb(255,153,0)";
    a.style.textDecoration= "none";
    a.innerHTML = "home";
    a.href = "homepage.html";
    document.getElementById("box1").appendChild(a); 
    
}