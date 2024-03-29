import axios from "axios";
import { useEffect, useState } from "react";
import {
  FreeMode,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Books = () => {
  const [data, setData] = useState([]);

  const getProduct = () => {
    axios("https://db-987p.onrender.com/products")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div className="books">
      <div className="container">
        <h2 className="books__title">Изданные книги</h2>
        <div className="books-wrapper">
          <Swiper
            cssMode={true}
            navigation
            mousewheel={true}
            keyboard={true}
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <img src={item.img} alt="" />
                <div className="books__info">
                  <h3 className="books__text">{item.title}</h3>
                  <p className="books__author">{item.user}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="books__btn">Все книги</button>
        </div>
      </div>
    </div>
  );
};

export default Books;
