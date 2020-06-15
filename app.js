
// // Chapter 1
// Task 1
// alert("ERROR! please enter a valid password");
// Task 2
// alert("Welcome to JS land ....\n Happy Coding");
// Task 3
// alert(" Happy Codding  \n prevent this page from creatig additional dialogs");
// Task 4
// alert("Hello... i can run Js through my web browser's console")





































// Chapter 2

// Task 1
// var username;
// var myname = "Muhammad Noman"

// Task 2
// var JS;
// JS = "Hello World"
// alert(JS)

// Task 3
// var name = prompt("enter your name");
// var age = prompt("enter your age");
// var skills = prompt("enter your Skills");
// alert(name);
// alert("<br>"+age + " Years old");
// alert("<br>"+skills);

// Task 4
// alert("PIZZA \n PIZZ \n PIZ \n PIZ \n PI \n P");

// Task 5
// var email = "nomi.khan121211@gmail.com"
// alert("my email address is " + email);

// Task 6
// var book = "A smarter way to learn JavaScript";
// alert("i am trying to learn from the book " + book);

// Task 7
// document.write("Yah ! I can write HTML content through JavaScript");









































// // chapter 3
// Task 1
// var age = 15;
// alert("i am " + age + " years old");

// Task 2
// var track= 0 ;
// alert("you have visited this site" + ++track + " times");

// Task 3
// var birthYear = 1999;
// document.write("My birth Year is "+ birthYear +" <br> "+ " \n Data type of my declared variable is number");

// Task 4
// var store="www.xyzClothing.com";
// var name=prompt("enter name","What's your name");
// var pro = prompt("product" , "what's you want to buy ");
// var quan= +prompt("How much you want ?", "enter quantity ")
// document.write(name +" ordered  " + " " + quan +" "+ pro + " on " +" "+ store);
































// chapter 4

// Task 1
// var x,y,z ;

// Task 2
// // legal variables
// var a;
// var a$c;
// var a_a;
// var c$a_a;
// var a1;

// Task 3
// // illegal varibles
// var $name;
// var _name;
// var _name_;
// var _name$;
// var  2;


// Task 4
// document.write("<h1>Rules for naming JS Variables </h1>"
// +"<br><br><br><br>"+"Variable names can only contain , numbers ,$ and _. For example : my_1stVariable"
// + "<br>" + "variable must bein with a letter ,$ or _ . For Example : $name, _name or name" + "<br>" +
// "Variable name are case sensitive" + "<br>" + "variable name sholud not be JS keywords");


























// chapter 5
// Task 1
// Math Expressions
// var a = 3;
// var b = 5;
// var c = a+b ;
// document.write("Sum of " + a +" and " + b + " is " +c);

// Task 2 
// var a = 3;
// var b = 5;
// var c = a-b ;
// var d = a*b ;
// var e = a/b ;
// var f = a%b ;
// document.write("Subtraction of " + a +" and " + b + " is " +c);
// document.write("<br>"+"mulltiplication of " + a +" and " + b + " is " +d);
// document.write("<br>"+"Division of " + a +" and " + b + " is " +e);
// document.write("<br>"+"Modules of " + a +" and " + b + " is " +f);

// Task 3
// var a ;
// document.write("Value after decleration variable is "+a);
// a=5;
// document.write("<br>"+"Initial value is : " + a);
// a++;
// document.write("<br>"+"Value After increment is : " + a);
// a=a+7;
// document.write("<br>"+"Value after addition is : " + a);
// --a;
// document.write("<br>"+"Value after decrement is :" + a);
// a= a&3;
// document.write("<br>"+"The reminder is : " + a);


// Task 4
// TICKET PRICING
// var cost = 600 ;
// var buy= 5;
// document.write("Total cost to buy  " + buy + " tickets to a movie is  "+ cost*buy +"PKR");

// Task 5
// TABLE
// var tab = +prompt("enter a table : ");
// document.write("Table of " + tab +"<br>");
// for(i=1; i<= 10; i++)
// {
//     document.write( tab + "x" + i + "=" + tab*i +"<br>");
// }


// Task 6
// TEMPRATURE
// var temp = +prompt("enter Censius temprature ");
// var f = (temp * 9/5)+ 32 ;
// document.write(temp+"*C is " + f + "*F" );
// var c = (temp - 32) * 5/9; 
// document.write("<br>"+temp+"*F is " + c + "*C" );


// Task 7
// SHOPPING CARD
// var item1 = +prompt("enter price of item 1 : ");
// var item2 = +prompt("enter price of item 2 : ");
// var oq1  = +prompt("ordered quantity of of item 1 : ");
// var oq2  = +prompt("ordered quantity of of item 2 : ");
// var sp = +prompt("Shipping Charges : ");
// document.write("<br><br>"+"<h1> Shipping Cart </h1> ");
// document.write("Price of item 1 is " + item1);
// document.write("<br>"+"Quantity of item 1 is " + oq1);
// var t1 = item1*oq1 ;
// document.write("<br>"+"Price of item 2 is " + item2);
// document.write("<br>"+"Quantity of item 2 is " + oq2);
// var t2 = item2*oq2 ;
// document.write("Shipping Charges " +sp);
// var total = t1+t2+sp;
// document.write("<br>"+"<br>"+"Total Cost of Your Order is " + total);



// Task 8
// MARKSHEET
// var total =+prompt("Enter your total marks : ");
// var obt = +prompt("Enter obtained marks : ");
// document.write("<br><br><br>"+" <h1> STUDENT MARKSHEET </h1> ");
// document.write("<br>"+"Total Marks = " +total);
// document.write("<br>"+"Marks obtained =" +obt);
// var per = (obt /total) *100;
// document.write("<br>"+"Percentage =" +per + " %");



// Task 9
// CURRENCY CONVERTER
// var dol = 10*104.80;
// var sad = 25*28;
// document.write(" <h1> Currency in PKR </h1> "+"<br><br><br>");
// document.write("10 Dollars = "+ dol +" PKR"+"<br>");
// document.write("25 Saudi Riyal = "+ sad +" PKR"+"<br>");





// Task 10
// single calculation expression
// var a= ((10+5)*10)/2;
// document.write(a);

// Task 11
// AGE CALCULATION
// var cur= +prompt("Enter current year : ");
// var birth=+prompt("Enter birth Year : ");
// var age= cur - birth;
// document.write(" <h1>Age Calculator</h1>  "+"<br>"+"<br>"+"<br>");
// document.write("<br>"+"Current Year : "+ cur );
// document.write("<br>"+"Birth Year : "+ birth );
// document.write("<br>"+"Your age  : "+ age );





// task 12
// properties of circle




// Task 13
// lifetime supply calculator
// var fs = prompt("enter your fav snaks : ");
// var cu = prompt("enter your current age : ");
// var max = prompt("enter your Max age : ");
// var st = +prompt("enter Amount of snacks you at per day : ");

// document.write("<h1> The Lifetime Supply Calculator </h1>"+"<br><br><br><br>");
// document.write("<br> "+"favroute Snacks : " + fs);
// document.write("<br> "+"Current Age : " + cu);
// document.write("<br> "+"Estimated Maximum Age : " + max);
// document.write("<br> "+"Amount of Snacks per day : " + st);
// document.write("<br> "+"you will need "+ cu + "0" +" chocolate chi[ to last you until the ripe old age of " + max);

















































































// chapter 6-9

// Task 1
// // increment and decrement program
// var a = +prompt("enter the number : ");
// document.write("<h1> Result : </h1>"+"<br>");
// document.write("The Value of a is :  " + a + "<br> ...........................................................<br><br> ");
// document.write("<br>" + "The value of ++a is : " + ++a );
// document.write("<br>" + "Now value of a is : " + a );
// document.write("<br><br><br>" + "The value of a++ is : " + a++ );
// document.write("<br>" + "Now value of a is : " + a );
// document.write("<br><br><br>" + "The value of --a is : " + --a );
// document.write("<br>" + "Now value of a is : " + a );
// document.write("<br><br><br>" + "The value of a-- is : " + a-- );
// document.write("<br>" + "Now value of a is : " + a );




// Task 2
// increment and decrement 
// var a = 2 ;
// var b = 1 ;
// var Result = --a - --b + ++b + b ;
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;
// document.write("a is : " + a);
// document.write("<br>" +"b is : " + b);
// document.write("<br>" +"Result : " + Result);



// task 5
// user Talbe
// var tab = +prompt("enter Table number : " );
// if (tab)
// {
//     document.write("<h1> Table of </h1> " + tab) ;
//     for(i=1; i < 11; i++)
//     {
//      document.write("<br>"+ tab +" X " + i + "=" + tab*i );
//     }
// }
// else
// {
// var  c=5;
// document.write("Table of 5");
// for(i=1; i < 11; i++)
// {
//     document.write("<br>"+"5 X " + i + "=" + c*i );
// }
// }








// student data
// wrong
// var first = prompt("Subject : ","Enter first subject Name  ");
// var sec = prompt("Subject : ","Enter Second subject Name  ");
// var third = prompt("Subject : ","Enter Third subject Name  ");

// const total =100;

// var obt1 = +prompt("Obtained Marks of first subject = ");

// document.write(" <th> <h3> Subject </h3> </th> ");
// document.write("<br>"+"<td>"+ first + "</td>");
// document.write("<br>"+"<td>"+ sec + "</td>");
// document.write("<br>"+"<td>"+ third + "</td>");













































// chapter 9-11

// Task 1
// var city = prompt("City","Enter city name ");
// if (city === "karachi")
// {
//     document.write("Welcome to the city of light ! ");
// }







// Task 2
// gender
// var gen = prompt("Gender :", "enter your gender ");
// if(gen === "male")
// {
//     document.write("Good morning Sir !");
// }
//  else if(gen === "female")
// {
//     document.write("Good morning maam !");
// }
// else{
//     document.write("you enter invalid info...")
// }




// Task 3
// signal color
// var sig = prompt("Signal Color ", "Enter road signal color ");
// if(sig==="red" || sig==="RED")
// {
//     document.write("Must Stop !");
// }
// else if(sig==="yellow" || sig==="YELLOW")
// {
//     document.write("Ready to move !");
// }
// else if(sig==="green" || sig==="GREEN")
// {
//     document.write("Move Now ! ");
// }
// else{
//     document.write("invalid info...");
// }






// Task 4
// fuel pump
// var fuel = +prompt("Fuel :","Enter Fuel in litres ");
// if(fuel < 0.25 )
// {
//     document.write("Please refill the fuel in your car !")
// }






// Task 5
// practice script   NOT Distplayed
// var a=4;
// if (++a === 5)
// {
//     alert("Given condition for variable a is true ");
// }
// Var b=82;
// if (b++=== 83)
// {
//     alert("Given condition for variable B is true ");
// }
// var c=12;
// if (c++ === 13)
// {
//     alert("Given condition 1 for variable a is true ");
// }
// if (c === 13)
// {
//     alert("Given condition 2 for variable a is true ");
// }var c=12;
// if (++c < 14)
// {
//     alert("Given condition 3 for variable a is true ");
// }
// if (c === 14)
// {
//     alert("Given condition 4 for variable a is true ");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost+laborCost;
// if(totalCost===laborCost+materialCost)
// {
//     alert("The Cost Equals");
// }
// if(true)
// {
//     alert("True");
// }
// if(false)
// {
//   alert("False");
// }

// if("car" < "cat")
// {
//     alert("car is smaller then cat ");
// }






// Task 6
// // marksheet
// const total =+prompt("Enter Total");
// var obt = new Array();

//  obt[0]=+prompt("Ist subject","enter marks ");
//  obt[1]=+prompt("2nd subject","enter marks ");
//  obt[2]=+prompt("3rd subject","enter marks ");

// function sum(result,value)
// {
//     return result + value;
// }

// var tm = obt.reduce(sum) ; 
// var per = (tm/total)*100;
// document.write("<h1> Marks Sheet </h1>");
// document.write("<br>"+"Total Marks :" + total);
// document.write("<br>"+"Marks Obtained : " + tm);
// document.write("<br>"+"Percentage : " + per + "%");

// if(per >= (80))
// {
//     document.write("<br>"+"A-one");
//     document.write("<br>"+"Excellent");
// }
// else if( per < (80) && per >= (70) )
// {
//     document.write("<br>"+"A");
//     document.write("<br>"+"Good");
// }
// else if( per < (70) && per >= (60) )
// {
//     document.write("<br>"+"B");
//     document.write("<br>"+"You need to improve");
// }
// else if (per < 60)
// {
//     document.write("<br>"+"Fail");
//     document.write("<br>"+"Sorry");
// }
// else
// {
//     document.write("invalid info... ");
// }






// Task 7
// guess game
// var win = 7;
// var ch = +prompt("guess A number b/w 1-10  ");

// if(ch=== 7)
// {
//     document.write("Bingo! CORRECT ANSWER");
// }
// else
// {
//     document.write("close enough to the correct ans!")
// }





// Task 8
// divisible by 3
// var ch= +prompt("Choose the number :");
// var t =  3;
// if( ch % t === 0)
// {
//     document.write("This number is divisible by 3");
// }
// else
// {
//     document.write("this number is not divisible by 3");
// }









// Task 9
// even odd Number
// var num= +prompt("Enter any number ");
// if (num%2 === 0)
// {
//     document.write("its an Even number !");
// }
// else
// {
//     document.write("its an Odd number !");
// }









// Task 10
// measuring Temprature
// var temp = +prompt("enter Temprature :");
// if(temp > 40)
// {
//     document.write("its is to hot outside !");
// }
// else if(temp > 30)
// {
//     document.write("The weather today is normal !");

// }
// else if(temp > 20)
// {
//     document.write("Today's weather is cool !");

// }
// else if(temp > 10)
// {
//     document.write("OMG!Today's weather is soo cool !");

// }
// else
// {
//     document.write("wrong info...");
// }











// Task 11
// calculator
// var n1=+prompt("enter first number");
// var op=prompt("enter operator ");
// var n2=+prompt("enter Second number");
// if(op === '+')
// {
//     c=n1+n2;
//     document.write("The sum of first and second number is "+ c);
// }
// else if(op === '-')
// {
//     c=n1-n2;
//     document.write("The Subtraction of first and second number is "+ c);
// }
// else if(op === '*')
// {
//     c=n1*n2;
//     document.write("The Multiplication of first and second number is "+ c);
// }
// else if(op === '/')
// {
//     c=n1/n2;
//     document.write("The Division of first and second number is "+ c);
// }
// else if(op === '%')
// {
//     c=n1%n2;
//     document.write("The Module of first and second number is "+ c);
// }

// else{
//     document.write("invalid operatior or syntax !");
// }


































































// chapter 12-13

// Task 1

// Task 2
// larger or equal
// var n1= +prompt("Enter first number :");
// var n2= +prompt("Enter second number :");
// if(n1===n2)
// {
//     document.write("Both numbers are equal..!");
// }
// else if(n1>n2)
// {
//     document.write(n1+" is greater !");
// }

// else if(n1<n2)
// {
//     document.write(n2+" is greater !");
// }
// else
// {
//     document.write("invalid number");
// }







// Task 3
// checking sign
// var num =+prompt("Enter a number :");
// if(num === 0 )
// {
//     document.write("its a zero");
// } 
// else if(num < 0)
// {
//     document.write("its a negative number");
// } 
// else if(num > 0 )
// {
//     document.write("its a Positive number");
// } 
// else
// {
//     document.write("invalid ");
// }






// Task 4
// vowel
// var v = prompt("Vowel","Enter a  character ");

// if(v=='a'|| v==='e' || v==='i' || v==='o' || v ==='u')
// {
//     document.write("True");
// }
// else
// {
//     document.write("False");
    
// }

 



// Task 5
// store correct password
// var pass="correct"
// var c=prompt("enter a password");
// if (c=== "")
// {
//     document.write("plz enter your password !");
// }
// else if (c === pass)
// {
//     document.write("Correct! the password you entered matches the original password");
// }
// else
// {
//     document.write("invalid password !");
// }








// Task 6
// fix bug
// var greeting;
// var hour = 13;
// if(hour < 18)
// {
//     greeting='Good Day';
// }
// else
// {
//     greeting="Good Evening";
// }








// Task 7
// time managment
// var t=+prompt("Time", "Enter time using 24 hour clock format");

// if(t>= 0000 && t < 1200)
// {
//     document.write("Good morning");
// }
// else if(t>= 1200 && t < 1700)
// {
//     document.write("Good Afternoon");
// }
// else if(t>= 1700 && t < 2100)
// {
//     document.write("Good evening");
// }
// else if(t>= 2100 && t <= 2359)
// {
//     document.write("Good Night");
// }
// else
// {
//     document.write("invalid timing !");
// }































































// chapter 14-16
// Array

// Task 1
//  var array = [];

// Task 2
//  var st = new Array();

// Task 3
//  var string = ["muhammad","noman" ,"khan"];

// Task 4
//  var number = [1,2,3,4,5];

// Task 5
//  var bollean =[true ,false];

// Task 6
//  var mix = ["muhammad", 1 ,2 ,"noman" , 3 ,"khan"];

// Task 7
//  var qua = ["1) SSC" , "<br> 2) HSC","<br> 3) BCS","<br> 4) BS","<br> 5) BCOM","<br> 6) MS","<br> 7) M.Phil","<br> 8) PhD"];
// document.write("<h1>Qualification</h1>");
// document.writeln("<br><br>"+ qua );




// Task 8
// student data using array
// var st = new Array();
//  st[0] = prompt("enter 1st name :");
//  st[1] = prompt("enter 2nd name :");
//  st[2] = prompt("enter 3rd name :");
// var n = new Array(); 
//  n[0]= +prompt("enter number of first student : ");
//  n[1]= +prompt("enter number of second student :");
//  n[2]= +prompt("enter number of third student :");
// var t = 500;
// var per = [(n[0]/t)*100 , (n[1]/t)*100 , (n[2]/t)*100 ];
// document.write("<h1> Student Score </h1>"+"<br>");
// document.write("<br>"+"Score of "  + st[0] + " is " + n[0] + ". Percentage : "  + per[0] +" %" );
// document.write("<br>"+"Score of "  + st[1] + " is " + n[1] + ". Percentage : "  + per[1] +" %");
// document.write("<br>"+"Score of "  + st[2] + " is " + n[2] + ". Percentage : "  + per[2] +" %");






// colors array

// var color = ["red" , "yellow" , "green" , "blue" ,"black"];
// document.write(color);

// // a.  add in strt
// var ad = prompt("enter color you want to add in Start : ");

// color.unshift(ad);
// document.write("<br> ,"+color) ;



// // b. add in end
// var ad = prompt("enter color you want to add in end : ");
// var b = color.push(ad);
// document.write(b) ;
// document.write("<br>"+color) ;

// // c.


// // d. out from strt
// var d = color.shift()
// document.write(d);
// document.write("<br>"+color) ;


// // e. out from end
// color.pop();
// document.write(ad);
// document.write("<br>"+color) ;













// Task 10
// var sc = [320 , 230 ,480 , 120];
// document.write("Score of Students : "  + sc );
// document.write("<br>" + "Ordered Score of Students : "  + sc.sort() );









// Task 11
var city = ["Karachi","lahore","Islamabad" ,"Quetta" , "Peshawar"];

document.write("Cities list :"+"<br>"+city);
document.write("<br>"+"Selected Cities list :"+"<br>"+city.concat());



































// chapter 17 - 20
// Task 1
// var arr = [[],[],[]];


// // Task 2
// var arr = [ [0 , 1 , 2 , 3] , [1 , 0 , 1 , 2] , [2 , 1 , 0 ,1]];
// document.write(arr[0] + "<br>" + arr[1] + "<br>" + arr[2] );


// Task 3
// series
// for(var i = 1 ; i<=10; i++)
// {
//     document.write(i+"<br>");
// }




// Task 4
// multipliaction table of any number using for loop
// var tab = +prompt("Enter a number for multiplication table :");
// var num = +prompt("Enter a number to end multiplication table :");
// for(var i = 1; i<= num; i++)
// {
// document.write("<br>"+ tab +" X " + i + " = " + tab*i );
// }






// Task 5
// var fruits =["apple" , "<br> banana", "<br> mango ", "<br> orange ", "<br> strawberry "];
// document.write(fruits);
// document.write("<br><br>"+"Element ar index 0 is " + fruits[0]);
// document.write("<br>"+"Element ar index 1 is " + fruits[1]);
// document.write("<br>"+"Element ar index 2 is " + fruits[2]);
// document.write("<br>"+"Element ar index 3 is " + fruits[3]);
// document.write("<br>"+"Element ar index 4 is " + fruits[4]);






// Task 6
// counting practice

// document.write("<h1>Counting :</h1>")
// for(var i=1 ; i <=15 ; i++)
// {
//     document.write(" ,"+i);
// }

// document.write("<h1>Reverse Counting :</h1>")
// for(var i=10 ; i >= 1 ; i--)
// {
//     document.write(" ,"+i);
// }

// document.write("<h1>Even :</h1>")
// for(var i=0 ; i <=20 ; i=i+2)
// {
//     document.write(" ,"+i);
// }

// document.write("<h1>Odd :</h1>")
// for(var i=1 ; i <=20 ; i=i+2)
// {
//     document.write(" ,"+i);
// }

// document.write("<h1>Even :</h1>")
// for(var i=2 ; i <=20 ; i=i+2)
// {
//     document.write(" ,"+i+"k");
// }




// // Task 7
// var A = ["cake" , "apple pie" , "cookie" , "chips" , "patties"];
// var c = prompt("Welcome to ABC bakery /n What you Want to order :")
// var b = A.indexOf(c); 
// document.write("we have avalaible in bakery at index " + b + "in our bakery" );



// // Task 8
// var A = [24 , 53 , 78 ,91 ,12];
// document.write("Array items : "+ A );
// var A = Math.max(24 , 53 , 78 ,91 ,12);
// document.write("<br>"+"The Largest number is  "+ A );



// Task 9
// var A = [24 , 53 , 78 ,91 ,12];
// document.write("Array items : "+ A );
// var A = Math.min(24 , 53 , 78 ,91 ,12);
// document.write("<br>"+"The Largest number is  "+ A );


// Task 10 
// for (var i = 5; i <= 100 ; i=i+5 )
// {
//     document.write(i + " ,");
// }








