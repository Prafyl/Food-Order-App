import React, { Fragment } from "react";

import mealsImage from "../../Assets/meals.jpeg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>PrafylMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Nepali Food Varities" />
      </div>
    </Fragment>
  );
};
export default Header;
