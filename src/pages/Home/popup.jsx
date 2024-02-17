import React, {useState} from 'react';
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

const Popup = ({setActive,active}) => {
    const [order,serOrder] = useState({
        id:uuidv4(),
        name:"",
        email:"",
        status : false,
        phone:"",
        message:"",
    })

    const postOrder = (e) => {
        e.preventDefault()
        axios.post("https://db-987p.onrender.com/order",order)
            .then(res => {
                setActive(false)
            })
            .then(err => console.log(err))
    }
    const changeOrder = (e) => {
        serOrder({...order,[e.target.name]: e.target.value })
    }
    console.log(order)
    return (
        <div className={"popup"} style={{display : active ? "block" : "none"}}>
            <form onSubmit={postOrder} action="" className="popup__form">
                <img onClick={() => setActive(!active)} className={"icon__close"}
                     src="https://idnayka.ru/wp-content/themes/idnaykaru/assets/images/icon/icon-close.svg" alt=""/>
                <h2 className={"popup__title"}>
                    Связаться с нами
                </h2>
                <label htmlFor="">
                    <img src="https://idnayka.ru/wp-content/themes/idnaykaru/assets/images/icon/icon-user.svg" alt=""/>
                    <input onChange={changeOrder} name={"name"} className={"popup__input"} type="text" placeholder={"Имя*"}/>
                </label>
                <label htmlFor="">
                    <img src="https://idnayka.ru/wp-content/themes/idnaykaru/assets/images/icon/icon-mail-form.svg" alt=""/>
                    <input onChange={changeOrder} name={"email"} className={"popup__input"} type="email" placeholder={"E-email*"}/>
                </label>
                <label htmlFor="">
                    <img src="https://idnayka.ru/wp-content/themes/idnaykaru/assets/images/icon/icon-phone-form.svg" alt=""/>
                    <input onChange={changeOrder} name={"phone"} className={"popup__input"} type="tel" placeholder={"Телефон*"}/>
                </label>
                <label htmlFor="">
                    <img src="https://idnayka.ru/wp-content/themes/idnaykaru/assets/images/icon/icon-comments.svg" alt=""/>
                    <select onChange={changeOrder} name={"message"} className={"popup__input"}  id="">
                        <option value="Помощь в подготовке рукописи">
                            Помощь в подготовке рукописи
                        </option>
                        <option value="Дизайн, верстка, предпечатная подготовка">
                            Дизайн, верстка, предпечатная подготовка
                        </option>
                        <option value="Печать издания и последующее сопровождение">
                            Печать издания и последующее сопровождение
                        </option>
                    </select>
                </label>
                <div className={"popup__prices"}>
                    <button className={"popup__btn"}>
                        Отправить
                    </button>
                    <p>
                        {
                            order.message === "Помощь в подготовке рукописи" ? "Цена:1500" :  order.message === "Дизайн, верстка, предпечатная подготовка" ? "Цена:31500" : order.message === "Печать издания и последующее сопровождение" ? "Цена:14000" : ""
                        }
                    </p>
                </div>
            </form>
            <div className={"popup-bg"}>

            </div>
        </div>
    );
};

export default Popup;