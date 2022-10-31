import { useState, Fragment } from "react";
import InputUser from "./components/Input/InputUser";
import OutputUser from "./components/Output/OutputUser";
// import InvalidUsernameAge from "./components/InvalidUsernameAge";

const users = [];

function App() {
  const [user, setUser] = useState(users);

  const getInputDataHandler = (user) => {
    setUser((prevUser) => {
      return [...prevUser, user];
    });
  };

  let output = <div></div>;

  if (user.length > 0) {
    output = <OutputUser user={user} />;
  }

  return (
    <Fragment>
      <InputUser onGetUser={getInputDataHandler} />
      {output}
    </Fragment>
  );
}

export default App;
