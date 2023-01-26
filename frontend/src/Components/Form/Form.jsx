import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getForm, deleteForm } from "../../features/formSlice";
import styles from "./Form.module.scss";

const Form = () => {
  const form = useSelector((state) => state.form.form);
  const loading = useSelector((state) => state.form.loading);
  const error = useSelector((state) => state.form.error);

  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(deleteForm({ id }));
  };

  useEffect(() => {
    dispatch(getForm());
  }, [dispatch]);

  if (error) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      <div className={styles.main}>
        {loading && <div className={styles.loader}>Loading</div>}
        {form.map((item) => {
          return (
            <div className={styles.forms} key={item._id}>
              <p>Заявка №{item._id}</p>
              <div>Имя: {item.name}</div>
              <div>Телефон: {item.phone}</div>
              <div>Эл. почта: {item.email}</div>
              <div>На массаж: {item.forWhichMassage}</div>
              <button onClick={() => handleRemove(item._id)}>
                Удалить заявку
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default React.memo(Form);
