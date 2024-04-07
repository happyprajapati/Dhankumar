// console.log(firstName.value);
document.getElementById("register").addEventListener("click", async function(e){
	e.preventDefault()
	let firstName = document.getElementById("exampleFirstName");
	let contact = document.getElementById("contact");
	let email = document.getElementById("exampleInputEmail");
	let pass = document.getElementById("exampleInputPassword");

	// console.log(email.value);

	let options = {
		method: "POST",
		body: JSON.stringify({
			name: firstName.value,
			email: email.value,
			password: pass.value,
			contact: contact.value,
		}),
	};

	let p = await fetch("https://dhankumar.onrender.com/register", options);
	let response = await p.json();
	// return response;
	// console.log("user registerd...");
	if(response.success){
		window.location.href = "login.html";
	}else{
		alert(response.msg);
	}
});
