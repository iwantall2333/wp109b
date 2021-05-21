
//var a=[];
function palindrome(a){  //在小括號內定義完a的型態，不用再另行定義，此a為function內的區域變數
    var str = a.split("").reverse().join("");
    if(a==str) console.log("it is palindrome"); 
    else console.log("it's not");

    console.log(a[0])  //a 字串 是一種陣列 卻不能用reverse
    console.log(a.split(""))
    console.log(a.split(" "))
}
palindrome("abcba")
palindrome("abc,ba")