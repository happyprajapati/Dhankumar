let items = [];
let div = document.getElementById("itemsCartDiv");
const whead = document.getElementById("wn__header");
const mhead = document.getElementById("mb__header");

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
	console.log(localStorage.getItem("uid"));
	if(localStorage.getItem("uid") == null){
		var headerw = `<div class="container-fluid">
		<div class="row">
		<div class="col-md-6 col-sm-6 col-6 col-lg-2">
		<div class="logo">
			<a href="index.html">
				<img src="images/logo/3.png" alt="logo images">
			</a>
		</div>
	</div>
	<div class="col-lg-8 d-none d-lg-block">
		<nav class="mainmenu__nav">
			<ul class="meninmenu d-flex justify-content-start">
				<li class="drop with--one--item"><a href="index.html">Home</a></li>
				<li class="drop"><a href="about.html">About Us</a>
				<li class="drop"><a href="contact.html">Contact Us</a>
				<li class="drop"><a href="login.html">Login</a>
				<li class="drop"><a href="register.html">Register</a>
			</ul>
		</nav>
	</div>
	<div class="col-md-6 col-sm-6 col-6 col-lg-2">
		<ul class="header__sidebar__right d-flex justify-content-end align-items-center">
			<li class="shop_search  mx-2"><a class="search__active" href="#"></a></li>
			</li>
		</ul>
	</div>
	</div>
	</div>`
		var headerm = `<div class="col-lg-12 d-none">
		<nav class="mobilemenu__nav">
			<ul class="meninmenu">
				<li><a href="index.html">Home</a></li>
				<li><a href="about.html">About</a></li>
				<li><a href="login.html">My Products</a>
				<li><a href="register.html">My Orders</a>
			</ul>
		</nav>
	</div>`
	whead.innerHTML = headerw;
	mhead.innerHTML = headerm;
	}else{
		var headerw = `<div class="container-fluid">
		<div class="row">
		<div class="col-md-6 col-sm-6 col-6 col-lg-2">
		<div class="logo">
			<a href="index.html">
				<img src="images/logo/3.png" alt="logo images">
			</a>
		</div>
	</div>
	<div class="col-lg-8 d-none d-lg-block">
		<nav class="mainmenu__nav">
			<ul class="meninmenu d-flex justify-content-start">
				<li class="drop with--one--item"><a href="index.html">Home</a></li>
				<li class="drop"><a href="about.html">About Us</a>
				<li class="drop"><a href="contact.html">Contact Us</a>
				<li class="drop"><a href="product-list.html">My Product</a>
				<li class="drop"><a href="register.html">My Orders</a>
			</ul>
		</nav>
	</div>
	<div class="col-md-6 col-sm-6 col-6 col-lg-2">
		<ul class="header__sidebar__right d-flex justify-content-end align-items-center">
			<li class="shop_search  mx-2"><a class="search__active" href="#"></a></li>
			</li>
			<li class="setting__bar__icon  mx-2"><a class="setting__active" href="#"></a>
				<div class="searchbar__content setting__block">
					<div class="content-inner">
						<div class="switcher-currency">
							<strong class="label switcher-label">
								<span>My Account</span>
							</strong>
							<div class="switcher-options">
								<div class="switcher-currency-trigger">
									<div class="setting__menu">
										<span><a href="#">profile</a></span>
										<span><a href="#">Sign Out</a></span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</li>
		</ul>
	</div>
	</div>
	</div>`
	var headerm = `<div class="col-lg-12 d-none">
	<nav class="mobilemenu__nav">
		<ul class="meninmenu">
			<li><a href="index.html">Home</a></li>
			<li><a href="about.html">About</a></li>
			<li><a href="login.html">Login</a>
			<li><a href="register.html">Register</a>
		</ul>
	</nav>
</div>`
	whead.innerHTML = headerw;
	mhead.innerHTML = headerm;
	}

	let landItems = await landingP();

	// console.log(landItems);
	items = landItems.data;

	if (items != null) {
		for (let i = 0; i < items.length; i++) {
			div.innerHTML +=
				"<div class='product product__style--3'><div class='product__thumb'><a class='first__img' href='single-product.html'><img src='images/books/11.png'alt='product image'></a></div><div class='product__content content--center'><h4><a href='single-product.html'>" +
				data[i].name +
				"</a></h4><ul class='price d-flex'><li class='old_price'>" +
				data[i].price +
				"</li></ul></div></div>";
		}
	}
};
