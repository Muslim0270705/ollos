import React from 'react';

const Services = ({setActive}) => {
    return (
        <div className='services' id={3}>
            <div className="container">
                <h2 className='services__heading'>
                    УСЛУГИ
                </h2>
                <div className="services__wrapper">
                    <div className="services__item">
                        <div className="services__item-header">
                            <h2>
                                <a href="" className='services__title'>
                                    Помощь в подготовке рукописи
                                </a>
                            </h2>
                            От
                            <div className="services__coast">
                                <h3 className='services__price'>
                                    1500
                                </h3>
                                <span>
                                    руб.
                                </span>
                            </div>
                        </div>
                        <div className="services__item-list">
                            <ul>
                                <li>Научное рецензирование</li>
                                <li>Консультации по вопросам авторского права на издание</li>
                                <li>Научное и литературное редактирование текстов</li>
                                <li>Набор текстов</li>
                            </ul>
                        </div>
                        <button  className='services__btn' onClick={() => setActive((prev) => !prev)}>Заказать</button>
                    </div>
                    <div className="services__item services__item-top">
                        <div className="services__item-header">
                            <h2>
                                <a href="" className='services__title'>
                                    Дизайн, верстка, предпечатная подготовка
                                </a>
                            </h2>
                            От
                            <div className="services__coast">
                                <h3 className='services__price'>
                                    31 500
                                </h3>
                                <span>
                                    руб.
                                </span>
                            </div>
                        </div>
                        <div className="services__item-list">
                            <ul className=''>
                                {/* https://idnayka.ru/wp-content/themes/idnaykaru/assets/images/icon/icon-ok.png */}
                                <li>Разработка индивидуального макета издания и обложки</li>
                                <li>Верстка и допечатная подготовка</li>
                                <li>Оформление таблиц, формул, сносок, списка литературы согласно требованиям</li>
                                <li>   УДК, ББК, ISBN, DOI</li>
                            </ul>
                        </div>
                        <button  className='services__btn' onClick={() => setActive((prev) => !prev)}>Заказать</button>
                    </div>
                    <div className="services__item">
                        <div className="services__item-header">
                            <h2>
                                <a href="" className='services__title'>
                                    Печать издания и последующее сопровождение
                                </a>
                            </h2>
                            От
                            <div className="services__coast">
                                <h3 className='services__price'>
                                    14 000
                                </h3>
                                <span>
                                    руб.
                                </span>
                            </div>
                        </div>
                        <div className="services__item-list">
                            <ul className=''>
                                {/* https://idnayka.ru/wp-content/themes/idnaykaru/assets/images/icon/icon-ok.png */}
                                <li>Печать утвержденного макета издания</li>
                                <li>Рассылка обязательных экземпляров в РКП и библиотеки</li>
                                <li>Размещение издания в Научной электронной библиотеке (eLibrary)</li>
                            </ul>
                        </div>
                        <button className='services__btn' onClick={() => setActive((prev) => !prev)}>Заказать</button>
                    </div>
                </div>
                <p className='services__bottom'>Цены, указанные на сайте, предназначены для ознакомления и не могут являться публичной офертой.</p>
            </div>
        </div>
    );
};

export default Services;