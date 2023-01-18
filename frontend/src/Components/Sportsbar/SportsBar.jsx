import React from "react";
import style from "./sportsbar.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchGoods } from "../../features/goodsSlice"
import { useEffect } from "react";

const SportsBar = () => {
  const dispatch = useDispatch();

  const goods = useSelector((state) => state.goods.goods);
  console.log(goods);

  useEffect(() => {
    dispatch(fetchGoods());
  }, [dispatch]);

  return (
    <div className={style.main_unit}>
      <h1 className={style.h1}>Спорт Бар</h1>
      <div>
        {goods.map((item) => {
            return <div>{item.name}</div>;
        })}
      </div>
     
    </div>
  );
};

export default SportsBar;
