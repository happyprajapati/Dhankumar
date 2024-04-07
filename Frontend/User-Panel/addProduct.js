document.getElementById("add").addEventListener("click", async function(e){
	e.preventDefault()
  let productName = document.getElementById("exampleInputProdName");
  let productPrice = document.getElementById("exampleInputProductPrice");
  let modelNo = document.getElementById("exampleInProductModlNo");
  let category = document.getElementById("inlineFormCustomSelect");
  let productDiscr = document.getElementById("exampleFormControlTextarea1");
  let img = document.getElementById("itemImage").files;

  let form = document.getElementById("addItem");
  let formdata = new FormData();
  formdata.append("uid", localStorage.getItem('uid'));
  formdata.append("name", productName.value);
  formdata.append("price", productPrice.value);
  formdata.append("brand", modelNo.value);
  formdata.append("desc", category.value);
  formdata.append("category", productDiscr.value);
  formdata.append("img", img);

  // console.log(img[1]);
  const imgs = [];

  for (var i = 0; i < img.length; i++) {
    imgs.push(img[i]);
  }
  for (var i = 0; i < imgs.length; i++) {
    // imgs.push(img[i]);
    console.log(imgs[i]);
  }

let options = {
  method: "POST",
  // body: JSON.stringify({
  //   uid: localStorage.getItem('uid'),
  //   name: productName.value,
  //   price: productPrice.value,
  //   brand: modelNo.value,
  //   desc: category.value,
  //   category: productDiscr.value,
  //   img: imgs,
  // }),
  body: formdata,
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
