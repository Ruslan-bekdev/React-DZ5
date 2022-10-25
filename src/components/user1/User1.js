import classes from "./user1.module.css";

const User1 = ({user}) => {
  return(
    <ul className={classes.user}>
      <li>name: {user.name}</li>
      <li>age: {user.age}</li>
    </ul>
  )
}

export default User1;