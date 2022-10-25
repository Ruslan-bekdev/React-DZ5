import classes from "./user2.module.css";

const User2 = ({user}) => {
  return(
    <ul className={classes.user}>
      <li>name: {user.name}</li>
      <li>age: {user.age}</li>
    </ul>
  )
}

export default User2;