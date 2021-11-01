import { useState } from "react";

function GetUserComponent({ setUser, setIsLoggedIn }) {
  const [userInput, setUserInput] = useState("");

  function HandleLogin(userInput) {
    setUser(userInput);

    setIsLoggedIn(true);
  }

  return (
    <>
      <input
        type="text"
        value={userInput}
        onChange={(event) => setUserInput(event.target.value)}
      />
      <button onClick={() => HandleLogin(userInput)}>Acessar com o nome</button>
    </>
  );
}

export default GetUserComponent;
