import React from 'react';

const First = ({setActive}) => {
    return (
        <section className="first">
            <div className={"grad"}>

            </div>
            <div className="first__info">
                <h2 className={"first__title"}>
                    Специальное предложение для <br/> ВУЗов:
                </h2>
                <p className="first__subdesc">
                    скидка <span>15%</span> на издание монографий,<br/> пособий, учебников
                </p>
                <button onClick={() => setActive((prev) => !prev)} className={"first__btn"}>
                    Связаться с нами
                </button>
                <div className="first__desc">
                    * - акция действует при заказе от 2-х изданий
                </div>
            </div>
        </section>
    );
};

export default First;