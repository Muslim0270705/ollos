const News = () => {
  return (
    <section className="new" id={2}>
      <div className="container">
        <h2 className="new__title">НОВОСТИ</h2>
        <div className="new__info-wrapper">
          <div className="new__info" style={{ width: "45%" }}>
            <p className="new__info-text">4 июля 2022</p>
            <h2>
              <a href="" className="new__info-title">
                Доступны для скачивания PDF-версии спецвыпусков журнала «МИР
                (Модернизация. Инновации. Развитие)»
              </a>
            </h2>
            <p className="new__info-descr">
              Спецвыпуски долгое время были недоступны широкой аудитории. Но
              сейчас мы хотим поделиться с Вами той уникальной информацией,
              которая была в них собрана.
            </p>
          </div>
          <img
            style={{ width: "45%" }}
            className="new__info-img"
            src="https://idnayka.ru/wp-content/uploads/2021/10/spec_mir-450x370.png"
            alt=""
          />
        </div>
        <div className="new__release-wrapper">
          <div className="new__release-item1">
            <p className="new__release-text">4 июля 2022</p>

            <h2>
              <a href="" className="new__release-title">
                Вышел свежий выпуск журнала МИР (Модернизация. Инновации.
                Развитие) — Том 13, № 2, 2022 г.
              </a>
            </h2>
          </div>
          <div className="new__release-item1">
            <p className="new__release-text">29 октября 2021</p>

            <h2>
              <a href="" className="new__release-title">
                VII Всероссийский Форум «Национальная система квалификаций
                России. Перезагрузка: приоритеты, перспективы, возможности»
              </a>
            </h2>

            <p className="new__release-descr">
              18–19 ноября 2021 года состоится VII Всероссийский Форум
              «Национальная система квалификаций России. Перезагрузка:
              приоритеты, перспективы, возможности»{" "}
            </p>
          </div>
        </div>
        <button className="new__more-btn">Все новости</button>
      </div>
    </section>
  );
};

export default News;
