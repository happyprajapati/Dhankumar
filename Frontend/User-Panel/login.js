document.getElementById("login").addEventListener("click", async function(e){
	e.preventDefault()

	let email = document.getElementById("exampleInputEmail");
	let pass = document.getElementById("exampleInputPassword");

	// console.log(email.value);
	// console.log(pass.value);

	// console.log(email.value);
	let options1 = {
		method: "POST",
		body: JSON.stringify({
			email: email.value,
			password: pass.value,
		}),
	};

	let p = await fetch("https://dhankumar.onrender.com/login", options1);
	let response = await p.json();
	// return response;
	// console.log("user registerd...");
	console.log(response);
	if(response.success){
		localStorage.setItem("uid", response.data.userid);
		window.location.href = "index.html";
	}else{
		alert(response.msg);
	}
});
