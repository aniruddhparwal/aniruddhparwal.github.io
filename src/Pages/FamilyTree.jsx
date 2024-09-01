import React, { useState } from "react";
import FamilyTree from "./../components/FamilyTree/FamilyTree";
import Login from "./../components/Login/Login";

const Home = () => {
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = () => {
    setAuthenticated(true);
  };
  return (
      <div className='relative z-0 bg-primary'>
          {authenticated ? <FamilyTree /> : <Login onLogin={handleLogin} />}
      </div>
  )
}

export default Home;
