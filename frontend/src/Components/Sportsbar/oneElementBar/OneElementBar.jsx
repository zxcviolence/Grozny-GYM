import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchGoods } from "../../../features/goodsSlice";
import styles from "./oneEl.module.scss";
import { TbDiscount2 } from 'react-icons/tb';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Carousel from "react-elastic-carousel";

const OneElementBar = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const oneElement = useSelector((state) => state.goods.goods);
  useEffect(() => {
    dispatch(fetchGoods());
  }, [dispatch]);



  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    // slickPrev:true
  };


  const filt = oneElement.filter((i) => i._id === id);

  return (
    <div className={styles.main_container}>
      <div className={styles.publicity}>
        <div className={styles.publicity_block_1}>
          <a href="http://www.advertology.ru/article149864.htm">
            <img src="http://img.advertology.ru/aimages/2020/08/19/adidas2.jpg" alt="" />
          </a>
        </div>
        <div className={styles.publicity_block_1}>
          <img src="https://img-fotki.yandex.ru/get/369087/199203331.1dc/0_16800b_56d8028a_orig" alt="" />
        </div>
      </div>
      {filt.map((goods) => {
        return (
          <div className={styles.Goods_card} key={goods._id}>
            <div className={styles.Goods_Info}>
              <div className={styles.Goods_block}>
                <div className={styles.imagage}>
                  <img
                    src={`/assets/images/sportsNutrition/${goods.image}`}
                    alt=""
                  />
                </div>
                <div className={styles.Title_goods}>
                  <h4>{goods.brand}</h4>
                  <h4>{goods.name}</h4>
                  <span>
                    Цена:
                    <span className={styles.price_Goods}>{goods.price}</span>
                    руб
                  </span>
                </div>
              </div>

              <span>{goods.subtitle}</span>
            </div>
          </div>
        );
      })}
      <div className={styles.action}>
        <div className={styles.action_block}>
          <h4>Акции в месяц Рамадан</h4>
          <div className={styles.action_interest}>
            <TbDiscount2 />
            Акция 25%
            <TbDiscount2 />
          </div>
          <span>На спорт пит</span>
          <div className={styles.action_interest}>
            <TbDiscount2 />
            Акция 30%
            <TbDiscount2 />
          </div>
          <span>На Абонементы</span>
        </div>
      </div>
      <div className={styles.carousel_Block}>
        {/* <Carousel className={styles.carousel}
            itemsToShow={3}
            autoPlaySpeed={5000}
            enableAutoPlay
            tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
            transitionMs={700}
          > */}
        <Slider {...settings} className={styles.slider}>
          {oneElement.map((el) => {
            return (
              <div key={el._id} className={styles.carousel_item}>
                <div className={styles.carousel_image}>
                  <img src={`/assets/images/sportsNutrition/${el.image}`} alt="" />
                </div>
                <div className={styles.el_name}>{el.name}</div>
                <Link to={`/sports_bar/${el._id}`}>подробнее</Link>
              </div>
            )
          })}
        </Slider>
        {/* </Carousel> */}
      </div>

    </div>
  );
};

export default OneElementBar;
