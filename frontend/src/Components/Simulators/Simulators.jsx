import React from "react";
import styles from "./Simulators.module.scss";
import RubberBand from "react-reveal/RubberBand";
import Card from "@mui/material/Card";
import { Button, CardContent, CardMedia, Typography } from "@mui/material";
import Fade from "react-reveal/Fade";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchSimulators,
  deleteSimulator,
} from "../../features/simulatorsSlice";
import { FiTrash2 } from "react-icons/fi";

const Simulators = () => {
  const dispatch = useDispatch();
  const simulators = useSelector((state) => state.simulators.simulators);
  const loading = useSelector((state) => state.simulators.loading);
  const users = useSelector((state) => state.users.users);

  const handleRemove = (id) => {
    dispatch(deleteSimulator({ id }));
  };

  useEffect(() => {
    dispatch(fetchSimulators());
  }, [dispatch]);

  if (loading) {
    return (
      <div className={styles.loaderdiv}>
        <div className={styles.loader}>Loading</div>
      </div>
    );
  }

  return (
    <div className={styles.main_unit}>
      <RubberBand>
        <h1 className={styles.h1}>Тренажёры</h1>
      </RubberBand>
      <div className={styles.main_content}>
        {simulators.map((item) => {
          return (
            <Fade key={item._id} bottom cascade>
              <Card
                className={styles.card_item}
                sx={{ maxWidth: 350, height: "95%", minWidth: 350 }}
                key={item._id}
              >
                {users.role === "Администратор" && (
                  <Button onClick={() => handleRemove(item._id)}>
                    <FiTrash2 />
                  </Button>
                )}

                <div className={styles.img}>
                  <CardMedia
                    component="img"
                    sx={{ height: 230 }}
                    image={`assets/images/simulators/${item.image}`}
                    alt="imag"
                  />
                </div>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                  </Typography>
                </CardContent>
              </Card>
            </Fade>
          );
        })}
      </div>
    </div>
  );
};

export default React.memo(Simulators);
