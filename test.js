const arr = ['fr', 'en', 'us', 'dks'];

const findData = (el, index, arr) => el === 'dk';
const result = arr.find(findData);
console.log(result);

arr.findIndex((item) => item === arr.find(findData, arr));

// TODO perform with book 1

let people = [
	{ name: 'John', age: 30, height: 190, kilos: 110, salary: 5000, gender: 'male' },
	{ name: 'Jane', age: 70, height: 90, kilos: 50, salary: 6000, gender: 'female' },
	{ name: 'Bob', age: 30, height: 170, kilos: 110, salary: 5000, gender: 'male' },
	{ name: 'Adams', age: 30, height: 100, kilos: 40, salary: 2000, gender: 'female' },
	{ name: 'Bosco', age: 80, height: 70, kilos: 78, salary: '', gender: 'male' },
	{ name: 'Anne', age: 30, height: 80, kilos: 58, salary: '', gender: 'female' },
	{ name: 'David', age: 30, height: 189, kilos: 60, salary: '', gender: 'male' },
	{ name: 'Jeanne', age: 30, height: 190, kilos: 45, salary: 8000, gender: 'female' },
];

let peopleTest = function (person, index, array) {
	return person.kilos > 100;
};

people.find(peopleTest);
