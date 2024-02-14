import React from 'react';

const Header = () => {
    return (
        <header className={"header"}>
            <div className="header__top">
                <div className="container-header">
                    <p className={"header__top-desc"}>
                        <img className="header__top-img"
                             src="https://idnayka.ru/wp-content/themes/idnaykaru/assets/images/icon/icon-map.svg"
                             alt=""/>
                        г. Москва, ул. Динамовская, дом 1а, офис 519
                    </p>
                    <div className="header__top-contact">
                        <p className={"header__top-desc"}>
                            <img className="header__top-img"
                                 src="https://idnayka.ru/wp-content/themes/idnaykaru/assets/images/icon/icon-phone.svg"
                                 alt=""/>
                            +7 (499) 271-6724
                        </p>
                        <p className={"header__top-desc"}>
                            <img className="header__top-img"
                                 src="https://idnayka.ru/wp-content/themes/idnaykaru/assets/images/icon/icon-mail.svg"
                                 alt=""/>
                            zakaz@idnayka.ru
                        </p>
                    </div>
                </div>
            </div>
            <div className="container-header">

                <div className="header__nav">
                    <img className="header__logo"
                         src="https://idnayka.ru/wp-content/themes/idnaykaru/assets/images/logo.png" alt=""/>
                    <ul className="header__menu">
                        <li className="header__menu-item">
                            о компании
                        </li>
                        <li className="header__menu-item">
                            новости
                        </li>
                        <li className="header__menu-item">
                            услуги
                        </li>
                        <li className="header__menu-item">
                            контакты
                        </li>
                    </ul>
                    <div>

                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;