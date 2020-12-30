import React, { useState } from "react";
import AppRouter from "components/Router";
import AppRouter2 from "components/Router_HG";

const App = () => {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(true);

  const onLoggedIn = () => {
    setInit((prev) => !prev);
  };

  return (
    <>
      {init ? (
        <AppRouter isLoggedIn={userObj} />
      ) : (
        <AppRouter2 onLoggedIn={onLoggedIn} />
      )}
    </>
  );
};

export default App;
