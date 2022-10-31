import { useState, Fragment, useRef } from "react";
import styles from "./InputUser.module.css";
import Button from "../UI/Button/Button";
import InvalidUsernameAge from "../UI/InvalidUser/InvalidUsernameAge";

const InputUser = (props) => {
  // const [enteredUsername, setEnteredUsername] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const userInputRef = useRef();
  const ageInputRef = useRef();

  // const enterUsernameHandler = (event) => {
  //   // console.log(event.target.value);
  //   setEnteredUsername(event.target.value);
  // };

  // const enterAgeHandler = (event) => {
  //   // console.log(event.target.value);
  //   setEnteredAge(event.target.value);
  // };

  const inputUserSubmit = (event) => {
    event.preventDefault();

    const enteredUsername = userInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0)",
      });
      return;
    }

    const user = {
      userName: enteredUsername,
      age: +enteredAge,
      id: Math.round(Math.random() * 1000).toString(),
    };
    props.onGetUser(user);

    userInputRef.current.value = "";
    ageInputRef.current.value = "";
    // setEnteredUsername("");
    // setEnteredAge("");
  };

  const errorHandler = () => {
    setError(null);
    ageInputRef.current.value = "";
    // setEnteredAge("");
  };

  return (
    <Fragment>
      {error && (
        <InvalidUsernameAge
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <div>
        <form className={`${styles.form}`} onSubmit={inputUserSubmit}>
          <div className={styles.userDiv}>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              ref={userInputRef}
              // value={enteredUsername}
              // onChange={enterUsernameHandler}
            />
          </div>
          <div className={styles.ageDiv}>
            <label htmlFor="age">Age (Years)</label>
            <input
              id="age"
              type="number"
              ref={ageInputRef}
              // value={enteredAge}
              // onChange={enterAgeHandler}
            />
          </div>
          <Button name="Add User" type="submit" />
        </form>
      </div>
    </Fragment>
  );
};

export default InputUser;
