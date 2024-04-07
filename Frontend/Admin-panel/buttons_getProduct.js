let totalProducts = [];
let tbody = document.getElementById("tbodyGetProducts");

const getProduct = async () => {
	let options1 = {
		method: "GET",
	};

	let p = await fetch("https://dhankumar.onrender.com/getproduct", options1);
	let response = await p.json();
	return response;
};

const mainFuncGetProduct = async () => {
	let product = await getProduct();

	console.log(product);

	totalProducts = product.data;

	console.log(totalProducts);

	if (totalProducts != null) {
		for (let i = 0; i < totalProducts.length; i++) {
			tbody.innerHTML +=
				"<tr><th scope='row'>" +
				totalProducts[i].id +
				"</th><td>" +
				totalProducts[i].name +
				"</td><td>" +
				totalProducts[i].price +
				"</td><td>" +
				totalProducts[i].description +
				"</td></tr>";
		}
	}
};
