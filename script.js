

//*--------------------------Exercise 1 : Favorite Color------------------------------------------------------*//
   
/*Write some simple Javascript code that will join all the items in the array above,
      and console.log the result.*/
      
     let sentence = ["my","favorite","color","is","blue"];
     let sentenceString = sentence.join(" ");
     console.log(sentenceString);


//*--------------------------Exercise 2 : Mixup--------------------------------------------------------------*//

//Create 2 variables. The values should be strings. For example:
  let String1 = "Hello";
  let String2 = "World";

//Slice out and swap the first 2 characters of the two strings from part 1.
//Create a third variable where the value is the concatenation of the two strings from the part 1 (separated by a space).
 let String3 = "hello" + " " + "World"

//Finally console.log the new concatenated string.
console.log("New Word should be equal to :", String3)


/*------------------------Exercise 3 : Calculator-------------------------------------------------------------*/

//Prompt the user for the first number.
//Store the first number in a variable called num1.
let num1 = Number(prompt("Enter the firt number"))

//Prompt the user for the second number.
//Store the second number in a variable called num2.
let num2 = Number(prompt("enter the second number"))

//Create an Alert where the value is the SUM of num1 and num2.
let SUM = num1 + num2
alert("The value is the SUM of num1 and num2:" +" " +  SUM )

//BONUS: Make a program that can subtract, multiply, and also divide!
let numb1 = Number(prompt("Enter the firt number"))
let numb2 = Number(prompt("enter the second number"))

let numbSub = numb1 - numb2
console.log("The value is the SUBT of num1 and num2:", +" "+ numbSub );

let numbMul = numb1 *  numb2
console.log("The value is the MULT of num1 and num2:", +" "+ numbMul );

let numbDIV = numb1 % numb2
console.log("The value is the DIV of num1 and num2:", +" "+ numbDIV )




