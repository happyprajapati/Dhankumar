const login = async (Email, pass) => {
	console.log(Email);
	console.log(pass);
	let options1 = {
		method: "POST",
		body: JSON.stringify({
			email: Email,
			password: pass,
		}),
	};

	let p = await fetch("https://dhankumar.onrender.com/login", options1);
	let response = await p.json();
	return response;
};

const mainFuncLogin = async () => {
	let email = document.getElementById("exampleInputEmaillg");
	let pass = document.getElementById("exampleInputPasswordln");

	// console.log(email.value);
	// console.log(pass.value);

	// console.log(email.value);
	let log = await login(email.value, pass.value);
	// console.log("user registerd...");
	console.log(log);
};
