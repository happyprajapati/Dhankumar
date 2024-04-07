document.getElementById("add").addEventListener("click", async function(e){
	e.preventDefault()
  let productName = document.getElementById("exampleInputProdName");
  let productPrice = document.getElementById("exampleInputProductPrice");
  let modelNo = document.getElementById("exampleInProductModlNo");
  let category = document.getElementById("inlineFormCustomSelect");
  let productDiscr = document.getElementById("exampleFormControlTextarea1");
//   let img = document.getElementById("itemImage").files;
//   const imgs = [];

//   for (var i = 0; i < files.length; i++) {
//     imgs.push(files[i].name);
//   }

let options = {
  method: "POST",
  body: JSON.stringify({
    uid: localStorage.getItem('uid'),
    name: productName.value,
    price: productPrice.value,
    brand: modelNo.value,
    desc: category.value,
    category: productDiscr.value,
  }),
};

let p = await fetch("https://dhankumar.onrender.com/additem", options);
let response = await p.json();
// return response;
if(response.code == 200){
  alert(response.msg);
  window.location.href = "index.html";
}else{
  alert(response.msg);
}
});
