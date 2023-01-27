import React, { createRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addBar } from "../../../features/goodsSlice";
import Admin from "../Admin";
import styles from "./AddBar.module.scss";
const AddSims = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState();
  const [subtitle, setSubtitle] = useState("");
  const upload = createRef("uploadForm");
  const dispatch = useDispatch();
  const handleSetName = (e) => {
    setName(e.target.value);
  };
  const handleSetPrice = (e) => {
    setPrice(e.target.value);
  };
  const handleSetBrand = (e) => {
    setBrand(e.target.value);
  };
  const handleSetDescription= (e) => {
    setSubtitle(e.target.value);
  };

  const handleAddBar = (e) => {
    e.preventDefault();
    dispatch(
      addBar({
        name,
        price,
        brand,
        subtitle,
        image: image.split("").splice(12).join(""),
      })
    );
  };
  return (
    <div className={styles.main}>
      <Admin />

      <div className={styles.panel}>
        <div className={styles.panelHeading}>Добавление тренажёров </div>

        <div className={styles.panelBody}>
          <form onSubmit={handleAddBar} action="submit">
            <div className={styles.formGroup}>
              <label>Название товара:</label>
              <div>
                <input
                  className={styles.formControl}
                  type="text"
                  onChange={handleSetName}
                  value={name}
                  maxLength="40"
                  name="addsim"
                />
              </div>
            </div>
            <div className={styles.formGroup}>
              <label>Бренд:</label>
              <div>
                <input
                  className={styles.formControl}
                  type="text"
                  onChange={handleSetBrand}
                  value={brand}
                  maxLength="40"
                  name="addsim"
                />
              </div>
            </div>

           
            <div className={styles.formGroup}>
              <label>Цена:</label>
              <div>
                <input
                  className={styles.formControl}
                  type="text"
                  onChange={handleSetPrice}
                  value={price}
                  maxLength="40"
                  name="addsim"
                />
              </div>
            </div>
            <div className={styles.formGroup}>
              <label>Описание:</label>
              <div>
                <textarea
                  className={styles.formControl}
                  type="text"
                  onChange={handleSetDescription}
                  value={subtitle}
                  name="addsim"
                />
              </div>
            </div>
            <label>Постер:</label>
            <form
              ref={upload}
              id="uploadForm"
              action={`http://localhost:4000/upload/goods/add/`}
              method="post"
              target="_blank"
              encType="multipart/form-data"
            >
              <input
                value={image}
                onChange={(e) => {
                  setImage(e.target.value);
                }}
                type="file"
                name="sampleFile"
              />
              <input type="submit" value="Загрузить" />
            </form>
            <button
              className={styles.edit}
              type="submit"
              onClick={() => window.location.reload()}
            >
              Добавить
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddSims;
