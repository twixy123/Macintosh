class SLIDER {
    constructor(obj) {

        //Подключение эллементов 
        this.slider = this.getEl(obj.slider) //Берем весь наш слайдер
        this.sliderBlock = this.slider.querySelector('.slider__block') //подключаем блок с слайдами
        this.slides = this.sliderBlock.children //подключаем сами слайды
        this.slidesArray = Array.from(this.slides)
        this.sliderDot__block = this.getEl('.slider__dots')
        this.dots = this.sliderDot__block.children
        this.dotsArray = Array.from(this.dots) //метод преобразование из  массивоподобного или итерируемого объекта в массив
        this.next = this.getEl('.next')
        this.prev = this.getEl('.prev')


        // какие то значения
        this.sliderHeight = this.getHeightSlides(this.slides) //создаем переменную и присваиваем ей значение высоты наших слайдов
        this.itr = 0


        //Придание эллементам какие то значения
        this.slider.style.height = `${this.sliderHeight}px`
        this.dotsArray.forEach((key, ind) => key.addEventListener('click', () => this.opacityWithDots(ind)))
        this.next.addEventListener('click', () => this.opacityBtn(this.next))
        this.prev.addEventListener('click', () => this.opacityBtn(this.prev))

    }

    getEl(x) {
        return document.querySelector(x)
    } //Взятие эллемента из документа
    getHeightSlides(x) {
        for (let i = 0; i < x.length; i++) {
            return x[i].clientHeight
        }
    } //Высота Слайдов - доработать этот метод через Math.max()
    opacityWithDots(ind) {
        this.dotsArray.forEach(key => key.classList.remove('active'))
        this.slidesArray.forEach(key => key.classList.remove('active'))
        this.dots[ind].classList.add('active')
        this.slides[ind].classList.add('active')
    }
    opacityBtn(x) {
        x.classList.contains('next') ? this.itr++ : this.itr--
        this.slidesArray.forEach(key => key.classList.remove('active'))
        this.dotsArray.forEach(key => key.classList.remove('active'))

        if (this.itr > this.slides.length - 1) {
            this.itr = 0
        } else if (this.itr < 0) {
            this.itr = this.slides.length - 1
        }
        this.slides[this.itr].classList.add('active')
        this.dots[this.itr].classList.add('active')

    }
}


const slider = new SLIDER({
    slider: '.slider'
})