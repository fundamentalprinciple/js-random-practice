const promise1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('the cat sleeps');	
	}, 2000);
});

promise1.then((result) => {
		console.log(result);
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve('Rain falls gently')
			}, 1000);
		});
}).then((result) => {console.log(result)});
