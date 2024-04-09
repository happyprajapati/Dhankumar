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
        uid: "user",
        name: "tshirt",
        amount: 200,
      }),
    };

    let p = await fetch("https://dhankumar.onrender.com/placeorder", options);
    let res = await p.json();
    // return response;
    // console.log("user registerd...");
    // console.log(addr);
    var options1 = {
      key: res.key_id, // Enter the Key ID generated from the Dashboard
      amount: "1000",
      currency: "INR",
      description: "Acme Corp",
      image: "https://s3.amazonaws.com/rzp-mobile/images/rzp.jpg",
      prefill: {
        email: res.email,
        contact: res.contact,
      },
      config: {
        display: {
          blocks: {
            utib: {
              //name for Axis block
              name: "Pay using Axis Bank",
              instruments: [
                {
                  method: "card",
                  issuers: ["UTIB"],
                },
                {
                  method: "netbanking",
                  banks: ["UTIB"],
                },
              ],
            },
            other: {
              //  name for other block
              name: "Other Payment modes",
              instruments: [
                {
                  method: "card",
                  issuers: ["ICIC"],
                },
                {
                  method: "netbanking",
                },
              ],
            },
          },
          hide: [
            {
              method: "upi",
            },
          ],
          sequence: ["block.utib", "block.other"],
          preferences: {
            show_default_blocks: false, // Should Checkout show its default blocks?
          },
        },
      },
      handler: function (response) {
        alert(response.razorpay_payment_id);
      },
      modal: {
        ondismiss: function () {
          if (confirm("Are you sure, you want to close the form?")) {
            txt = "You pressed OK!";
            console.log("Checkout form closed by the user");
          } else {
            txt = "You pressed Cancel!";
            console.log("Complete the Payment");
          }
        },
      },
    };
    var rzp1 = new Razorpay(options1);
    rzp1.open();
    // window.open("product-list.html");
  });
