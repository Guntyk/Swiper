new Swiper('.image-slider', {
    //! Стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    //! Навигация
    //? Буллеты, текущее положение, прогрессбар
    //TODO Буллеты
    // pagination: {
        // el: '.swiper-pagination',
        // clickable: true,
        // Динамические буллеты
        // dynamicBullets: true,
        // Кастомные буллеты
        // renderBullet: function (index, className) {
            // return '<span class="' + className + '">' + (index + 1) + '</span>';
        // },

        // Фракция
        // type: 'fraction',

        // Прогрессбар
        // type: 'progressbar'
    // },

    //TODO Скролл
    // scrollbar: {
        // el: '.swiper-scrollbar',
        // Возможность перетаскивать скролл
        // draggable: true
    // },

    // Включение / Отключение перетаскивания на ПК
    simulateTouch: true,

    // Чувствительность свайпа
    touchRatio: 1,

    // Угол срабатывания свайпа/перетаскивания
    touchAngle: 45,

    // Курсор перетаскивания
    grabCursor: true,

    // Переключение при клике на слайд
    slideToClickedSlider: true,

    // Навигация по хешу
    // hashNavigation: {
        // Отслеживать состояние
        // watchStatus: true,
    // },

    // Управление клавиатурой
    keyboard: {
        // Включить/Выключить
        enabled: true,
        // Включить/Выключить только когда слайдер в пределах вьюпорта
        onlyInViewport: true,
        // Включить/Выключить управление клавишами pageUP, pageDown
        pageUpDown: true,
    },

    // Управление колесом мыши
    mousewheel: {
        // Чувствительность колеса мыши
        sensitivity: 1,
        // Класс объекта на котором будет срабатывать прокрутка мышью
        eventsTarget: ".image-slider"
    },

    // Автовысота
    autoHeight: false,

    // Количество слайдов для показа
    slidesPerView: 3, //?Можно указывать не целые числа

    // Количество пролистываемых слайдов
    slidesPerGroup: 1,

    // Отключение функционала если слайдов меньше чем нужно
    watchOverflow: true,

    // Отступ между слайдами
    spaceBetween: 30,

    // Активный слайд по центру
    centeredSlides: true,

    // Стартовый слайд
    initialSlide: 0,

    // Мультирядность
    slidesPerColumn: 1,

    // Бесконечный слайдер
    loop: true,

    // Количество дублирующих слайдов
    loopedSlides: 0,

    // Свободный режим
    freeMode: false,

    //! Автопрокрутка
    // autoplay: {
        // Пауза между прокруткой
    //     delay: 1000,
        // Закончить на последнем слайде
    //     stopOnLastSlide: true,
        // Отключить после ручного переключения
    //     disableOnInteraction: false
    // },

    //! Скорость слайдов
    speed: 800,

    // Вертикальный слайдер
    // direction: 'vertical',

    //! Эффекты переключения слайдов

    //* Листание
    effect: 'slide',

    //* Смена прозрачности
    // effect: 'fade',
    // Дополнение к fade
    // fadeEffect: {
        // Параллельная смена прозрачности
        // crossFade: true
    // },

    //* Переворот
    // effect: 'flip',
    // Дополнение к flip
    // flipEffect: {
        // Тень
        // slideShadows: true,
        // Показ только активного слайда
        // limitRotation: true
    // },

    //* 3D Куб
    // effect: 'cube',
    // Дополнение к cube
    // cubeEffect: {
    // Настройки тени
    //     slideShadows: true,
    //     shadow: true,
    //     shadowOffset: 20,
    //     shadowScale: 0.94
    // },

    //* Эффект потока
    // effect: 'coverflow',
    // Дополнение к coverflow
    // coverflowEffect: {
        // Угол
        // rotate: 20,
        // Наложение
        // stretch: 50,
        // Тень
        // slideShadows: true
    // },

    //! Брейк поинты (Адаптив)
    // Ширина экрана
    // breakpoints: {
    //     320: {
    //         slidesPerView: 1,
    //     },
    //     480: {
    //         slidesPerView: 2,
    //     },
    //     992: {
    //         slidesPerView: 3,
    //     }
    // },

    //! Отключить предзагрузку картинок
    preloadImages: false,
    //! Lazy Loading (Подгрузка картинок)
    lazy: {
        // Подгружать на старте переключения слайда
        loadOnTransitionStart: true,
        // Подгрузить предыдущую и следующую картинки
        loadPrevNext: false,
    },
    // Слежка за видимыми слайдами
    watchSlidesProgress: true,
    // Добавление класса видимым слайдам
    watchSlidesVisibility: true,

    // Зум картинки
    zoom: {
        // Максимальное увеличение
        maxRatio: 5,
        // Минимальное увеличение
        minRatio: 1
    },
});

new Swiper('.text-slider', {
    //! Стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
});