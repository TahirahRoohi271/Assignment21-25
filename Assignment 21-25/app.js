// Question 1

// var firstName = prompt("Enter Your First Name");
// var lastName = prompt("Enter Your Last Name");
// var fullName = firstName + " " + lastName;
// alert("hello, " + fullName + "!");


// Question 2

// var mobile = prompt("Enter Your Favourite Mobile Phone Model");
// var inputLength = mobile.length;
// document.write("My Favourite Phone is: " + mobile + "<br>" + "Length of String is: " + inputLength);


// Question 3

// var word = "Pakistani";
// document.write("String: " + word + "<br>" + "Index of 'n': " + word.indexOf("n"));


// Question 4

// var word = "Hello World";
// document.write("String: " + word + "<br>" + "Last Index of 'l': " + word.lastIndexOf("l"));


// Question 5

// var word = "Pakistani";
// document.write("String: " + word + "<br>" + "Character at index 3: " + word.charAt(3));


// Question 6

// var firstName = prompt("Enter Your First Name");
// var lastName = prompt("Enter Your Last Name");
// var fullName = firstName.concat(" ", lastName);
// alert("Hello, " + fullName + "!");


// Question 7

// Way 1

// var word1 = "Hyderabad";
// var word2 = word1.replace("Hyder", "Islam");
// document.write("City: " + word1 + "<br>" + "After Replacement: " + word2);

// Way 2

// var word1 = "Hyderabad";
// var word2 = "";
// for (var i = 0; i < word1.length; i++) {
//   if (word1.slice(i, i + 5) === "Hyder") {
//     word2 += "Islam";
//     i += 4;
//   } else {
//     word2 += word1[i];
//   }
// }
// document.write("City: " + word1 + "<br>" + "After Replacement: " + word2);


// Question 8 

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var newMessage = message.replace(/and/g, "&");
// document.write(newMessage);


// Question 9

// var number = "472";
// var converted = +number;
// document.write("Value: " + number + "<br>");
// document.write("Type: " + typeof number + "<br>");
// document.write("Value: " + converted + "<br>");
// document.write("Type: " + typeof converted);


// Question 10

// var userInput = prompt("Enter Your Favourite Food");
// var newInput = userInput.toUpperCase();
// document.write(newInput);


// Question 11

// var userInput = prompt("Enter Your Name");
// var firstChar = userInput.slice(0, 1);
// var otherChar = userInput.slice(1);
// var firstChar = firstChar.toUpperCase();
// var otherChar = otherChar.toLowerCase();
// var userNewInput = firstChar + otherChar;
// document.write("User Input: " + userInput + "<br>" + "Title Case: " + userNewInput);


// Question 12

// var num = 35.36;
// var string = num.toString();
// var updated = string.replace(".", "");
// document.write("Number: " + num + "<br>" + "Result: " + updated);


// Question 13

// var username = prompt("Enter your Name:");
// if (username.includes('@') || username.includes('.') || username.includes(',') || username.includes('!')) {
//   prompt("Please enter a valid Name without special symbols [@ . , !]");
// } else {
//   alert("Your Name is " + username);
// }


// Question 14

// var a = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Enter an item to search:");
// var lowerInput = userInput.toLowerCase();
// var lowerArray = [];
// for (var i = 0; i < a.length; i++) {
//   lowerArray.push(a[i].toLowerCase());
// }
// var index = -1;
// for (var j = 0; j < lowerArray.length; j++) {
//   if (lowerArray[j] === lowerInput) {
//     index = j;
//     break;
//   }
// }
// if (index !== -1) {
//   alert(userInput + " is avialable at index " + index + " in our bakery");
// } else {
//   alert(userInput + " is not available in our bakery");
// }


// Question 15




// Question 16

// var university = "University of Karachi";
// var universityArray = university.split("");
// document.write(universityArray.join(" <br>"));


// Question 17

// var userInput = prompt("Enter any thing");
// var updated = userInput.charAt(userInput.length -1);
// document.write("User Input: " + userInput + "<br>" + "Last Character of Input: " + updated)


// Question 18

// var txt = 'The quick brown fox jumps over the lazy dog';
// var occurrence = 0;
// var lowerCase = txt.toLowerCase();
// var words = lowerCase.split(' ');
// for (var i = 0; i < words.length; i++) {
//   if (words[i] === 'the') {
    // occurrence++;
//   }
// }
// document.write("Text: " + txt + "<br>" + "There are " + occurrence + " occurrences of the word 'the'");