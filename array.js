// #### Part 1

// There are three people waiting for the bank. Their names, in order, are Sofia, David, and Juan.
// Create an array that has these three names in order.
const people = ["Sofia", "David", "Juan"];
console.log(people);


// #### Part 2

// Two more people get added to the back of the line - Sara and Augustin.
// The first person in line is called to the teller.
// What does the queue look like?
people.push('Sara', 'Augustin');
console.log(people);
people.shift();
console.log(people)

// #### Part 3

// It turns out David was saving a spot for his friend Renata. She shows up and goes behind him in the line. One more person (Elena) shows up and goes to the end of the line.
// What does the queue look like? 

people.splice(1,0,'Renata');
console.log(people);
people.push('Elena');
console.log(people);