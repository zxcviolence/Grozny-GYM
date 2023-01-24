import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "react-bootstrap/Carousel"
import { fetchCoaches } from "../../features/coachSlice";
import styles from "./Coach.module.scss";
const Coach = () => {
  const dispatch = useDispatch();

  const coaches = useSelector((state) => state.coach.coaches);
  const error = useSelector((state) => state.coach.error);
  const loading = useSelector((state) => state.coach.loading);

  const [text, setText] = useState("");
  const [modalActive, setModalActive] = useState(false);

  const handleInput = (e) => {
    setText(e.target.value);
  };

  const filtered = coaches.filter((coach) => {
    return coach.name.toLowerCase().includes(text.toLowerCase());
  });

  useEffect(() => {
    dispatch(fetchCoaches());
  }, [dispatch]);



  if (error) {
    return <div>{error}</div>;
  }

  return (
    <main>
      <Carousel interval={9000} fade indicators={false} touch>
        {filtered.map((coach) => {
          return <Carousel.Item coach={coach} key={coach._id}>
            <div className={styles.imgBlock}>
              <img
                className={styles.imgCoach}
                src={`http://localhost:4000/assets/images/coaches/${coach.image}`}
                alt="Фотография тренера"
              />
            </div>
            <div className={styles.name}>{coach.name}</div>
            <div className={styles.description}>{coach.description}</div>
            <button className={styles.btn} onClick={() => setModalActive(true)}>
              Записаться
            </button>

          </Carousel.Item>;
        })}
      </Carousel>
    </main>
  );
};

export default Coach;
