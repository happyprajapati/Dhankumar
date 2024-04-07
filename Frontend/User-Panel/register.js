// console.log(firstName.value);

const register = async (firstName, contact, Email, pass) => {
	let options = {
		method: "POST",
		body: JSON.stringify({
			name: firstName.value,
			email: Email.value,
			password: pass.value,
			contact: contact.value,
		}),
	};

	let p = await fetch("https://dhankumar.onrender.com/register", options);
	let response = await p.json();
	return response;
};

const mainFuncReg = async () => {
	let firstName = document.getElementById("exampleFirstName");
	let contact = document.getElementById("contact");
	let Email = document.getElementById("exampleInputEmail");
	let pass = document.getElementById("exampleRepeatPassword");

	// console.log(firstName.value);

	let reg = await register(firstName, contact, Email, pass);
	// console.log("user registerd...");
	console.log(reg);
};
