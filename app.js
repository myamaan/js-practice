// chapter 1 Alert

// alert('Hello java script i am alert');

// chapter 2 Variable For Strings

// var username;
// var myName = 'Full name';
// var message = 'hello world';
// alert(message);
// var name = 'yamaan';
// alert(name);
// var age = '18';
// alert(age);
// var skill = 'certified web developer';
// alert(skill);
// var food = (" pizza \n pizz \n piz \n pi \n p");
// alert(food);
// var email = ('my email address is ' + 'example@example.com');
// alert(email);
// var book = ('A smarter way to learn JavaScript');
// alert(book);
// var content = ('Yah! I can write HTML content through the JavaScript');
// document.write(content);
// var symbol = ('▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬');
// alert(symbol)

// chapter 3 VARIABLES FOR NUMBERS

// var age = 'Hello i am 18 years old';
// alert(age);
// var birthYear = prompt ('enter your birth year');
// document.write('My birth year is ' + birthYear +'\n data type of my declared variable is number');
// var name = prompt ('enter your name');
// var product = prompt ('enter product name');
// var quantity =prompt ('enter product quantity');
// document.write(name + ' ordered ' + quantity  + ' ' + product + ' on XYZ Clothing store');
 
// chapter 4 VARIABLE NAMES: LEGAL & ILLEGAL

// var num1 = 10 , num2 = 20 , num3 = 30;
// document.write(num1 + num2 + + num3)

// 5 legal variables

// var name = ('yamaan');
// var username_ = ('myamaan');
// var email = ('yamaan.official777@gmail.com');
// var name$ = ('yamaan');
// var name1 = ('yamaan');

// 5 illegal variables 

// var name% = ('yamaan');
// var name-1 = ('yamaan');
// var user name = ('yamaan');
// var 1name ('yamaan');
// var user+name = ('yamaan');

// var heading = ('<h1>Rules for naming JS variables</h1>');
// document.write(heading);
// var names = ('<p> Variable names can only contain numbers letters $dollar sign and _underscore</p>');
// document.write(names);
// var varName = ('<p> Variables must begin with a letter. $ or _. For example $name, _name or name</p> ');
// document.write(varName);
// var sensitive = ('<p> Variable names are case sensitive</p>')
// document.write(sensitive);
// var keywords = ('<p> Variable names should not be JS keywords</p>')
// document.write(keywords);

// MATH EXPRESSIONS 

// var num1 = +prompt ('enter number for adition');
// var num2 = +prompt ('enter number for adition');
// var add = (num1 + num2);
// document.write(' Sum of ' + num1 + ' and ' + num2 + ' is ' + add);

// var num1 = prompt ('enter number for subtraction');
// var num2 = prompt ('enter number for subtraction');
// var add = (num1 - num2);
// document.write(' Sum of ' + num1 + ' and ' + num2 + ' is ' + add);

// var num1 = prompt ('enter number for multiplication');
// var num2 = prompt ('enter number for multiplication');
// var add = (num1 * num2);
// document.write(' Sum of ' + num1 + ' and ' + num2 + ' is ' + add);

// var num1 = prompt ('enter number for division');
// var num2 = prompt ('enter number for division');
// var add = (num1 / num2);
// document.write(' Sum of ' + num1 + ' and ' + num2 + ' is ' + add);

// var value = value + prompt ('enter value');
// document.write('Value after variable declaration is:' + value + '<br>' );
// var value2 = +prompt ('enter initial value')
// document.write('Initial value:  ' + value2 + '<br>')
// var increment = +prompt ('enter increment value ');
// var add = value2+increment;
// document.write('Value after increment is:' + add + '<br>');
// var add1 = +prompt ('enter adition value') ;
// var add2 = add+add1
// document.write('Value after add '+ add1+' is ' + add2 + '<br>')
// var decrement = prompt ('enter decrement value');
// var decrement1 = add2-decrement;
// document.write(' Value after decrement is ' + decrement1 + '<br>')
// var reminder = decrement1 % 3;
// document.write(' The remainder is ' + reminder);

// var quantity = +prompt ('enter tickets quantity');
// var cost = quantity*600;
// document.write('The cost of buy '+ quantity + ' tickets to a movie is '+ cost+ ' PKR ');

// var tableHead = prompt ('enter table heading');
// document.write('<h1>Table of ' + tableHead  +'<br>'+'<br>');
// var table = prompt ('enter table value ' );
// document.write(table + ' X 1 = ' +  table * 1 +'<br>');
// document.write(table + ' X 2 = ' +  table * 2 +'<br>');
// document.write(table + ' X 3 = ' +  table * 3 +'<br>');
// document.write(table + ' X 4 = ' +  table * 4 +'<br>');
// document.write(table + ' X 5 = ' +  table * 5 +'<br>');
// document.write(table + ' X 6 = ' +  table * 6 +'<br>');
// document.write(table + ' X 7 = ' +  table * 7 +'<br>');
// document.write(table + ' X 8 = ' +  table * 8 +'<br>');
// document.write(table + ' X 9 = ' +  table * 9 +'<br>');
// document.write(table + ' X 10 = ' +  table * 10 +'<br>');

// var celsius = prompt ('enter celsius to convert farhenaite');
// var farhenaite = (celsius*9/5)+32 ;
// document.write(celsius + 'oC' + ' is '+ farhenaite + 'oF');

// var farhenaite = +prompt ('enter farhenite to convert celsius');
// var celsius = (farhenaite-32)*5/9;
// document.write(farhenaite + ' oF is ' + celsius + 'oC');

// SHOPPING CART

// var price1 = +prompt('enter price of item 1');
// var quantity1 = +prompt('enter quantity of item 1');
// var price2 = +prompt('enter price of item 2');
// var quantity2 = +prompt ('enter quantity of item 2');
// var shipping = +prompt ('enter shipping charges');
// document.write('Price of item 1 is ' + price1 + '<br>');
// document.write(' Quantity of item 1 is ' + quantity1 + '<br>');
// document.write('Price of item 2 is ' + price2 + '<br>');
// document.write(' Quantity of item 2 is ' + quantity2 + '<br>');
// document.write(' Shipping charges ' + shipping +  '<br>' )
// var cost1 = (price1 * quantity1);
// var cost2 = (price2 * quantity2);
// var cost3 = (cost1 + cost2);
// var totalCost = (cost3 + shipping)
// document.write('The total cost of your order is ' + totalCost);

// MARK SHEET

// var totalMarks = +prompt('enter your total marks');
// document.write('Total marks ' + totalMarks + '<br>');
// var obtainedMarks = +prompt('enter your obtained marks');
// document.write('Obtained marks ' + obtainedMarks + '<br>');
// var remarks = (obtainedMarks / totalMarks * 100);
// document.write('Percentage ' + remarks +'%');

// Currency in pkr

// var usd = prompt('enter ammount of USD');
// var usd1 = (usd * 279.75);
// var sr = prompt('enter ammount of SR');
// var sr1 = (sr * 74.59);
// var totalAmount = (usd1 + sr1);
// document.write('Total currency in PKR : ' + totalAmount);

// AGE CALCULATER;

// var currentYear = prompt('enter your current age year');
// document.write('Current age year ' + currentYear + '<br>');
// var birthYear = prompt('enter your current birth year');
// document.write('Birth year ' + birthYear + '<br>');
// var age = (currentYear - birthYear);
// document.write('Your age is ' + age);



