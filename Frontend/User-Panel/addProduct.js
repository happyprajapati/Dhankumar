const addProduct = async (
  productName,
  productPrice,
  modelNo,
  category,
  productDiscr,
//   img
) => {
  let options = {
    method: "POST",
    body: JSON.stringify({
      uid: "id",
      name: productName.value,
      price: productPrice.value,
      brand: modelNo.value,
      desc: category.value,
      category: productDiscr.value,
    }),
  };

  let p = await fetch("https://dhankumar.onrender.com/additem", options);
  let response = await p.json();
  return response;
};

const mainFuncaddProduct = async () => {
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

  let addPrdct = await addProduct(
    productName,
    productPrice,
    modelNo,
    category,
    productDiscr,
    imgs
  );

  console.log(addPrdct);

  window.location.href("index.html");
};
