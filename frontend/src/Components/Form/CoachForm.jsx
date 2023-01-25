import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getForm } from "../../features/coachformSlice";
import styles from "./CoachForm.module.scss";

const Form = () => {
  const form = useSelector((state) => state.coachform.coachform);
  const loading = useSelector((state) => state.coachform.loading);
  const error = useSelector((state) => state.coachform.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getForm());
  }, [dispatch]);

  if (error) {
    return <h1>{error.message}</h1>;
  }

  if (loading) {
    return "Loading...";
  }

  return (
    <>
      <div className={styles.main}>
        {form.map((item) => {
          return (
            <div className={styles.forms} key={item._id}>
              <p>Заявка №{item._id}</p>
              <div>Имя: {item.name}</div>
              <div>Телефон: {item.phone}</div>
              <div>Вес: {item.weight} кг</div>
              <div>Занимался ли спрортом прежде: {item.isSport}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default React.memo(Form);
