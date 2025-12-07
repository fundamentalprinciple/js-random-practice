const object1 = {
	hello: function() {
		console.log("hello");
	},

	data: 5
};

object1.hello();
console.log(object1.data);
console.log(object1);

const newPromise = new Promise(function(resolve,reject) {
	resolve(object1)	
});

newPromise.then((j)=>console.log(j));



