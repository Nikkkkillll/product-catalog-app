import React, { useState } from "react";

export default function CategoryAccordion({ title, onClick, active }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`accordion-item ${active ? "active" : ""}`}>
      <div className="accordion-head" onClick={() => { setOpen(o => !o); onClick(); }}>
        <span>{title}</span>
        <span className="caret">{open ? "▾" : "▸"}</span>
      </div>
      {open && <div className="accordion-body"> {/* optional: show subcategories if available */} </div>}
    </div>
  );
}
