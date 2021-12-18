import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  console.log(classes);
  return (
    <section className={classes.summary}>
      <h2>Delicious Food Delivered To You</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch for dinner at home.
      </p>
      <p>
        All meals at PrafylMeals are cooked with high-quality ingredients,
        just-in-time cooked by our experienced cooks.
      </p>
    </section>
  );
};
export default MealsSummary;
