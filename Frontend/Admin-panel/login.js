document
	.getElementById("loginAdmin")
	.addEventListener("click", async function (e) {
		e.preventDefault();

		let email = document.getElementById("exampleInputEmailadmin");
		let pass = document.getElementById("exampleInputPasswordadmin");

		let options1 = {
			method: "POST",
			body: JSON.stringify({
				role: "admin",
				email: email.value,
				password: pass.value,
			}),
		};

		let p = await fetch("https://dhankumar.onrender.com/login", options1);
		let response = await p.json();

		console.log(response);

		// if (response.code == 200) {
		// 	localStorage.setItem("uid", response.data.userId);
		// 	window.location.href = "index.html";
		// } else {
		// 	alert(response.msg);
		// }
	});
