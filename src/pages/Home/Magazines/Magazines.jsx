const Magazines = ({ setActive }) => {
  return (
    <div className="magazines">
      <div className="container">
        <div className="magazines__wrapper">
          <img
            src="https://idnayka.ru/wp-content/uploads/2020/04/mir.png"
            alt=""
          />
          <div className="magazines__info">
            <h3 className="magazines__subtitle">
              Научный рецензируемый журнал
            </h3>
            <h2 className="magazines__title">
              «МИР (Модернизация. Инновации. Развитие)»
            </h2>
            <p style={{ marginBottom: 10 }}>
              Тематика журнала, его цели тесно связаны с основными задачами по
              разработке инновационных методов решения социально-экономических
              задач нашего государства. В журнале публикуются актуальные научные
              труды широко известных ученых и статьи представителей
              прогрессивной инновационно мыслящей молодежи.
            </p>
            <strong>
              Доступны для скачивания PDF-версии спецвыпусков журнала:
            </strong>{" "}
            <br /> <br />
            <li>
              <a
                href="https://drive.google.com/file/d/1HIIH6uFhbPMheToyKyEfm_UV8CBkXZpS/view?usp=sharing"
                target="_blank"
                rel="noffolow noopener"
              >
                Спецвыпуск, изданный по заказу НПО «Молния» и посвященный
                проекту «Буран»
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1UxGmwNxrjaktNDnXOy3F-_s1sRiOCmwO/view?usp=sharing"
                target="_blank"
                rel="noffolow noopener"
              >
                Спецвыпуск, посвященный 50-летию со дня основания Совета
                «Интеркосмос»
              </a>
            </li>
            <button
              className="magazines__btn"
              onClick={() => setActive((prev) => !prev)}
            >
              Сайт журнала
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Magazines;
