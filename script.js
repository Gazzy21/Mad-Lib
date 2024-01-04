let coldadj = prompt("Enter a cold adjective.");
let weekday = prompt("Enter a day of the week.");
let adjective1 = prompt("Enter a adjective.");
let adjective2 = prompt("Enter a adjective.");
let animal = prompt("Enter an animal/creature.");
let action = prompt("Enter an action.");
let noun = prompt("Enter a noun.");
let verb = prompt("Enter a verb.");
let adverb = prompt("Enter an adverb.");
let food = prompt("Enter a food.");
let side = prompt("Enter a food side.");
let drink = prompt("Enter a drink.");
let gift = prompt('Enter a gift.');
let adjective3 = prompt('Enter a adjective.');
let adjective4 = prompt('Enter a adjective.');

let story = `On a ${coldadj} ${weekday} in Quahog, you go to check the mail to find a letter written to you. Peter Griffin has invited you to his house today for Christmas with his family. You arrive at the house and notice it is very ${adjective1}. As soon as you enter the home the atmosphere is very ${adjective2} and there is ${animal}s ${action}. You take a seat and have some conversations for the afternoon with Peter and his family before dinner. Later at dinner, the family is gathered around the table, including the horse, and Lois begins to bring out dinner. You are served ${food} with a side of ${side} to go with it. To drink you decide to have some ${drink}. You enjoy a lovely dinner with the family and it is time to open presents. Everyone opens their gifts and you are the final one, Peter hands you a gift and you recieve ${gift}. Everyone starts saying goodbye for the evening, even the horse, and you go home having had a very ${adjective3} and ${adjective4} day with Peter and his family. The End.`;

let madLibOutputDiv = document.getElementById("madLibOutput");

madLibOutputDiv.innerHTML = `<p>${story}</p>`;
