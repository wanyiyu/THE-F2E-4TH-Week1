/*!
* Start Bootstrap - Creative v7.0.6 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    // new SimpleLightbox({
    //     elements: '#portfolio a.portfolio-box'
    // });

    //進度條
    /*
    var i = 0;
    var bar = document.querySelector(".progress-bar");
    function makeProgress() {
        if (i < 100) {
            i = i + 1;
            bar.style.width = i + "%";
            bar.innerText = i + "%";
        }

        // Wait for sometime before running this script again
        //setTimeout("makeProgress()", 1000);
    }
    makeProgress();*/

    //註冊gsap
    gsap.registerPlugin(ScrollTrigger, TextPlugin);

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#about", // 決定scrolltrigger要以哪一個元素作為觸發基準點
            //arkers: true, // 開啟start & end標記點，單純方便瀏覽動畫開始與結束點
            start: 'top top', // 決定動畫開始點的位置
            end: '+=2000%', // 決定動畫結束點的位置
            scrub: true, //重要！開啟scrub來決定動畫播放是否依賴視窗滾動

            //pin: true, //重要！ pin需設為true
            pinSpacing: false, // "margin", 使用 margin 代替 padding
            pin: true
        },
    })
    // const tl2 = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: "#others", // 決定scrolltrigger要以哪一個元素作為觸發基準點
    //         markers: true, // 開啟start & end標記點，單純方便瀏覽動畫開始與結束點
    //         start: 'top bottom', // 決定動畫開始點的位置
    //         end: 'top top', // 決定動畫結束點的位置
    //         scrub: true, //重要！開啟scrub來決定動畫播放是否依賴視窗滾動

    //         //pin: true, //重要！ pin需設為true
    //         //pinSpacing: false, // "margin", 使用 margin 代替 padding
    //         //pin: true
    //     },
    // })
    ScrollTrigger.matchMedia({

        // desktop
        "(min-width: 1200px)": function () {
            //alert('1200px');
            tl.to('.player-group', {
                xPercent: '-1',
                yPercent: '+60',
                left: '10%',
                //duration: 20,
                duration: 200,
            })
                .to('.monster-group', {
                    xPercent: '+2',
                    yPercent: '-20',
                    duration: 200,

                }, '<')
                .to('.role-dialog', {
                    yPercent: '-100',
                    duration: 200,
                })
                .to('.options-group-top', {
                    opacity: 1,
                    xPercent: '+1',
                    yPercent: '+10',
                    duration: 200,
                })
                .to('.options-group-bottom', {
                    opacity: 1,
                    xPercent: '-1',
                    yPercent: '-30',
                    duration: 200,
                })
                //FLAG HERE
                .to('.options-group-top', {
                    opacity: 0,
                    xPercent: '-1',
                    duration: 200,
                    delay: 2,
                })
                .to('.monster-group', {
                    opacity: 0,
                    xPercent: '+20',
                    duration: 200,
                }, '<')
                .to('.description', {
                    opacity: 1,
                    duration: 200,
                })
                .to('.description-dialog-hide', {
                    opacity: 0,
                    display: 'none',
                    duration: 200,
                }, '<')
                .to('.description-dialog', {
                    opacity: 1,
                    display: 'block',
                    duration: 200,
                })
                .to('.description', {
                    opacity: 0,
                    duration: 200,
                })
                .to('.instructions-board', {
                    xPercent: '-10',
                    opacity: 1,
                    duration: 200,
                })
                .to('.role-box', {
                    yPercent: '+25',
                    duration: 200,
                })
                .to('.options-group-bottom', {
                    yPercent: '+200',
                    duration: 200,
                }, '<')
                .to('.role-dialog', {
                    yPercent: '+100',
                    opacity: 0,
                    duration: 200,
                }, '<')

                .to('.board-box', {
                    xPercent: '-80',
                    yPercent: '+50',
                    scaleX: 2.5,
                    scaleY: 2.1,
                    duration: 200,
                    delay: 10,
                }, '<')
                //關卡看板
                .to('.board-week1', {
                    xPercent: '-150',
                    opacity: 0,
                    duration: 500,
                    delay: 100,
                })
                .to('.board-week2', {
                    xPercent: '-150',
                    opacity: 0,
                    duration: 500,
                    delay: 100,
                })
                .to('.board-week3', {
                    xPercent: '-150',
                    opacity: 0,
                    duration: 200,
                    delay: 100,
                })
                .to('.options-group-bottom', {
                    opacity: 0,
                    duration: 200,
                }, '<')
                .to('.role-box', {
                    scale: 0.6,
                    xPercent: '-17',
                    yPercent: '-32',
                    duration: 200,
                }, '<')
                .to('.detail', {
                    yPercent: '-52',
                    duration: 200,
                }, '<')
                //開放報名
                .to('.detail-1', {
                    color: 'var(--bs-dark)',
                    duration: 100,
                    delay: 200,
                })
                .to('.detail-content-1', {
                    display: 'none',
                }, '<')
                .to('.detail-2', {
                    color: 'var(--bs-primary)',
                    duration: 100,
                }, '<')
                .to('.detail-content-2', {
                    display: 'block',
                    duration: 100,
                }, '<')
                .to('.detail-icon-2', {
                    scale: '1.5',
                    duration: 100,
                }, '<')
                //組別開賽
                .to('.detail-2', {
                    color: 'var(--bs-dark)',
                    duration: 100,
                    delay: 200,
                })
                .to('.detail-content-2', {
                    display: 'none',
                }, '<')
                .to('.detail-icon-2', {
                    scale: '1',
                    duration: 100,
                }, '<')
                .to('.detail-3', {
                    color: 'var(--bs-primary)',
                    duration: 100,
                }, '<')
                .to('.detail-content-3', {
                    display: 'block',
                    duration: 100,
                }, '<')
                .to('.detail-icon-3', {
                    scale: '1.5',
                    duration: 100,
                }, '<')
                //登陸作品
                .to('.detail-3', {
                    color: 'var(--bs-dark)',
                    duration: 100,
                    delay: 200,
                })
                .to('.detail-content-3', {
                    display: 'none',
                }, '<')
                .to('.detail-icon-3', {
                    scale: '1',
                    duration: 100,
                }, '<')
                .to('.detail-4', {
                    color: 'var(--bs-primary)',
                    duration: 100,
                }, '<')
                .to('.detail-content-4', {
                    display: 'block',
                    duration: 100,
                }, '<')
                .to('.detail-icon-4', {
                    scale: '1.5',
                    duration: 100,
                }, '<')
                //公布得獎
                .to('.detail-4', {
                    color: 'var(--bs-dark)',
                    duration: 100,
                    delay: 200,
                })
                .to('.detail-content-4', {
                    display: 'none',
                }, '<')
                .to('.detail-icon-4', {
                    scale: '1.5',
                    duration: 100,
                }, '<')
                .to('.detail-5', {
                    color: 'var(--bs-primary)',
                    duration: 100,
                }, '<')
                .to('.detail-content-5', {
                    display: 'block',
                    duration: 100,
                }, '<')
                .to('.detail-icon-5', {
                    scale: '1.5',
                    duration: 100,
                }, '<')
        },
        "(min-width: 992px) and (max-width: 1199px)": function () {
            //alert('992px');
            tl.to('.player-group', {
                xPercent: '-1',
                yPercent: '+80',
                left: '5%',

            })
                .to('.monster-group', {
                    xPercent: '+2',
                    yPercent: '-20',

                }, '<')
                .to('.role-dialog', {
                    yPercent: '-100',

                })
                .to('.options-group-top', {
                    opacity: 1,
                    xPercent: '+1',
                    yPercent: '+10',

                })
                .to('.options-group-bottom', {
                    opacity: 1,
                    xPercent: '-1',
                    yPercent: '-30',

                })
                //FLAG
                .to('.options-group-top', {
                    opacity: 0,
                    xPercent: '-1',
                    duration: 200,
                    delay: 2,
                })
                .to('.monster-group', {
                    opacity: 0,
                    xPercent: '+20',
                    duration: 200,
                }, '<')
                .to('.description', {
                    opacity: 1,
                    duration: 200,
                })
                .to('.description-dialog-hide', {
                    opacity: 0,
                    display: 'none',
                    duration: 200,
                }, '<')
                .to('.description-dialog', {
                    opacity: 1,
                    display: 'block',
                    duration: 200,
                })
                .to('.description', {
                    opacity: 0,
                    duration: 200,
                })
                .to('.instructions-board', {
                    xPercent: '-10',
                    opacity: 1,
                    duration: 200,
                })
                .to('.role-box', {
                    yPercent: '+25',
                    duration: 200,
                })
                .to('.options-group-bottom', {
                    yPercent: '+200',
                    duration: 200,
                }, '<')
                .to('.role-dialog', {
                    yPercent: '+100',
                    opacity: 0,
                    duration: 200,
                }, '<')

                .to('.board-box', {
                    xPercent: '-80',
                    yPercent: '+50',
                    scaleX: 2.5,
                    scaleY: 2.1,
                    duration: 200,
                    delay: 10,
                }, '<')
                //關卡看板
                .to('.board-week1', {
                    xPercent: '-150',
                    opacity: 0,
                    duration: 500,
                    delay: 100,
                })
                .to('.board-week2', {
                    xPercent: '-150',
                    opacity: 0,
                    duration: 500,
                    delay: 100,
                })
                .to('.board-week3', {
                    xPercent: '-150',
                    opacity: 0,
                    duration: 200,
                    delay: 100,
                })
                .to('.options-group-bottom', {
                    opacity: 0,
                    duration: 200,
                }, '<')
                .to('.role-box', {
                    scale: 0.6,
                    xPercent: '-17',
                    yPercent: '-32',
                    duration: 200,
                }, '<')
                .to('.detail', {
                    yPercent: '-52',
                    duration: 200,
                }, '<')
                //開放報名
                .to('.detail-1', {
                    color: 'var(--bs-dark)',
                    duration: 100,
                    delay: 200,
                })
                .to('.detail-content-1', {
                    display: 'none',
                }, '<')
                .to('.detail-2', {
                    color: 'var(--bs-primary)',
                    duration: 100,
                }, '<')
                .to('.detail-content-2', {
                    display: 'block',
                    duration: 100,
                }, '<')
                .to('.detail-icon-2', {
                    scale: '1.5',
                    duration: 100,
                }, '<')
                //組別開賽
                .to('.detail-2', {
                    color: 'var(--bs-dark)',
                    duration: 100,
                    delay: 200,
                })
                .to('.detail-content-2', {
                    display: 'none',
                }, '<')
                .to('.detail-icon-2', {
                    scale: '1',
                    duration: 100,
                }, '<')
                .to('.detail-3', {
                    color: 'var(--bs-primary)',
                    duration: 100,
                }, '<')
                .to('.detail-content-3', {
                    display: 'block',
                    duration: 100,
                }, '<')
                .to('.detail-icon-3', {
                    scale: '1.5',
                    duration: 100,
                }, '<')
                //登陸作品
                .to('.detail-3', {
                    color: 'var(--bs-dark)',
                    duration: 100,
                    delay: 200,
                })
                .to('.detail-content-3', {
                    display: 'none',
                }, '<')
                .to('.detail-icon-3', {
                    scale: '1',
                    duration: 100,
                }, '<')
                .to('.detail-4', {
                    color: 'var(--bs-primary)',
                    duration: 100,
                }, '<')
                .to('.detail-content-4', {
                    display: 'block',
                    duration: 100,
                }, '<')
                .to('.detail-icon-4', {
                    scale: '1.5',
                    duration: 100,
                }, '<')
                //公布得獎
                .to('.detail-4', {
                    color: 'var(--bs-dark)',
                    duration: 100,
                    delay: 200,
                })
                .to('.detail-content-4', {
                    display: 'none',
                }, '<')
                .to('.detail-icon-4', {
                    scale: '1.5',
                    duration: 100,
                }, '<')
                .to('.detail-5', {
                    color: 'var(--bs-primary)',
                    duration: 100,
                }, '<')
                .to('.detail-content-5', {
                    display: 'block',
                    duration: 100,
                }, '<')
                .to('.detail-icon-5', {
                    scale: '1.5',
                    duration: 100,
                }, '<')
        },
        "(min-width: 768px) and (max-width: 991px)": function () {
            //alert('768px');
            tl.to('.player-group', {
                xPercent: '-1',
                yPercent: '+90',
                left: '5%',
            })
                .to('.monster-group', {
                    xPercent: '+2',
                    yPercent: '-20',
                }, '<')
                .to('.role-dialog', {
                    yPercent: '-100',
                })
                .to('.options-group-top', {
                    opacity: 1,
                    xPercent: '+1',
                    yPercent: '+10',

                })
                .to('.options-group-bottom', {
                    opacity: 1,
                    xPercent: '-1',
                    yPercent: '-110',

                })
        },
        "(min-width: 576px) and (max-width: 765px)": function () {
            //alert('576px');
            tl.to('.player-group', {
                xPercent: '-1',
                yPercent: '+130',
                left: '5%',
            })
                .to('.monster-group', {
                    xPercent: '+1',
                    yPercent: '-20',
                }, '<')
                .to('.role-dialog', {
                    yPercent: '-100',
                })
                .to('.options-group-top', {
                    opacity: 1,
                    xPercent: '+1',
                    yPercent: '+10',

                })
                .to('.options-group-bottom', {
                    opacity: 1,
                    xPercent: '-1',
                    yPercent: '-100',

                })
        },
        "(max-width: 575px)": function () {
            //alert('all');
            tl.to('.sm-hide', {
                display: 'none'
            })
                .to('.player-group', {
                    xPercent: '-1',
                    yPercent: '+130',
                    left: '10%',
                }, '<')
                .to('.monster-group', {
                    xPercent: '+2',
                    yPercent: '-30',
                }, '<')
                .to('.role-dialog', {
                    yPercent: '-100',
                })
                .to('.options-group-top', {
                    opacity: 1,
                    xPercent: '+1',
                    yPercent: '+10',

                })
                .to('.options-group-bottom', {
                    opacity: 1,
                    xPercent: '-1',
                    yPercent: '-180',

                })
        }
    });

});