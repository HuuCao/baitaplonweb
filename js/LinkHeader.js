
function getLinkHeader() {

var s = ` 

    <!--top-header-->
    <div id="top-header">
        <div class="container">
            <div class="pull-left">
                <span>Welcome to Apple-Store</span>
            </div>
            <div class="pull-right">
                <ul class="header-top-links">
                    <li><a href="#">Store</a></li>
                    <li><a href="#">Newsletter</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li class="dropdown default-dropdown" id="pages">
                        <a class="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">ENG<i class="fa fa-caret-down"></i></a>
                        <ul class="custom-menu">
                            <li class="dropdown-item"><a href="#">English (ENG)</a></li>
                            <li class="dropdown-item"><a href="#">Russian (Ru)</a></li>
                            <li class="dropdown-item"><a href="#">French (FR)</a></li>
                            <li class="dropdown-item"><a href="#">Spanish (Es)</a></li>
                        </ul>
                    </li>
                    <li class="dropdown default-dropdown">
                        <a class="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">USD<i class="fa fa-caret-down"></i></a>
                        <ul class="custom-menu">
                            <li><a href="#">USD ($)</a></li>
                            <li><a href="#">VND (Đ)</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!--/top Header-->

    <!--Header-->
    <div id="header">
        <div class="container">
            <div class="pull-left">
                <!--logo-->
                <div class="header-logo">
                    <a class="logo" href="#">
                        <img src="./img/logo.png" alt="logo">
                    </a>
                </div>
                <!--/logo-->

                <!--search-->
                <div class="header-search">
                    <form>
                        <input class="input search-input" type="text" placeholder="Enter your keyword...">
                        <select class="input search-categories">
                            <option value="0">All Categories</option>
                            <option value="1">Category old</option>
                            <option value="2">Category new</option>
                        </select>
                        <button class="search-btn"><i class="fa fa-search"></i></button>
                    </form>
                </div>
                <!--/search-->
            </div>
            <div class="pull-right">
                <ul class="header-btns">
                    <!--Account-->
                    <li class="header-account dropdown default-dropdown">
                        <div class="dropdown-toggle" role="button" data-toggle="dropdown" aria-expanded="true">
                            <div class="header-btns-icon">
                                <i class="fa fa-user-o"></i>
                            </div>
                            <a class="text-uppercase">My Account <i class="fa fa-caret-down"></i> </a>
                        </div>
                        <a href="./login.html" class="text-uppercase">Login</a> / <a href="#" class="text-uppercase">Join</a>
                        <ul class="custom-menu">
                            <li><a href="#"><i class="fa fa-user-o">My Account</i></a></li>
                            <li><a href="#"><i class="fa fa-heart-o">My Wishlist</i></a></li>
                            <li><a href="#"><i class="fa fa-exchange">Compare</i></a></li>
                            <li><a href="#"><i class="fa fa-check">Checkuot</i></a></li>
                            <li><a href="#"><i class="fa fa-unlock-alt">Login</i></a></li>
                            <li><a href="#"><i class="fa fa-user-plus">Create An Account</i></a></li>
                        </ul>
                    </li>
                    <!--/Account-->

                    <!--Cart-->
                    <li class="header-cart dropdown default-dropdown">
                        <a class="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                            <div class="header-btns-icon">
                                <i class="fa fa-shopping-cart"></i>
                                <span class="qty">3</span>
                            </div>
                            <strong class="text-uppercase">My Cart:</strong>
                            <br>
                            <span>$60000</span>
                        </a>
                        <div class="custom-menu">
                            <div id="shopping-cart">
                                <div class="shopping-cart-list">
                                    <div class="product product-widget">
                                        <div class="product-thumb">
                                            <img src="./img/product_01.jpg" alt="">
                                        </div>
                                        <div class="product-body">
                                            <h5 class="product-price">$10000 <span class="qty">x1</span></h5>
                                            <h4 class="product-name"><a href="#">Iphone 11 Pro</a></h4>
                                        </div>
                                        <button class="cancel-btn"><i class="fa fa-trash"></i></button>
                                    </div>
                                    <div class="product product-widget">
                                        <div class="product-thumb">
                                            <img src="./img/product_02.jpg" alt="">
                                        </div>
                                        <div class="product-body">
                                            <h5 class="product-price">$30000 <span class="qty">x1</span></h5>
                                            <h4 class="product-name"><a href="#">Macbook Pro</a></h4>
                                        </div>
                                        <button class="cancel-btn"><i class="fa fa-trash"></i></button>
                                    </div>
                                    <div class="product product-widget">
                                        <div class="product-thumb">
                                            <img src="./img/product_03.jpg" alt="">
                                        </div>
                                        <div class="product-body">
                                            <h5 class="product-price">$20000 <span class="qty">x1</span></h5>
                                            <h4 class="product-name"><a href="#">Ipad Air</a></h4>
                                        </div>
                                        <button class="cancel-btn"><i class="fa fa-trash"></i></button>
                                    </div>
                                </div>
                                <div class="shopping-cart-btns">
                                    <button class="main-btn">View Cart</button>
                                    <button class="primary-btn"><a href="./checkout.html">Checkout</a>  <i class="fa fa-arrow-circle-right"></i></button>
                                </div>
                            </div>
                        </div>
                    </li>
                    <!--/Cart-->

                    <!--Mobile nav toggle-->
                    <li class="nav-toggle">
                        <button class="nav-toggle-btn main-btn icon-btn"><i class="fa fa-bars"></i></button>
                    </li>
                    <!--/Mobile nav toggle-->
                </ul>
            </div>
        </div>
        <!--/container-->
    </div>
    <!--/header-->


    <!--NAVIGATION-->

    <div id="navigation">
    <!-- container -->
    <div class="container">
        <div id="responsive-nav">
            <!-- category nav -->
            <div class="category-nav">
                <span class="category-header">Categories <i class="fa fa-list"></i></span>
                <ul class="category-list">
                    <li><a href="#">ACCESSORIES</a></li>
                    <li><a href="#">TRAVEL & BAG</a></li>
                    <li><a href="#">PHONE & ACCESSORIES</a></li>
                    <li><a href="#">COMPUTER & OFFICE</a></li>
                    <li><a href="#">CONSUMER ELECTRONICS</a></li>
                    <li><a href="#">CABLE & CHARGER</a></li>
                    <li><a href="#">USB</a></li>
                    <li><a href="#">View All</a></li>
                </ul>
            </div>
            <!-- /category nav -->

            <!-- menu nav -->
            <div class="menu-nav">
                <span class="menu-header">Menu <i class="fa fa-bars"></i></span>
                <ul class="menu-list">
                    <li><a href="./index.html">Home</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Sales</a></li>
                    <li class="dropdown default-dropdown"><a class="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">Pages <i class="fa fa-caret-down"></i></a>
                        <ul class="custom-menu">
                            <li><a href="./index.html">Home</a></li>
                            <li><a href="#">Products</a></li>
                            <li><a href="./about.html">About</a></li>
                            <li><a href="./contact.html">Contact</a></li>
                            <li><a href="./checkout.html">Checkout</a></li>
                        </ul>
                    </li>
                    <li><a href="./contact.html">Contact</a></li>
                    <li><a href="./about.html">About</a></li>
                </ul>
            </div>
            <!-- menu nav -->
        </div>
    </div>
    <!-- /container -->
    </div>
    <!-- /NAVIGATION -->

    <!-- HOME -->
    <div id="home">
    <!-- container -->
    <div class="container">
        <!-- home wrap -->
        <div class="home-wrap">
            <!-- home slick -->
            <div id="home-slick">
                <!-- banner -->
                <div class="banner banner-1">
                    <img src="./img/banner01.jpg" alt="">
                    <div class="banner-caption text-center">
                        <h1>Bags sale</h1>
                        <h3 class="white-color font-weak">Up to 50% Discount</h3>
                        <button class="primary-btn">Shop Now</button>
                    </div>
                </div>
                <!-- /banner -->

                <!-- banner -->
                <div class="banner banner-1">
                    <img src="./img/banner02.jpg" alt="">
                    <div class="banner-caption">
                        <h1 class="primary-color">HOT DEAL<br><span class="white-color font-weak">Up to 50% OFF</span></h1>
                        <button class="primary-btn">Shop Now</button>
                    </div>
                </div>
                <!-- /banner -->

                <!-- banner -->
                <div class="banner banner-1">
                    <img src="./img/banner03.jpg" alt="">
                    <div class="banner-caption">
                        <h1 class="white-color">New Product <span>Collection</span></h1>
                        <button class="primary-btn">Shop Now</button>
                    </div>
                </div>
                <!-- /banner -->

                <!-- banner -->
                <div class="banner banner-1">
                    <img src="./img/banner02.jpg" alt="">
                    <div class="banner-caption">
                        <h1 class="white-color">New Product <span>Collection</span></h1>
                        <button class="primary-btn">Shop Now</button>
                    </div>
                </div>
                <!-- /banner -->
            </div>
            <!-- /home slick -->
        </div>
        <!-- /home wrap -->
    </div>
    <!-- /container -->
    </div>
    <!-- /HOME -->

    `;

    document.querySelector("header").innerHTML = s;
}


getLinkHeader();

