document.getElementById("address").addEventListener("click", async function(e){
	e.preventDefault()
	let addr1 = document.getElementById("exampleAddr1");
	let pinCode = document.getElementById("examplepinCode");
	let city = document.getElementById("exampleCity");
	let state = document.getElementById("exampleState");

	// console.log(firstName.value);

	let options = {
		method: "POST",
		body: JSON.stringify({
			userId: localStorage.getItem('uid'),
			addr1: addr1.value,
			pinCode: pinCode.value,
			city: city.value,
			state: state.value,
		}),
	};

	let p = await fetch("https://dhankumar.onrender.com/register", options);
	let response = await p.json();
	return response;
	// console.log("user registerd...");
	console.log(addr);
	window.open("product-list.html");
});
