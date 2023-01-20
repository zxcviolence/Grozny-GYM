import React from 'react';
import Fade from "react-reveal/Fade";
import Zoom from 'react-reveal/Zoom';
import styles from "./one.module.scss";

const ContentOne = () => {
    return (
        <>
             <div className={styles.content_container1}>
      <Zoom left cascade>
        <h2>Тренажерный зал "Grozny-gym" это:</h2>
        </Zoom>
        <Fade left  cascade>
        <div className={styles.items_ctr1}>
          {/* //первая карточка с инфой */}
          <div className={styles.item_ctr}>
            <span >
              <h5 > Большие площади </h5>
              Чем больше пространства для занятий - тем лучше. Мы стараемся
              предоставить нашим клиентам как можно больше свободного места для
              тренировок.
            </span>
          </div>
          {/* вторая */}
          <div className={styles.item_ctr}>
            <span >
              <h5 > Новые тренажёры</h5>
              Мы постепенно обновляем парк наших машин на самое современное
              силовое оборудование. Все тренажеры отвечают самым современным
              требованиям по эффективности и безопасности.
            </span>
          </div>
          {/* ТРЕТЬЯ */}
          <div className={styles.item_ctr}>
            <span >
              <h5 > Здоровая атмосфера</h5>
              Хорошее освещение, мягкое покрытие, большие зеркала, постоянное
              кондиционирование - вот к чему мы стремимся в обустройстве залов
            </span>
          </div>
          {/* ЧЕТвертая */}
          <div className={styles.item_ctr}>
            <span >
              <h5 > Сауна </h5>В каждом зале вы можете посетить сухую сауну,
              которая благотворно повлияет на ваш организм.
            </span>
          </div>
          {/* 5 */}
          <div className={styles.item_ctr}>
            <span >
              <h5 > Удобные душевые</h5>Вы оцените наши новые и современные
              душевые, которые придутся очень кстати после долгих физических
              нагрузок.
            </span>
          </div>
          {/* 6 */}
          <div className={styles.item_ctr}>
            <span>
              <h5 > Персональные тренера</h5>В залах вы можете воспользоваться
              услугами тренера, предварительно записавшись у наших
              администраторов.
            </span>
          </div>
        </div>
        </Fade>
      </div>
        </>
    );
};

export default ContentOne;