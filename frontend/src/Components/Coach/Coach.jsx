import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoaches } from "../../features/coachSlice";
import { postForm } from "../../features/coachformSlice";
import styles from "./Coach.module.scss";
import Button from "react-bootstrap/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Modal from "react-bootstrap/Modal";
import Typography from "@mui/material/Typography";

const Coach = () => {
  const dispatch = useDispatch();
  const coaches = useSelector((state) => state.coach.coaches);
  const error = useSelector((state) => state.coach.error);
  const loading = useSelector((state) => state.coach.loading);

  const [name, setName] = useState("");
  const [phone, setphone] = useState("");
  const [weight, setWeight] = useState("");
  const [isSport, setIsSport] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [select, setSelect] = useState({
    _id: "63c7f17453f3e15520a46af8",
  });

  const handleSetName = (e) => {
    setName(e.target.value);
  };
  const handleSetPhone = (e) => {
    setphone(e.target.value);
  };
  const handleSetWeight = (e) => {
    setWeight(e.target.value);
  };
  const handleSetSport = (e) => {
    setIsSport(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();
    dispatch(postForm({ name, phone, weight, isSport }));
  };

  useEffect(() => {
    dispatch(fetchCoaches());
  }, [dispatch]);

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Typography component="h1" variant="h5">
            Заполните форму
          </Typography>
        </Modal.Header>
        <Modal.Body>
          <Box component="form" noValidate onSubmit={handleForm} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Имя"
              name="name"
              autoComplete="name"
              onChange={handleSetName}
              value={name}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="tel"
              label="Телефон"
              type="tel"
              id="tel"
              autoComplete="tel"
              onChange={handleSetPhone}
              value={phone}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="weight"
              label="Вес"
              type="tel"
              id="weight"
              autoComplete="weight"
              onChange={handleSetWeight}
              value={weight}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="sport"
              label="Каким спортом занимались?"
              type="text"
              id="sport"
              autoComplete="sport"
              onChange={handleSetSport}
              value={isSport}
            />
            <Button
              type="submit"
              sx={{ mt: 3, mb: 2 }}
            >
              Отправить
            </Button>
          </Box>
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <main>
      {coaches.map((coach) => {
        if (coach._id === select._id) {
          return (
            <div className={styles.coachMain} key={coach._id}>
              <img
                className={styles.imgCoach}
                src={`http://localhost:4000/assets/images/coaches/${coach.image}`}
                alt="Фотография тренера"
              />
              <div className={styles.secondDiv}>
                <div className={styles.name}>{coach.name}</div>
                <Button
                  className={styles.btn}
                  onClick={() => setModalShow(true)}
                >
                  Записаться
                </Button>

                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />

                <div className={styles.description}>{coach.description}</div>
              </div>
            </div>
          );
        }
      })}
      {coaches.map((coach) => {
        if (coach._id !== select._id) {
          return (
            <div className={styles.coachSecond} key={coach._id}>
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
          );
        }
      })}
    </main>
  );
};

export default React.memo(Coach);
