import React from "react";

const NavBar = ({ onGetUsers }) => {
  return (
    <nav>
      <div className="navbar">
        <div className="brand"><a href="https://www.linkedin.com/company/letsgrowmore/">Lets Grow More</a></div>
        <div>
          Task - 2 Create a web application using
          create-react-app
        </div>
        <button onClick={onGetUsers}>Get Users</button>
      </div>
    </nav>
  );
};

export default NavBar;
