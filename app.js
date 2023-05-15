//qustn 1
var num1= 12;
var num2= 23;

var sum= num1+ num2;
var printSum=document.write("the sum of"+" "+num1+" "+"and"+" "+num2+" "+"is"+" "+sum);
console.log("the sum of"+" "+num1+" "+"and"+" "+num2+" "+"is"+" "+sum+" "+ "addition");

//qustn 2 a

var num1= 34;
var num2= 12;

var sum= num1-num2;
var printSum= document.write("the sum of"+" "+num1+" "+"and"+" "+num2+" "+"is"+" "+sum+"<br>");
console.log("the sum of"+" "+num1+" "+"and"+" "+num2+" "+"is"+" "+sum+" "+ "subraction");


// qustn 2 b
var num1= 44;
var num2= 12;

var sum= num1%num2;
var printSum= document.write("the sum of"+" "+num1+" "+"and"+" "+num2+" "+"is"+" "+sum);
console.log("the sum of"+" "+num1+" "+"and"+" "+num2+" "+"is"+" "+sum+" "+"modulus");


// qustn 2 c
var num1= 12;
var num2= 12;

var sum= num1/num2;
var printSum= document.write("the sum of"+" "+num1+" "+"and"+" "+num2+" "+"is"+" "+sum);
console.log("the sum of"+" "+num1+" "+"and"+" "+num2+" "+"is"+" "+sum+" "+"divide");

// qustn 2 d
var num1= 12;
var num2= 2;

var sum= num1*num2;
var printSum= document.write("the sum of"+" "+num1+" "+"and"+" "+num2+" "+"is"+" "+sum);
console.log("the sum of"+" "+num1+" "+"and"+" "+num2+" "+"is"+" "+sum+" "+"multiplication");


//qustn 4
var movieTicket=600;
var purchaser= 5;

var total= movieTicket*purchaser;
var sum="the cost of"+" "+purchaser+" "+"is"+total+"Pkr";
var print= document.write(sum);
console.log(sum);

//qustn 5
var TABLES= parseInt(prompt(`input`))
 console.log(`<table><tr><th>TABLES</th></tr>`)

for( i=1; i<11; i++){
    console.log(`<tr><td> ${TABLES} x ${i} = ${i* TABLES}</td></tr>`);

 }
console.log(`</table>`)

// var TABLES= parseInt(prompt(`input`))
//  document.write(`<table><tr><th>TABLES</th></tr>`)

// for( i=1; i<11; i++){
//     document.write(`<tr><td> ${TABLES} x ${i} = ${i* TABLES}</td></tr>`);

//  }
// document.write(`</table>`)

//qustn 6

var celcius= 25;
var convrtFarehnhite=(celcius - 32) * 5/9;
var C_temp=document.write( convrtFarehnhite);
var C_temp=console.log( celcius+" "+"F"+" "+"is"+" "+convrtFarehnhite+" "+"C");



var frehnhite= 70;
var convrtCelcius=( frehnhite* 9/5)+32;
var C_temp=document.write( convrtFarehnhite);
var C_temp=console.log( frehnhite+" "+"C"+" "+"is"+" "+convrtCelcius+" "+"F");

//qustn 7
var item1= 650;
var item2= 100;
var quntity1=3;
var quntity2=7;
var shippingCharges=100;


var item1_sum=item1*quntity1;
var item2_sum=item2*quntity2;

var total_Cost=item1_sum+item2_sum+shippingCharges;
var total_Cost2=document.write(total_Cost);
console.log("SHOPPING CARD")
console.log("price of item 1 is"+" "+item1);
console.log("quantity of item 1 is"+" "+quntity1);
console.log("price of item 2 is"+" "+item2);
console.log("quantity of item 2 is"+" "+quntity2);
console.log("shipping charges"+" "+shippingCharges);
console.log("the total cost of your order is"+total_Cost);

//qustn 8

var totalMarks= 980;
var marksObtained= 804;

var percentage= totalMarks/marksObtained*100;

var sum=document.write(percentage);
console.log("MARK SHEET")
console.log("total marks: "+" "+totalMarks);
console.log("marks obtained:"+" "+marksObtained);
console.log("percentage:"+" "+percentage);

//qustn 9

var usDollar=104.80;
var riyal=28;

var sum=(usDollar*10)+(riyal*25);
console.log("currency in Pk");
console.log("Total currency in Pk:"+sum);

//qustn 10
var num=12;
 var sum=(num+5)*10/2;
 console.log("arthematic")
 console.log(sum)

 ///qustn 11
 var currentYear= 2023;
 var birthYear=1999;
 var age= currentYear - birthYear;
 console.log("AGE CALCULATOR");
 console.log("current year"+ currentYear);
 console.log("birth year" + birthYear);
 console.log("you are either "+age+" or "+ (age-1));

 //qustn 12
  var circle=20;
  var pi=3.14;
 var circumFerence= 2*pi*circle;
 var radiusOfArea= pi*circle*2;
 console.log("The Geomatrizier");
 console.log("Radius of a circle:"+" "+circle);
 console.log("the circumference is:"+" "+circumFerence);
 console.log("the area is:"+" "+radiusOfArea);


 //qustn 13

 var snacks= "choclate chips";
 var currentAge=15;
 var max_age=65;
 var snacksPerDay=3;
 var sum=currentAge*snacksPerDay;
 console.log(sum);




