// $(window).on('load resize', function() {
//     if ($(window).width() < 795) {
//         $('#items:not(.slick-initialized)').slick({
//             infinite: true,
//             dots: true,
//             speed: 100,
//             slidesToShow: 1
//         });
//     } else {
//         $("#items.slick-initialized").slick("unslick");
//     }
// });
//
// const popupEl = document.querySelector('.popup')
// const cancelEl = document.querySelector('.close_popup')
// const btnEl = document.querySelector('.fake_question')

// const boxRightEl = document.getElementById('rightEyeQuantity')
// const boxLeftEl = document.getElementById('leftEyeQuantity')
// const labelTwelveEl = document.getElementById('twelve_month')
// const labelSixEl = document.getElementById('six_month')
// const labelThreeEl = document.getElementById('three_month')
// const labelEightEl = document.getElementById('btn_order')
//
// const bothEyesEl = document.getElementById('both_eyes')
// const rightPowerEl = document.getElementById('rightEye_Sphere')
// const leftPowerEl = document.getElementById('leftEye_Sphere')
// const rightBcEl = document.getElementById('rightEye_BaseCurve')
// const leftBcEl = document.getElementById('leftEye_BaseCurve')
//
// const costEl = document.getElementById('data_cost')
// const discountEl = document.getElementById('data_discount')
// const totalEl = document.getElementById('data_total')
//
//
// //About checked both eyes
// bothEyesEl.addEventListener('change',()=>{
//     if (bothEyesEl.checked) {
//         rightPowerEl.addEventListener('click', ()=>{
//             leftPowerEl.value = rightPowerEl.value
//         })
//
//         rightBcEl.addEventListener('click', ()=>{
//             leftBcEl.value = rightBcEl.value
//         })
//
//         boxRightEl.addEventListener('click', ()=>{
//             boxLeftEl.value = boxRightEl.value
//         })
//
//     }
// })
//
// //About boxes
// labelTwelveEl.addEventListener('click', function (){
//     labelTwelveEl.classList.add('active')
//     labelSixEl.classList.remove('active')
//     labelThreeEl.classList.remove('active')
//     boxLeftEl.value=4
//     boxRightEl.value=4
//     costEl.innerHTML = '391.44 $'
//     discountEl.innerHTML = '56.8 $'
//     totalEl.innerHTML = '334.64 $'
// })
// labelSixEl.addEventListener('click', function (){
//     labelTwelveEl.classList.remove('active')
//     labelSixEl.classList.add('active')
//     labelThreeEl.classList.remove('active')
//     boxLeftEl.value=2
//     boxRightEl.value=2
//     costEl.innerHTML = '195.72 $'
//     discountEl.innerHTML = '25 $'
//     totalEl.innerHTML = '170.72 $'
// })
// labelThreeEl.addEventListener('click', function (){
//     labelTwelveEl.classList.remove('active')
//     labelSixEl.classList.remove('active')
//     labelThreeEl.classList.add('active')
//     boxLeftEl.value=1
//     boxRightEl.value=1
//     costEl.innerHTML = '97.86 $'
//     discountEl.innerHTML = '0 $'
//     totalEl.innerHTML = '97.86 $'
// })
// labelEightEl.addEventListener('click', function (){
//     labelTwelveEl.classList.remove('active')
//     labelSixEl.classList.remove('active')
//     labelThreeEl.classList.remove('active')
//     boxLeftEl.value=8
//     boxRightEl.value=8
//     costEl.innerHTML = '782.88 $'
//     discountEl.innerHTML = '112 $'
//     totalEl.innerHTML = '670.88 $'
// })



// // About popup
// btnEl.addEventListener('click', ()=> popupOpen(popupEl))
//
// cancelEl.addEventListener('click', function (e){
//     popupClose(cancelEl.closest('.popup'))
// })
//
// function popupOpen(popupEl){
//     popupEl.classList.add('open')
//     popupEl.addEventListener('click', function (e){
//         if (!e.target.closest('.popup_content')){
//             popupClose(e.target.closest('.popup'))
//         }
//         e.preventDefault()
//     })
// }
//
// function popupClose(popupActive){
//     popupActive.classList.remove('open')
// }
//
$(window).on('load resize', function() {
    const itemsEl = $('#items');
    if ($(window).width() < 795) {
        if (!itemsEl.hasClass('slick-initialized')) {
            itemsEl.slick({
                infinite: true,
                dots: true,
                speed: 100,
                slidesToShow: 1
            });
        }
    } else {
        if (itemsEl.hasClass('slick-initialized')) {
            itemsEl.slick('unslick');
        }
    }
});


const popupEl = document.querySelector('.popup');
const cancelEl = document.querySelector('.close_popup');
const btnEl = document.querySelector('.fake_question');

const boxRightEl = document.getElementById('rightEyeQuantity');
const boxLeftEl = document.getElementById('leftEyeQuantity');
const labelTwelveEl = document.getElementById('twelve_month');
const labelSixEl = document.getElementById('six_month');
const labelThreeEl = document.getElementById('three_month');
const labelEightEl = document.getElementById('btn_order');

const bothEyesEl = document.getElementById('both_eyes');
const rightPowerEl = document.getElementById('rightEye_Sphere');
const leftPowerEl = document.getElementById('leftEye_Sphere');
const rightBcEl = document.getElementById('rightEye_BaseCurve');
const leftBcEl = document.getElementById('leftEye_BaseCurve');

const costEl = document.getElementById('data_cost');
const discountEl = document.getElementById('data_discount');
const totalEl = document.getElementById('data_total');



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

// About boxes
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


//About checked both eyes
let isBothEyesChecked = false;

function fillLeftEye() {
    if (isBothEyesChecked || boxLeftEl === document.activeElement) {
        leftPowerEl.value = rightPowerEl.value;
        leftBcEl.value = rightBcEl.value;
        boxLeftEl.value = boxRightEl.value;
    }
}

function fillRightEye() {
    if (isBothEyesChecked || boxRightEl === document.activeElement) {
        rightPowerEl.value = leftPowerEl.value;
        rightBcEl.value = leftBcEl.value;
        boxRightEl.value = boxLeftEl.value;
    }
}

function resetLeftEye() {
    leftPowerEl.value = '';
    leftBcEl.value = '';
    boxLeftEl.value = '';
}

function resetRightEye() {
    rightPowerEl.value = '';
    rightBcEl.value = '';
    boxRightEl.value = '';
}

bothEyesEl.addEventListener('change', () => {
    isBothEyesChecked = bothEyesEl.checked;

    if (isBothEyesChecked) {
        fillLeftEye();
        fillRightEye();

        rightPowerEl.addEventListener('input', fillLeftEye);
        rightBcEl.addEventListener('input', fillLeftEye);
        boxRightEl.addEventListener('input', fillLeftEye);

        leftPowerEl.addEventListener('input', fillRightEye);
        leftBcEl.addEventListener('input', fillRightEye);
        boxLeftEl.addEventListener('input', fillRightEye);
    } else {
        rightPowerEl.removeEventListener('input', fillLeftEye);
        rightBcEl.removeEventListener('input', fillLeftEye);
        boxRightEl.removeEventListener('input', fillLeftEye);

        leftPowerEl.removeEventListener('input', fillRightEye);
        leftBcEl.removeEventListener('input', fillRightEye);
        boxLeftEl.removeEventListener('input', fillRightEye);
    }
});

leftPowerEl.addEventListener('input', fillRightEye);
leftBcEl.addEventListener('input', fillRightEye);
boxLeftEl.addEventListener('input', fillRightEye);

rightPowerEl.addEventListener('input', fillLeftEye);
rightBcEl.addEventListener('input', fillLeftEye);
boxRightEl.addEventListener('input', fillLeftEye);

document.getElementById('reset-left-eye').addEventListener('click', resetLeftEye);
document.getElementById('reset-right-eye').addEventListener('click', resetRightEye);








