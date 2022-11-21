// Code your solutions in this file
//create a function that when called and
//given a multiple names and event returns
//a thank you message with the name and event 
//in an array.

function writeCards(name,event)
{const thankYous = []
 for(let start = 0; start < name.length; start++ )
 {thankYous.push(`Thank you, ${name[start]}, for the wonderful ${event} gift!`)}
 return thankYous}

function countDown(number) {
    while (number >= 0) { console.log(number--) }
}