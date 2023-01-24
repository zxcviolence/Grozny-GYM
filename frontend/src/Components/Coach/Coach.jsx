import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoaches } from "../../features/coachSlice";
import styles from "./Coach.module.scss";
const Coach = () => {
  const dispatch = useDispatch();

  const coaches = useSelector((state) => state.coach.coaches);
  const error = useSelector((state) => state.coach.error);
  const loading = useSelector((state) => state.coach.loading);

  const [text, setText] = useState("");

  const [select, setSelect] = useState(
    {
      _id: "63c7f17453f3e15520a46af8"
    })

  useEffect(() => {
    dispatch(fetchCoaches());
  }, [dispatch]);

 

  return (
    <main>
      {coaches.map((coach) => {
        console.log(coach);
        if (coach._id === select._id) {
          return <div className={styles.coachMain} key={coach._id}>
            <img
              className={styles.imgCoach}
              src={`http://localhost:4000/assets/images/coaches/${coach.image}`}
              alt="Фотография тренера"
            />
            <div className={styles.secondDiv}><div className={styles.name}>{coach.name}</div>
              <button className={styles.btn} onClick={() => setSelect(coach)}> Записаться</button>

              <div className={styles.description}>{coach.description}</div>
            </div>

          </div>
        }
      })}
      {coaches.map((coach) => {
        if (coach._id !== select._id) {
          return <div className={styles.coachSecond} key={coach._id}>
            <div className={styles.imgBlock}>
              <img
                className={styles.imgCoach}
                src={`http://localhost:4000/assets/images/coaches/${coach.image}`}
                alt="Фотография тренера"
              />
            </div>
            <div className={styles.name}>{coach.name}</div>
            <div className={styles.description}>{coach.description}</div>
            <button className={styles.btn} onClick={() => setSelect(coach)}>
              Подробнее
            </button>
          </div>
        }
      })}
    </main>
  );
};

export default Coach;
