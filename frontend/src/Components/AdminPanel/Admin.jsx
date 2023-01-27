import React from "react";
import { useEffect } from "react";
import {TbMassage} from 'react-icons/tb'
import {SiTrainerroad} from 'react-icons/si'
import {GrUserSettings} from 'react-icons/gr'
import { AiOutlinePoweroff, AiFillHome } from "react-icons/ai";
import {IoIosFitness} from 'react-icons/io'
import { BsFillGearFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../features/usersSlice";
import styles from "./Admin.module.scss";
import { NavLink } from "react-router-dom";

const Admin = () => {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <div className={styles.main}>
      <div className={styles.sidebar}>
      <div className={styles.categoryContent}>
        <div>
          <img
            className={styles.avatar}
            src={`/assets/images/avatars/${users.image}`}
            alt="avatar"
          />
               <span className={styles.role}>{users.login}</span>
          <span className={styles.role}>{users.role}</span>
        </div>
      </div>
      <div className={styles.navigationWrapper}>
        <ul className={styles.navigation}>
          <li>
            <a href="/">
              <AiFillHome
                className={styles.fafaUser}
                style={{ color: "black" }}
              />
              <span>На главную</span>
            </a>
          </li>
          <li>
            <NavLink to="/profile/edituser">
              <BsFillGearFill
                className={styles.fafaUser}
                style={{ color: "black" }}
              />
              <span>Настройки профиля</span>
            </NavLink>
          </li>
          {users.role === 'Администратор' ? <li>
            <NavLink to="/admin/control/">
              <GrUserSettings
                className={styles.fafaUser}
                style={{ color: "black" }}
              />
              <span>Управление пользователями</span>
            </NavLink>
          </li> : null}
          {users.role === 'Администратор' ? <li>
            <NavLink to="/admin/add/simulators">
              <IoIosFitness
                className={styles.fafaUser}
                style={{ color: "black" }}
              />
              <span>Добавить тренажёры</span>
            </NavLink>
          </li> : null}
          {users.role === 'Администратор' ? <li>
            <NavLink to="/admin/coachform">
              <SiTrainerroad
                className={styles.fafaUser}
                style={{ color: "black" }}
              />
              <span>Запись к тренеру</span>
            </NavLink>
          </li> : null}
          {users.role === 'Администратор' ? <li>
            <NavLink to="/admin/form">
              <TbMassage
                className={styles.fafaUser}
                style={{ color: "black" }}
              />
              <span>Запись на массаж</span>
            </NavLink>
          </li> : null}
          <li>
            <AiOutlinePoweroff
              className={styles.fafaUser}
              style={{ color: "red" }}
            />
            <span href="/" onClick={() => {
              return (
                localStorage.clear(),
                window.location.href = '/'
              )
            }}>Выход</span>
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Admin;
