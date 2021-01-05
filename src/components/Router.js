import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "components/Navigation";
import Modal from "components/Modal";
import Public from "routers/Public";
import My from "routers/My";
import Profile from "routers/Profile";
import CardDetail from "components/CardDetail";
import MyCardDetail from "components/MyCardDetail";
import { useProfileState, useProfileDispatch } from "context/ProfileContext";

const AppRouter = ({ isLoggedIn }) => {
  const state = useProfileState();
  const dispatch = useProfileDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const onModalOpen = () => {
    setIsModalOpen((prev) => !prev);
  };

  const onProfile = () => {
    dispatch({ type: "CHANGE_STATE", payload: !state.status });
  };

  return (
    <Router>
      <Switch>
        {isLoggedIn ? (
          <>
            {isModalOpen ? <Modal onModalOpen={onModalOpen} /> : null}
            {state.status ? null : (
              <Navigation onModalOpen={onModalOpen} onProfile={onProfile} />
            )}
            <Route exact path="/public" component={Public} />
            <Route path="/public/:id" component={CardDetail} />
            <Route exact path="/my" component={My} />
            <Route exact path="/my/:id" component={MyCardDetail} />
            <Route path="/profile" component={Profile} />
          </>
        ) : (
          <Route exact path="/">
            <div>Auth pages</div>
          </Route>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
