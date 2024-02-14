import React from 'react';

const Comp = () => {
    return (
        <section className="comp">
            <div className="container" >
                <h2 className="comp__title">
                    О компании
                </h2>
                <div className="comp__row">
                    <div className="comp__card">
                        <div className="comp__card-item">
                            с <span>2007</span> года Издательский Дом «Наука» успешно работает на
                            рынке издательских и полиграфических услуг
                        </div>
                        <div className="comp__card-item">
                            более <span>500</span> наименований изданных книг и журналов
                        </div>
                        <div className="comp__card-item">
                            с <span>2015</span> года Издательский Дом «Наука» действительный член Международной
                            ассоциации по связям издателей (Linking Association, Inc.) («PILA»). DOI-prefix: 10.18184
                        </div>
                    </div>
                    <div className="comp__card">
                        <img src="https://idnayka.ru/wp-content/themes/idnaykaru/assets/images/bg-about.png" alt=""/>
                    </div>
                    <div className="comp__card">
                        <div className="comp__card-item">
                            с <span>2016</span>  года член Ассоциации научных редакторов и издателей (АНРИ)
                        </div>
                        <div className="comp__card-item">
                            с января
                             <span>2020</span> года член Европейской ассоциации научных редакторов (EASE)
                        </div>
                        <button className={"first__btn"} style={{display: 'inline-block'}}>
                            Связаться с нами
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Comp;