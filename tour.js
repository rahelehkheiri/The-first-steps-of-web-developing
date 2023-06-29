let navbar = document.getElementById('navbar');
let footer3 = document.getElementById('footer3');

let pageTitle = document.getElementById('tour-page-title');
let pageTop = document.getElementById('tour-page-top');
let tourPlan = document.getElementById('tour-plan')

const x = window.matchMedia("(max-width: 480px)");
const y = window.matchMedia("(max-width: 768px)");
const z = window.matchMedia("(max-width: 1024px)");

const tours = [
    {
        pageName: 'تور تبریز',
        imgFile1: './assets/pictures/tabriz-1.jpg',
        imgFile2: './assets/pictures/tabriz-2.jpg',
        imgFile3: './assets/pictures/tabriz-3.jpg',
        imgFile4: './assets/pictures/tabriz-4.jpg',
        imgFile5: './assets/pictures/tabriz-5.jpg',
        titr: 'برنامه سفر تور با پرواز',
        firstTitr: 'روز اول',
        secondTitr: 'روز دوم',
        thirdTitr: 'روزسوم',
        picFirst: './assets/pictures/tabriz-first.jpg',
        picSecond: './assets/pictures/tabriz-second.jpg',
        picThird: './assets/pictures/tabriz-third.jpg',
        firstDay: 'با پرواز ساعت 7:40 صبح از تهران به سمت تبریز پرواز می‌کنیم. و به بازدید شهر زیبا تبریز میپردازیم و از مسجد کبود، موزه آذربایجان، بازار سرپوشیده تبریز (ثبت در فهرست میراث یونسکو)، خانه مشروطه، ارگ علیشاه، موزه قاجار، مقبره الشعرا و عمارت ایل گلی بازدید میکنیم و در هتل استراحت میکنیم.',
        secondDay: 'پس از صرف صبحانه به سمت جلفا میریم و از کلیسا سنت استپانوس (ثبت در فهرست میراث یونسکو)، کلیسا چوپان و آبشار آسیاب خرابه بازدید میکنیم، سپس به منطقه آزاد جلفا برای خرید میرویم، سپس به سمت تبریز محل اقامت میرویم.',
        thirdDay: 'پس از صرف صبحانه به سمت روستا صخره ای کندوان میرویم، پس از صرف ناهار به سمت فرودگاه رفته و با پرواز ساعت 16:45 به سمت تهران پرواز میکنیم.'
    }
]

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

function footerDis(b) {
    if (b.matches) {
        footer3.style.display = 'none'
    }
}

x.addEventListener('change', navFunction)
navFunction('navbar')
y.addEventListener('change', navFunction)
navFunction('navbar')

x.addEventListener('change', footerDis)
footerDis('footer3')

tours.map((el) => {

    pageTitle.innerText = `${el.pageName}`;

    pageTop.innerHTML = `
    <div class="row">
        <div class="col-6 top-pic">
            <img src="${el.imgFile1}" style=" width: 100%; height: auto;">
        </div>
        <div class="col-6 top-pic">
            <div class="row">
                <div class="col-6 top-pic">
                    <img src="${el.imgFile2}" style=" width: 100%; height: auto;">
                </div>
                <div class="col-6 top-pic">
                    <img src="${el.imgFile3}" style=" width: 100%; height: auto;">
                </div>
            </div>
            <div class="row">
                <div class="col-6 top-pic">
                    <img src="${el.imgFile4}" style=" width: 100%; height: auto;">
                </div>
                <div class="col-6 top-pic">
                    <img src="${el.imgFile5}" style=" width: 100%; height: auto;">
                </div>
            </div>
        </div>
    </div>
    `
    tourPlan.innerHTML = `
    <div class="row mb-5 mt-5">
        <div class="col-12">
            <h2>${el.titr}</h2>
        </div>
    </div>
    <div class="row mb-3">
        <div class="col-6">
            <h3>${el.firstTitr}</h3>
            <p style="text-align: justify; font-size: 20px;">${el.firstDay}</p>
        </div>
        <div class="col-6 rounded">
            <img src="${el.picFirst}" style=" width: 100%; height: auto;">
        </div>
    </div>
    <div class="row mb-3">
        <div class="col-6">
            <h3>${el.secondTitr}</h3>
            <p style="text-align: justify; font-size: 20px;">${el.secondDay}</p>
        </div>
        <div class="col-6 rounded">
            <img src="${el.picSecond}" style=" width: 100%; height: auto;">
        </div>
    </div>
    <div class="row mb-3">
        <div class="col-6">
            <h3>${el.thirdTitr}</h3>
            <p style="text-align: justify; font-size: 20px;">${el.thirdDay}</p>
        </div>
        <div class="col-6 rounded">
            <img src="${el.picThird}" style=" width: 100%; height: auto;">
        </div>
    </div>
    `
})