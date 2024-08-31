var languageButton = document.querySelector('#language');
var languageButtonCalc = document.querySelector('#language-calc');
var navLanguage = document.querySelector('#nav-language');
var listUA = document.querySelector('#list-ua');
var mediaQueryHeight450px = window.matchMedia('max-height: 450px');
var mediaQuery1024px = window.matchMedia('(max-width: 1024px)');
var mediaQuery768px = window.matchMedia('(max-width: 768px)');
var mediaQuery586px = window.matchMedia('(max-width: 586px)');
var mediaQuery375px = window.matchMedia('(max-width: 376px)');
var mediaQuery320px = window.matchMedia('(max-width: 320px)');
var aboutUsSection = document.querySelector('#about-us');
var servicesSection = document.querySelector('#services');
var applicationSection = document.querySelector('#application');
var contactsSection = document.querySelector('#contacts');
var nav = document.querySelector('nav');

var main = document.querySelector('main');
var footer = document.querySelector('footer');
var sectionContactUs = document.querySelector('.contact-us');
var contactUsButton = document.getElementById('section-contact-us-btn');
var contactUsDropdownMenu = document.getElementById('section-contact-us-dropdown-menu');
var navBarContent = document.querySelector('#navbar-content');
var navbarBrand = document.querySelector('.navbar-brand');
var navbarNav1 = document.querySelector('#navbar-nav-1');
var navBtnContactUsContainer = document.querySelector('.nav-us-btn-mobile');
var navBtnContactUs = document.getElementById('nav-us-btn');
var navDropdownMenu = document.getElementById('nav-dropdown-menu');
var navbarNavBlocks = document.querySelector('#navbar-nav-blocks');
var navBtn = document.querySelector('#header-mobile-btn');
var navbarCollapseMenu = document.querySelector('.navbar-collapse-menu');

var navLinkAboutUs = document.querySelector('#nav-link-about-us');
var navLinkServices = document.querySelector('#nav-link-services');
var navLinkApplication = document.querySelector('#nav-link-application');
var navLinkContacts = document.querySelector('#nav-link-contacts');
var callingPhone = document.querySelector('.calling-phone');
var email = document.querySelector('.email');

var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
var safariVersion = /version\/([\d.]+)/i.exec(navigator.userAgent);
//
if (isSafari && safariVersion && parseFloat(safariVersion[1]) <= 14) {
    navbarNav1.classList.add('safari');
    if (matchMedia) {
        mediaQuery1024px.addListener(ch);
        ch(mediaQuery1024px);
    }
    function ch(mediaElement) {
        if (!mediaElement.matches) {
            for (var i = 0; i < navbarNav1.childNodes.length; i++) {
                if (i % 2 !== 0) {
                    if (navbarNav1.childNodes[i].childNodes[1].textContent === 'Вакансії' || navbarNav1.childNodes[i].childNodes[1].textContent === 'Vacancies') {
                        if (navbarNav1.childNodes[i].classList.contains('safari-row'))
                            navbarNav1.childNodes[i].classList.remove('safari-row');
                    }
                    else {
                        navbarNav1.childNodes[i].classList.add('safari-col');
                        if (navbarNav1.childNodes[i].classList.contains('safari-row'))
                            navbarNav1.childNodes[i].classList.remove('safari-row');
                    }
                }
            }
        }
        else {
            for (var i = 0; i < navbarNav1.childNodes.length; i++) {
                if (i % 2 !== 0 && i !== navbarNav1.childNodes.length - 2) {
                    if (navbarNav1.childNodes[i].classList.contains('safari-col'))
                        navbarNav1.childNodes[i].classList.remove('safari-col');
                    if (!navbarNav1.childNodes[i].classList.contains('safari-row'))
                        navbarNav1.childNodes[i].classList.add('safari-row');
                }
                if (i === navbarNav1.childNodes.length - 2) {
                    if (navbarNav1.childNodes[i].classList.contains('safari-col'))
                        navbarNav1.childNodes[i].classList.remove('safari-col');
                }
            }
        }
    }
    var sliderWrapper = document.querySelector('.gallery-list');
    if(sliderWrapper){
        var galleryPagination = document.querySelector('.swiper-pagination');
        galleryPagination.classList.add('gallery-pagination');
        galleryPagination.classList.remove('swiper-pagination');
    
        var slideWidth = document.querySelector('.gallery-item').clientWidth;
        var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        var centerX = screenWidth / 2;
        var initialPosition = centerX - (slideWidth / 2);
        var startPosition = initialPosition - ((slideWidth * 6) + (30 * 6));
        var currentPosition = startPosition;
        var slides = document.querySelectorAll('.gallery-item');
        for (var i = 0; i < slides.length; i++) {
            slides[i].setAttribute('style', 'margin-right: 30px;');
            if (i === 6) {
                slides[i].classList.add('swiper-slide-active');
            }
        }
    
        function transformSliderWrapper(sliderListElement, currentPositionElement) {
            sliderListElement.setAttribute('style', 'transform: translateX(' + currentPositionElement + 'px); transition-duration: .3s;');
            setTimeout(function() {
                sliderListElement.setAttribute('style', 'transform: translateX(' + currentPositionElement + 'px);');
            }, 300);
        }
        sliderWrapper.setAttribute('style', 'transform: translateX(' + currentPosition + 'px);');
    
    
    
    
        window.addEventListener('resize', function () {
            screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            centerX = screenWidth / 2;
            slideWidth = document.querySelector('.gallery-item').clientWidth;
            initialPosition = centerX - (slideWidth / 2);
            for (var i = 0; i < slides.length; i++) {
                if (slides[i].classList.contains('swiper-slide-active'))
                    currentPosition = initialPosition - ((slideWidth * i) + (30 * i));
            }
            sliderWrapper.setAttribute('style', 'transform: translateX(' + currentPosition + 'px)');
        });
    
    
        for (var i = 0; i < slides.length; i++) {
            var button = document.createElement('span');
            button.setAttribute('class', 'spn gallery-pagination-btn-' + (i + 1) + '');
            if (i === 6)
                button.classList.add('active');
            if (i === slides.length - 1)
                button.classList.add('last');
            galleryPagination.appendChild(button);
        }
    
        var gallerySpans = document.querySelectorAll('.spn');
        for (var i = 0; i < gallerySpans.length; i++) {
            (function (index) {
                gallerySpans[index].addEventListener('click', function () {
                    for (var j = 0; j < gallerySpans.length; j++) {
                        if (gallerySpans[j].classList.contains('active'))
                            gallerySpans[j].classList.remove('active');
                        if (slides[j].classList.contains('swiper-slide-active'))
                            slides[j].classList.remove('swiper-slide-active');
                    }
                    if (!gallerySpans[index].classList.contains('active'))
                        gallerySpans[index].classList.add('active');
                    if (!slides[index].classList.contains('swiper-slide-active'))
                        slides[index].classList.add('swiper-slide-active');
                    currentPosition = initialPosition - ((slideWidth * index) + (30 * index));
                    transformSliderWrapper(sliderWrapper, currentPosition);
                });
            })(i);
        }    
    }
}

else {
    var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 0,
            stretch: -40,
            depth: 100,
            modifier: 1,
            slideShadows: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        initialSlide: 6,
        mousewheel: {
            forceToAxis: true,
        },
    });
}

document.addEventListener('click', function (event) {
    if (navDropdownMenu.classList.contains('show') && event.target !== navBtnContactUs && event.target !== navDropdownMenu)
        navDropdownMenu.classList.remove('show');
    if (contactUsDropdownMenu && contactUsDropdownMenu.classList.contains('show') && event.target !== contactUsButton && event.target !== contactUsDropdownMenu){
        contactUsDropdownMenu.classList.remove('show');
        contactUsDropdownMenu.removeAttribute('style');
    }
    if (listUA.classList.contains('show') && event.target !== navLanguage && event.target !== listUA)
        listUA.classList.remove('show');
});

if (navLanguage){
    navLanguage.addEventListener('click', function(){
        if (!listUA.classList.contains('show'))
            listUA.classList.add('show');
        else
            listUA.classList.remove('show');
    });
}

if (languageButton) {
    languageButton.addEventListener('click', function(){
        PageLanguage(languageButton);
    });
}

if (languageButtonCalc){
    languageButtonCalc.addEventListener('click', function(){
        PageLanguage(languageButtonCalc);
    });
}


var currentPage = document.title;

function PageLanguage(el) {
    if (navLanguage.textContent == "UA") {
        if(el === languageButton && currentPage === 'West Trans UA - компанія'){
            window.location.href = 'pages/index.en.html';
        }

        else if (el === languageButton && currentPage === 'West Trans UA - calculator'){
            window.location.href = 'index.en.html';
        }
        
        else if (el === languageButtonCalc){
            window.location.href = 'calculator.en.html';
        }
    }
    else {
        if(el === languageButton){
            window.location.href = '../index.html';
        }
        
        else if (el === languageButtonCalc && currentPage === 'West Trans UA - компанія'){
            window.location.href = 'pages/calculator.html';
        }
        else if (el === languageButtonCalc && currentPage === 'West Trans UA - calculator'){
            window.location.href = 'calculator.html';
        }
    }
}

function scrollTo(element) {
    window.scroll({
        left: 0,
        top: (element.offsetTop - 50),
        behavior: 'smooth'
    });
}

function menuClose(navElement, navBtnElement, mainElement, footerElement, sectionContactUsElement, navBarContentElement, navbarBrandElement,
    navbarNav1Element, navBtnContactUsContainerElement, navbarNavBlocksElement, navbarCollapseMenuElement) {

    navElement.classList.remove('menu-open');
    navBtnElement.classList.remove('active');
    mainElement.classList.remove('menu-open');
    footerElement.classList.remove('menu-open');
    if(sectionContactUsElement)
        sectionContactUsElement.classList.remove('menu-open');
    navBarContentElement.classList.remove('menu-open');
    navbarBrandElement.classList.remove('menu-open');
    navbarNav1Element.classList.remove('menu-open');
    navBtnContactUsContainerElement.classList.remove('menu-open');
    navbarNavBlocksElement.classList.remove('menu-open');
    navbarCollapseMenuElement.classList.add('close');

    setTimeout(function () {
        navbarCollapseMenuElement.classList.remove('close');
        navbarCollapseMenuElement.classList.remove('menu-open');
    }, 400);
}

function menuOpen(navElement, navBtnElement, mainElement, footerElement, sectionContactUsElement, navBarContentElement, navbarBrandElement,
    navbarNav1Element, navBtnContactUsContainerElement, navbarNavBlocksElement, navbarCollapseMenuElement) {

    navElement.classList.add('menu-open');
    navBtnElement.classList.add('active');
    mainElement.classList.add('menu-open');
    footerElement.classList.add('menu-open');
    if(sectionContactUsElement)
        sectionContactUsElement.classList.add('menu-open');
    navBarContentElement.classList.add('menu-open');
    navbarBrandElement.classList.add('menu-open');
    navbarNav1Element.classList.add('menu-open');
    navBtnContactUsContainerElement.classList.add('menu-open');
    navbarNavBlocksElement.classList.add('menu-open');
    navbarCollapseMenuElement.classList.add('menu-open');
}


function navigation (element) {
    if (navBtn.classList.contains('active') && mediaQuery1024px.matches) {

        menuClose(nav, navBtn, main, footer, sectionContactUs, navBarContent, navbarBrand, navbarNav1, navBtnContactUsContainer, navbarNavBlocks, navbarCollapseMenu);

        element.removeAttribute('href');
        switch(element){
            case email:
                element.setAttribute('href', 'mailto:westtransualogistics@gmail.com');
                break;
            case callingPhone:
                scrollTo(contactsSection);
                break;
            case navLinkContacts:
                scrollTo(contactsSection);
                break;
            case navLinkApplication:
                scrollTo(applicationSection);
                break;
            case navLinkServices:
                scrollTo(servicesSection);
                break;
            case navLinkAboutUs:
                scrollTo(aboutUsSection);
                break;
        }
        if (element != email)
            element.setAttribute('href', '#!');
    }

    else if (!mediaQuery1024px.matches){
        element.removeAttribute('href');
        switch (element) {
            case callingPhone:
                scrollTo(contactsSection);
                break;
            case navLinkContacts:
                scrollTo(contactsSection);
                break;
            case navLinkApplication:
                scrollTo(applicationSection);
                break;
            case navLinkServices:
                scrollTo(servicesSection);
                break;
            case navLinkAboutUs:
                scrollTo(aboutUsSection);
                break;
        }
        element.setAttribute('href', '#!');
    }
}

if(navLinkAboutUs)
    navLinkAboutUs.onclick = function () {navigation(navLinkAboutUs);}
if(navLinkServices)
    navLinkServices.onclick = function () {navigation(navLinkServices);}
if(navLinkApplication)
    navLinkApplication.onclick = function () {navigation(navLinkApplication);}
if(navLinkContacts)
    navLinkContacts.onclick = function () {navigation(navLinkContacts);}
if(callingPhone)
    callingPhone.onclick = function () {navigation(callingPhone);}
if(email)
    email.onclick = function () {navigation(email);}

if(navbarCollapseMenu.classList.contains('menu-open') && navbarCollapseMenu.classList.contains('close'))
    navBtn.onclick = function(){};
else{
    navBtn.onclick = function() {
        if(navbarCollapseMenu.classList.contains('menu-open') && navbarCollapseMenu.classList.contains('close')){
        }
        else{
            if (!navBtn.classList.contains('active')) {
                menuOpen(nav, navBtn, main, footer, sectionContactUs, navBarContent, navbarBrand, navbarNav1, navBtnContactUsContainer, navbarNavBlocks, navbarCollapseMenu);
            }
            else  // button click to close mobile menu
            {
                menuClose(nav, navBtn, main, footer, sectionContactUs, navBarContent, navbarBrand, navbarNav1, navBtnContactUsContainer, navbarNavBlocks, navbarCollapseMenu);
            }
        }
    };
}

navBtnContactUs.addEventListener('click', function() {
    if (!navDropdownMenu.classList.contains('show'))
        navDropdownMenu.classList.add('show');
    else
        navDropdownMenu.classList.remove('show');
});

if(contactUsButton){
    contactUsButton.addEventListener('click', function() {
        if (!contactUsDropdownMenu.classList.contains('show')){
            contactUsDropdownMenu.classList.add('show');
            contactUsDropdownMenu.setAttribute('style', 'position: absolute; margin: 0px; top: 353px; right: 30px;');
        }
        else {
            contactUsDropdownMenu.classList.remove('show');
            contactUsDropdownMenu.removeAttribute('style');
        }
    });
}


var item = '';
var goals = document.querySelector('#about-us-nav-goal');
var aim = document.querySelector('#about-us-nav-aim');
var tasks = document.querySelector('#about-us-nav-task');
var aboutMain = document.querySelector('.about-us-main');
var aboutSectionImg = document.querySelector('#about-us-main-img');
var aboutSectionContent = document.querySelector('#about-us-content');
var aboutSectionContentP1 = document.querySelector('#about-us-content-p1');
var aboutSectionContentP2 = document.querySelector('#about-us-content-p2');
var aboutSectionContentP3 = document.querySelector('#about-us-content-p3');

var aboutSectionContentBLock1 = document.createElement('div');
aboutSectionContentBLock1.setAttribute('id', 'about-us-content-block1');
aboutSectionContentBLock1.setAttribute('class', 'd-flex flex-column about-us-content-block');

var rec1 = document.createElement('div');
rec1.setAttribute('id', 'rec-1');
rec1.setAttribute('class', 'rectangle');

var rect1 = document.createElement('rect');
rect1.setAttribute('id', 'rect-1');
rect1.setAttribute('class', 'd-flex justify-content-center align-items-center rounded-circle');

var rect1Text = document.createTextNode('1');

rect1.appendChild(rect1Text);
rec1.appendChild(rect1);

var rule1 = document.createElement('div');
rule1.setAttribute('class', 'vertical-rule');

var verticalRule1 = document.createElement('div');
verticalRule1.setAttribute('id', 'vertical-rule-1');
verticalRule1.setAttribute('class', 'd-flex about-us-content-vertical-rule');
verticalRule1.appendChild(rule1);

var rec2 = document.createElement('div');
rec2.setAttribute('id', 'rec-2');
rec2.setAttribute('class', 'rectangle');

var rect2 = document.createElement('rect');
rect2.setAttribute('id', 'rect-2');
rect2.setAttribute('class', 'd-flex justify-content-center align-items-center rounded-circle');

var rect2Text = document.createTextNode('2');

rect2.appendChild(rect2Text);
rec2.appendChild(rect2);


var rule2 = document.createElement('div');
rule2.setAttribute('class', 'vertical-rule');

var verticalRule2 = document.createElement('div');
verticalRule2.setAttribute('id', 'vertical-rule-2');
verticalRule2.setAttribute('class', 'd-flex about-us-content-vertical-rule');
verticalRule2.appendChild(rule2);

var rec3 = document.createElement('div');
rec3.setAttribute('id', 'rec-3');
rec3.setAttribute('class', 'rectangle');

var rect3 = document.createElement('rect');
rect3.setAttribute('id', 'rect-2');
rect3.setAttribute('class', 'd-flex justify-content-center align-items-center rounded-circle');

var rect3Text = document.createTextNode('3');

rect3.appendChild(rect3Text);
rec3.appendChild(rect3);

var aboutSectionContentBLock2 = document.createElement('div');
aboutSectionContentBLock2.setAttribute('id', 'about-us-content-block2');
aboutSectionContentBLock2.setAttribute('class', 'd-flex flex-column about-us-content-block');        


function setAboutImgAndP(aboutMainElement, aboutSectionImgElement, itemElement) {
    aboutMainElement.style.opacity = '1';
    if (itemElement === 'goals') {
        if (mediaQuery768px.matches) {
            if(currentPage === 'West Trans UA - компанія')
                aboutSectionImgElement.setAttribute("style", "background-image: radial-gradient(100% 100% at 50% 50%, rgba(255, 255, 255, 0) 12%, #FFFFFF 52.98%, rgba(255, 255, 255, 0) 100%), url('./img/About-us/goals-mobile.webp');");
            else
                aboutSectionImgElement.setAttribute("style", "background-image: radial-gradient(100% 100% at 50% 50%, rgba(255, 255, 255, 0) 12%, #FFFFFF 52.98%, rgba(255, 255, 255, 0) 100%), url('../img/About-us/goals-mobile.webp');");
        }
        else {
            if(currentPage === 'West Trans UA - компанія')
                aboutSectionImgElement.setAttribute("style", "background-image: radial-gradient(100% 100% at 50% 50%, rgba(255, 255, 255, 0) 7%, #FFFFFF 52.98%, rgba(255, 255, 255, 0) 100%), url('./img/About-us/goals.webp');");
            else
                aboutSectionImgElement.setAttribute("style", "background-image: radial-gradient(100% 100% at 50% 50%, rgba(255, 255, 255, 0) 7%, #FFFFFF 52.98%, rgba(255, 255, 255, 0) 100%), url('../img/About-us/goals.webp');");
        }
        if (navLanguage.textContent == "UA") {
            aboutSectionContentP1.innerHTML = 'Якість. Якісно отримувати бажаний результат';
            aboutSectionContentP2.innerHTML = 'Швидко реагувати на нові виклики для сфери логістики';
            aboutSectionContentP3.innerHTML = 'Вчасно виконувати всі поставлені перед нами завдання';
        }
        else {
            aboutSectionContentP1.innerHTML = 'Quality. Get the desired result qualitatively';
            aboutSectionContentP2.innerHTML = 'Quickly respond to new challenges for the field of logistics';
            aboutSectionContentP3.innerHTML = 'Complete all the tasks set before us on time';
        }
    }
    else if (itemElement === 'aim') {
        if(currentPage === 'West Trans UA - компанія')
            aboutSectionImgElement.setAttribute("style", "background-image: radial-gradient(100% 100% at 50% 50%, rgba(255, 255, 255, 0) 7%, #FFFFFF 52.98%, rgba(255, 255, 255, 0) 100%), url('./img/About-us/aim.webp');");
        else
            aboutSectionImgElement.setAttribute("style", "background-image: radial-gradient(100% 100% at 50% 50%, rgba(255, 255, 255, 0) 7%, #FFFFFF 52.98%, rgba(255, 255, 255, 0) 100%), url('../img/About-us/aim.webp');");
    }
    else if (itemElement === 'tasks') {
        if(currentPage === 'West Trans UA - компанія')
            aboutSectionImgElement.setAttribute("style", "background-image: radial-gradient(100% 100% at 50% 50%, rgba(255, 255, 255, 0) 7%, #FFFFFF 52.98%, rgba(255, 255, 255, 0) 100%), url('./img/About-us/tasks.webp');");
        else
            aboutSectionImgElement.setAttribute("style", "background-image: radial-gradient(100% 100% at 50% 50%, rgba(255, 255, 255, 0) 7%, #FFFFFF 52.98%, rgba(255, 255, 255, 0) 100%), url('../img/About-us/tasks.webp');");

        if (navLanguage.textContent == "UA") {
            aboutSectionContentP1.innerHTML = 'Підвищення ефективності логістичних послуг';
            aboutSectionContentP2.innerHTML = 'Покращення обслуговування клієнтів';
            aboutSectionContentP3.innerHTML = 'Налагодження партнерських відносин';
        }
        else {
            aboutSectionContentP1.innerHTML = 'Increasing the efficiency of logistics services';
            aboutSectionContentP2.innerHTML = 'Improving customer service';
            aboutSectionContentP3.innerHTML = 'Establishing partnership relations';
        }
    }
}

function changeAboutSectionContentBlock(aboutSectionContentBLock1Element, rec1Element, verticalRule1Element, rec2Element, verticalRule2Element,
    rec3Element, aboutSectionContentBLock2Element, aboutSectionContentP1Element, aboutSectionContentP2Element, aboutSectionContentP3Element, aboutSectionContentElement) {
    aboutSectionContentBLock1Element.appendChild(rec1Element);
    aboutSectionContentBLock1Element.appendChild(verticalRule1Element);
    aboutSectionContentBLock1Element.appendChild(rec2Element);
    aboutSectionContentBLock1Element.appendChild(verticalRule2Element);
    aboutSectionContentBLock1Element.appendChild(rec3Element);

    aboutSectionContentBLock2Element.appendChild(aboutSectionContentP1Element);
    aboutSectionContentBLock2Element.appendChild(aboutSectionContentP2Element);
    aboutSectionContentBLock2Element.appendChild(aboutSectionContentP3Element);

    aboutSectionContentElement.appendChild(aboutSectionContentBLock1Element);
    aboutSectionContentElement.appendChild(aboutSectionContentBLock2Element);

    if (aboutSectionContentElement.classList.contains('justify-content-center'))
        aboutSectionContentElement.classList.remove('justify-content-center');

    if (aboutSectionContentElement.classList.contains('text-center'))
        aboutSectionContentElement.classList.remove('text-center');
}

if (goals) {
    goals.onclick = function () {
        if (!goals.classList.contains('active')) {
            goals.classList.add('active');
            if (aim.classList.contains('active')) {
                aim.classList.remove('active');
                aboutMain.style.opacity = '0';
            }
            else if (tasks.classList.contains('active')) {
                tasks.classList.remove('active');
                aboutMain.style.opacity = '0';
            }
            setTimeout(function () {
                item = 'goals';
                setAboutImgAndP(aboutMain, aboutSectionImg, item);

                if (aboutSectionContent.hasChildNodes) {
                    while (aboutSectionContent.firstChild) {
                        aboutSectionContent.removeChild(aboutSectionContent.firstChild);
                    }
                }
                changeAboutSectionContentBlock(aboutSectionContentBLock1, rec1, verticalRule1, rec2, verticalRule2, rec3, aboutSectionContentBLock2,
                    aboutSectionContentP1, aboutSectionContentP2, aboutSectionContentP3, aboutSectionContent);

            }, 300);
        }
    }
}

var aboutAimDiv = document.createElement('div');
var aboutDivP = document.createElement('p');
if(navLanguage.textContent == "UA")
    var aboutDivPText = document.createTextNode('Зробити доступнішими транспортно-експедиційні послуги в Україні та за її межами');
else
    var aboutDivPText = document.createTextNode('To make transport and forwarding services more accessible in Ukraine and abroad');

if (aim) {
    aim.onclick = function () {
        if (!aim.classList.contains('active')) {
            aim.classList.add('active');
            if (goals.classList.contains('active')) {
                goals.classList.remove('active');
                aboutMain.style.opacity = '0';
            }
            else if (tasks.classList.contains('active')) {
                tasks.classList.remove('active');
                aboutMain.style.opacity = '0';
            }
            setTimeout(function () {
                item = 'aim';
                setAboutImgAndP(aboutMain, aboutSectionImg, item);
                aboutDivP.setAttribute('class', 'about-us-content-text');
                aboutDivP.appendChild(aboutDivPText);

                if (mediaQuery768px.matches) {
                    aboutAimDiv.setAttribute('style', 'width: 160px; align-items: center;');
                }
                else {
                    aboutAimDiv.setAttribute('style', 'max-width: 293px;');
                }

                aboutAimDiv.setAttribute('class', 'd-flex');
                aboutAimDiv.appendChild(aboutDivP);

                if (aboutSectionContent.hasChildNodes) {
                    while (aboutSectionContent.firstChild) {
                        aboutSectionContent.removeChild(aboutSectionContent.firstChild);
                    }
                }
                aboutSectionContent.appendChild(aboutAimDiv);
                aboutSectionContent.classList.add('justify-content-center');
                if (mediaQuery320px.matches)
                    aboutSectionContent.classList.add('text-center');
            }, 300);

        }
    }
}

if(tasks){
    tasks.onclick = function () {
        if (!tasks.classList.contains('active')) {
            tasks.classList.add('active');
            if (goals.classList.contains('active')) {
                goals.classList.remove('active');
                aboutMain.style.opacity = '0';

            }
            else if (aim.classList.contains('active')) {
                aim.classList.remove('active');
                aboutMain.style.opacity = '0';
            }
            setTimeout(function() {
                item = 'tasks';
                setAboutImgAndP(aboutMain, aboutSectionImg, item);

                if (aboutSectionContent.hasChildNodes) {
                    while (aboutSectionContent.firstChild) {
                        aboutSectionContent.removeChild(aboutSectionContent.firstChild);
                    }
                }

                changeAboutSectionContentBlock(aboutSectionContentBLock1, rec1, verticalRule1, rec2, verticalRule2, rec3, aboutSectionContentBLock2,
                    aboutSectionContentP1, aboutSectionContentP2, aboutSectionContentP3, aboutSectionContent);
                
            }, 300);
        }
    }
}

var navbarNavs1 = document.getElementById('navbar-navs-1');
if(window.innerHeight < 460){
    if(!navbarNavs1.classList.contains('overflow-scroll'))
        navbarNavs1.classList.add('overflow-scroll');
    
    navbarCollapseMenu.setAttribute('style', 'overflow: hidden');
}
else {
    if(navbarNavs1.classList.contains('overflow-scroll'))
        navbarNavs1.classList.remove('overflow-scroll');
    
    if (navbarCollapseMenu.hasAttribute('style'))
        navbarCollapseMenu.removeAttribute('style');
}
var startWindowX = 0;
var startAboutMainTranslateX = 0;
function windowResize() {
    console.log('window resized!')
    if(mediaQuery320px.matches) {
        if(aboutMain)
            aboutMain.removeAttribute('style');
    }
    else if (mediaQuery375px.matches) {
        startWindowX = 375;
        startAboutMainTranslateX = -185;
        if (window.screen.width != startWindowX && window.screen.width > 320) {
            if(aboutMain)
                aboutMain.style = 'transform: translate3d(' + (startAboutMainTranslateX - (startWindowX - window.screen.width)) + 'px, 0px, 0px);';
        }

        else if (window.screen.width == startWindowX) {
            if(aboutMain)
                aboutMain.style = 'transform: translate3d(-185px, 0px, 0px);';
        }

    }
    else if (mediaQuery586px.matches) {
        startWindowX = 586;
        startAboutMainTranslateX = 0;
        if (window.screen.width != startWindowX && window.screen.width > 376) {
            if(aboutMain)
                aboutMain.style = 'transform: translate3d(' + (startAboutMainTranslateX - (startWindowX - window.screen.width)) + 'px, 0px, 0px);';
        }

        else if (window.screen.width == startWindowX) {
            if(aboutMain)
                aboutMain.style = 'transform: translate3d(0, 0, 0);';
        }

        else {
            if (aboutMain)
                aboutMain.removeAttribute('style');
        }
    }
    else {
        if (aboutMain)
            aboutMain.removeAttribute('style');
    }

    if(window.innerHeight < 460){
        if(!navbarNavs1.classList.contains('overflow-scroll'))
            navbarNavs1.classList.add('overflow-scroll');

        if(!navbarCollapseMenu.hasAttribute('style'))
            navbarCollapseMenu.setAttribute('style', 'overflow: hidden');
    }
    else {
        if(navbarNavs1.classList.contains('overflow-scroll'))
            navbarNavs1.classList.remove('overflow-scroll');

        if (navbarCollapseMenu.hasAttribute('style'))
            navbarCollapseMenu.removeAttribute('style');
    }
}

window.addEventListener('resize', windowResize);
window.addEventListener('orientationchange', windowResize);


var calcRoute = document.getElementById('calcExampleFormControlInput1');
var calcFuelCostPer100km = document.getElementById('calcExampleFormControlInput2');
var calcFuelPrice = document.getElementById('calcExampleFormControlInput3');
var calcCostForTraveling = document.getElementById('calcExampleFormControlInput4');
var calcCostWithoutFuel = document.getElementById('calcExampleFormControlInput5');
var calcCostPer1km = document.getElementById('calcExampleFormControlInput6');
var calcEuro = document.getElementById('calcExampleFormControlInput7');


// Зробити AJAX запит
// var xhr = new XMLHttpRequest();
// xhr.open("GET", "https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=11", true);
// xhr.onreadystatechange = function() {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     // Розпарсити відповідь API в JSON
//     var response = JSON.parse(xhr.responseText);
//     // Знайти курс гривні до євро
//     var euroRate = response.find(function(currency) {
//       return currency.ccy === "EUR";
//     });
//     // Вставити курс валюти в поле input
//     calcEuro.value = euroRate.buy;
//   }
// };
// xhr.onerror = function() {
//     console.error("Помилка запиту до сервера");
//   };
// xhr.send();



// const url = 'https://api.allorigins.win/raw?url=https://index.minfin.com.ua/ua/markets/fuel/dt/';

// fetch(url)
//   .then(response => response.text())
//   .then(data => {
//     const priceRegExp = /<td class="td-number"><span>Ціна на оптовому ринку \(без ПДВ\)<\/span><br>(.*?)<\/td>/gm
//     const priceMatch = priceRegExp.exec(data);
//     if (priceMatch) {
//       const price = priceMatch[1].trim();
//       console.log(`Актуальна ціна на дизельне паливо: ${price}`);
//     } else {
//       console.log('Ціна не знайдена');
//     }
//   })
//   .catch(error => console.log(error));

if(calcRoute)
    updateCalcCostForTraveling();

function updateCalcCostForTraveling() {
    calcCostForTraveling.value = (((Number(calcRoute.value) / 100) * Number(calcFuelCostPer100km.value)) * Number(calcFuelPrice.value)) * 4;
    updateCalcCostWithoutFuel();
    updateCalcCostPer1km();
}
function updateCalcCostWithoutFuel() {
    calcCostWithoutFuel.value = Number(calcCostForTraveling.value) - (Number(calcCostForTraveling.value) / 4);
}
function updateCalcCostPer1km() {
    calcCostPer1km.value = Number(calcRoute.value) / Number(calcCostForTraveling.value);
}

if(calcRoute)
    calcRoute.addEventListener('input', updateCalcCostForTraveling);
if(calcFuelCostPer100km)
    calcFuelCostPer100km.addEventListener('input', updateCalcCostForTraveling);

// fetch('https://index.minfin.com.ua/ua/markets/fuel/dt/')
//   .then(response => response.text())
//   .then(data => {
//     const parser = new DOMParser();
//     const htmlDocument = parser.parseFromString(data, 'text/html');
//     const dieselPrice = htmlDocument.querySelector('.mfz-tabl__td.mfz-tabl__td--green:last-child').innerText;
//     document.getElementById('calcExampleFormControlInput4').value = dieselPrice;
//   })
//   .catch(error => console.error(error));





// var calcCostRoute = document.querySelector('#calcExampleFormControlInput3');
// var calcCostWithMarkup = document.querySelector('#calcExampleFormControlInput9');
// var calcCostForOnePlaceOfDelivery = document.querySelector('#calcExampleFormControlInput12');
// var calcCostPerOneDeliveredKg = document.querySelector('#calcExampleFormControlInput15');

// var calcLength = document.querySelector('#calcExampleFormControlInput1');
// var calcCostPerOneDay = document.querySelector('#calcExampleFormControlInput2');
// var calcCountOfPlaces = document.querySelector('#calcExampleFormControlInput4');
// var calcDriverSalary = document.querySelector('#calcExampleFormControlInput5');
// var calcMarkup = document.querySelector('#calcExampleFormControlInput6');
// var calcProductWeight = document.querySelector('#calcExampleFormControlInput7');
// var calcForwarderSalary = document.querySelector('#calcExampleFormControlInput8');
// var calcCostFuel = document.querySelector('#calcExampleFormControlInput10');
// var calcDayCount = document.querySelector('#calcExampleFormControlInput11');
// var calcFuelPrice = document.querySelector('#calcExampleFormControlInput13');
// var calcAnotherCost = document.querySelector('#calcExampleFormControlInput14');

// if (calcCostRoute)
//     updateCalcCostRoute();

// function updateCalcCostRoute() {
//     if(calcLength.value < 0)
//         calcLength.value = 0;
//     else if (calcCostFuel.value < 0)
//         calcCostFuel.value = 0;
//     else if (calcFuelPrice.value < 0)
//     calcFuelPrice.value = 0;
//     else if (calcCostPerOneDay.value < 0)
//         calcCostPerOneDay.value = 0;
//     else if (calcDriverSalary.value < 0)
//         calcDriverSalary.value = 0;
//     else if (calcForwarderSalary.value < 0)
//         calcForwarderSalary.value = 0;
//     else if (calcDayCount.value < 0)
//         calcDayCount.value = 1;
//     else if (calcAnotherCost.value < 0)
//         calcAnotherCost.value = 0;

//     calcCostRoute.value = (((((Number(calcLength.value) / 100) * Number(calcCostFuel.value)) * Number(calcFuelPrice.value))
//      + Number(calcCostPerOneDay.value) + Number(calcDriverSalary.value) + Number(calcForwarderSalary.value))
//       * Number(calcDayCount.value)) + Number(calcAnotherCost.value);
//     updateCalcCostWithMarkup();
// }

// function updateCalcCostWithMarkup() {
//     if(calcMarkup.value < 0)
//         calcMarkup.value = 0;
    
    
//     calcCostWithMarkup.value = Number(calcCostRoute.value) + (Number(calcCostRoute.value) * (Number(calcMarkup.value) / 100));
//     updateCalcCostForOnePlaceOfDelivery();
//     updateCalcCostPerOneDeliveredKg();
// }

// function updateCalcCostForOnePlaceOfDelivery() {
//     if(calcCountOfPlaces.value < 0)
//         calcCountOfPlaces.value = 0;
        
//     if(calcCountOfPlaces.value == 0) {
//         calcCostForOnePlaceOfDelivery.value = 0;
//         return;
//     }
//     calcCostForOnePlaceOfDelivery.value = Number(calcCostWithMarkup.value) / Number(calcCountOfPlaces.value);
// }

// function updateCalcCostPerOneDeliveredKg() {
//     if(calcProductWeight.value < 0)
//         calcProductWeight.value = 0;
    
//     if(calcProductWeight.value == 0) {
//         calcCostPerOneDeliveredKg.value = 0;
//         return;
//     }
//     calcCostPerOneDeliveredKg.value = Number(calcCostWithMarkup.value) / Number(calcProductWeight.value);
// }

// if (calcLength)
//     calcLength.addEventListener("input", updateCalcCostRoute);
// if (calcCostFuel)
//     calcCostFuel.addEventListener("input", updateCalcCostRoute);
// if (calcFuelPrice)
//     calcFuelPrice.addEventListener("input", updateCalcCostRoute);
// if (calcCostPerOneDay)
//     calcCostPerOneDay.addEventListener("input", updateCalcCostRoute);
// if (calcDriverSalary)
//     calcDriverSalary.addEventListener("input", updateCalcCostRoute);
// if (calcForwarderSalary)
//     calcForwarderSalary.addEventListener("input", updateCalcCostRoute);
// if (calcDayCount)
//     calcDayCount.addEventListener("input", updateCalcCostRoute);
// if (calcAnotherCost)
//     calcAnotherCost.addEventListener("input", updateCalcCostRoute);
// if (calcMarkup)
//     calcMarkup.addEventListener("input", updateCalcCostWithMarkup);
// if (calcCountOfPlaces)
//     calcCountOfPlaces.addEventListener("input", updateCalcCostForOnePlaceOfDelivery);
// if (calcProductWeight)
//     calcProductWeight.addEventListener("input", updateCalcCostPerOneDeliveredKg);


var formButton = document.querySelector('#form-button');

var contactsInstagram = document.querySelector('#contacts-instagram');

if (matchMedia){
    mediaQuery1024px.addListener(changes);
    changes(mediaQuery1024px);
}

if (matchMedia){
    mediaQuery768px.addListener(changes);
    changes(mediaQuery768px);
}

if (matchMedia){
    mediaQuery375px.addListener(changes);
    changes(mediaQuery375px);
}

if (matchMedia){
    mediaQuery586px.addListener(changes);
    changes(mediaQuery586px);
}

if (matchMedia){
    mediaQuery320px.addListener(changes);
    changes(mediaQuery320px);
}

function changes(mediaQueryElement) {
    if (mediaQueryElement.matches === true && mediaQueryElement.matches === mediaQuery1024px.matches ||
        mediaQueryElement.matches === true && mediaQueryElement.matches === mediaQuery768px.matches ||
        mediaQueryElement.matches === true && mediaQueryElement.matches === mediaQuery586px.matches ||
        mediaQueryElement.matches === true && mediaQueryElement.matches === mediaQuery375px.matches ||
        mediaQueryElement.matches === true && mediaQueryElement.matches === mediaQuery320px.matches)   // less than 1024px
    {
        if(currentPage === 'West Trans UA - компанія')
            navbarBrand.firstChild.setAttribute('src', './img/Header/logo-mobile.webp');
        else
            navbarBrand.firstChild.setAttribute('src', '../img/Header/logo-mobile.webp');
        
        if (mediaQueryElement.matches === mediaQuery768px.matches) {
            if (formButton) {
                formButton.classList.remove('mb-4');
                formButton.classList.add('mb-1');
            }
            if (mediaQueryElement.matches === mediaQuery320px.matches) {
                aboutMain.removeAttribute('style');
            }
            else if (mediaQueryElement.matches === mediaQuery375px.matches) {
                startWindowX = 375;
                startAboutMainTranslateX = -185;
                if (window.screen.width != startWindowX && window.screen.width > 320) {
                    aboutMain.style = 'transform: translate3d(' + (startAboutMainTranslateX - (startWindowX - window.screen.width)) + 'px, 0px, 0px);';
                }
            }
            else if (mediaQueryElement.matches === mediaQuery586px.matches) {
                startWindowX = 586;
                startAboutMainTranslateX = 0;
                if (window.screen.width != startWindowX && window.screen.width > 376) {
                    aboutMain.style = 'transform: translate3d(' + (startAboutMainTranslateX - (startWindowX - window.screen.width)) + 'px, 0px, 0px);';
                }
            }
        }
    }
    else if (mediaQueryElement.matches === false && mediaQueryElement.matches === mediaQuery1024px.matches || 
        mediaQueryElement.matches === false && mediaQueryElement.matches === mediaQuery768px.matches)   // more than 768px or 1024px
    {
        if(navbarNavs1.classList.contains('overflow-scroll'))
            navbarNavs1.classList.remove('overflow-scroll');
        
        if (mediaQueryElement.matches === mediaQuery768px.matches) {
            if (formButton) {
                if (formButton.classList.contains('mb-1')) {
                    formButton.classList.remove('mb-1');
                    formButton.classList.add('mb-4');
                }
            }
        }
        if (mediaQueryElement.matches === mediaQuery1024px.matches){
            if(currentPage === 'West Trans UA - компанія')
                navbarBrand.firstChild.setAttribute('src', './img/Header/logo.webp');
            else
                navbarBrand.firstChild.setAttribute('src', '../img/Header/logo.webp');
        }

    }
}

window.addEventListener('scroll', function () {
    if(mediaQuery1024px.matches)   // less than 1024 px
    {
        if(window.pageYOffset >= 20) {
            nav.setAttribute('style', 'padding: 10px 0');
            //nav.style = "padding: 10px 0";
        }
        else
        {
            nav.removeAttribute('style');
        }
    }
});