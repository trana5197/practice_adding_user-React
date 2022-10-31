import { useState } from "react";
import InputUser from "./components/InputUser";
import OutputUser from "./components/OutputUser";
import InvalidUsernameAge from "./components/InvalidUsernameAge";

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
    <div>
      <InputUser onGetUser={getInputDataHandler} />
      {output}
    </div>
  );
}

export default App;
