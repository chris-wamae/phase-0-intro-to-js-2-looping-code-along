// Code your solutions in this file
function thankyouCards(array, event) {
    const thankyouMessages = []
    for (let i = 0; i < array.length; i++) {
        thankyouMessages.push(`Thank you, ${array[i]},for the wonderful ${event} gift!`);
    }
    return thankyouMessages;
}

function countDown(number) {
    while (number >= 0) { console.log(number--) }
}