const names = [
	"Brigitte",
	"Scamaica",
	"Red",
	"Gian",
	"Joemon",
	"Abel",
	"Lenard",
];
const jobs = [
	"Lawyer",
	"Writer",
	"Finance Analyst",
	"Nurse",
	"Singer",
	"Stunt Double",
];

// const randomInteger = (arr) => arr[Math.floor(Math.random() * arr.length)];

const randomPick = (arr) => arr[Math.floor(Math.random() * arr.length)];
//produces a random number based on length
//RETURNS the passed ARR[index] array and index returned but the array isn't known yet since it has to be passed first

const myNameIs = randomPick(names); //put that random number on the names + index and produces a random NAME
const myJobIs = randomPick(jobs); //put that random number on the jobs + index and produces a random JOB

console.log(`Hello my name is ${myNameIs}, I work as a ${myJobIs}`);
