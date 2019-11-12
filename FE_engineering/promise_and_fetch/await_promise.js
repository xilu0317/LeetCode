(async () => {
	let p1 = new Promise((resolve, rejct) => {
		setTimeout(() => resolve('==> 1st'), 3000)
	})

	let p2 = new Promise((resolve, rejct) => {
		resolve('==> 2nd')
	})

	let p3 = new Promise((resolve, rejct) => {
		setTimeout(() => resolve('==> 3rd'), 1000)
	})


	let v1 = await p1
	console.log(v1)

	let v2 = await p2
	console.log(v2)

	let v3 = await p3
	console.log(v3)
})()
