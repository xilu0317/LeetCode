let count = 0
setInterval(() => {
	console.log(count++);
}, 1000)

let p1 = new Promise((resolve, rejct) => {
	// resolve immeidately
	resolve('why am i so bad at coding, should i quit')
})

let p2 = new Promise((resolve, rejct) => {
	let obj = {}
	obj.name = 'iphone'
	obj.age = 12
	obj.date = new Date()

	// simulating API call that takes about 2 seconds
	setTimeout(() => resolve(obj), 5000)
})

let p3 = new Promise((resolve, rejct) => {
	let myAwesomeObject = {}

	myAwesomeObject.name = 'i didn choose to be a loser'
	myAwesomeObject.age = 33

	setTimeout(() => resolve(myAwesomeObject), 5000)
})

// note 'then' is async
Promise.all([p1, p2, p3]).then(res => console.table(res))

// this function will be run immeidately
console.log('This function will be called immeidately because then is async');
