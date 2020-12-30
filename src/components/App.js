import React, { useState } from "react";
import AppRouter from "components/Router";

const App = () => {
  const [init, setInit] = useState(true);
  const [userObj, setUserObj] = useState(true);

  return (
    <>
      {init ? (
        <AppRouter isLoggedIn={userObj} />
      ) : (
        "Downloading User Information..."
      )}
    </>
  );
};

export default App;
