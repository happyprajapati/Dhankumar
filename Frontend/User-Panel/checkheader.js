const loadNav = () => {
    const whead = document.getElementById("wn__header");
    const mhead = document.getElementById("mb__header");
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
}
else{
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
}