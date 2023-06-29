let navbar = document.getElementById('navbar');
let footer3 = document.getElementById('footer3');

const x = window.matchMedia("(max-width: 480px)");
const y = window.matchMedia("(max-width: 768px)");
const z = window.matchMedia("(max-width: 1024px)");

let domesticTour = document.getElementById('domestic-tour');
let foreignTour = document.getElementById('foreign-tour');
let europeTour = document.getElementById('europe-tour');




function navFunction(x) {
    if (x.matches) {
        navbar.innerHTML = `
    <div class="container-fluid navbar bg-body-tertiary sticky-top" style="direction: rtl; color: orange;">
       <a class="navbar-brand mx-auto" href="#">
        <img src="./assets/pictures/Capture.PNG" alt="">
       </a>
       <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
       </button>
       <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
         <div class="offcanvas-header">
           <h5 class="offcanvas-title" id="offcanvasNavbarLabel">علی بابا</h5>
           <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
         </div>
         <div class="offcanvas-body">
           <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
            <a class="nav-link" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
            fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
            <path
             d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
            </svg>ورود یا ثبت نام</a>
            </li>
            <li class="nav-item">
             <a class="nav-link" href="https://www.alibaba.ir/login?redirect=/profile/orders"><svg
             xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-checklist"
             viewBox="0 0 16 16">
             <path
               d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
             <path
               d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z" />
             </svg> پیگیری خرید</a>
             </li>
             <li class="nav-item">
             <a class="nav-link" href="https://www.alibaba.ir/help-center"><svg
             xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
             class="bi bi-exclamation-circle" viewBox="0 0 16 16">
             <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
             <path
               d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
               </svg>
               <span>مرکز پشتیبانی آنلاین</span>
               </a>
             </li>
             <hr>
             <li class="nav-item dropdown">
               <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 بلیط
               </a>
               <ul class="dropdown-menu">
                 <li><a class="dropdown-item" href="https://www.alibaba.ir/">پرواز داخلی</a></li>
                 <hr class="dropdown-divider">
                 <li><a class="dropdown-item" href="https://www.alibaba.ir/iranout">پرواز خارجی</a></li>
                 <hr class="dropdown-divider">
                 <li><a class="dropdown-item" href="https://www.alibaba.ir/train-ticket">قطار</a></li>
                 <hr class="dropdown-divider">
                 <li><a class="dropdown-item" href="https://www.alibaba.ir/bus-ticket">اتوبوس</a></li>
                 <li>
               </ul>
             </li>
             <li class="nav-item dropdown">
               <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 اقامت
               </a>
               <ul class="dropdown-menu">
                 <li><a class="dropdown-item" href="https://www.alibaba.ir/hotel">هتل</a></li>
                 <hr class="dropdown-divider">
                 <li><a class="dropdown-item" href="https://www.alibaba.ir/accommodation">ویلا و اقامتگاه</a></li>
                 <li>
               </ul>
             </li>
             <li class="nav-item">
               <a class="nav-link" href="https://www.alibaba.ir/tour">تور</a>
             </li>
             <li class="nav-item dropdown">
               <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 بیشتر
               </a>
               <ul class="dropdown-menu">
                 <li><a class="dropdown-item" href="https://www.alibaba.ir/plus">علی بابا پلاس</a></li>
                 <hr class="dropdown-divider">
                 <li><a class="dropdown-item" href="https://www.alibaba.ir/mag/?utm_source=alibaba&utm_medium=Click_CTA&utm_campaign=inbound&utm_term=category-buttons&utm_content=Alibaba-Maghttps://www.alibaba.ir/mag?utm_source=alibaba&utm_medium=Click_CTA&utm_campaign=inbound&utm_term=category-buttons&utm_content=Alibaba-Mag">مجله علی بابا</a></li>
                 <hr class="dropdown-divider">
                 <li><a class="dropdown-item" href="https://www.alibaba.ir/insurance">بیمه مسافرتی</a></li>
                 <li>
               </ul>
             </li>
           </ul>
         </div>
       </div>
     </div>`
    }
}

function domesticTourFunction(x) {
    if (x.matches) {
        domesticTour.innerHTML = `
    <div class="container tour-sm-md-style" style="direction: rtl;">
        <div class="row cards-titr">
            <div class="col-12">
                <h4 class="cards-titr">تور داخلی</h4>
            </div>
        </div>
        <div class="swiper">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
                <!-- Slides -->
                <div class="swiper-slide tour-cards">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-sm-12 col-md-6">
                            <div class="card">
                                <img src="./assets/pictures/tour-tabriz.jpg" class="card-img-top" alt="tabriz">
                                <a href="#">
                                    <div class="card-body">
                                        <h6 class="card-title">تور تبریز، جلفا و کندوان</h6>
                                        <p class="card-text">14-16 تیر <span class="dot">.</span> تور 3 روزه- پرواز-
                                            هتل</p>
                                        <hr>
                                        <p>شروع قیمت از <span class="price">64,500,000</span> ریال</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide tour-cards">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-sm-12 col-md-6">
                            <div class="card">
                                <img src="./assets/pictures/tour-ardebil.jpg" class="card-img-top" alt="ardebil">
                                <a href="#">
                                    <div class="card-body">
                                        <h6 class="card-title">تور اردبیل، سرعین و گردنه حیران</h6>
                                        <p class="card-text">21-23 تیر <span class="dot">.</span> تور سه روزه-
                                            پرواز- هتل
                                        </p>
                                        <hr>
                                        <p>شروع قیمت از <span class="price">79,500,000</span> ریال</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide tour-cards">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-sm-12 col-md-6">
                            <div class="card">
                                <img src="./assets/pictures/tour-selnsar.jpg" class="card-img-top" alt="selansar">
                                <a href="#">
                                    <div class="card-body">
                                        <h6 class="card-title">تور ییلاق سلانسر</h6>
                                        <p class="card-text">21-23 تیر <span class="dot">.</span> تور سه روزه-
                                            پرواز- هتل
                                        </p>
                                        <hr>
                                        <p>شروع قیمت از <span class="price">10,500,000</span> ریال</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide tour-cards">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-sm-12 col-md-6">
                            <div class="card">
                                <img src="./assets/pictures/tour-latoon.jpg" class="card-img-top" alt="latoon">
                                <a href="#">
                                    <div class="card-body">
                                        <h6 class="card-title">تور دریاچه سوها تا آبشار لاتون</h6>
                                        <p class="card-text">21-23 تیر <span class="dot">.</span> تور سه روزه-
                                            پرواز- هتل
                                        </p>
                                        <hr>
                                        <p>شروع قیمت از <span class="price">46,500,000</span> ریال</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide tour-cards">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-sm-12 col-md-6">
                            <div class="card">
                                <img src="./assets/pictures/tour-nosha.jpg" class="card-img-top" alt="Nosha">
                                <a href="#">
                                    <div class="card-body">
                                        <h6 class="card-title">تور ییلاق نوشا</h6>
                                        <p class="card-text">7-9 تیر <span class="dot">.</span> 3 روز و دو شب</p>
                                        <hr>
                                        <p>شروع قیمت از <span class="price">29,000,000</span> ریال</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide tour-cards">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-sm-12 col-md-6">
                            <div class="card">
                                <img src="./assets/pictures/tour-javaher.jpg" class="card-img-top"
                                    alt="javaherdasht">
                                <a href="#">
                                    <div class="card-body">
                                        <h6 class="card-title">تور جواهردشت</h6>
                                        <p class="card-text">7-9 تیر <span class="dot">.</span> 3 روز و 2 شب</p>
                                        <hr>
                                        <p>شروع قیمت از <span class="price">34,000,000</span> ریال</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide tour-cards">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-sm-12 col-md-6">
                            <div class="card">
                                <img src="./assets/pictures/tour-sabalan.jpg" class="card-img-top" alt="sabalan">
                                <a href="#">
                                    <div class="card-body">
                                        <h6 class="card-title">تور دامنه سبلان</h6>
                                        <p class="card-text">6-9 تیر <span class="dot">.</span> تور سه روزه- اتوبوس-
                                            اکوکمپ
                                        </p>
                                        <hr>
                                        <p>شروع قیمت از <span class="price">67,000,000</span> ریال</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide tour-cards">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-sm-12 col-md-6">
                            <div class="card">
                                <img src="./assets/pictures/tour-dalamper.jpg" class="card-img-top" alt="dalamper">
                                <a href="#">
                                    <div class="card-body">
                                        <h6 class="card-title">تور قره کلیسا و دریاچه دالامپر</h6>
                                        <p class="card-text">6-9 تیر <span class="dot">.</span> تور سه و نیم روزه -
                                            اتوبوس -
                                            هتل</p>
                                        <hr>
                                        <p>شروع قیمت از <span class="price">58,500,000</span> ریال</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                ...
            </div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
    </div>
    <script>
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      // direction: 'vertical',
      // loop: true,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
    <script/>
    `
    }
}

function foreignTourFunction(x) {
    if (x.matches) {
        foreignTour.innerHTML = `
    <div class="container tour-sm-md-style" style="direction: rtl;">
        <div class="row cards-titr">
            <div class="col-12">
                <h4 class="cards-titr">تور خارجی</h4>
            </div>
        </div>
        <div class="swiper">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
                <!-- Slides -->
                <div class="swiper-slide tour-cards">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-sm-12 col-md-6">
                            <div class="card">
                                <img src="./assets/pictures/tour-safari.jpg" class="card-img-top" alt="kenia">
                                <a href="#">
                                    <div class="card-body">
                                        <h6 class="card-title">تور سافاری کنیا</h6>
                                        <p class="card-text">تیر<span class="dot">.</span> تور 7 روزه- پرواز-
                                            هتل</p>
                                        <hr>
                                        <p>شروع قیمت از <span class="price">1550</span> $ <span>+ پرواز</span></p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide tour-cards">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-sm-12 col-md-6">
                            <div class="card">
                                <img src="./assets/pictures/tour-keshmir.jpg" class="card-img-top" alt="keshmir">
                                <a href="#">
                                    <div class="card-body">
                                        <h6 class="card-title">تور کشمیر</h6>
                                        <p class="card-text">7-17 تیر <span class="dot">.</span> تور 8 روزه-
                                            پرواز- هتل
                                        </p>
                                        <hr>
                                        <p>شروع قیمت از <span class="price">1100</span> $ <span>+ پرواز</span></p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide tour-cards">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-sm-12 col-md-6">
                            <div class="card">
                                <img src="./assets/pictures/tour-japan.jpg" class="card-img-top" alt="japan">
                                <a href="#">
                                    <div class="card-body">
                                        <h6 class="card-title">تور ژاپن</h6>
                                        <p class="card-text">5-16 مرداد <span class="dot">.</span> تور 12 روزه</p>
                                        <hr>
                                        <p>شروع قیمت از <span class="price">1550</span> $ <span>+ پرواز</span></p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide tour-cards">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-sm-12 col-md-6">
                            <div class="card">
                                <img src="./assets/pictures/tour-georgia.jpg" class="card-img-top" alt="georgia">
                                <a href="#">
                                    <div class="card-body">
                                        <h6 class="card-title">تور گرجستان (تفلیس و باتومی)</h6>
                                        <p class="card-text">29 تیر- 3 مرداد <span class="dot">.</span> تور سه روزه-
                                            پرواز- هتل
                                        </p>
                                        <hr>
                                        <p>شروع قیمت از <span class="price">1550</span> $ <span>+ پرواز</span></p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide tour-cards">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-sm-12 col-md-6">
                            <div class="card">
                                <img src="./assets/pictures/tour-austrailia.jpg" class="card-img-top" alt="austrailia">
                                <a href="#">
                                    <div class="card-body">
                                        <h6 class="card-title">تور استرالیا</h6>
                                        <p class="card-text">14-18 مرداد <span class="dot">.</span> تور 15 روزه</p>
                                        <hr>
                                        <p>شروع قیمت از <span class="price">5890</span> $ <span>+ پرواز</span></p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide tour-cards">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-sm-12 col-md-6">
                            <div class="card">
                                <img src="./assets/pictures/tour-moghol.jpg" class="card-img-top" alt="mogholestan">
                                <a href="#">
                                    <div class="card-body">
                                        <h6 class="card-title">تور مغولستان</h6>
                                        <p class="card-text">21 تیر- 1 مرداد <span class="dot">.</span> تور 12 روزه-
                                            پرواز- هتل
                                        </p>
                                        <hr>
                                        <p>شروع قیمت از <span class="price">2650</span> $ <span>+ پرواز</span></p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide tour-cards">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-sm-12 col-md-6">
                            <div class="card">
                                <img src="./assets/pictures/tour-brazil.jpg" class="card-img-top" alt="brazil & amazon">
                                <a href="#">
                                    <div class="card-body">
                                        <h6 class="card-title">تور برزیل و جنگل های آمازون</h6>
                                        <p class="card-text">14-28 شهریور <span class="dot">.</span> تور 14 روزه-
                                            پرواز- هتل
                                        </p>
                                        <hr>
                                        <p>شروع قیمت از <span class="price">3050</span> $ <span>+ پرواز</span></p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide tour-cards">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-sm-12 col-md-6">
                            <div class="card">
                                <img src="./assets/pictures/tour-pero.jpg" class="card-img-top" alt="pero">
                                <a href="#">
                                    <div class="card-body">
                                        <h6 class="card-title">تور برزیل و پرو</h6>
                                        <p class="card-text">22 شهریور- 8 مهر <span class="dot">.</span> تور 17 روزه-
                                            پرواز- هتل
                                        </p>
                                        <hr>
                                        <p>شروع قیمت از <span class="price">2370</span> $ <span>+ پرواز</span></p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                ...
            </div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
    </div>
    `
    }
}

function europeTourFunction(x) {
    if (x.matches) {
        europeTour.innerHTML = `
    <div class="container tour-sm-md-style" style="direction: rtl;">
        <div class="row cards-titr">
            <div class="col-12">
                <h4 class="cards-titr">تور اروپا</h4>
            </div>
        </div>
        <div class="swiper">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
                <!-- Slides -->
                <div class="swiper-slide tour-cards">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-sm-12 col-md-6">
                            <div class="card">
                                <img src="./assets/pictures/check.jpg" class="card-img-top" alt="check">
                                <a href="#">
                                    <div class="card-body">
                                        <h6 class="card-title">تور جمهوری چک</h6>
                                        <p class="card-text">4-9 شهریور <span class="dot">.</span> تور 6 روزه- پرواز- هتل</p>
                                        <hr>
                                        <p>شروع قیمت از <span class="price">1290</span> $ <span>+ پرواز</span></p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide tour-cards">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-sm-12 col-md-6">
                            <div class="card">
                                <img src="./assets/pictures/barselon.jpg" class="card-img-top" alt="barselon">
                                <a href="#">
                                    <div class="card-body">
                                        <h6 class="card-title">تور مادرید و بارسلونا</h6>
                                        <p class="card-text"> تیر- مرداد-شهریور <span class="dot">.</span> تور 8 روزه- پرواز- هتل</p>
                                        <hr>
                                        <p>شروع قیمت از <span class="price">1890</span> $ <span>+ پرواز</span></p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                ...
            </div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
    </div>
    `
    }
}

function footerDis(b) {
    if (b.matches) {
        footer3.style.display = 'none'
    }
}

x.addEventListener('change', navFunction)
navFunction('navbar')
y.addEventListener('change', navFunction)
navFunction('navbar')

x.addEventListener('change', domesticTourFunction)
domesticTourFunction('domesticTour')
y.addEventListener('change', domesticTourFunction)
domesticTourFunction('domesticTour')

x.addEventListener('change', foreignTourFunction)
foreignTourFunction('foreignTour')
y.addEventListener('change', foreignTourFunction)
foreignTourFunction('foreignTour')

x.addEventListener('change', europeTourFunction)
europeTourFunction('europeTour')
y.addEventListener('change', europeTourFunction)
europeTourFunction('europeTour')

x.addEventListener('change', footerDis)
footerDis('footer3')


const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    // loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});