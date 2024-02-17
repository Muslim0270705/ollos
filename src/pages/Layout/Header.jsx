const Header = () => {
  const scrollToSection = (e) => {
    const section = document.getElementById(`${e.target.value}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={"header"}>
      <div className="header__top">
        <div className="container-header">
          <p className={"header__top-desc"}>
            <img
              className="header__top-img"
              src="https://idnayka.ru/wp-content/themes/idnaykaru/assets/images/icon/icon-map.svg"
              alt=""
            />
            г. Бишкек, ул. Киевская, дом 1а, офис 519
          </p>
          <div className="header__top-contact">
            <p className={"header__top-desc"}>
              <img
                className="header__top-img"
                src="https://idnayka.ru/wp-content/themes/idnaykaru/assets/images/icon/icon-phone.svg"
                alt=""
              />
              +7 (499) 271-6724
            </p>
            <p className={"header__top-desc"}>
              <img
                className="header__top-img"
                src="https://idnayka.ru/wp-content/themes/idnaykaru/assets/images/icon/icon-mail.svg"
                alt=""
              />
              zakaz@idnayka.ru
            </p>
          </div>
        </div>
      </div>
      <div className="header-fix">
        <div className="container-header">
          <div className="header__nav">
            <img
              className="header__logo"
              src="https://idnayka.ru/wp-content/themes/idnaykaru/assets/images/logo.png"
              alt=""
            />
            <ul className="header__menu">
              <li
                className="header__menu-item"
                value={1}
                onClick={(e) => scrollToSection(e)}
              >
                о компании
              </li>
              <li
                className="header__menu-item"
                value={2}
                onClick={(e) => scrollToSection(e)}
              >
                новости
              </li>
              <li
                className="header__menu-item"
                value={3}
                onClick={(e) => scrollToSection(e)}
              >
                услуги
              </li>
              <li
                className="header__menu-item"
                value={4}
                onClick={(e) => scrollToSection(e)}
              >
                контакты
              </li>
            </ul>
            <div></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
