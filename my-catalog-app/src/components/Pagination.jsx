import React from "react";

export default function Pagination({ currentPage, totalPages, onChange }) {
  const pages = [];
  const start = Math.max(1, currentPage - 2);
  const end = Math.min(totalPages, start + 4);
  for (let p = start; p <= end; p++) pages.push(p);

  return (
    <div className="pagination-row">
      <button onClick={()=>onChange(1)} disabled={currentPage===1}>First</button>
      <button onClick={()=>onChange(currentPage-1)} disabled={currentPage===1}>Prev</button>
      {pages.map(p => (
        <button key={p} onClick={()=>onChange(p)} className={p===currentPage ? "active":""}>{p}</button>
      ))}
      <button onClick={()=>onChange(currentPage+1)} disabled={currentPage===totalPages}>Next</button>
      <button onClick={()=>onChange(totalPages)} disabled={currentPage===totalPages}>Last</button>
    </div>
  );
}
