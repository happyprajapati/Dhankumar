// const { response } = require("express");

document
  .getElementById("address")
  .addEventListener("click", async function (e) {
    e.preventDefault();
    // let addr1 = document.getElementById("exampleAddr1");
    // let pinCode = document.getElementById("examplepinCode");
    // let city = document.getElementById("exampleCity");
    // let state = document.getElementById("exampleState");

    // // console.log(firstName.value);

    // let options = {
    // 	method: "POST",
    // 	body: JSON.stringify({
    // 		userId: localStorage.getItem('uid'),
    // 		addr1: addr1.value,
    // 		pinCode: pinCode.value,
    // 		city: city.value,
    // 		state: state.value,
    // 	}),
    // };

    const options = {
      method: "POST",
      body: JSON.stringify({
        // uid: "user",
        name: "tshirt",
        amount: 200,
      }),
	  headers: {
		"Content-Type": "application/json"
	  }
    };

    await fetch("https://dhankumar.onrender.com/placeorder", options)
	.then((response) => {return response.json()})
	.then((res) => {
		// console.log(res);
		var options1 = {
		  "key": res.key_id, // Enter the Key ID generated from the Dashboard
		  "amount": 200,
		  "currency": "INR",
		  "name": "Happy",
		  "order_id":res.order_id,
		  "description": "Acme Corp",
		  "image": "https://s3.amazonaws.com/rzp-mobile/images/rzp.jpg",
		  "prefill": {
			email: res.email,
			contact: res.contact,
		  },
		  "handler": async function (response) {
			console.log(response);
			await fetch("https://dhankumar.onrender.com/varify", 
		{
			method: "POST",
			body: JSON.stringify({
				razorpay_payment_id: response.razorpay_payment_id,
				razorpay_order_id: response.razorpay_order_id,
				razorpay_signature: response.razorpay_signature,
				// uid : localStorage.getItem('uid'),
			}),
			headers: {
				"Content-Type": "application/json"
			}
		}).then((response) => {return response.json()})
		.then((res) => {
			console.log(res);
		})
		  },
		  "theme": {
			  "color": "#3399cc"
		  }
		};
		var rzp1 = new Razorpay(options1);
		rzp1.open();
	})
    // return response;
    // console.log("user registerd...");
    // console.log(res);
    // window.open("product-list.html");
  });
