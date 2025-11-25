import React from "react";

export default function Header({ onLogout, user }) {
  return (
    <header className="app-header">
      <div className="brand">
        <img src="/whitename.svg" alt="logo" className="brand-logo" />
        
      </div>

      <div className="header-actions">
        <button className="icon-btn">Database ▾</button>
        <button className="icon-btn">Calendar</button>
        <button className="icon-btn">Help</button>

        {/* ONLY SHOW LOGOUT IF USER IS LOGGED IN */}
        {user && (
          <button className="logout" onClick={onLogout}>Logout</button>
        )}
      </div>
    </header>
  );
}
