const fruits = ['apple', 'banana', 'cherry'];
localStorage.setItem('fruits', JSON.stringify(fruits));

const storedfruits = JSON.parse(localStorage.getItem('fruits'));
console.log(storedfruits);
