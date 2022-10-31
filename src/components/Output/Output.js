import styles from "./Output.module.css";

const Output = (props) => {
  return props.user.map((user) => {
    return (
      <div className={styles.output} key={user.id}>
        <h3>{`${user.userName} (${user.age} years)`}</h3>
      </div>
    );
  });
};

export default Output;
