import React from 'react';

function LogOut({onLogout}) {
  return (
    <button className="logout btn" onClick={onLogout}>
      Log Out
    </button>
  );
}
export default LogOut;
