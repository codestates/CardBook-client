import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "components/Navigation";
import Modal from "components/Modal";
import Public from "routers/Public";
import SearchPublicContents from "routers/SearchPublicContents";
import My from "routers/My";
import Profile from "routers/Profile";
import CardDetail from "components/CardDetail";
import MyCardDetail from "components/MyCardDetail";
import Footer from "./Footer";

const AppRouter = ({ isLoggedIn,onLoggedIn }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [keyword,setKeyword]=useState('');
  const onModalOpen = () => {
    setIsModalOpen((prev) => !prev);
  };
  const handleKeyword = (e)=>{
    setKeyword(e)    
  }
  return (
    <Router>
      <Switch>
        {isLoggedIn ? (
          <>
            {isModalOpen ? <Modal onModalOpen={onModalOpen} /> : null}
            <Navigation onModalOpen={onModalOpen} handleKeyword={handleKeyword} onLoggedIn={onLoggedIn}/>
            {console.log(keyword)}
            {
              (keyword==='')?
              <Route exact path="/public" component={Public} />:
              <Route exact path="/public" component={SearchPublicContents} />
            }
            <Route path="/public/:id" component={CardDetail} />
            <Route exact path="/my" component={My} />
            <Route exact path="/my/:id" component={MyCardDetail} />
            <Route path="/profile" component={Profile} />
            {/* <Footer /> */}
          </>
        ) : (
          <Route exact path="/">
            <div>Auth pages</div>
          </Route>
        )}
      </Switch>
    </Router>
  );
  //   return (
  //     <Router>
  //       {isLoggedIn && <Navigation userObj={userObj} />}
  //       <Switch>
  //         {isLoggedIn ? (
  //           <div
  //             style={{
  //               maxWidth: 890,
  //               width: "100%",
  //               margin: "0 auto",
  //               marginTop: 80,
  //               display: "flex",
  //               justifyContent: "center",
  //             }}
  //           >
  //             <Route exact path="/">
  //               <Home userObj={userObj} />
  //             </Route>
  //             <Route exact path="/profile">
  //               <Profile userObj={userObj} refreshUser={refreshUser} />
  //             </Route>
  //           </div>
  //         ) : (
  //           <>
  //             <Route exact path="/">
  //               <Auth />
  //             </Route>
  //           </>
  //         )}
  //       </Switch>
  //     </Router>
  //   );
};

export default AppRouter;
