function normal()
{
    var x = 10;
    var y = 20;
    var z = x+y;
    return z;
}
function param(x,y)
{
    //var x = 10;
    //var y = 20;
    var z = x+y;
    return z;
}
function defnor(x=10,y=5)
{
    //var x = 10;
    //var y = 20;
    var z = x+y;
    return z;
}
var a = param(15,20);
var b = normal();
var c = defnor(10,5)
console.log(a);
console.log(b);
console.log(c);
