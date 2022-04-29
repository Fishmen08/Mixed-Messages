console.log('Mixed Messages Project');

// making a loop to find a random year just realised i dont need a loop for this

let year = 2022+(Math.floor(Math.random()* (Math.ceil(Math.random() * 50))));
let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Novemeber', 'December'];
let randomMonth = month[Math.floor(Math.random() * 12)];  
let randomDay = 0;
if (randomMonth === 'February') {
    randomDay += (Math.ceil(Math.random() * 28));
} else if (randomMonth === 'January' || randomMonth === 'March' || randomMonth === 'May' || randomMonth === 'July' || randomMonth === 'August' || randomMonth === 'October' || randomMonth === 'December') {
    randomDay =+ (Math.ceil(Math.random() * 31));
} else {
    randomDay =+ (Math.ceil(Math.random() * 30));
};


console.log(year)
console.log(randomMonth)
console.log(randomDay)

console.log(`On the ${randomDay}/${randomMonth}/${year} your wish will come true!`)
