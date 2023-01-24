import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoaches } from "../../features/coachSlice";
import styles from "./Coach.module.scss";
import CoachCard from "./CoachCard";
const Coach = () => {
  const dispatch = useDispatch();

  const coaches = useSelector((state) => state.coach.coaches);
  const error = useSelector((state) => state.coach.error);
  const loading = useSelector((state) => state.coach.loading);

  const [text, setText] = useState("");

  const handleInput = (e) => {
    setText(e.target.value);
  };

  const filtered = coaches.filter((coach) => {
    return coach.name.toLowerCase().includes(text.toLowerCase());
  });

  useEffect(() => {
    dispatch(fetchCoaches());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className={styles.glavniyBLock}>
      <div>
        <input
          className={styles.poisk}
          onChange={handleInput}
          placeholder="Поиск определенного тренера..."
        />
      </div>
<div className={styles.mainBlock}>
        {filtered.map((coach) => {
          return  <CoachCard coach={coach} key={coach._id}/>;
        })}
      </div>
    </div>
  );
};

export default React.memo(Coach);
