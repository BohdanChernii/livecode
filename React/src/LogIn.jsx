import React from 'react';

//in:props(obj)
//out:JSX

function LogIn({ onLogin }) {
  return (
    <button className="login btn" onClick={onLogin}>
      Login
    </button>
  );
}
export default LogIn;
