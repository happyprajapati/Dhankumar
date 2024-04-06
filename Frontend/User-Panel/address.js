// console.log(firstName.value);

const address = async (addr1, addr2, pinCode, city, state) => {
	let options = {
		method: "POST",
		body: JSON.stringify({
			userId: "id",
			addr1: addr1.value,
			addr2: addr2.value,
			pinCode: pinCode.value,
			city: city.value,
			state: city.value,
		}),
	};

	let p = await fetch("https://dhankumar.onrender.com/register", options);
	let response = await p.json();
	return response;
};

const mainFuncAddr = async () => {
	let addr1 = document.getElementById("exampleAddr1");
	let addr2 = document.getElementById("exampleAddr2");
	let pinCode = document.getElementById("examplepinCode");
	let city = document.getElementById("exampleCity");
	let state = document.getElementById("exampleState");

	// console.log(firstName.value);

	let addr = await address(addr1, addr2, pinCode, city, state);
	// console.log("user registerd...");
	console.log(addr);
	window.open("product-list.html");
};
