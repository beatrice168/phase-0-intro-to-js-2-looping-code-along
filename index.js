// Code your solutions in this file
function writeCards(names) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return messages;
  }function countDown(num) {
    for (let i = num; i >= 0; i--) {
      console.log(i);
    }
  }
  countDown(10); // counts down from 10 to 0