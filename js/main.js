const swiper = new Swiper('#swiper-top', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,


    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },


    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

const swiperReview = new Swiper('#swiper-review', {
    // Optional parameters
    loop: true,
    direction: "vertical",
    slidesPerView: 1,
    slidesPerGroup: 3,
    autoplay: {
        delay: 33000
    },
    breakpoints: {

        479: {
            direction: "horizontal",
            slidesPerView: 2,
            slidesPerGroup: 2,
                  },
        992: {
            direction: "horizontal",
            slidesPerView: 3,
            slidesPerGroup: 3,
        },


    },


    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },


    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

// Section Idea (text block + images)

const btnSigns = Array.from(document.querySelectorAll('.style__title'));
const text = document.querySelectorAll('.style__text');
const textBlock = document.querySelectorAll('.idea__style');


btnSigns.forEach((el) => {
    el.addEventListener('click', (e) => {
        el.classList.toggle('active');
        let content = el.nextElementSibling;
        content.classList.toggle('active')
        
        activeImage(e);
    })
})

const activeImage = (e) =>{
    const currTab = e.target.dataset.text;
    for (let i = 0; i < images.children.length; i++) {
        images.children[i].classList.remove('active');
        if (images.children[i].dataset.content == currTab) {
            images.children[i].classList.add('active');
        }
    };
    for (let index = 0; index < tabs.children.length; index++) {
        tabs.children[index].classList.remove('active');
        if (tabs.children[index].dataset.btn == currTab) {
            tabs.children[index].classList.add('active');
        }
    }

}

// section Idea (image block)

const tabs = document.getElementById('idea__tabs');
const images = document.getElementById('idea__image');
const tabsElement = Array.from(document.querySelectorAll('.idea__btn'));

const changeClass = el => {
    for (let i = 0; i < tabs.children.length; i++) {
        tabs.children[i].classList.remove('active');
    }
    el.classList.add('active');
}

for (let index = 0; index < tabsElement.length; index++) {
    tabsElement[index].addEventListener('click', e => {
        const currTab = e.target.dataset.btn
        changeClass(e.target);
        for (let i = 0; i < images.children.length; i++) {
            images.children[i].classList.remove('active');
            if (images.children[i].dataset.content == currTab) {
                images.children[i].classList.add('active');
            }
        }
    })
}



// btnSigns.forEach((el) => {
//     el.addEventListener('click', () => {
//         el.classList.toggle('active');
//         let content = el.nextElementSibling;

//         if (content.style.maxHeight) {
//             text.forEach((el) => el.style.maxHeight = null)
//         } else {
//             content.style.maxHeight = content.scrollHeight + "px";
            
//         }
//     })
// })
//////////

