

const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu')


burger.addEventListener('click', () => {
    menu.classList.toggle('open')
})




// INPUT RANGE

const sliderEl = document.querySelector("#range2")
const sliderValue = document.querySelector(".value2")

sliderEl.addEventListener("input", (event) => {
    const tempSliderValue = event.target.value;
    sliderValue.textContent = tempSliderValue;

    const progress = (tempSliderValue / sliderEl.max) * 100;

    // sliderEl.style.background = `linear-gradient(to right, #f50 ${progress}%, #ccc ${progress}%)`;
    sliderEl.style.background = `#ccc`;
})

