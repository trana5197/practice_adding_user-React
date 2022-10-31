import Output from "./Output";
import styles from "./OutputUser.module.css";

const OutputUser = (props) => {
  return (
    <div className={styles["output-user"]}>
      <Output user={props.user} />
    </div>
  );
};

export default OutputUser;
