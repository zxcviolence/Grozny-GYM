import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getForm } from "../../features/formSlice";
import styles from "./Form.module.scss";

const Form = () => {
  const form = useSelector((state) => state.form.form);
  const loading = useSelector((state) => state.form.loading);
  const error = useSelector((state) => state.form.error);

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
              <div>Эл. почта: {item.email}</div>
              <div>На массаж: {item.forWhichMassage}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Form;
