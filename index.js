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
})
labelSixEl.addEventListener('click', function (){
    labelTwelveEl.classList.remove('active')
    labelSixEl.classList.add('active')
    labelThreeEl.classList.remove('active')
    boxLeftEl.value=2
    boxRightEl.value=2
})
labelThreeEl.addEventListener('click', function (){
    labelTwelveEl.classList.remove('active')
    labelSixEl.classList.remove('active')
    labelThreeEl.classList.add('active')
    boxLeftEl.value=1
    boxRightEl.value=1
})
labelEightEl.addEventListener('click', function (){
    labelTwelveEl.classList.remove('active')
    labelSixEl.classList.remove('active')
    labelThreeEl.classList.remove('active')
    boxLeftEl.value=8
    boxRightEl.value=8
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