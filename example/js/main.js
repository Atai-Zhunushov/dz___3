const tabsContent = document.querySelectorAll('.tabcontent')
const tabs = document.querySelectorAll('.tabheader__item')
const tabsParent = document.querySelector('.tabheader__items')


const hideTabContent = () => {
    tabsContent.forEach((item) => {
        item.style.display = 'none'
    })
    tabs.forEach((item) => {
        item.classList.remove('tabheader__item_active')
    })
}
const showTabContent = (i = 0) => {
    tabsContent[i].style.display = 'block'
    tabs[i].classList.add('tabheader__item_active')
}

hideTabContent()
showTabContent()



/////1
let slide = 0;
function autoSlider() {
    const slider = setInterval(() => {
        slide++
        if (slide > 3) {
            slide = 0
        }
        hideTabContent()
        showTabContent(slide)
    } , 1000)
}
autoSlider()

tabsParent.addEventListener('click' , (e) => {
    const target = e.target
    if (target.classList.contains('tabheader__item')) {
        tabs.forEach((item , i) => {
            if (item === target) {
                hideTabContent()
                showTabContent(i)
                slide = i
            }
        })
    }
})

////2

let curretIndexImage = 1
let totalImages = 4

const next = document.querySelector('.offer__slider-next')
const prev = document.querySelector('.offer__slider-prev')
let currentImageText = document.querySelector('#current')
let totalImageText = document.querySelector('#total')

function updateImage() {
    let img = document.querySelector('.offer__slide img')
    img.src = `./img/slider/Image${curretIndexImage}.jpg`
    currentImageText.textContent = curretIndexImage.toString().padStart(2, '0')
}
updateImage()

prev.addEventListener('click' , () => {
    curretIndexImage = (curretIndexImage - 2 + totalImages) % totalImages + 1
    updateImage()
})
next.addEventListener('click' , () => {
    curretIndexImage = (curretIndexImage % totalImages) + 1
    updateImage()
})