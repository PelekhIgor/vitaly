$(window).on('load resize', function() {
    if ($(window).width() < 795) {
        $('#items:not(.slick-initialized)').slick({
            infinite: true,
            dots: true,
            speed: 100,
            slidesToShow: 1
        });
    } else {
        $("#items.slick-initialized").slick("unslick");
    }
});

const popupEl = document.querySelector('.popup')
const cancelEl = document.querySelector('.close_popup')
const btnEl = document.querySelector('.fake_question')

const boxRightEl = document.getElementById('rightEyeQuantity')
const boxLeftEl = document.getElementById('leftEyeQuantity')
const labelTwelveEl = document.getElementById('twelve_month')
const labelSixEl = document.getElementById('six_month')
const labelThreeEl = document.getElementById('three_month')
const labelEightEl = document.getElementById('btn_order')

const bothEyesEl = document.getElementById('both_eyes')
const rightPowerEl = document.getElementById('rightEye_Sphere')
const leftPowerEl = document.getElementById('leftEye_Sphere')
const rightBcEl = document.getElementById('rightEye_BaseCurve')
const leftBcEl = document.getElementById('leftEye_BaseCurve')

const costEl = document.getElementById('data_cost')
const discountEl = document.getElementById('data_discount')
const totalEl = document.getElementById('data_total')


//About checked both eyes
bothEyesEl.addEventListener('change',()=>{
    if (bothEyesEl.checked) {
        rightPowerEl.addEventListener('click', ()=>{
            leftPowerEl.value = rightPowerEl.value
        })

        rightBcEl.addEventListener('click', ()=>{
            leftBcEl.value = rightBcEl.value
        })

        boxRightEl.addEventListener('click', ()=>{
            boxLeftEl.value = boxRightEl.value
        })

    }
})

//About boxes
labelTwelveEl.addEventListener('click', function (){
    labelTwelveEl.classList.add('active')
    labelSixEl.classList.remove('active')
    labelThreeEl.classList.remove('active')
    boxLeftEl.value=4
    boxRightEl.value=4
    costEl.innerHTML = '391.44 $'
    discountEl.innerHTML = '56.8 $'
    totalEl.innerHTML = '334.64 $'
})
labelSixEl.addEventListener('click', function (){
    labelTwelveEl.classList.remove('active')
    labelSixEl.classList.add('active')
    labelThreeEl.classList.remove('active')
    boxLeftEl.value=2
    boxRightEl.value=2
    costEl.innerHTML = '195.72 $'
    discountEl.innerHTML = '25 $'
    totalEl.innerHTML = '170.72 $'
})
labelThreeEl.addEventListener('click', function (){
    labelTwelveEl.classList.remove('active')
    labelSixEl.classList.remove('active')
    labelThreeEl.classList.add('active')
    boxLeftEl.value=1
    boxRightEl.value=1
    costEl.innerHTML = '97.86 $'
    discountEl.innerHTML = '0 $'
    totalEl.innerHTML = '97.86 $'
})
labelEightEl.addEventListener('click', function (){
    labelTwelveEl.classList.remove('active')
    labelSixEl.classList.remove('active')
    labelThreeEl.classList.remove('active')
    boxLeftEl.value=8
    boxRightEl.value=8
    costEl.innerHTML = '782.88 $'
    discountEl.innerHTML = '112 $'
    totalEl.innerHTML = '670.88 $'
})



// About popup
btnEl.addEventListener('click', ()=> popupOpen(popupEl))

cancelEl.addEventListener('click', function (e){
    popupClose(cancelEl.closest('.popup'))
})

function popupOpen(popupEl){
    popupEl.classList.add('open')
    popupEl.addEventListener('click', function (e){
        if (!e.target.closest('.popup_content')){
            popupClose(e.target.closest('.popup'))
        }
        e.preventDefault()
    })
}

function popupClose(popupActive){
    popupActive.classList.remove('open')
}

