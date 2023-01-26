import React, { createRef, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import styles from "./Job.module.scss";
const Form = () => {
  const [job, setJob] = React.useState("");
  const upload = createRef("uploadForm");
  const [summary, setSummary] = useState("");
  const [style, setStyle] = useState(styles.input);
  const [style2, setStyle2] = useState(styles.input);
  const [style3, setStyle3] = useState(styles.input);
  const [style4, setStyle4] = useState(styles.input);
  const [style5, setStyle5] = useState();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const handleJobChange = (e) => {
    setJob(e.target.value);
  };
  const handleSetName = (e) => {
    setName(e.target.value);
  };
  const handleSetSurname = (e) => {
    setSurname(e.target.value);
  };
  const handleSetEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSetNumber = (e) => {
    setNumber(e.target.value);
  };
  const handleSetMessage = (e) => {
    setMessage(e.target.value);
  };
  const handleSetStyle = () => {
    if (name.length <= 0) {
      setStyle(styles.error);
    } else {
      setStyle(styles.input);
    }
  };
  const handleSetStyle2 = () => {
    if (surname.length <= 0) {
      setStyle2(styles.error);
    } else {
      setStyle2(styles.input);
    }
  };
  const handleSetStyle3 = () => {
    if (email.length <= 0) {
      setStyle3(styles.error);
    } else {
      setStyle3(styles.input);
    }
  };
  const handleSetStyle4 = () => {
    if (number.length <= 0) {
      setStyle4(styles.error);
    } else {
      setStyle4(styles.input);
    }
  };
  const handleSetStyle5 = () => {
    if (message.length <= 0) {
      setStyle5({ borderColor: "red" });
    } else {
      setStyle5();
    }
  };
  return (
    <div>
      <div className={styles.jobForm}>
        <h3 style={{ color: "white" }}>Заявка на вакансию</h3>
        <form action="">
          <div>
            <div className={styles.label}>
              <i>ВАШЕ ИМЯ</i>
            </div>
            <input
              className={style}
              onBlur={handleSetStyle}
              type="text"
              value={name}
              onChange={handleSetName}
              placeholder="Арби"
            />
          </div>
          <div>
            <div className={styles.label}>
              <i>ВАША ФАМИЛИЯ</i>
            </div>
            <input
              className={style2}
              type="text"
              value={surname}
              onChange={handleSetSurname}
              onBlur={handleSetStyle2}
              placeholder="Цугаев"
            />
          </div>
          <div>
            <div className={styles.label}>
              <i>ВАШ EMAIL</i>
            </div>
            <input
              className={style3}
              type="text"
              onChange={handleSetEmail}
              value={email}
              onBlur={handleSetStyle3}
              placeholder="arbitsugaev@gmail.com"
            />
          </div>
          <div>
            <div className={styles.label}>
              <i>ВАШ НОМЕР</i>
            </div>
            <input
              className={style4}
              type="text"
              value={number}
              onChange={handleSetNumber}
              onBlur={handleSetStyle4}
              placeholder="+7"
              required
            />
          </div>
          <div>
            <div className={styles.label}>
              <i>СООБЩЕНИЕ ИЛИ ВОПРОС</i>
            </div>
            <textarea
              style={style5}
              name="form_text-area"
              id="form"
              cols="40"
              rows="5"
              onBlur={handleSetStyle5}
              value={message}
              onChange={handleSetMessage}
            ></textarea>
          </div>
          <div>
            <div className={styles.label}>
              <i>НА КОГО</i>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                  value={job}
                  style={{color: 'white'}}
                  onChange={handleJobChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>Ничего</em>
                  </MenuItem>
                  <MenuItem  value={"Администратор рецепции"}>
                    Администратор рецепции
                  </MenuItem>
                  <MenuItem value={"Косметолог"}>Косметолог</MenuItem>
                  <MenuItem value={"Массажист"}>Массажист</MenuItem>
                  <MenuItem value={"Менеджер отдела продаж"}>
                    Менеджер отдела продаж
                  </MenuItem>
                  <MenuItem value={"Парикмахер-стилист"}>
                    Парикмахер-стилист
                  </MenuItem>
                  <MenuItem value={"Тренер боевых искусств"}>
                    Тренер боевых искусств
                  </MenuItem>
                  <MenuItem value={"Тренер водных программ"}>
                    Тренер водных программ
                  </MenuItem>
                  <MenuItem value={"Тренер групповых программ"}>
                    Тренер групповых программ
                  </MenuItem>
                  <MenuItem value={"Тренер детского клуба"}>
                    Тренер детского клуба
                  </MenuItem>
                  <MenuItem value={"Тренер по йоге"}>Тренер по йоге</MenuItem>
                  <MenuItem value={"Тренер тренажерного зала"}>
                    Тренер тренажерного зала
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <form
            ref={upload}
            id="uploadForm"
            action={`http://localhost:4000/upload/`}
            method="post"
            target="_blank"
            encType="multipart/form-data"
          >
            <input
              value={summary}
              accept="text/plain,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              data-max-size="20971520"
              onChange={(e) => {
                setSummary(e.target.value);
              }}
              type="file"
              name="sampleFile"
            />
            <input type="submit" value="Загрузить резюме" />
          </form>
          <div className={styles.message}>
            до 20мб DOC DOCX PDF TXT. <br />
            <b>Заявка с резюме рассматривается в первую очередь.</b>
          </div>
          <button className={styles.submit} type="submit">
            Отправить заявку
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
