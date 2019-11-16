/*
    ----------- Loop JavaScript   -------
    1. for 
    2. while
    3. do......while
    4. forEach() // forEach only working on as Array.
     

*/

/*for(var i=1; i<=10; i++)
{
    console.log(i);
}*/

/*
var i=12; // init
while(i<=10) // condition
{
    console.log(i*5);
    i++; // inc/dec
}
*/
/*
var i=12;
do{
    console.log(i*10);
    i++;
}while(i<=10);
*/
/*
var arr = ["red", "green", "blue", "yellow"];
arr.forEach(function(a, n){
    console.log(n);
    console.log(a);
});
*/
var data = [
    {
        name : "rohit",
        age : 24,
        city : "indore"
    },
    {
        name : "jaya",
        age : 22,
        city : "bhopal"
    },
    {
        name : "nilesh",
        age : 23,
        city : "ujjain"
    }
];

data.forEach(function(x){
    console.log(x.name);
});








