import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubscription } from "../../../features/subscriptionSlice";
import styles from "./cardAB.module.scss";

const CardAb = () => {
  const dispatch = useDispatch();

  const subscriptions = useSelector(
    (state) => state.SubscriptionSlice.Subscription
  );

  useEffect(() => {
    dispatch(fetchSubscription());
  }, [dispatch]);

  return (
    <div className={styles.card_block}>
      {subscriptions.map((item) => {
        return (
          <div className={styles.card_div}>
            <div className={styles.images}>
              <img src={`/assets/images/subscription/${item.img}`} alt="" />
            </div>
            <div className={styles.information}>
              <h3>{item.name}</h3>
              <span>{item.price} руб</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardAb;
