import React from 'react';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer__wrapper">
                    <div class="footer__row container navigations">
                        <a href="/" className="footer__logo">

                        </a>

                        <nav className="footer__menu"><div className="icon icon-close"></div><ul id="menu-navigation" className="footer__menu__items"><li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-19"><a href="#about" data-ps2id-api="true" class="__mPS2id _mPS2id-h">О компании</a></li>
                            <li className="footer__menu-item menu-item-type-custom menu-item-object-custom menu-item-20"><a href="#news" data-ps2id-api="true" class="__mPS2id _mPS2id-h">Новости</a></li>
                            <li className="footer__menu-item menu-item-type-custom menu-item-object-custom menu-item-21"><a href="#services" data-ps2id-api="true" class="__mPS2id _mPS2id-h">Услуги</a></li>
                            <li className="footer__menu-item menu-item-type-custom menu-item-object-custom menu-item-22"><a href="#contacts" data-ps2id-api="true" class="__mPS2id _mPS2id-h">Контакты</a></li>
                        </ul>
                        </nav>
                        <nav className="footer__menu-social">
                            <ul>

                            </ul>
                        </nav>

                    </div>
                    <div className="footer__credits">
                        <div class="footer__copyright">
                            © <a href="/">Издательский Дом "Наука"</a>, 2024  <br />
                            <span>Все права защищены</span>
                        </div>
                        <div class="footer__copyright-info">
                            Вся информация, размещенная на данном веб-сайте, предназначена только для персонального пользования и не подлежит
                            дальнейшему воспроизведению и/или распространению в какой-либо форме, иначе как с письменного разрешения <a href="/">Издательский Дом "Наука"</a>.
                        </div>
                        <div className="footer__analyytics">

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;