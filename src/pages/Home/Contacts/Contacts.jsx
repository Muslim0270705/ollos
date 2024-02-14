import React from 'react';

const Contacts = () => {
    return (
        <div className='contacts'>
            <div className="container">
                <h2 className='contacts__title'>
                    Контакты
                </h2>
                <div className="contacts__items">
                    <div className="contacts__item">
                        <div className="contacts__header">
                            <i className="icon icon-map">
                            </i>Наш адрес:
                        </div>
                        <div className="contacts__info">
                            109044,
                            г. Москва, ул. <br /> Динамовская, дом 1а, офис <br /> 519
                        </div>
                    </div>
                    <div className="contacts__item">
                        <div className="contacts__header">
                            <i className="icon icon-phone">
                            </i>Телефоны:
                        </div>
                        <div className="contacts__info">
                            <span>+7 (903) 522-92-70</span><br />
                            <span>+7 (499) 271-6724 </span>
                        </div>
                    </div>
                    <div className="contacts__item">
                        <div className="contacts__header">
                            <i className="icon icon-mail">
                            </i>E-mail:
                        </div>
                        <div className="contacts__info">
                            <span>zakaz@idnayka.ru</span> <br />
                            <span>info@idnayka.ru</span> <br />
                            <span>idnayka@gmail.com</span> <br />
                        </div>
                    </div>
                </div>
                <div className="contacts__content">
                    <p style={{ textAlign: "center", margin: "50px 0 20px" }}>
                        <strong>ООО Издательский Дом «Наука»</strong>
                    </p>
                    <div className="contacts__house">
                        <p>
                            ОГРН 1087746715121
                            <br />

                            ИНН 7720620674
                            <br />

                            КПП 770501001
                            <br />

                            Расчетный счет 40702810100000006424
                            <br />

                            Банк АКБ «Ланта-Банк» (ЗАО) г. Москва
                            <br />

                            Корреспондентский счет 30101810400000000348
                            <br />

                            БИК 044525348
                            <br />

                            <strong style={{ paddingTop: 5, display: "inline-block" }}>Юридический адрес:</strong>

                            109044 г. Москва, ул. Динамовская, дом 1а, офис 519

                            <br />
                            <br />

                        </p>
                        <p style={{ marginLeft: 50 }}><strong>Генеральный директор:</strong> Евдокимова Светлана Шамильевна</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;