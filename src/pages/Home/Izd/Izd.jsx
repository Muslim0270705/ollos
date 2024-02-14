import React from 'react';

const Izd = () => {
    return (
        <section className="izd">
            <div className="container" style={{padding : "0 100px"}}>
                <h2 className="izd__title">
                    Почему выбирают Издательский Дом «Наука»?
                </h2>
                <div className={"izd__row"}>
                    <ul className={"izd__menu"}>
                        <li className="izd__menu-item">
                            Индивидуальный подход: выбор оптимального варианта издания согласно целям, пожеланиям и
                            бюджету
                            автора.
                        </li>
                        <li className="izd__menu-item">
                            Всесторонняя консультация авторов по вопросам авторского права, особенностям и тонкостям
                            издательской деятельности и работы типографии.
                        </li>
                        <li className="izd__menu-item">
                            Согласование с автором каждого этапа по созданию книги или журнала.
                        </li>
                        <li className="izd__menu-item">
                            Всегда реальные сроки.
                        </li>
                        <li className="izd__menu-item">
                            Соблюдение политики конфиденциальности и неразглашения содержимого рукописи третьим лицам.
                        </li>
                    </ul>
                    <ul className={"izd__menu"}>
                        <li className="izd__menu-item">
                            Издание научной и учебной литературы (монографии, учебники, пособия, программы дисциплин и
                            др.).
                        </li>
                        <li className="izd__menu-item">
                            Издание художественных и художественно-научных книг.
                        </li>
                        <li className="izd__menu-item">
                            Выпуск журналов и сборников, услуги редакции.
                        </li>
                        <li className="izd__menu-item">
                            Консультации, тренинги и мастер-классы (в рамках издательской деятельности и полиграфии).
                        </li>
                        <li className="izd__menu-item">
                            Разработка рекламного дизайна и корпоративного стиля.
                        </li>
                    </ul>
                </div>
                <button className={"first__btn"} style={{display: 'block',margin: "30px auto 0"}}>
                    Связаться с нами
                </button>
            </div>
        </section>
    );
};

export default Izd;