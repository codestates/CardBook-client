import React, { useState,useEffect } from "react";
import AppRouter from "components/Router";
import AppRouter2 from "components/Router_HG";
import axios from "axios";

const App = () => {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(true);
  const [accessToken,setAccessToken] = useState('');
  const onLoggedIn = () => {
    setInit((prev) => !prev);
  };
  

  useEffect(()=>{
    const getAccessToken = async (authorizationCode)=>{      
      await axios.post("https://www.cardbookserver.tk:4000/users/gitlogin",{
        authorizationCode:authorizationCode
      })
      .then((token)=>{
        onLoggedIn()
        setAccessToken(token.data.accessToken)        
      })
      .catch(()=>console.log("실패"));
    }
    const didmount = ()=>{      
      const url = new URL(window.location.href)
      const authorizationCode = url.searchParams.get('code');      
      if(authorizationCode){        
        getAccessToken(authorizationCode) 
      }
    }
    didmount();
  },[])
  return (
    <>
      {init ? (
        <AppRouter isLoggedIn={userObj}/>
      ) : (
        <AppRouter2 onLoggedIn={onLoggedIn} />
      )}
    </>
  );
};

export default App;
