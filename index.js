console.log('Mixed Messages Project');
console.log(6 * 5);

// making a loop to find a random year just realised i dont need a loop for this

let year = 2022+(Math.floor(Math.random()* (Math.ceil(Math.random() * 50))));
let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Novemeber', 'December'];
let randomMonth = month[Math.floor(Math.random() * 12)];    
console.log(year)
console.log(randomMonth)

