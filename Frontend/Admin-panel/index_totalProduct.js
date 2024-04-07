let totalItemCount = 0;
let p = document.getElementById("totalItemCount");
// let Order = document.getElementById("totalOrderCount");

const getItemCount = async () => {
	let options1 = {
		method: "GET",
	};

	let p = await fetch("https://dhankumar.onrender.com/getitemscount", options1);
	let response = await p.json();
	return response;
};

// const getOrderCount = async () => {
// 	let options2 = {
// 		method: "GET",
// 	};

// 	let p = await fetch("https://dhankumar.onrender.com/getordercount", options2);
// 	let response = await p.json();
// 	return response;
// };

const mainFuncGetItemCount = async () => {
	let item = await getItemCount();
	// let order = await getOrderCount();

	console.log(item);
	// console.log(order);

	if (item != null) {
		p.innerHTML = item.data;
	}
	// if (order != null) {
	// 	Order.innerHTML = order.data;
	// }
};
