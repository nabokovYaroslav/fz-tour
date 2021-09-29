window.onload = function(){

    let menu = document.querySelector('.nav');//меню

    let header_photo = document.querySelector('.header');//хедер фото

    let counter = document.querySelectorAll('.count h2');//счётчик


    let services = document.querySelectorAll('.services .col-lg-4'); // сервисы

    let choose_title = document.querySelector('.choose .title');
    let choose_items = document.querySelectorAll('.choose .col-sm-4');

    let counter_items = document.querySelectorAll('.counter .col-md-3');

    let special_slider = document.querySelector('.special .owl-carousel');

    let deal_title = document.querySelector('.deals .title');
    let deal_items = document.querySelectorAll('.deals .col-sm-4');

    let tours_title = document.querySelector('.tours .title');
    let tours_slider = document.querySelector('.tours .owl-carousel')

    let gallery_title = document.querySelector('.gallery .title');
    let gallery_slider = document.querySelector('.gallery .owl-carousel');

    let blog_title = document.querySelector('.blog .title');

    let reviews_title = document.querySelector('.reviews .title');

    let partners_slider = document.querySelector('.partners .owl-carousel');

    let contact_items = document.querySelectorAll('.contact .col-lg-6')

    let home_section = document.querySelector('#home');
    let services_section = document.querySelector('#services');
    let special_section = document.querySelector('#special');
    let deals_section = document.querySelector('#deals');
    let tours_section = document.querySelector('#tours');
    let gallery_section = document.querySelector('#gallery');
    let blog_section = document.querySelector('#blog');
    let contact_section = document.querySelector('#contact');

    let menu_button = document.querySelectorAll('.nav-menu a');

    let burger = document.querySelector('.burger i');
    let links = document.querySelector('.links');

    burger.onclick = function (){
        this.classList.toggle('active');
        links.classList.toggle('active')
    }


    let onScroll = function () {
        let current_position = -35 + (window.pageYOffset*(28/40))
        header_photo.style.backgroundPosition = "50% "+current_position+"px"
        if (window.pageYOffset >= 80) {
            menu.classList.add('active');
        } else {
            menu.classList.remove('active');
        }

        
        if(home_section.getBoundingClientRect().top <= 100){
            for(let i = 0; i<menu_button.length; i++){
                menu_button[i].classList.remove('active')
            }
            menu_button[0].classList.add('active')
            if(services_section.getBoundingClientRect().top <= 100){
                for(let i = 0; i<menu_button.length; i++){
                    menu_button[i].classList.remove('active')
                }
                menu_button[1].classList.add('active')
                if(special_section.getBoundingClientRect().top <= 100){
                    for(let i = 0; i<menu_button.length; i++){
                        menu_button[i].classList.remove('active')
                    }
                    menu_button[2].classList.add('active')
                    if(deals_section.getBoundingClientRect().top <= 100){
                        for(let i = 0; i<menu_button.length; i++){
                            menu_button[i].classList.remove('active')
                        }
                        menu_button[3].classList.add('active')
                        if(tours_section.getBoundingClientRect().top <= 100){
                            for(let i = 0; i<menu_button.length; i++){
                                menu_button[i].classList.remove('active')
                            }
                            menu_button[4].classList.add('active')
                            if(gallery_section.getBoundingClientRect().top <= 100){
                                for(let i = 0; i<menu_button.length; i++){
                                    menu_button[i].classList.remove('active')
                                }
                                menu_button[5].classList.add('active')
                                if(blog_section.getBoundingClientRect().top <= 100){
                                    for(let i = 0; i<menu_button.length; i++){
                                        menu_button[i].classList.remove('active')
                                    }
                                    menu_button[6].classList.add('active')
                                    if(contact_section.getBoundingClientRect().top <= 100){
                                        for(let i = 0; i<menu_button.length; i++){
                                            menu_button[i].classList.remove('active')
                                        }
                                        menu_button[7].classList.add('active')
                                    } 
                                } 
                            } 
                        } 
                    } 
                } 
            } 
        }

        for(let i = 0; i<services.length; i++){
            if(services[i].getBoundingClientRect().top - window.innerHeight <= 0){
                services[i].classList.add('aos-animate')
            } else{
                services[i].classList.remove('aos-animate')
            }
    }

    if(choose_title.getBoundingClientRect().top - window.innerHeight <= 0){
        choose_title.classList.add('aos-animate')
    } else{
        choose_title.classList.remove('aos-animate')
    }

    for(let i = 0; i<choose_items.length; i++){
        if(choose_items[i].getBoundingClientRect().top - window.innerHeight <= 0){
            choose_items[i].classList.add('aos-animate')
        } else{
            choose_items[i].classList.remove('aos-animate')
        }
    }

    for(let i = 0; i<counter_items.length; i++){
        if(counter_items[i].getBoundingClientRect().top - window.innerHeight <= 0){
            counter_items[i].classList.add('aos-animate')
        } else{
            counter_items[i].classList.remove('aos-animate')
        }
    }

    if(special_slider.getBoundingClientRect().top - window.innerHeight <= 0){
        special_slider.classList.add('aos-animate')
    } else{
        special_slider.classList.remove('aos-animate')
    }

    if(deal_title.getBoundingClientRect().top - window.innerHeight <= 0){
        deal_title.classList.add('aos-animate')
    } else{
        deal_title.classList.remove('aos-animate')
    }

    for(let i = 0; i<deal_items.length; i++){
        if(deal_items[i].getBoundingClientRect().top - window.innerHeight <= 0){
            deal_items[i].classList.add('aos-animate')
        } else{
            deal_items[i].classList.remove('aos-animate')
        }
    }

    if(tours_title.getBoundingClientRect().top - window.innerHeight <= 0){
        tours_title.classList.add('aos-animate')
    } else{
        tours_title.classList.remove('aos-animate')
    }

    if(tours_slider.getBoundingClientRect().top - window.innerHeight <= 0){
        tours_slider.classList.add('aos-animate')
    } else{
        tours_slider.classList.remove('aos-animate')
    }
    
    if(gallery_title.getBoundingClientRect().top - window.innerHeight <= 0){
        gallery_title.classList.add('aos-animate')
    } else{
        gallery_title.classList.remove('aos-animate')
    }

    if(gallery_slider.getBoundingClientRect().top - window.innerHeight <= 0){
        gallery_slider.classList.add('aos-animate')
    } else{
        gallery_slider.classList.remove('aos-animate')
    }

    if(blog_title.getBoundingClientRect().top - window.innerHeight <= 0){
        blog_title.classList.add('aos-animate')
    } else{
        blog_title.classList.remove('aos-animate')
    }

    if(reviews_title.getBoundingClientRect().top - window.innerHeight <= 0){
        reviews_title.classList.add('aos-animate')
    } else{
        reviews_title.classList.remove('aos-animate')
    }

    if(partners_slider.getBoundingClientRect().top - window.innerHeight <= 0){
        partners_slider.classList.add('aos-animate')
    } else{
        partners_slider.classList.remove('aos-animate')
    }

    for(let i = 0; i<contact_items.length; i++){
        if(contact_items[i].getBoundingClientRect().top - window.innerHeight <= 0){
            contact_items[i].classList.add('aos-animate')
        } else{
            contact_items[i].classList.remove('aos-animate')
        }
    }

    }

    $('.special .owl-carousel').owlCarousel({
        loop:false,
        margin:30,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false,
            },
            800:{
                items:2,
                nav:false,
            }
        }
    })

    $('.tours .owl-carousel').owlCarousel({
        loop:false,
        nav: false,
        margin:30,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            700:{
                items:2
            },
            1000:{
                items:3,
            }
        }
    })

    $('.gallery .owl-carousel').owlCarousel({
        loop:false,
        nav: false,
        margin:30,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
        }
    })

    $('.reviews .owl-carousel').owlCarousel({
        loop:false,
        nav: false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            700:{
                items:2
            },
            1000:{
                items:3,
            }
        }
    })

    $('.partners .owl-carousel').owlCarousel({
        loop:true,
        nav: false,
        dots: false,
        autoplay: true,
        margin: 30,
        autoplayTimeout:3000,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
            },
            800:{
                items:3
            },
            1200:{
                items:5,
            }
        }
    })

    let current_height = 0;
    let hover_desc = document.querySelectorAll('.special .hover-desc');
    let slider_items = document.querySelectorAll('.special .item');
    for(let i = 0; i<hover_desc.length; i++){
        hover_desc[i].style.transition = 'all 0.3s ease-in-out';
    }
    hover_desc_calc_position = function(){
        for(let i = 0; i<hover_desc.length; i++){
            hover_desc_height = window.getComputedStyle(hover_desc[0]).height;
            hover_desc[i].style.bottom = 'calc(-'+hover_desc_height+' + 70px';
            current_height = window.getComputedStyle(hover_desc[0]).height;
        }
        
    }

    for(let i = 0; i<slider_items.length; i++){
        slider_items[i].onmouseover = function(){
            this.querySelector('.hover-desc').style.bottom = 0
        }
    
        slider_items[i].onmouseout = function(){
            this.querySelector('.hover-desc').style.bottom  = 'calc(-'+current_height+' + 70px';
        }
    }

    hover_desc_calc_position()
    onScroll()
    window.addEventListener('resize', hover_desc_calc_position)
    window.addEventListener('scroll', onScroll)


    let startCounter = function() {
        if (counter_items[0].getBoundingClientRect().top - window.innerHeight <= 0) {
            window.removeEventListener('scroll', startCounter)
            var i = 0;
            var step = 1;
            var interval = setInterval(function() {
                plus(counter)
            }, 1);
            var plus = function(info) {
                var ready = 0;
                for(let i = 0; i<info.length; i++){
                    if(info[i].dataset.max >= 1000000){
                        step = 999
                    } else if(info[i].dataset.max >= 100000){
                        step = 249
                    } else if(info[i].dataset.max >= 10000){
                        step = 59
                    } else if(info[i].dataset.max >= 1000){
                        step = 9
                    } else if(info[i].dataset.max >= 100){
                        step = 4
                    } else{
                        step = 1
                    }
                    if(Number(info[i].innerHTML) < info[i].dataset.max){
                        if(Number(info[i].innerHTML) + step > info[i].dataset.max){
                            info[i].innerHTML = info[i].dataset.max
                        } else{
                            info[i].innerHTML = Number(info[i].innerHTML) + step
                        }
                    }
                    if(Number(info[i].innerHTML)>= info[i].dataset.max){
                        ready+=1
                    }
                }
                if(ready == info.length){
                    clearInterval(interval)
                }
            }
        }
    }
    window.addEventListener('scroll', startCounter)
    startCounter()
}