//q1
let num1 =10;
let num2 =20;
let num3 =5;
let maxnum = num1;
if(num1 > num2 && num1 > num3){
    console.log(maxnum)
}
else if (num2 > num1 && num2 > num3){
    maxnum=num2;
    console.log(maxnum)
}
else{
    maxnum=num3;
    console.log(maxnum)
}