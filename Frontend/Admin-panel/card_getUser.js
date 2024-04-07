let totalUsers = [];
let tbody = document.getElementById("tBodyUser");

const getUser = async () => {
	let options1 = {
		method: "GET",
	};

	let p = await fetch("https://dhankumar.onrender.com/getusers", options1);
	let response = await p.json();
	return response;
};

const mainFuncGetUser = async () => {
	let user = await getUser();

	console.log(user);

	totalUsers = user.data;

	console.log(totalUsers);

	if (totalUsers != null) {
		for (let i = 0; i < totalUsers.length; i++) {
			tbody.innerHTML +=
				"<tr><th scope='row'>" +
				totalUsers[i].name +
				"</th><td>" +
				totalUsers[i].contact +
				"</td><td>" +
				totalUsers[i].email +
				"</td></tr>";
		}
	}
};
