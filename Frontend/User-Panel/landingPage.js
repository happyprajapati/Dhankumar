let items = [];
let div = document.getElementById("itemsCartDiv");

const landingP = async () => {
	let options1 = {
		method: "GET",
		// body: JSON.stringify({
		// 	// email: Email,
		// 	// password: pass,
		// }),
	};

	let p = await fetch("https://dhankumar.onrender.com/getitems", options1);
	let response = await p.json();
	return response;
};

const mainFuncLandingP = async () => {
	let landItems = await landingP();

	console.log(landItems);
	items = landItems.data;

	if (items != null) {
		for (let i = 0; i < items.length; i++) {
			div.innerHTML +=
				"<div class='product product__style--3'><div class='product__thumb'><a class='first__img' href='single-product.html'><img src='images/books/11.png'alt='product image'></a></div><div class='product__content content--center'><h4><a href='single-product.html'>" +
				"data[i].name" +
				"</a></h4><ul class='price d-flex'><li class='old_price'>" +
				"data[i].price" +
				"</li><li>" +
				"data[i].price" +
				"</li></ul></div></div>";
		}
	}
};
