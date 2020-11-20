// Code your solutions in this file
const messages = [];
function writeCards(ppl, event) {
    for (let i = 0; i < ppl.length; i++) {
        messages.push(`Thank you, ${ppl[i]}, for the wonderful ${event} gift!`);
    }

    return messages;
}


function countDown(n){
while (n >= 0) {
    console.log(n--);
  }
}