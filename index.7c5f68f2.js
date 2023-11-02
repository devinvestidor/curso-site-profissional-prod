!/**
* Template Name: OnePage
* Updated: Mar 10 2023 with Bootstrap v5.2.3
* Template URL: https://bootstrapmade.com/onepage-multipurpose-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/function(){/**
   * Easy selector helper function
   */let e=(e,t=!1)=>(e=e.trim(),t)?[...document.querySelectorAll(e)]:document.querySelector(e),t=(t,i,o,a=!1)=>{let s=e(i,a);s&&(a?s.forEach(e=>e.addEventListener(t,o)):s.addEventListener(t,o))},i=(e,t)=>{e.addEventListener("scroll",t)},o=e("#navbar .scrollto",!0),a=()=>{let t=window.scrollY+200;o.forEach(i=>{if(!i.hash)return;let o=e(i.hash);o&&(t>=o.offsetTop&&t<=o.offsetTop+o.offsetHeight?i.classList.add("active"):i.classList.remove("active"))})};window.addEventListener("load",a),i(document,a);/**
   * Scrolls to an element with header offset
   */let s=t=>{let i=e("#header").offsetHeight,o=e(t).offsetTop;window.scrollTo({top:o-i,behavior:"smooth"})},l=e("#header");if(l){let e=()=>{window.scrollY>100?l.classList.add("header-scrolled"):l.classList.remove("header-scrolled")};window.addEventListener("load",e),i(document,e)}/**
   * Back to top button
   */let n=e(".back-to-top");if(n){let e=()=>{window.scrollY>100?n.classList.add("active"):n.classList.remove("active")};window.addEventListener("load",e),i(document,e)}/**
   * Mobile nav toggle
   */t("click",".mobile-nav-toggle",function(t){e("#navbar").classList.toggle("navbar-mobile"),this.classList.toggle("bi-list"),this.classList.toggle("bi-x")}),/**
   * Mobile nav dropdowns activate
   */t("click",".navbar .dropdown > a",function(t){e("#navbar").classList.contains("navbar-mobile")&&(t.preventDefault(),this.nextElementSibling.classList.toggle("dropdown-active"))},!0),/**
   * Scrool with ofset on links with a class name .scrollto
   */t("click",".scrollto",function(t){if(e(this.hash)){t.preventDefault();let i=e("#navbar");if(i.classList.contains("navbar-mobile")){i.classList.remove("navbar-mobile");let t=e(".mobile-nav-toggle");t.classList.toggle("bi-list"),t.classList.toggle("bi-x")}s(this.hash)}},!0),/**
   * Scroll with ofset on page load with hash links in the url
   */window.addEventListener("load",()=>{window.location.hash&&e(window.location.hash)&&s(window.location.hash)});/**
   * Preloader
   */let d=e("#preloader");d&&window.addEventListener("load",()=>{d.remove()}),/**
   * Testimonials slider
   */new Swiper(".testimonials-slider",{speed:600,loop:!0,autoplay:{delay:5e3,disableOnInteraction:!1},slidesPerView:"auto",pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},breakpoints:{320:{slidesPerView:1,spaceBetween:20},1200:{slidesPerView:3,spaceBetween:20}}}),/**
   * Portfolio details slider
   */new Swiper(".portfolio-details-slider",{speed:400,loop:!0,autoplay:{delay:5e3,disableOnInteraction:!1},pagination:{el:".swiper-pagination",type:"bullets",clickable:!0}}),/**
   * Animation on scroll
   */window.addEventListener("load",()=>{AOS.init({duration:1e3,easing:"ease-in-out",once:!0,mirror:!1})}),/**
   * Initiate Pure Counter 
   */new PureCounter}();//# sourceMappingURL=index.7c5f68f2.js.map

//# sourceMappingURL=index.7c5f68f2.js.map
