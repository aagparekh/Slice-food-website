function restuarant()
{
    var a = document.getElementById('search');
    // console.log(a.value);
    if("MC Donalds" == a.value)
    {
        window.open("McDonalds.html");
    }
    if("Subway" == a.value)
    {
        window.open("subway.html");
        var b = document.getElementById('Subway_heading');
        console.log(b);
    }
    if("Pizza Hut" == a.value)
    {
        window.open("pizza_hut.html");
    }
}