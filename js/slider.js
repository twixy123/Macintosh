class SLIDER {
    constructor(obj){

        //Подключение эллементов 
        this.slider = this.getEl(obj.slider)//Берем весь наш слайдер
        this.sliderBlock = this.slider.querySelector('.slider__block') //подключаем блок с слайдами
        this.slides = this.sliderBlock.children//подключаем сами слайды
        this.slidesArray = Array.from(this.slides)
        this.sliderDot__block = this.slider.querySelector('.slider__dots')
        this.dots = this.sliderDot__block.children
        this.dotsArray = Array.from(this.dots) //метод преобразование из  массивоподобного или итерируемого объекта в массив


        // какие то значения
        this.sliderHeight = this.getHeightSlides(this.slides) //создаем переменную и присваиваем ей значение высоты наших слайдов
        



        //Придание эллементам какие то значения
        this.slider.style.height = `${this.sliderHeight}px`
        this.dotsArray.forEach((key, ind) => key.addEventListener('click', () => this.opacityWithDots(ind)))
        
    }

    getEl(x){
        return document.querySelector(x)
    }//Взятие эллемента из документа
    getHeightSlides(x){
        for (let i = 0; i < x.length; i++) {
            return x[i].clientHeight
        }
    }//Высота Слайдов - доработать этот метод через Math.max()
    opacityWithDots(ind){
        this.dotsArray.forEach(key => key.classList.remove('active'))
        this.slidesArray.forEach(key => key.classList.remove('active'))
        this.dots[ind].classList.add('active')
        this.slides[ind].classList.add('active')

    }
}


const slider = new SLIDER({
    slider: '.slider', 
})