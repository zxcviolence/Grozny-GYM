import React from "react";
import styles from "./Simulators.module.scss";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchSimulators } from "../../features/simulatorsSlice";
const Simulators = () => {
  const dispatch = useDispatch();
  const simulators = useSelector((state) => state.simulators.simulators);
  const loading = useSelector((state) => state.simulators.loading);

  useEffect(() => {
    dispatch(fetchSimulators());
  }, [dispatch]);

  if (loading) {
    return <div className={styles.loader}>Loading</div>;
  }

  return (
    <>
      <Flip bottom>
        <h1 className={styles.h1}>Тренажёры</h1>
      </Flip>

      <div className={styles.main_content}>
        {simulators.map((simulator) => {
          return (
            <Fade key={simulator._id} bottom cascade>
              <div className={styles.list}>
                <div className={styles.section}>
                  <div className={styles.img}>
                    <img
                      src={`assets/images/simulators/${simulator.image}`}
                      alt=""
                    />
                    <div className={styles.title}>{simulator.title}</div>
                  </div>
                </div>
              </div>
            </Fade>
          );
        })}
      </div>
    </>
  );
};

export default React.memo(Simulators);
