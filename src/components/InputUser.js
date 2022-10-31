import { useState } from "react";
import styles from "./InputUser.module.css";
import Button from "./UI/Button";

const InputUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const enterUsernameHandler = (event) => {
    // console.log(event.target.value);
    setEnteredUsername(event.target.value);
  };

  const enterAgeHandler = (event) => {
    // console.log(event.target.value);
    setEnteredAge(event.target.value);
  };

  const inputUserSubmit = (event) => {
    event.preventDefault();
    const user = {
      userName: enteredUsername,
      age: +enteredAge,
      id: Math.round(Math.random() * 1000).toString(),
    };
    props.onGetUser(user);
    setEnteredUsername("");
    setEnteredAge("");
    // console.log(user);
  };

  return (
    <form className={styles.form} onSubmit={inputUserSubmit}>
      <div className={styles.userDiv}>
        <label>Username</label>
        <input
          type="text"
          value={enteredUsername}
          onChange={enterUsernameHandler}
        />
      </div>
      <div className={styles.ageDiv}>
        <label>Age (Years)</label>
        <input
          type="number"
          min="0"
          step="1"
          value={enteredAge}
          onChange={enterAgeHandler}
        />
      </div>
      <Button name="Add User" />
    </form>
  );
};

export default InputUser;
