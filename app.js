// Chapter 1 task# 1:
alert("Welcome!");


// Chapter 1 task# 2:
alert("Error! Please enter a valid password.");


// Chapter 1 task# 3:
alert("Welcome to JS Land... \nHappy Coding!");


// Chapter 1 task# 4:
alert("Welcome to JS Land...");
alert("Prevent this page from creating additional dialogs");


// Chapter 1 task# 5:
console.log("Hello... I can run JS through my web browser's console");


// Chapter 1 task# 6:
alert("Hello World!");
prompt("Hello World");


// Chapter 1 task# 7:
// a. Head    b. Body (before your page’s HTML)   c. Body (inside your page’s HTML)  d. Body (after your page’s HTML)


// Chapter 2 task# 1:
var username;


// Chapter 2 task# 2:
var myName = "Muneeba M.Younus"


// Chapter 2 task# 3:
var message = "Hello World"
alert(message);


// Chapter 2 task# 4:
var Name = "Jhone Doe";
var age = "15 years old"
var certification = "Certified Mobile App Development"
alert(Name);
alert(age);
alert(certification);


// Chapter 2 task# 5:
var word = "PIZZA"
alert("PIZZA\nPIZZ\nPIZ\nPI\nP");


// Chapter 2 task# 6:
let email = "muneeba.younus2001@gmail.com";
alert('My email address is ' + email );


// Chapter 2 task# 7:
var book = "A smarter way to learn JavaScript"
alert("I am trying to learn from a Book " + book);


// Chapter 2 task# 8:
document.write("Yah! I can write HTML content through JavaScript")


// Chapter 2 task# 9:
alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");


// Chater 3 task# 1:
var age = 19;
alert("I am "+ age +" years old");


// Chater 3 task# 2:
var count = 14;
alert("You have visited this site " + count + " times");


// Chater 3 task# 3:
var birthYear = 2001;
document.write("My bith year is " + birthYear + "<br>Data type of my declared variables is " + typeof(birthYear) );


// Chater 3 task# 4:
var name = prompt("Your Name: ");
var title = prompt("Product Title: ");
var quantity = prompt("Quantity: ");
document.write("<br>" + name + " ordered " + quantity + " " + title + " on XYZ Clothing Store");


// Chapter 4 task# 1:
var name = "Muneeba Younus", age = 19, Assignments = "JavaScript Assignments";


// Chapter 4 task# 2:
var number, $variable, _variable, variable1, variable1_$;
//var 1variable, !variable, function , #variable, variable ^ ;


// Chapter 4 task# 3:
document.write("<h1>Rules for naming JS variables</h1>Variables can only contain , numbers, $ and _. For example : $my_1stVariable <br>Variables must begin with a letter, $ or _ . For example : $name,_name or name <br>Variables names are case sensitive <br>Variables names should not be JS keywords");


// Chapter 5 task# 1:
var num1 = 3, num2 = 5;
var ans = num1 + num2;
document.write("Sum of " + num1 + " and " + num2 + " is " + ans);


// Chapter 5 task# 2:
var num1 = 3, num2 = 5;
var ans = num1 - num2;

document.write("<br>Subtraction of " + num1 + " and " + num2 + " is " + ans);
var num1 = 3, num2 = 5;
var ans = num1 * num2;

document.write("<br>Multiplication of " + num1 + " and " + num2 + " is " + ans);
var num1 = 3, num2 = 5;
var ans = num1 / num2;

document.write("<br>Division of " + num1 + " and " + num2 + " is " + ans);
var num1 = 3, num2 = 5;
var ans = num1 % num2;

document.write("<br>Modulus of " + num1 + " and " + num2 + " is " + ans);



// Chapter 5 task# 3:
var variable;
document.write("<br><br><br>Value after value declaration is "+ variable);
variable = 13;
document.write("<br>Initial Value: "+ variable);
variable++;
document.write("<br>Value after increment is: " + variable);
variable = variable + 7;
document.write("<br>Value after addition is: " + variable);
variable--;
document.write("<br>Value after decrement is: " + variable);
variable = variable % 3;
document.write("<br>The remainder is: " + variable);


// Chapter 5 task# 4:
var price = 600;
var total_price = 600 * 5;
document.write("<br><br><br>Total cost to buy 5 tickets to a movie is " + total_price + "PKR");


// Chapter 5 task# 5:
var table = 8;
document.write("<br><br><br>Table of " + table);
for(var i = 0; i<10; i++){
    document.write("<br>" + table + " * " + (i+1) + " = " + table * (i+1));
}


// Chapter 5 task# 6:
var temp1 = 32;
document.write("<br><br><br>" + temp1 +"°C is " + ((temp1 * 9/5)+32) + "°F");
var temp2 = 95;
document.write("<br>" + temp2 +"°F is " + ((temp2 - 32) * 5/9) + "°C");


// Chapter 5 task# 7:
var item1 = 590;
var item2 = 370;
var quantity_1 = 5;
var quantity_2 = 7;
var s_charges = 300;
var total_charges = (item1 * quantity_1) + (item2 * quantity_2) + s_charges;
document.write("<h1>Shopping Cart</h1>Price of item 1 is: " + item1 + "<br>Quantity of item 1 is " + quantity_1 + "<br>Price of item 2 is: " + item2 + "<br>Quantity of item 2 is " + quantity_2 + "<br>Shipping Charges: " + s_charges + "<br><br>Total cost of your order is: " + total_charges);


// Chapter 5 task# 8:
var totalMarks = 850;
var obtainedMarks = 721;
percentage = obtainedMarks / totalMarks * 100;
document.write("<h1>Marks Sheet</h1>Total Marks: " + totalMarks + "<br>Obtained Marks: " + obtainedMarks + 
"<br>Percentage: " + percentage);


// Chapter 5 task# 9:
var dollars = 10;
var riyals = 25;
total_price = (10 * 104.80) + (25 * 28);
document.write("<h1>Currency in PKR</h1>Total currency in PKR is " + total_price);


// Chapter 5 task# 10:
var number = 5;
number = number * 5 * 10 / 2;
document.write("Code 10:<br>" + number);


// Chapter 5 task# 11: The Age Calculator: 
var currentYear = 2020;
var birthYear = 2001;
var age = currentYear - birthYear;
document.write("<h1>Age Calculator</h1>Your Age is: " + age);


// Chapter 5 task# 12: The Geometrizer:
var radius = 27;
var circumference = 2 * 3.142 * 27;
var area = 3.142 * 27 * 27;
document.write("<h1>The Geometrizer</h1>Radius of Circle: " + radius + "<br>The circumference is: " + circumference + "<br>The area is: " + area);


//Chapter 5 task# 13: The Lifetime Supply Calculator: 
var favSnack = "Cheese Sticks";
var age = 19;
var maxAge = 75;
var amount = 3;
var key = (maxAge - age) * amount;
document.write(" <h1>The Lifetime Supply Calculator</h1>Favourite Snack: " + favSnack + 
"<br>Current Age: " + age + "<br>Estimated Maximum Age: " + maxAge + "<br>Ammount of snacks per day: " + amount 
+ "<br>You will need " + key + " " + favSnack + " to last you until the ripe old age of " + maxAge);


//Chapter 6-9 task# 1:
var num = 10;
document.write("Result: <br>The value of num is: " + num + "<br> ...........................................<br><br>The value of ++num is: " + ++num +
"<br>Now the value of num is: " + num + "<br><br>The value of num++ is: " + num++ + "<br>Now the value of num is: " + num);
document.write("<br><br>The value of --num is: " + --num + "<br>Now the value of num is: " + num + 
"<br><br>The value of num-- is: " + num-- + "<br>Now the value of num is: " + num);


//Chapter 6-9 task# 2:
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
--a;
--a - --b;
--a - --b + ++b;
--a - --b + ++b + b--;

document.write("<br><br><br>" + a + "<br>" + b + "<br>" + result + "<br><br>Explanation:");
document.write("<br>--a = 2 - 1 = 1" + "<br>--a - --b = 1 - 0 = 1" +
"<br>--a - --b + ++b = 1 - 0 + 1" + "<br>--a - --b + ++b + b-- = 1 - 0 + 1 + 1");


//Chapter 6-9 task# 3:
var name = prompt("Enter name");
alert("Welcome! " + name)

document.write("<br>");


//Chapter 6-9 task# 5:
var table = prompt("Enter any number");
if(table == 5){
    for(var i = 1; i <= 10; i++){
        document.write("<br>" + 5 + " * " +  i  + " = " + (5*i));
    }
}
else{
    for(var i = 1; i <= 10; i++){
        document.write("<br>" + table + " * " +  i + " = " + (table*i));
    }
}


// Chapter 6-9 task# 6:
var sub1 = prompt("Enter Subject 1");
var sub2 = prompt("Enter Subject 2");
var sub3 = prompt("Enter Subject 3");
var totalMarks = 100;
var total_marks = totalMarks * 3;
var obtainedMarks1 = prompt("Enter Marks for Subject 1");
var obtainedMarks2 = prompt("Enter Marks for Subject 2");
var obtainedMarks3 = prompt("Enter Marks for Subject 3");

var percentage1 = obtainedMarks1 / 100 * 100;
var percentage2 = obtainedMarks2 / 100 * 100;
var percentage3 = obtainedMarks3 / 100 * 100;

var obtainedMarks = parseInt(obtainedMarks1) + parseInt(obtainedMarks2) + parseInt(obtainedMarks3);
var percentages = obtainedMarks / total_marks * 100;

document.write("<table>     <tr><th>Subjects</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>  <tr><td>" + sub1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td><td>" + percentage1 + "%</td></tr><tr><td>" + sub2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td><td>" + percentage2 + "%</td></tr><tr><td>" + sub3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td><td>" + percentage3 + "%</td></tr> <tr><th></th><th>" + total_marks + "</th><th>" + obtainedMarks + "</th><th>" + percentages + "%</th></tr>    </table>");


//Chapter 9-11 task# 1:
var city = prompt("Enter city: ");
if (city === "Karachi" || city === "KARACHI" || city === "karachi") {
    alert("Welcome to the city of lights");
}
else {
    alert("Welcome!");
}


//Chapter 9-11 task# 2:
var gender = prompt("Enter your gender:");
if (gender === "Female" || gender === "female" || gender === "FEMALE") {
    alert("Good Morning Ma'am");
}
else if (gender === "Male" || gender === "male" || gender === "MALE") {
    alert("Good Morning Sir");
}
else {
    alert("Good Morning");
}


//Chapter 9-11 task# 3:
var color = prompt("Enter traffic signal color:");
if (color === "red" || color === "RED" || color === "Red") {
    alert("Must Stop");
}
else if (color === "yellow" || color === "YELLOW" || color === "Yellow") {
    alert("Ready to move");
}
else if (color === "green" || color === "GREEN" || color === "Green") {
    alert("Move now");
}
else {
    alert("invalid color")
}


//Chapter 9-11 task# 4:
var remainingFuel = prompt("Enter remaining fuel (in litres): ");
if (remainingFuel < 0.25) {
    alert("Please refill the fuel in your car.");
}
else {
    alert("You are good to go.");
}


//Chapter 9-11 task# 5:
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}
//b.
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}
//c.
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}
//d.
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
//e.
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}
//f. 
if ("car" < "cat") {
    alert("car is smaller than cat");
}

//Chapter 9-11 task# 6:
var marksObtained1 = prompt("Enter Subject 1 Marks: ");
var marksObtained2 = prompt("Enter Subject 2 Marks: ");
var marksObtained3 = prompt("Enter Subject 3 Marks: ");
var marksObtained = parseInt(marksObtained1) + parseInt(marksObtained2) + parseInt(marksObtained3);
var percentage = (marksObtained/300) * 100;
document.write("Marks Sheet <br>");
document.write("<br>Total Marks: 300");
document.write("<br>Obtained Marks: " + marksObtained);
document.write("<br>Percentage: " + percentage + "%");
if (percentage >= 80){
    document.write("<br>Grade: A1<br>Remarks: Excellent");
}
else if (percentage >= 70){
    document.write("<br>Grade: A<br>Remarks: Good");
}
else if (percentage >= 60){
    document.write("<br>Grade: B<br>Remarks: You need to improve");
}
else{
    document.write("<br>Grade: Fail<br>Remarks: Sorry");
}


//Chapter 9-11 task# 7: Guess game:
var secretNumber = 13;
var userEnteredSecretNumber = prompt("Guess the Secret Number: ");
if (userEnteredSecretNumber == secretNumber) {
    alert("Correct! The Secret Number is " + secretNumber + ".");
}
else if (userEnteredSecretNumber == secretNumber+1) {
    alert("Close enough to the correct answer.");
}
else{
    alert("Wrong Guess! The Secret Number is " + secretNumber + ".");
}


//Chapter 9-11 task# 8:
var number = prompt("Enter any number to check: ");
if (number % 3 == 0 ) {
    alert(number + " is divisible by 3.");
} else {
    alert(number + " is not divisible by 3.");
}


//Chapter 9-11 task# 9:
var number = prompt("Enter any number to check: ");
if (number % 2 == 0 ) {
        alert(number + " is Even Number.");
} else {
        alert(number + " is Odd Number.");
}


//Chapter 9-11 task# 10:
var temperature = prompt("Enter Temperature: ");
if (temperature > 40) {
        alert("It is too hot outside.");
} 
else if (temperature > 30) {
        alert("The Weather today is Normal.");
} 
else if (temperature > 20) {
    alert("Today’s Weather is cool.");
}
else if (temperature > 10) {
    alert("OMG! Today’s weather is so Cool.");
}
else{
    alert("OMG! Today’s weather is super Cool.");
}


//Chapter 9-11 task# 11:
var num1 = prompt("Enter Number 1:");
var num2 = prompt("Enter Number 2:");
var operator = prompt("Enter Operator:");
if (operator === "+") {
   alert(parseInt(num1) + parseInt(num2));
}
else if (operator === "-") {
    alert(parseInt(num1) - parseInt(num2));
}
else if (operator === "*") {
    alert(parseInt(num1) * parseInt(num2));
}
else if (operator === "/") {
    alert(parseInt(num1) / parseInt(num2));
}
else if (operator === "%") {
    alert(parseInt(num1) % parseInt(num2));
}
else{
    alert("invalid operator");
}


// Chapter 12-13 task# 1:
var char = prompt("Enter any character:");

if(char >= '0' && char <= '9'){
    alert(char + " is a number.");
}
else if(char >= 'a' && char <= 'z'){
    alert(char + " is a Lower Case Letter.");
}
else if (char >= 'A' && char <= 'Z') {
    alert(char + " is a Upper Case Letter.");
}
else{
    alert(char + " is a special character");
}


// Chapter 12-13 task# 2:
var num1 = prompt("Enter Number 1:");
var num2 = prompt("Enter Number 2:");
if(num1 > num2){
    alert(num1 + " is greater than " + num2 + ".");
}
else if(num1 < num2){
    alert(num2 + " is greater than " + num1 + ".");
}
else{
    alert(num1 + " is equal to " + num2 + ".");
}


// Chapter 12-13 task# 3:
var number = prompt("Enter any number to check:");
if(number > 0){
    alert(number + " is a positive integer.");
}
else if(number < 0){
    alert(number + " is a negative integer.");
}
else{
    alert(number + " is a zero.");
}


// Chapter 12-13 task# 4:
var char = prompt("Enter any char to check:");
if (char === "a" ||char === "e" ||char === "i" ||char === "o" ||char === "u" ||char === "A" ||char === "E" ||char === "I" ||char === "O" ||char === "U"){
    alert(char + " is a vowel.");
}
else{
    alert(char + " is not a vowel.");
}


// Chapter 12-13 task# 5:
var originalPassword = "MuneebaYounus";
var userEntered = prompt("Enter your passwrod: ");
if(userEntered === "" ){
    alert("Please enter your password.");
}
else{
    if(userEntered === originalPassword){
        alert("Correct! The password you entered matches the original password");
    }
    else{
        alert("Incorrect password! The password is: " + originalPassword);
    }
}


// Chapter 12-13 task# 6:
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
    alert(greeting);
}
else {
    alert(greeting);
}


// Chapter 12-13 task# 7:
var time = prompt("Enter time in 24hr format:","like 1900");
if (time >1159  && time < 2359){
    time = parseInt(time) - 1200;
    alert("time is " + time + " PM");
}
else{
    alert("time is " + time + " AM");
}


// Chapter 12-13 task# 8: FlowChart
var time = 1900;
if (time >= 0000 && time < 1200){
    alert("Good Morning!");
}
else if (time >= 1200 && time < 1700){
    alert("Good Afternoon!");
}
else if (time >= 1700 && time < 2100){
    alert("Good Evening!");
}
else {
    alert("Good Night!");
}


// Chapter 14-16 task# 1:
var names = [];

// Chapter 14-16 task# 2:
//var array = [ : , :];


// Chapter 14-16 task# 3:
var stringArray = ["String1", "String2", "String3"];


// Chapter 14-16 task# 4:
var numArray = [1, 2, 3, 4];


// Chapter 14-16 task# 5:
var booleanArray = [true, false];


// Chapter 14-16 task# 6:
var mixedArray = [1, "muneeba", true, 45];


// Chapter 14-16 task# 7:
var eduArray = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("Qualifications: <br>");
for (var i = 0; i < eduArray.length; i++) {
    document.write("<br>" + (i + 1) + ") " + eduArray[i]);
}

// Chapter 14-16 task# 8:
var names = ["Ali", "Ahmed", "Bilal"];
var scores = [300, 478, 258];
var totalMarks = 500;

for (var i = 0; i < 3; i++) {
    document.write("Score of " + names[i] + " is " + scores[i] + ". Percentage: " + (scores[i] / totalMarks * 100) + "%<br>");
}


// Chapter 14-16 task # 9:
var colors = ["Red", "Yellow", "Green", "Purple", "Brown"];

document.write("Initial Colors Array: <br>")
for (var i = 0; i < colors.length; i++) {
    document.write(colors[i] + "<br>");
}

var beginningValue = prompt("Add any color to the beginning: ");
colors.unshift(beginningValue);
document.write("<br>Adding color at the beginning of Colors Array: <br>")
for (var i = 0; i < colors.length; i++) {
    document.write(colors[i] + "<br>");
}

var EndingValue = prompt("Add any color to the end: ");
colors.push(EndingValue);
document.write("<br>Adding color at the end of Colors Array: <br>")
for (var i = 0; i < colors.length; i++) {
    document.write(colors[i] + "<br>");
}

colors.unshift("Purple", "Orange");
document.write("<br>Adding 2 more colors at the beginning of Colors Array: <br>")
for (var i = 0; i < colors.length; i++) {
    document.write(colors[i] + "<br>");
}

colors.shift();
document.write("<br>1st color Deleted from Colors Array: <br>")
for (var i = 0; i < colors.length; i++) {
    document.write(colors[i] + "<br>");
}

colors.pop();
document.write("<br>Last color Deleted from Colors Array: <br>")
for (var i = 0; i < colors.length; i++) {
    document.write(colors[i] + "<br>");
}

var item = prompt("Enter new color to add: ");
var index = prompt("Enter index for the new element:");
colors.splice(index, 0, item);
document.write("<br>New Color Added: <br>")
for (var i = 0; i < colors.length; i++) {
    document.write(colors[i] + "<br>");
}

var Index = prompt("Enter Index to delete elements: ");
var howMany = prompt("Enter How many elements you wan to delete: ");
colors.splice(Index, howMany);
for (var i = 0; i < colors.length; i++) {
    document.write(colors[i] + "<br>");
}


//chapter 14-16 task# 10:
var scores = [815, 233, 456, 345];
scores.sort();
for (var i = 0; i < scores.length; i++) {
    document.write(scores[i] + "<br>");
}


//chapter 14-16 task# 11:
var citiesList = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.write("<h1>Cities List:</h1>");
for (var i = 0; i < citiesList.length; i++) {
    document.write(citiesList[i] + " ");
}
var selectedCities = citiesList.splice(2, 2);
document.write("<h1> Selected Cities List:</h1>");
for (var i = 0; i < selectedCities.length; i++) {
    document.write(selectedCities[i] + " ");
}


//chapter 14-16 task# 12:
var arr = ["This", "is", "my", "cat"];
var join = arr.join(" ");
document.write("<h1>Array:</h1>" + arr);
document.write("<br><h1>String:</h1>" + join);


//chapter 14-16 task# 13:
var array = ["keyboard", "mouse", "printer", "monitor"]
document.write("<h1>Devices:</h1>" + array);

for (var i = 0; i < array.length; i++) {
    document.write("<br>Out:<br>" + array[i]);
}


//chapter 14-16 task# 14:
var array = ["keyboard", "mouse", "printer", "monitor"]
document.write("<h1>Devices:</h1>" + array);

for (var i = array.length - 1; i >= 0; i--) {
    document.write("<br>Out:<br>" + array[i]);
}



//chapter 14-16 task# 15:
var array = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<select> <option>" + array[0] + "</option><option>" + array[1] + "</option> <option>" + array[2] + "</option> <option>" + array[3] + "</option> <option>" + array[4] + "</option> <option>" + array[5] + "</option> </select>");


//chapter 17-20 task# 1
var array = [[], []];

//chapter 17-20 task# 2
var array = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1],
];

for (var i = 0; i < array.length; i++) {
    var Array = array[i];
    for (var j = 0; j < cube.length; j++) {
        document.write(Array[j]);
    }
    document.write("<br>");
}

//chapter 17-20 task# 3
for (var i = 1; i<=10; i++){
    document.write(i + "<br>");
}

//chapter 17-20 task# 4
var table = prompt("Enter number to calculate multiples");
var len = prompt("Enter length");

document.write("<h1>Multiplication table of " + table + "<br>Length: " + len + "</h1>");
for (var i = 1; i <= len; i++) {
    document.write("<br>" + table + " * " + i + " = " + (table * i));
}

//chapter 17-20 task# 5
var fruits = ["apple" , "banana" , "mango" , "orange" , "strawberry"];

for (var i = 0; i < fruits.length; i++) {
    document.write(fruits[i]+"<br>");
}

for (var i = 0; i < fruits.length; i++) {
    document.write("<br>Element at index " + i + " is " + fruits[i]);
}


//chapter 17-20 task# 6
document.write("<h3>Counting:</h3>");
for(var i = 0; i < 15; i++){
    document.write((i+1) + ",");
}
document.write("<br><h3>Reverse Counting:</h3>");
for(var i = 10; i > 0; i--){
    document.write(i + ",");
}
document.write("<br><h3>Even:</h3>");
for(var i = 0; i <= 10; i++){
    document.write(2*i + ",");
}
document.write("<br><h3>Odd:</h3>");
for(var i = 0; i < 17; i++){
    document.write(i+1 + ",");
}
document.write("<br><h3>Series:</h3>");
for(var i = 1; i <= 10; i++){
    document.write(2*i + "k,");
}

//chapter 17-20 task# 7
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var input = prompt("Welcome to our bakery. What do you want to order?");

if (A.indexOf(input) != -1)
    document.write(input + " is <b>available</b> at index " + A.indexOf(input) + " in our bakery");

else
    document.write("We are sorry." + input + " is <b>not available</b> in our bakery");


//chapter 17-20 task# 8
var arr = [24, 53, 78, 91, 12];

document.write("Array items: "+ arr);
for(var i = 1;i < arr.length; i++){
    if(arr[0] < arr[i])
        arr[0] = arr[i];
}

document.write("<br>The largest number is " + arr[0]);


//chapter 17-20 task# 9
var arr = [24, 53, 78, 91, 12];

document.write("Array items: "+ arr);
for(var i = 1;i < arr.length; i++){
    if(arr[0] > arr[i])
        arr[0] = arr[i];
}
document.write("<br>The smallest number is " + arr[0]);

//chapter 17-20 task# 10
for (var i=1; i<= 100; i++) {
    if (i%5==0) 
    document.write(i +", ");			
}
