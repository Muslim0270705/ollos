import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, FreeMode } from 'swiper/modules';

const Books = () => {
    return (
        <div className='books'>
            <div className="container">
                <h2 className='books__title'>Изданные книги</h2>
                <div className="books-wrapper">
                    <Swiper
                        cssMode={true}
                        navigation
                        mousewheel={true}
                        keyboard={true}
                        slidesPerView={3}
                        spaceBetween={30}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode, Navigation, Pagination, Mousewheel, Keyboard]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src="https://idnayka.ru/wp-content/uploads/2021/01/komkov-2020.png" alt="" />
                            <div className="books__info">
                                <h3 className='books__text'>Проблемы управления развитием крупномасштабных социально-экономических систем</h3>
                                <p className='books__author'>Комоков Н. И.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://idnayka.ru/wp-content/uploads/2021/01/pershukov.png" alt="" />
                            <div className='books__info'>
                                <h3 className='books__text'>Единая теория взаимодействия</h3>
                                <p className='books__author'>Першуков В. М. Першуков В. В.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://idnayka.ru/wp-content/uploads/2021/01/konf-2020.png" alt="" />
                            <div className="books__info">
                                <h3 className='books__text'>Теория и практика борьбы с паразитарными болезнями: Сборник научных статей по материалам международной научной конференции. Выпуск 21. 13–15 мая 2020 г. Москва</h3>
                                <p className='books__author'>Комоков Н. И.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://idnayka.ru/wp-content/uploads/2020/05/alferov-2020.png" alt="" />
                            <div className="books__info">
                                <h3 className='books__text'>Кризис-диагностика хозяйствующих субъектов: учебник (Бакалавриат)</h3>
                                <p className='books__author'>Алфевров В. Н.</p>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                    <button className='books__btn'>
                        Все книги
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Books;